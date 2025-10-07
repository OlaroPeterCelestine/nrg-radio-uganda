'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetTime: number // Target time in milliseconds
  onComplete?: () => void
  className?: string
}

export default function CountdownTimer({ targetTime, onComplete, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({
          hours,
          minutes,
          seconds,
          total: difference
        })
        setIsExpired(false)
      } else {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0
        })
        setIsExpired(true)
        onComplete?.()
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetTime, onComplete])

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <i className="fa-solid fa-rocket mr-3 animate-bounce"></i>
            Website is Live!
          </div>
          <p className="text-red-100 text-lg sm:text-xl mb-6">
            Welcome to the new NRG Radio Uganda website!
          </p>
          <div className="text-red-200 text-sm">
            <i className="fa-solid fa-clock mr-2"></i>
            Countdown will restart in a moment...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-pulse">
              <i className="fa-solid fa-clock mr-3 text-red-500 animate-spin"></i>
              New Website Coming Soon!
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl">
              We're building something amazing for you
            </p>
          </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
          {/* Hours */}
          <div className="bg-black/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-red-500 mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors">
              Hours
            </div>
          </div>

          {/* Minutes */}
          <div className="bg-black/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-red-500 mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors">
              Minutes
            </div>
          </div>

          {/* Seconds */}
          <div className="bg-black/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-red-500 mb-2 sm:mb-3 group-hover:text-red-400 transition-colors animate-pulse">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors">
              Seconds
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000"
            style={{ 
              width: `${Math.max(0, Math.min(100, ((12 * 60 * 60 * 1000 - timeLeft.total) / (12 * 60 * 60 * 1000)) * 100))}%` 
            }}
          ></div>
        </div>

        <div className="text-gray-400 text-sm">
          <i className="fa-solid fa-tools mr-2"></i>
          Building the future of radio in Uganda
        </div>
        </div>
      </div>
    </div>
  )
}
