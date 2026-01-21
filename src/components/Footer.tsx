'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaArrowRight, FaDumbbell } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/classes', label: 'Classes' },
  { href: '/trainers', label: 'Our Trainers' },
]

const services = [
  { href: '/programs', label: 'Personal Training' },
  { href: '/programs', label: 'Group Classes' },
  { href: '/programs', label: 'Nutrition Plans' },
  { href: '/programs', label: 'CrossFit' },
  { href: '/programs', label: 'Bodybuilding' },
]

const workingHours = [
  { day: 'Monday - Friday', time: '5:00 AM - 11:00 PM' },
  { day: 'Saturday', time: '6:00 AM - 10:00 PM' },
  { day: 'Sunday', time: '7:00 AM - 8:00 PM' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 relative overflow-hidden">
      {/* Top Wave Design */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600" />
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-red-900/50 to-dark-900 py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Subscribe to Our <span className="text-red-500">Newsletter</span>
              </h3>
              <p className="text-gray-400">Get fitness tips, exclusive offers, and workout plans delivered to your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent min-w-[300px]"
              />
              <button type="submit" className="btn-primary flex items-center justify-center gap-2">
                Subscribe <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <GiMuscleUp className="text-5xl text-red-600" />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold">IRON<span className="text-red-600">FORGE</span></span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Premium Fitness</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transform your body, transform your life. At IRONFORGE, we provide world-class equipment, expert trainers, and a motivating environment to help you achieve your fitness goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <FaDumbbell className="text-red-500" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                    <FaArrowRight className="text-xs text-red-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <FaDumbbell className="text-red-500" /> Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                    <FaArrowRight className="text-xs text-red-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <FaDumbbell className="text-red-500" /> Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-400">123 Fitness Street,<br />Muscle City, MC 12345</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 flex-shrink-0">
                  <FaPhone />
                </div>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-red-500 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <a href="mailto:info@ironforge.com" className="text-gray-400 hover:text-red-500 transition-colors">info@ironforge.com</a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold mb-2 text-white">Working Hours</h5>
              {workingHours.map((item, index) => (
                <p key={index} className="text-sm text-gray-400 flex justify-between">
                  <span>{item.day}</span>
                  <span className="text-red-500">{item.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} IRONFORGE GYM. All Rights Reserved. Designed with 💪 for fitness enthusiasts.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-red-500 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}
