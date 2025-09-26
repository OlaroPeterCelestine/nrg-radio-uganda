'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Player from '@/components/Player'
import Chatbot from '@/components/Chatbot'
import OnAirCarousel from '@/components/OnAirCarousel'
import EventsSection from '@/components/EventsSection'
import VoupSection from '@/components/VoupSection'

export default function Home() {
  const [players, setPlayers] = useState<Array<{ id: string; type: 'listen' | 'watch' }>>([])

  const createPlayer = (type: 'listen' | 'watch') => {
    const id = `player_${Date.now()}`
    setPlayers(prev => [...prev, { id, type }])
  }

  const removePlayer = (id: string) => {
    setPlayers(prev => prev.filter(player => player.id !== id))
  }

  return (
    <div className="relative bg-black text-white">
      <Header createPlayer={createPlayer} />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Story Column */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden relative group h-full transition-all hover:-translate-y-1">
                <Image
                  src="/ricky.webp"
                  alt="Rick Man vs Sakib fight"
                  width={800}
                  height={512}
                  className="w-full h-[32rem] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  Fresh drop
                </span>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm text-gray-300 mb-2">August 10, 2025</p>
                  <h2 className="text-3xl font-bold mb-2">
                    Rick Man vs Sakib: Clash for the Crown Electrifies Kampala.
                  </h2>
                  <p className="text-gray-200">
                      Two of Uganda&apos;s biggest stars are set to face off in the ring for the fight of the decade. Fans are buzzing with anticipation.
                  </p>
                </div>
              </div>
            </div>

            {/* Minor Stories Column */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="rounded-lg overflow-hidden relative group h-[240px] transition-all hover:-translate-y-1">
                <Image
                  src="https://mmo.aiircdn.com/1449/67d91116c5a11.jpg"
                  alt="Likkle Bangi's Lucid Dreaming"
                  width={400}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  Hit
                </span>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-xs text-gray-300 mb-1">March 18, 2025</p>
                  <h3 className="text-lg font-bold">
                        Likkle Bangi&apos;s &quot;Lucid Dreaming&quot;: A Heartfelt Anthem For Letting Go.
                  </h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden relative group h-[240px] transition-all hover:-translate-y-1">
        <Image
                  src="https://mmo.aiircdn.com/1449/6893175cb2079.jpg"
                  alt="ASFAS 2025 Launch"
                  width={400}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  Icy
                </span>
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-xs text-gray-300 mb-1">March 18, 2025</p>
                  <h3 className="text-lg font-bold">
                    The ASFAS 2025 Officially Launched At Noni Vie, Ushering In The Era Of The Fashivists
                  </h3>
                </div>
              </div>
            </div>

            {/* Videos Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Latest Videos</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-900/50 transition-colors">
                  <iframe
                    className="w-40 h-24 rounded-lg flex-shrink-0"
                    src="https://www.youtube.com/embed/TlBWu-ZBoOQ?mute=1"
                    title="Community work in Masaki"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div>
                    <h4 className="font-bold">Community work</h4>
                    <p className="text-sm text-gray-400">CSR in Masaki with the community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-900/50 transition-colors">
                  <iframe
                    className="w-40 h-24 rounded-lg flex-shrink-0"
                    src="https://www.youtube.com/embed/plgp4PBL_uQ?mute=1"
                    title="Latest Talk Show Episode"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div>
                    <h4 className="font-bold">Episode Title</h4>
                    <p className="text-sm text-gray-400">Short description of this episode.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-900/50 transition-colors">
                  <iframe
                    className="w-40 h-24 rounded-lg flex-shrink-0"
                    src="https://www.youtube.com/embed/y3tUqAM0Pvs?mute=1"
                    title="Goat Talk - Entertainment Buzz"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div>
                    <h4 className="font-bold">Goat Talk</h4>
                    <p className="text-sm text-gray-400">Best of the entertainment buzz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listen & Watch Buttons */}
        <div className="flex justify-center w-full my-10">
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl w-full px-4">
            <button
              onClick={() => createPlayer('listen')}
              className="flex flex-col items-center justify-center gap-2 border border-gray-600 p-4 rounded-md flex-1 min-w-[140px] hover:bg-gray-800 hover:border-red-500 transition-colors duration-300"
            >
              <div className="text-red-500 text-4xl">
                <i className="fas fa-wave-square"></i>
              </div>
              <p className="text-white font-semibold text-lg leading-tight text-center">
                Listen Live
              </p>
            </button>

            <button
              onClick={() => createPlayer('watch')}
              className="flex flex-col items-center justify-center gap-2 border border-gray-600 p-4 rounded-md flex-1 min-w-[140px] hover:bg-gray-800 hover:border-red-500 transition-colors duration-300"
            >
              <div className="text-red-500 text-4xl">
                <i className="fas fa-play-circle"></i>
              </div>
              <p className="text-white font-semibold text-lg leading-tight text-center">
                Watch Live
              </p>
            </button>

            <button
              onClick={() => window.open('https://wa.me/256762380194', '_blank')}
              className="flex flex-col items-center justify-center gap-2 border border-gray-600 p-4 rounded-md flex-1 min-w-[140px] hover:bg-gray-800 hover:border-red-500 transition-colors duration-300"
            >
              <div className="text-red-500 text-4xl">
                <i className="fab fa-whatsapp"></i>
              </div>
              <p className="text-white font-semibold text-lg leading-tight text-center">
                Nrgize US
              </p>
            </button>
          </div>
        </div>

        {/* Container for floating players */}
        <div id="playerContainer" className="fixed inset-0 pointer-events-none">
          {players.map(player => (
            <Player
              key={player.id}
              id={player.id}
              type={player.type}
              removePlayer={removePlayer}
            />
          ))}
        </div>

        {/* Clients Carousel */}
        <div className="relative w-full overflow-hidden my-12 mt-24">
          <div className="flex animate-scroll-horizontal whitespace-nowrap">
            <a href="https://example.com/vodafone" target="_blank">
              <div className="inline-block mx-6">
                <Image
                  src="https://i.ytimg.com/vi/Y6D62Q_zu9g/maxresdefault.jpg"
                  alt="Vodafone Advertisement Banner"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
            <a href="https://example.com/banner3" target="_blank">
              <div className="inline-block mx-6">
                <Image
                  src="https://t-mall.co.ke/wp-content/uploads/2020/04/KCB.jpg"
                  alt="Advertisement Banner 3"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
            <a href="https://example.com/absa" target="_blank">
              <div className="inline-block mx-6">
                <Image
                  src="https://www.marklives.com/wp-content/uploads/Absa-rebrand-artboard-01-logo-e1532702773207.png"
                  alt="Bank of Tanzania Advertisement Banner"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
            <a href="https://example.com/tecno" target="_blank">
              <div className="inline-block mx-6">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/TecnoMobile.png"
                  alt="Advertisement Banner 1"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
            <a href="https://example.com/smirnoff" target="_blank">
              <div className="inline-block mx-6">
                <Image
                  src="https://getlogovector.com/wp-content/uploads/2019/07/smirnoff-logo-vector.png"
                  alt="Vodafone Advertisement Banner"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
            <a href="https://example.com/banner6" target="_blank">
              <div className="inline-block mx-6">
          <Image
                  src="https://media.licdn.com/dms/image/v2/D4D12AQHAIrgii9Q8SQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689761587763?e=2147483647&v=beta&t=PvL21k96IcqDkZO8h2yKvpuqyIjpHLHh6teQHppWcpA"
                  alt="Advertisement Banner 3"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
            <a href="https://example.com/mukwano" target="_blank">
              <div className="inline-block mx-6">
          <Image
                  src="https://flashugnews.com/wp-content/uploads/2020/08/Mukwano-group-of-companies-1200x720.jpg"
                  alt="Bank of Tanzania Advertisement Banner"
                  className="w-[120rem] h-[8rem] object-cover"
                  width={1920}
                  height={128}
                />
              </div>
            </a>
          </div>
        </div>

        {/* On Air Carousel */}
        <OnAirCarousel />

        {/* Events Section */}
        <EventsSection />

        {/* Voup Section */}
        <VoupSection />

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to Top"
          className="fixed bottom-8 right-8 bg-gray-800 text-white w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors border border-gray-600 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>

        <Chatbot />
        <Footer />
      </main>
    </div>
  )
}