import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grapple Timer - BJJ Training Timer for iPhone',
  description: 'The ultimate training timer for Brazilian Jiu-Jitsu. Features Siri integration and adaptive displays for focused training sessions.',
  keywords: 'BJJ, Brazilian Jiu-Jitsu, training timer, iPhone app, Siri, grappling',
  authors: [{ name: 'Ben Reeve' }],
  icons: {
    icon: '/images/icon.png',
    apple: '/images/icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}