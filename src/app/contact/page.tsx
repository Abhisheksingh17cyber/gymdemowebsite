'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheck, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', interest: 'general' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-subtitle"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Contact <span className="text-red-500">IRONFORGE</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Have questions? We're here to help. Reach out and let's start your fitness journey together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-display font-bold mb-8">Contact <span className="text-red-500">Information</span></h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-400">123 Fitness Street<br />Muscle City, MC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-400">+1 (234) 567-890</p>
                    <p className="text-gray-400">+1 (234) 567-891</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-400">info@ironforge.com</p>
                    <p className="text-gray-400">support@ironforge.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-400">Mon-Fri: 5:00 AM - 11:00 PM</p>
                    <p className="text-gray-400">Sat: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-400">Sun: 7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold mb-2">Send Us a <span className="text-red-500">Message</span></h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <FaCheck className="text-green-500" />
                    <span className="text-green-400">Thank you! Your message has been sent successfully. We'll be in touch soon!</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-semibold mb-2">I'm Interested In *</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership Information</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="group-classes">Group Classes</option>
                        <option value="corporate">Corporate Membership</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 transition-colors resize-none"
                      placeholder="Tell us more about your fitness goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Location
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Find <span className="text-gradient">Us</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[500px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036935!2d-73.98784368459375!3d40.74844097932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959481234!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />
            <div className="absolute top-6 left-6 glass-card p-6">
              <h3 className="font-display font-bold text-xl mb-2">IRONFORGE GYM</h3>
              <p className="text-gray-400">123 Fitness Street<br />Muscle City, MC 12345</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-red-500 font-semibold hover:text-red-400 transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaPhone, title: 'Call Us Now', desc: 'Speak directly with our team', action: 'tel:+1234567890', actionText: '+1 (234) 567-890' },
              { icon: FaEnvelope, title: 'Email Us', desc: 'We respond within 24 hours', action: 'mailto:info@ironforge.com', actionText: 'info@ironforge.com' },
              { icon: FaClock, title: 'Book a Tour', desc: 'See our facilities in person', action: '#', actionText: 'Schedule Now' },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center group hover:bg-red-900/20 transition-colors"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all">
                  <item.icon className="text-2xl text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <span className="text-red-500 font-semibold">{item.actionText}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
