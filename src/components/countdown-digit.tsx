'use client'

import { useEffect, useRef } from 'react'
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
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-500"
          style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
        >
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <span className="text-green-500/80 text-xs sm:text-sm uppercase font-mono">{label}</span>
    </div>
  )
}

