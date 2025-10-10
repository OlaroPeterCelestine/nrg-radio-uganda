'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to NRG Radio! How can we nrgize you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hey there! How can I help you with NRG Radio today?'
    }
    if (lowerInput.includes('events')) {
      return 'You can check out all our upcoming events on the Events page!'
    }
    if (lowerInput.includes('music') || lowerInput.includes('song') || lowerInput.includes('listen')) {
      return 'You can listen live by clicking the "Listen Live" button on our homepage. We play the hottest hits!'
    }
    if (lowerInput.includes('contact') || lowerInput.includes('touch')) {
      return 'You can find all our contact details on the Get In Touch page.'
    }
    if (lowerInput.includes('bye') || lowerInput.includes('thanks') || lowerInput.includes('thank you')) {
      return "You're welcome! Enjoy the vibes."
    }

    return "Sorry, I'm just a simple bot. I'm not sure how to answer that. Try asking about events, music, or how to contact us!"
  }

  const sendMessage = () => {
    if (inputValue.trim() === '') return

    const userMessage: Message = { text: inputValue, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      const botMessage: Message = { text: botResponse, sender: 'bot' }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Icon */}
      <button
        id="chatbot-icon"
        title="Chat with us"
        className="fixed bottom-8 left-8 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all hover:scale-110 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </button>

      {/* Chat Window */}
      <div
        id="chat-window"
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed bottom-28 left-8 w-80 h-96 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl flex flex-col z-50 border border-gray-700`}
      >
        {/* Header */}
        <div className="bg-gray-700 p-3 flex justify-between items-center rounded-t-lg">
          <h3 className="text-white font-semibold">NRG Bot</h3>
          <button
            id="close-chat-btn"
            className="text-white hover:text-red-500 text-xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>

        {/* Messages */}
        <div id="chat-messages" className="flex-grow p-4 space-y-4 overflow-y-auto no-scrollbar">
          {messages.map((message, index) => (
            <div key={index} className="flex">
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-red-600 text-white ml-auto'
                    : 'bg-gray-700 text-white'
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-gray-700 rounded-b-lg flex items-center">
          <input
            type="text"
            id="chat-input"
            placeholder="Ask something..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow bg-gray-800 text-white p-2 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-red-500 transition-smooth placeholder-gray-500 text-sm"
          />
          <button
            id="send-chat-btn"
            className="ml-2 bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition-colors"
            onClick={sendMessage}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  )
}
