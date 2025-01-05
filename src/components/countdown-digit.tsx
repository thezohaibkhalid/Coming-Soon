'use client'

import { useEffect, useState, useRef } from 'react'
import Countdown from 'react-countdown'
import gsap from 'gsap'

interface CountdownDigitProps {
  value: number
  label: string
}

function CountdownDigit({ value, label }: CountdownDigitProps) {
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

export default function PersistentCountdown() {
  const [targetDate, setTargetDate] = useState<Date | null>(null)

  useEffect(() => {
    const storedDate = localStorage.getItem('countdownTarget')
    if (storedDate) {
      setTargetDate(new Date(storedDate))
    } else {
      const newTargetDate = new Date(Date.now() + 8 * 24 * 60 * 60 * 1000) // 7 days from now
      localStorage.setItem('countdownTarget', newTargetDate.toISOString())
      setTargetDate(newTargetDate)
    }
  }, [])

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-green-500">Countdown finished!</span>
    }
    return (
      <div className="flex flex-col items-center gap-8">
        <div className="flex space-x-4">
          <CountdownDigit value={days} label="Days" />
          <CountdownDigit value={hours} label="Hours" />
          <CountdownDigit value={minutes} label="Minutes" />
          <CountdownDigit value={seconds} label="Seconds" />
        </div>
      </div>
    )
  }

  if (!targetDate) {
    return null // or a loading indicator
  }

  return (
    <Countdown
      date={targetDate}
      renderer={renderer}
    />
  )
}

