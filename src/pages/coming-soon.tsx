'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { SubscriptionForm } from '../components/SubscribeUs'
import { TerminalWindow } from '../components/terminal-window'
import  CountdownDigit  from '../components/countdown-digit'
import { TechGrid } from '../components/tech-grid'
import { MatrixBackground } from '../components/matrix-background'
import {ReactTyped}  from 'react-typed'

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime }
        if (newTime.seconds > 0) {
          newTime.seconds--
        } else if (newTime.minutes > 0) {
          newTime.minutes--
          newTime.seconds = 59
        } else if (newTime.hours > 0) {
          newTime.hours--
          newTime.minutes = 59
          newTime.seconds = 59
        } else if (newTime.days > 0) {
          newTime.days--
          newTime.hours = 23
          newTime.minutes = 59
          newTime.seconds = 59
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
                style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
                strings={['Bitbuilders.tech', 'Coming Soon']}//, 'Email us to get notified'
                typeSpeed={80}  // Type speed for each string
                backSpeed={0.1}   // Slow down the backspace to reduce blinking
                backDelay={2000} // Add a delay before backspacing starts
                startDelay={500} // Add a delay before typing starts
                loop={false}      // Loop the animation
                showCursor={true} // Show the cursor for a more polished look
                cursorChar="|"   // Custom cursor
                fadeOut={true}   // Enable fade-out to smooth the transition
                fadeOutDelay={1000} // Increase fade-out delay to ensure smoother transition
              />
              <p className="text-xl text-green-500/80">
                {'> '} Crafting Digital Excellence
              </p>
            </div>

            {/* Countdown */}
            <CountdownDigit/>

            {/* Email Subscription */}
            <SubscriptionForm />

            {/* Technologies */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center text-green-400">
                {'> '} Technologies we use
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
                  href="mailto:contact@bitbuilders.tech"
                  className="text-green-500/80 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-green-500/60">
                {'> '} &copy; {new Date().getFullYear()} Bitbuilders. All rights reserved.
              </p>
            </footer>
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}

