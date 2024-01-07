import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const outfit = Outfit({
  display: 'swap',
  weight: ['300','400','500','600','700'],
  style: ['normal'],
  subsets: ['latin-ext'],
})

import Header from '../components/common/header'

export const metadata: Metadata = {
  title: '@joserivasgt',
  description: 'Improving lives through technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <body className={outfit.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
