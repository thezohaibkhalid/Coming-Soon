import { useState } from "react";
import  Button  from "./ui/button";
import  Input  from "./ui/input";
export function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Email", email);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby_9rlre9ZoKuLYwrBnAerL_W3qD54VqLDCGaBlkJXZvfkk2b3a6r8JegfU09PzMhM/exec", 
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubscribed(true); // Mark as subscribed
        setEmail(""); // Reset email field
        setTimeout(() => setIsSubscribed(false), 2000); // Hide the message after 2 seconds
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Email Input Field */}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-black/60 border-green-500/30 text-green-500 placeholder:text-green-500/50"
            required
          />
          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-green-500/20 text-green-500 border border-green-500/30 hover:bg-green-500/30"
          >
            Notify Me
          </Button>
        </div>
      </form>

      {/* Success Notification */}
      {isSubscribed && (
        <div className="mt-4 p-4 bg-green-500 text-white rounded-md shadow-md">
          <p>Subscribed successfully!</p>
        </div>
      )}
    </div>
  );
}
