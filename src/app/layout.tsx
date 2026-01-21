import '@/styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'IRONFORGE GYM | Transform Your Body, Transform Your Life',
  description: 'Premium fitness center with world-class equipment, expert trainers, and personalized programs. Join IRONFORGE GYM and unleash your potential.',
  keywords: 'gym, fitness, workout, bodybuilding, personal training, CrossFit, strength training',
  authors: [{ name: 'IRONFORGE GYM' }],
  openGraph: {
    title: 'IRONFORGE GYM | Transform Your Body, Transform Your Life',
    description: 'Premium fitness center with world-class equipment, expert trainers, and personalized programs.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
