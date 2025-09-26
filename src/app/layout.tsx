import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'NRG Radio Uganda - 106.5 FM',
  description: 'The Number one name in music - Live from Nakasero, Kampala',
  keywords: 'radio, music, uganda, kampala, nrg, 106.5, entertainment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link href="https://fonts.cdnfonts.com/css/headingnowtrial18heavy" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans relative bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}