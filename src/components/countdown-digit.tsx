'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface CountdownDigitProps {
  value: number
  label: string
}

export function CountdownDigit({ value, label }: CountdownDigitProps) {
  const digitRef = useRef<HTMLDivElement>(null)
  const prevValue = useRef(value)

  useEffect(() => {
    if (prevValue.current !== value && digitRef.current) {
      gsap.fromTo(digitRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      )
    }
    prevValue.current = value
  }, [value])

  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/60 border border-green-500/30 rounded-lg p-2 sm:p-4 mb-2">
        <div 
          ref={digitRef}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:p-4 text-green-500"
          style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
        >
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <span className="text-green-500/80 text-xs sm:text-sm uppercase font-mono">{label}</span>
    </div>
  )
}

export function LaunchCountdown() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0)
  const [launchDate] = useState<string>("2025-02-01T00:00:00") // Replace this with your actual launch date
  
  useEffect(() => {
    const savedLaunchDate = localStorage.getItem("launchDate");

    // If there's no saved date in localStorage, set it to the default launch date
    if (!savedLaunchDate) {
      localStorage.setItem("launchDate", launchDate);
    }

    // Function to update the countdown
    const updateCountdown = () => {
      const launch = new Date(localStorage.getItem("launchDate") || launchDate).getTime();
      const now = Date.now();
      const remaining = launch - now;

      setTimeRemaining(remaining);
    };

    updateCountdown(); // Update immediately
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [launchDate]);

  // Calculate remaining time in days, hours, minutes, seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex justify-center space-x-4">
      <CountdownDigit value={days} label="Days" />
      <CountdownDigit value={hours} label="Hours" />
      <CountdownDigit value={minutes} label="Minutes" />
      <CountdownDigit value={seconds} label="Seconds" />
    </div>
  )
}
