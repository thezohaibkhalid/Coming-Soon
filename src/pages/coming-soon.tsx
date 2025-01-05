"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { SubscriptionForm } from "../components/SubscribeUs";
import { TerminalWindow } from "../components/terminal-window";
import CountdownDigit from "../components/countdown-digit";
import { TechGrid } from "../components/tech-grid";
import { MatrixBackground } from "../components/matrix-background";
import { ReactTyped } from "react-typed";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      <MatrixBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <TerminalWindow>
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="text-green-400">root@bitbuilders:~$</span>
              <span className="animate-pulse">▊</span>
            </div>
            <p className="typing-animation">initializing bitbuilders.tech...</p>
          </div>

          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-4">
              <ReactTyped
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-400"
                style={{ textShadow: "0 0 20px rgba(74, 222, 128, 0.5)" }}
                strings={["Bitbuilders.tech", "Coming Soon", 'Email us to get notified']} //, 'Email us to get notified'
                typeSpeed={80}  
                backSpeed={0.1}  
                backDelay={2000}  
                startDelay={500} 
                loop={false} 
                showCursor={true} 
                cursorChar="|"  
                fadeOut={true} 
                fadeOutDelay={1000}  
              />
              <p className="text-xl text-green-500/80">
                {"> "} Crafting Digital Excellence
              </p>
            </div>

            {/* Countdown */}
            <CountdownDigit />

            {/* Email Subscription */}
            <SubscriptionForm />

            {/* Technologies */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center text-green-400">
                {"> "} Technologies we use
              </h2>

              <TechGrid />
            </div>

            {/* Social Links */}
            <footer className="text-center space-y-4">
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/thezohaibkhalid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500/80 hover:text-green-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zohaib-khalid-34307331b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500/80 hover:text-green-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zohaibkhalid.pk@gmail.com&su=Project%20Inquiry&body=%0A%0A%20%20%20%20%3C%3C%20Project%20Name%3A%20Enter%20Here%0A%20%20%20%20%3C%3C%20WhatsApp%20Number%3A%20Enter%20Here%0A%20%20%20%20%3C%3C%20Project%20Details%3A%20Enter%20Here%20or%20attach%20files%0A%20%20%20%20%3C%3C%20Advanced%20Details%3A%20Enter%20Here%20%0A%0A%20%20%20%20-----------------------------------------%0A%20%20%20%20Looking%20forward%20to%20your%20response!%0A%0A"
                  target="_blank"
                  className="text-green-500/80 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-green-500/60">
                {"> "} &copy; {new Date().getFullYear()} Bitbuilders. All rights
                reserved.
              </p>
            </footer>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
