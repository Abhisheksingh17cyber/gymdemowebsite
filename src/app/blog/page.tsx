'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaTags } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Building Muscle Mass',
    excerpt: 'Discover the proven strategies that professional bodybuilders use to maximize muscle growth and achieve impressive gains.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    author: 'Mike Thompson',
    date: 'Dec 15, 2025',
    category: 'Muscle Building',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'The Ultimate Guide to HIIT Workouts',
    excerpt: 'High-Intensity Interval Training can transform your fitness. Learn how to structure your HIIT sessions for maximum fat burn.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    author: 'Sarah Mitchell',
    date: 'Dec 10, 2025',
    category: 'Cardio',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Nutrition 101: Fueling Your Workouts',
    excerpt: 'What you eat matters as much as how you train. This comprehensive guide covers pre and post-workout nutrition.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    author: 'Lisa Kim',
    date: 'Dec 5, 2025',
    category: 'Nutrition',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'The Benefits of Yoga for Athletes',
    excerpt: 'Why every serious athlete should incorporate yoga into their training routine for better performance and recovery.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    author: 'Lisa Kim',
    date: 'Dec 1, 2025',
    category: 'Recovery',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'CrossFit vs Traditional Gym Training',
    excerpt: 'A detailed comparison of CrossFit and traditional gym workouts to help you decide which approach suits your goals.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
    author: 'Chris Brooks',
    date: 'Nov 28, 2025',
    category: 'Training',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Recovery Techniques Every Lifter Should Know',
    excerpt: 'From foam rolling to cold therapy, discover the best recovery methods to bounce back faster between workouts.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    author: 'John Anderson',
    date: 'Nov 25, 2025',
    category: 'Recovery',
    readTime: '6 min read',
    featured: false,
  },
]

const categories = ['All', 'Muscle Building', 'Cardio', 'Nutrition', 'Recovery', 'Training']

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Blog Hero"
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
              Fitness Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Tips & <span className="text-red-500">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Expert advice, workout tips, and nutrition guides to help you achieve your fitness goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-subtitle">Featured</span>
            <h2 className="section-title mt-2">Top <span className="text-gradient">Articles</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
                    <span className="flex items-center gap-1"><FaCalendar /> {post.date}</span>
                    <span className="flex items-center gap-1"><FaClock /> {post.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.id}`} className="absolute inset-0" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-dark-800 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  category === 'All' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-dark-100 text-gray-400 hover:bg-dark-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1"><FaCalendar /> {post.date}</span>
                    <span className="flex items-center gap-1"><FaClock /> {post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-red-500 font-semibold mt-4 group-hover:text-red-400 transition-colors"
                  >
                    Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Never Miss a Post!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter and get the latest fitness tips delivered to your inbox weekly.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="btn-gold">Subscribe</button>
          </motion.form>
        </div>
      </section>
    </>
  )
}
