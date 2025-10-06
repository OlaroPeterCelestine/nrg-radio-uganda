'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Show {
  id: number
  hosts: string
  image: string
  time_from: string
  time_to: string
}

export default function OnAirCarousel() {
  const [shows, setShows] = useState<Show[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchShows()
  }, [])

  const fetchShows = async () => {
    try {
      console.log('🎯 Fetching shows from API...')
      setLoading(true)
      const response = await fetch('https://nrgug-api-production.up.railway.app/api/shows', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })

      if (response.ok) {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          console.log('✅ Shows data received:', data)
          setShows((data || []).slice(0, 6)) // Show only the first 6 shows
        } else {
          console.error('❌ Response is not JSON:', contentType)
        }
      } else {
        console.error('❌ API response not ok:', response.status, response.statusText)
        const errorText = await response.text()
        console.error('Error response body:', errorText)
      }
    } catch (error) {
      console.error('💥 Error fetching shows:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (timeFrom: string, timeTo: string) => {
    // Convert ISO datetime to time format (HH:MM)
    const formatTime = (isoString: string) => {
      const date = new Date(isoString)
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
    }
    
    const startTime = formatTime(timeFrom)
    const endTime = formatTime(timeTo)
    return `${startTime} - ${endTime}`
  }

  const isValidImageUrl = (url: string | null | undefined): boolean => {
    if (!url || url.trim() === '') return false
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const getImageSrc = (show: Show): string => {
    if (isValidImageUrl(show.image)) {
      return show.image
    }
    // Fallback to a default image or placeholder
    return '/shows/default-show.jpg'
  }

  return (
    <section className="text-white py-6 px-4 w-full mt-8">
      <header className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">On Air</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
          View Schedule
        </button>
      </header>

      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              <i className="fas fa-radio text-4xl mb-4 block"></i>
              Loading shows...
            </div>
          </div>
        ) : shows.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              <i className="fas fa-radio text-4xl mb-4 block"></i>
              No shows available at the moment
            </div>
            <p className="text-gray-500">Check back later for our schedule</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {shows.map((show) => (
              <div
                key={show.id}
                className="group"
              >
                <div className="relative">
                  <Image
                    src={getImageSrc(show)}
                    alt={show.hosts || `Show ${show.id}`}
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover transition-transform duration-300 cursor-pointer rounded-xl hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold mb-2">{show.hosts}</h3>
                  <p className="text-red-500 font-semibold">{formatTime(show.time_from, show.time_to)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
