'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import Player from '@/components/Player'

export default function ContactPage() {
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
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full bg-gray-800 text-white p-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full bg-gray-800 text-white p-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 text-white p-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-800 text-white p-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth"
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-800 text-white p-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth"
                  >
                    <option value="">Select a subject</option>
                    <option value="music-submission">Music Submission</option>
                    <option value="event-booking">Event Booking</option>
                    <option value="partnership">Partnership</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-gray-800 text-white p-3 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300">
                        Clement Hill Road<br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">+256 771 751454</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">info@106.5nrgradio.ug</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <i className="fas fa-clock text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-tiktok text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
