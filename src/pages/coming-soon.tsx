'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TerminalWindow } from '../components/terminal-window'
import { CountdownDigit } from '../components/countdown-digit'
import { TechGrid } from '../components/tech-grid'
import { MatrixBackground } from '../components/matrix-background'

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-400"
                  style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}>
                Bitbuilders.tech
              </h1>
              <p className="text-xl text-green-500/80">
                {'> '} Crafting Digital Excellence
              </p>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <CountdownDigit value={timeLeft.days} label="Days" />
              <CountdownDigit value={timeLeft.hours} label="Hours" />
              <CountdownDigit value={timeLeft.minutes} label="Minutes" />
              <CountdownDigit value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Email Subscription */}
            <form 
              action="/api/collect-email"
              className="max-w-md mx-auto space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-black/60 border-green-500/30 text-green-500 placeholder:text-green-500/50"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-green-500/20 text-green-500 border border-green-500/30 hover:bg-green-500/30"
                >
                  Notify Me
                </Button>
              </div>
            </form>

            {/* Technologies */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center text-green-400">
                {'> '} Our Technologies
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

