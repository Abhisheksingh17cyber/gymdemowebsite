'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaTimes, FaExpand, FaArrowRight } from 'react-icons/fa'

const categories = ['All', 'Gym Floor', 'Classes', 'Equipment', 'Events', 'Transformations']

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', category: 'Gym Floor', title: 'Main Workout Area' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', category: 'Equipment', title: 'Free Weights Section' },
  { id: 3, src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', category: 'Classes', title: 'Group Training' },
  { id: 4, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', category: 'Classes', title: 'Cardio Zone' },
  { id: 5, src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', category: 'Classes', title: 'Yoga Studio' },
  { id: 6, src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80', category: 'Equipment', title: 'Cable Machines' },
  { id: 7, src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80', category: 'Transformations', title: 'Success Story' },
  { id: 8, src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80', category: 'Events', title: 'Competition Day' },
  { id: 9, src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80', category: 'Classes', title: 'Boxing Ring' },
  { id: 10, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80', category: 'Classes', title: 'CrossFit Box' },
  { id: 11, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', category: 'Gym Floor', title: 'Evening Atmosphere' },
  { id: 12, src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80', category: 'Transformations', title: 'Before & After' },
  { id: 13, src: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80', category: 'Equipment', title: 'Strength Area' },
  { id: 14, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', category: 'Events', title: 'Member Meetup' },
  { id: 15, src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80', category: 'Transformations', title: 'Fitness Journey' },
  { id: 16, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', category: 'Gym Floor', title: 'Reception Area' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Gallery Hero"
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
              Our Gallery
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Take a <span className="text-red-500">Virtual Tour</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Explore our world-class facilities, state-of-the-art equipment, 
              and see the transformations our members have achieved.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-dark-100 text-gray-400 hover:bg-dark-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                    index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index % 5 === 0 ? 'h-[500px]' : 'h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-red-500 text-sm font-semibold">{image.category}</span>
                    <h3 className="text-white font-display font-bold text-lg">{image.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExpand className="text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="text-white text-xl" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-red-500 font-semibold">{selectedImage.category}</span>
                <h3 className="text-white font-display font-bold text-2xl">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Tour Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Video Tour
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Experience <span className="text-gradient">IRONFORGE</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
              alt="Video Thumbnail"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-red-600/50">
                <span className="text-white text-4xl ml-2">▶</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Follow Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              @IRONFORGE on <span className="text-gradient">Instagram</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {galleryImages.slice(0, 6).map((image, index) => (
              <motion.a
                key={image.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt="Instagram"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/50 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    View
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            See It All In Person!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Book a free tour of our facilities and experience the IRONFORGE difference firsthand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Schedule a Tour <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
