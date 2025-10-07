'use client'

import { useState, useEffect } from 'react'
import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  const [countdownTarget, setCountdownTarget] = useState<number>(0)

  useEffect(() => {
    // Set countdown target to 12 hours from now
    const now = new Date().getTime()
    const twelveHoursFromNow = now + (12 * 60 * 60 * 1000) // 12 hours in milliseconds
    setCountdownTarget(twelveHoursFromNow)
  }, [])

  return (
    <div className="relative bg-black text-white">
      <main>
        {/* Always show only countdown timer - never show website content */}
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="w-full max-w-4xl px-4">
            <CountdownTimer 
              targetTime={countdownTarget}
              onComplete={() => {
                console.log('Countdown completed! New website is live!')
                // Reset countdown to 12 hours from now
                const now = new Date().getTime()
                const twelveHoursFromNow = now + (12 * 60 * 60 * 1000)
                setCountdownTarget(twelveHoursFromNow)
              }}
              className="w-full"
            />
          </div>
        </div>
      </main>
    </div>
  )
}