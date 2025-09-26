'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import Player from '@/components/Player'
import Image from 'next/image'

export default function NewsPage() {
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
      {/* Social Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-16 flex-col items-center justify-center bg-transparent z-50">
        <div className="flex flex-col items-center justify-center flex-grow space-y-8">
          <a href="https://www.youtube.com/" target="_blank" className="flex flex-col items-center space-y-2 text-white hover:text-red-500 transition-colors">
            <span className="vertical-text font-semibold text-xs tracking-wider uppercase underline">Youtube</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="flex flex-col items-center space-y-2 text-white hover:text-red-500 transition-colors">
            <span className="vertical-text font-semibold text-xs tracking-wider uppercase underline">Instagram</span>
          </a>
          <a href="https://twitter.com/" target="_blank" className="flex flex-col items-center space-y-2 text-white hover:text-red-500 transition-colors">
            <span className="vertical-text font-semibold text-xs tracking-wider uppercase underline">Twitter</span>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" className="flex flex-col items-center space-y-2 text-white hover:text-red-500 transition-colors">
            <span className="vertical-text font-semibold text-xs tracking-wider uppercase underline">TikTok</span>
          </a>
        </div>
      </aside>

      {/* Hero Section */}
      <div className="relative text-white overflow-hidden border-b-2 border-white">
        <div className="absolute inset-0">
          <Image 
            className="w-full h-full object-cover" 
            src="https://mmo.aiircdn.com/1449/66d36cdd8c650.png" 
            alt="NRG Radio backdrop" 
            fill
            priority
          />
          <div className="absolute inset-0 bg-red-700 mix-blend-multiply"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-2 bg-purple-600 z-20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
              <Header createPlayer={createPlayer} />
          
          {/* Hero Content */}
          <div className="py-30 md:py-56 text-center md:text-left mt-8">
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Story */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-800 pb-6">
              
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  Rick Man vs Sakib: Clash for the Crown Electrifies Kampala
                </h1>
                <p className="text-gray-300 mb-4 text-lg">
                  Two of Uganda's biggest stars are set to face off in the ring for the fight of the decade. Fans are buzzing with anticipation as rivalries, skill, and sheer determination collide in a battle for glory.
                </p>
                <div className="text-sm text-gray-500">
                  <span>Aug 14, 2025</span>
                  <span className="mx-2 text-gray-600">|</span>
                  <span>Kampala</span>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative group">
                <Image 
                  src="https://mmo.aiircdn.com/1449/66d36cdd8c650.png" 
                  alt="Rick Man vs Sakib fight" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded">Sports</span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              
              <article>
                <Image 
                  src="https://www.alphalogic.co.za/nrgug/wp-content/uploads/2025/03/67d90f047a25c.jpg" 
                  alt="Musicians performing at Nyege Nyege" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover mb-3 brightness-90 hover:brightness-100 transition"
                />
                <h2 className="text-xl font-bold text-white mb-2 leading-tight hover:underline cursor-pointer">
                  Nyege Nyege 2025 Promises Bigger Stage for Ugandan Talent
                </h2>
                <p className="text-gray-300 mb-3 text-base">
                  Festival organisers say this year's event will showcase over 200 East African artists.
                </p>
                <div className="text-sm text-gray-500">
                  <span>Aug 12, 2025</span>
                  <span className="mx-2 text-gray-600">|</span>
                  <span>Jinja</span>
                </div>
              </article>

              <article>
                <Image 
                  src="https://www.alphalogic.co.za/nrgug/wp-content/uploads/2025/03/1e46ddef7a251e1638f59ac7aa522f316fcf2c47.jpg" 
                  alt="Joshua Cheptegei crossing the finish line" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover mb-3 brightness-90 hover:brightness-100 transition"
                />
                <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                  Joshua Cheptegei Wins Gold at World Championships
                </h2>
                <p className="text-gray-300 mb-3 text-base">
                  The long-distance legend secures another title, inspiring the next generation of Ugandan runners.
                </p>
                <div className="text-sm text-gray-500">
                  <span>Aug 10, 2025</span>
                  <span className="mx-2 text-gray-600">|</span>
                  <span>Sports</span>
                </div>
              </article>

              <article>
                <Image 
                  src="https://www.alphalogic.co.za/nrgug/wp-content/uploads/2025/03/67d90f03cf116.jpg" 
                  alt="Lake Victoria fishing boats" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover mb-3 brightness-90 hover:brightness-100 transition"
                />
                <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                  Government to Boost Lake Victoria Fishing Industry
                </h2>
                <p className="text-gray-300 mb-3 text-base">
                  New policies aim to protect fishermen and curb illegal fishing in East Africa's largest lake.
                </p>
                <div className="text-sm text-gray-500">
                  <span>Aug 9, 2025</span>
                  <span className="mx-2 text-gray-600">|</span>
                  <span>Business</span>
                </div>
              </article>

            </div>
          </div>

          {/* Side Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            <article className="border-b border-gray-800 pb-6">
              <div className="relative mb-3">
                <Image 
                  src="https://i0.wp.com/mbu.ug/wp-content/uploads/2024/05/IMG_2104-edited.jpeg?resize=1024%2C576&ssl=1" 
                  alt="Ugandan music artist on stage" 
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition"
                />
                <span className="absolute top-4 right-4 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded">Music</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                Azawi teases fans with unreleased songs on the horizon
              </h2>
              <p className="text-gray-300 mb-3 text-base">
                The Swangz Avenue star says the project is a love letter to Ugandan music lovers.
              </p>
              <div className="text-sm text-gray-500">
                <span>Aug 8, 2025</span>
                <span className="mx-2 text-gray-600">|</span>
                <span>Entertainment</span>
              </div>
            </article>

            <article className="border-b border-gray-800 pb-6">
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                Parliament Passes New Tax Policy on Digital Services
              </h2>
              <p className="text-gray-300 mb-3 text-base">
                The law will see social media and streaming platforms taxed at 5% from 2026.
              </p>
              <div className="text-sm text-gray-500">
                <span>Aug 7, 2025</span>
                <span className="mx-2 text-gray-600">|</span>
                <span>Economy</span>
              </div>
            </article>

            <article className="border-b border-gray-800 pb-6">
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                Parliament Passes New Tax Policy on Digital Services
              </h2>
              <p className="text-gray-300 mb-3 text-base">
                The law will see social media and streaming platforms taxed at 5% from 2026.
              </p>
              <div className="text-sm text-gray-500">
                <span>Aug 7, 2025</span>
                <span className="mx-2 text-gray-600">|</span>
                <span>Economy</span>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                Heavy Rains Cause Flooding in Eastern Uganda
              </h2>
              <p className="text-gray-300 mb-3 text-base">
                Several families have been displaced after River Manafwa burst its banks.
              </p>
              <div className="text-sm text-gray-500">
                <span>Aug 5, 2025</span>
                <span className="mx-2 text-gray-600">|</span>
                <span>Environment</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
        title="Back to Top" 
        className="fixed bottom-8 right-8 bg-gray-800 text-white w-12 h-12 rounded-md flex items-center justify-center shadow-lg hover:bg-gray-700 border border-gray-600 z-20"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

          {/* Container for floating players */}
          <div id="playerContainer" className="fixed inset-0 pointer-events-none">
            {players.map(player => (
              <Player
                key={player.id}
                type={player.type}
                id={player.id}
                removePlayer={removePlayer}
              />
            ))}
          </div>

          <Chatbot />
          <Footer />
        </div>
      )
    }
