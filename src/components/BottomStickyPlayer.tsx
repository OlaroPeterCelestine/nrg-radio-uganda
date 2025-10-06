'use client'

import { useState, useRef, useEffect } from 'react'

interface BottomStickyPlayerProps {
  isVisible: boolean
}

export default function BottomStickyPlayer({ isVisible }: BottomStickyPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(30)
  const [isBuffering, setIsBuffering] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = "https://dc4.serverse.com/proxy/nrgugstream/stream"
      audioRef.current.preload = "none"
      
      // Simulate buffering for a few seconds
      setTimeout(() => {
        setIsBuffering(false)
      }, 2000)
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }


  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }


  if (!isVisible) return null

  return (
    <div className={`fixed right-0 z-50 bg-gradient-to-l from-gray-800 to-gray-900 border-l border-gray-700 shadow-2xl transition-all duration-300 ease-in-out ${
      isExpanded ? 'w-80 h-[75vh]' : 'w-20 h-20'
    }`}>
      {/* Expand/Collapse Button */}
      <div className="flex justify-center py-1">
        <button
          onClick={toggleExpanded}
          className="w-8 h-2 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors"
        >
          <div className="flex justify-center items-center h-full">
            {isExpanded ? (
              <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                <path d="M7 14l5-5 5 5z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Main Player Content */}
      <div className={`transition-all duration-300 ease-in-out h-full ${
        isExpanded ? 'p-6' : 'p-2'
      }`}>
        {isExpanded ? (
          <div className="flex flex-col h-full">
            {/* Album Art */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gray-700 rounded-xl overflow-hidden">
                <img 
                  src="https://mmo.aiircdn.com/1449/67f4d50dd6ded.jpg" 
                  alt="NRG Live Radio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Track Info */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-3">
                <div className="w-6 h-6 mr-3">
                  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">
                  {isBuffering ? 'Buffering...' : 'NRG Live Radio Stream'}
                </span>
              </div>
              <div className="text-gray-300 text-base mb-4">
                Live from Kampala, Uganda
              </div>
              <div className="flex items-center justify-center">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-400 text-sm font-semibold">LIVE</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex justify-center mb-8">
              <button
                onClick={togglePlayPause}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8 ml-1">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-auto text-center">
              <div className="text-gray-400 text-sm mb-2">
                <i className="fas fa-headphones mr-2"></i>
                Best experienced with headphones
              </div>
              <div className="text-gray-500 text-xs">
                Stream quality: 128kbps
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            {/* Compact Album Art */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg overflow-hidden mb-2">
              <img 
                src="https://mmo.aiircdn.com/1449/67f4d50dd6ded.jpg" 
                alt="NRG Live Radio"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Compact Play Button */}
            <button
              onClick={togglePlayPause}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4 ml-0.5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
      />
    </div>
  )
}


