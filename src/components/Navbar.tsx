'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/classes', label: 'Classes' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-dark-900 border-b border-white/10 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
              <FaPhone className="text-red-500" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@ironforge.com" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
              <FaEnvelope className="text-red-500" />
              <span>info@ironforge.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us:</span>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-2xl py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <GiMuscleUp className="text-4xl md:text-5xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-bold tracking-tight">
                  IRON<span className="text-red-600">FORGE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Premium Fitness</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium uppercase tracking-wider text-sm transition-colors duration-300 group ${
                    pathname === link.href ? 'text-red-500' : 'text-white hover:text-red-500'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/pricing"
                className="btn-primary text-sm"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2"
            >
              {isOpen ? (
                <FaTimes className="text-2xl text-white" />
              ) : (
                <FaBars className="text-2xl text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-dark-900/98 backdrop-blur-lg z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-display uppercase tracking-wider transition-colors ${
                      pathname === link.href ? 'text-red-500' : 'text-white hover:text-red-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-4"
                >
                  Join Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
