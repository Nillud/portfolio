import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'nillud-data-table/styles.css'

import './globals.css'
import { CursorGlow } from '@/components/CursorGlow'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Nillud',
  description: 'Nillud portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Background /> */}
        <Navbar />
        {children}
        <Footer />
        {/* <CursorGlow /> */}
      </body>
    </html>
  )
}
