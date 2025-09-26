'use client'

import { useEffect, useRef } from 'react'

export default function OnAirCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const items = slider.querySelectorAll('.item')
    let index = 0

    const showSlide = (i: number) => {
      const list = slider.querySelector('.list') as HTMLElement
      if (list) {
        list.style.transform = `translateX(-${i * 100}%)`
      }
    }

    // Automatic slide every 3 seconds
    const interval = setInterval(() => {
      index = (index + 1) % items.length
      showSlide(index)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const shows = [
    { name: 'NRG BANG BANG', image: '/shows/NRG-BANG-BANG.jpg' },
    { name: 'NRG BREAKFAST CLUB', image: '/shows/NRG-BREAKFAST-CLUB.jpg' },
    { name: 'NRG CIRCLE', image: '/shows/NRG-CIRCLE.jpg' },
    { name: 'NRG CLUB VIBE', image: '/shows/NRG-CLUB-VIBE.jpg' },
    { name: 'NRG LATE BRUNCH', image: '/shows/NRG-LATE-BRUNCH.jpg' },
    { name: 'NRG LOST SKOOL', image: '/shows/NRG-LOST-SKOOL.jpg' },
    { name: 'NRG MASH UP', image: '/shows/NRG-MASH-UP.jpg' },
    { name: 'NRG PREGAME', image: '/shows/NRG-PREGAME.jpg' },
    { name: 'NRG SATURDAY RISE', image: '/shows/NRG-SATURDAY-RISE.jpg' },
    { name: 'NRG SUNDAY GROOVE', image: '/shows/NRG-SUNDAY-GROOVE.jpg' },
    { name: 'NRG TOTAL ACCESS', image: '/shows/NRG-TOTAL-ACCESS.jpg' },
    { name: 'NRG TRANSIT', image: '/shows/NRG-TRANSIT.jpg' },
    { name: 'NRG WARM UP MIXES', image: '/shows/NRG-WARM-UP-MIXES.jpg' }
  ]

  return (
    <section className="text-white py-6 px-4 w-full mt-8">
      <header className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">On Air</h1>
      </header>

      <div
        ref={sliderRef}
        className="slider"
        style={{
          '--width': '300px',
          '--height': '200px',
          '--quantity': shows.length.toString()
        } as React.CSSProperties}
      >
        <div className="list">
          {shows.map((show, index) => (
            <div
              key={index}
              className="item"
              style={{ '--position': (index + 1).toString() } as React.CSSProperties}
            >
              <img
                src={show.image}
                alt={show.name}
                className="w-[300px] h-[400px] object-cover transition-transform duration-300 cursor-pointer rounded-xl hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
