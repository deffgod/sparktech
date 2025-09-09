import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SparkTech Trading - Premium Trading Solutions in UAE',
  description: 'Leading trading company in Dubai specializing in mobile phones, electronics, vehicles, and premium goods. Trusted partner for international trade.',
  keywords: 'trading, Dubai, UAE, mobile phones, electronics, vehicles, export, import, SparkTech',
  authors: [{ name: 'SparkTech Trading FZCO' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/black-circle-1.svg',
  },
  openGraph: {
    title: 'SparkTech Trading - Premium Trading Solutions',
    description: 'Leading trading company in Dubai specializing in electronics, vehicles, and premium goods.',
    url: 'https://sparktech-trading.com',
    siteName: 'SparkTech Trading',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/black-circle-1.svg',
        width: 1200,
        height: 630,
        alt: 'SparkTech Trading Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}