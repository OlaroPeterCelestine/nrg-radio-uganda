'use client'

import { useState, useRef, useEffect } from 'react'

interface BottomStickyPlayerProps {
  isVisible: boolean
}

export default function BottomStickyPlayer({ isVisible }: BottomStickyPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [duration, setDuration] = useState('0:00')
  const [volume, setVolume] = useState(30)
  const [isBuffering, setIsBuffering] = useState(true)
  const [progress, setProgress] = useState(0)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const percentage = clickX / width
      audioRef.current.currentTime = percentage * audioRef.current.duration
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 shadow-2xl">
      <div className="flex items-center px-4 py-3 h-20">
        {/* Album Art */}
        <div className="flex-shrink-0 mr-4">
          <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
            <img 
              src="https://mmo.aiircdn.com/1449/67f4d50dd6ded.jpg" 
              alt="NRG Live Radio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0 mr-4">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 mr-2">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </div>
            <span className="text-white text-sm font-medium">
              {isBuffering ? 'Buffering...' : 'NRG Live Radio Stream'}
            </span>
          </div>
          <div className="text-gray-300 text-xs">
            The Tim Dillon Show
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center mr-6">
          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 min-w-0 mr-6">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xs w-8">{currentTime}</span>
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer hover:h-2 transition-all"
            >
              <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-white text-xs w-8">{duration}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 mr-4">
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (audioRef.current) {
            const time = audioRef.current.currentTime
            const minutes = Math.floor(time / 60)
            const seconds = Math.floor(time % 60)
            setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`)
            
            // Update progress
            const progressPercent = (time / audioRef.current.duration) * 100
            setProgress(progressPercent || 0)
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            const time = audioRef.current.duration
            const minutes = Math.floor(time / 60)
            const seconds = Math.floor(time % 60)
            setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`)
          }
        }}
      />
    </div>
  )
}


