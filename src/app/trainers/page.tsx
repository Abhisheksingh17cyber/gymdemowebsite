'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaFacebook, FaStar, FaArrowRight, FaTrophy, FaCertificate } from 'react-icons/fa'

const trainers = [
  {
    id: 1,
    name: 'Mike Thompson',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=600&fit=crop',
    specialties: ['Powerlifting', 'Bodybuilding', 'Strength Training'],
    certifications: ['NSCA-CSCS', 'NASM-CPT', 'USA Weightlifting L2'],
    experience: '15 years',
    bio: 'Former competitive powerlifter with multiple state records. Mike has helped hundreds of clients achieve their strength goals.',
    achievements: ['State Powerlifting Champion 2018', 'Trained 50+ competitive athletes'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'HIIT & Cardio Specialist',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=600&fit=crop',
    specialties: ['HIIT', 'Cardio Training', 'Weight Loss'],
    certifications: ['ACE-CPT', 'TRX Certified', 'Spin Instructor'],
    experience: '10 years',
    bio: 'Sarah brings energy and motivation to every session. Her high-intensity programs have helped clients lose over 10,000 lbs combined.',
    achievements: ['Fitness Instructor of the Year 2022', '500+ transformation stories'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 3,
    name: 'Chris Brooks',
    role: 'CrossFit Head Coach',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=600&fit=crop',
    specialties: ['CrossFit', 'Olympic Lifting', 'Functional Fitness'],
    certifications: ['CrossFit L3', 'USAW Sports Performance', 'Mobility WOD'],
    experience: '12 years',
    bio: 'CrossFit Games regional competitor and certified coach. Chris specializes in building all-around athletic performance.',
    achievements: ['CrossFit Regional Competitor 2019', 'Built championship-winning team'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 4,
    name: 'Lisa Kim',
    role: 'Yoga & Wellness Director',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop',
    specialties: ['Yoga', 'Pilates', 'Meditation', 'Recovery'],
    certifications: ['RYT-500', 'PMA Pilates', 'Meditation Teacher'],
    experience: '14 years',
    bio: 'Lisa combines Eastern philosophy with modern fitness science to help clients achieve balance in body and mind.',
    achievements: ['Yoga Teacher Training Director', 'Author of "Mindful Movement"'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 5,
    name: 'Marcus Rodriguez',
    role: 'Combat Sports Coach',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&h=600&fit=crop',
    specialties: ['Boxing', 'MMA', 'Kickboxing', 'Self-Defense'],
    certifications: ['USA Boxing Coach', 'MMA Conditioning', 'Krav Maga'],
    experience: '18 years',
    bio: 'Professional boxing background with over 30 fights. Marcus now dedicates his expertise to training the next generation.',
    achievements: ['Professional Boxing Record: 25-5', 'Trained 3 regional champions'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 6,
    name: 'Anna Peterson',
    role: 'Spin & Dance Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop',
    specialties: ['Spinning', 'Dance Fitness', 'Zumba', 'Barre'],
    certifications: ['Schwinn Certified', 'Zumba Instructor', 'Barre Above'],
    experience: '8 years',
    bio: 'Anna makes fitness fun! Her energetic classes combine music, movement, and motivation for an unforgettable workout.',
    achievements: ['Best Group Fitness Instructor 2023', '1000+ classes taught'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 7,
    name: 'John Anderson',
    role: 'Founder & Master Trainer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    specialties: ['Personal Training', 'Business of Fitness', 'Transformation'],
    certifications: ['NASM-MES', 'Precision Nutrition L2', 'FMS Certified'],
    experience: '25 years',
    bio: 'Founder of IRONFORGE with a vision to transform lives. John still trains clients personally and mentors our coaching team.',
    achievements: ['Built IRONFORGE from ground up', 'Trained 5000+ clients'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
  {
    id: 8,
    name: 'David Chen',
    role: 'Athletic Performance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
    specialties: ['Sports Performance', 'Speed Training', 'Agility'],
    certifications: ['CSCS', 'USAW', 'FRC Mobility'],
    experience: '11 years',
    bio: 'Former D1 athlete specializing in sport-specific training. David has worked with professional athletes across multiple sports.',
    achievements: ['Trained 20+ professional athletes', 'Sports Science degree'],
    social: { instagram: '#', twitter: '#', facebook: '#' },
  },
]

export default function TrainersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
            alt="Trainers Hero"
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
              Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Expert <span className="text-red-500">Trainers</span> at Your Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Our team of certified professionals brings decades of combined experience 
              to help you achieve your fitness goals safely and effectively.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a href={trainer.social.instagram} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                      <FaInstagram className="text-white" />
                    </a>
                    <a href={trainer.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                      <FaTwitter className="text-white" />
                    </a>
                    <a href={trainer.social.facebook} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                      <FaFacebook className="text-white" />
                    </a>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {trainer.experience}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-display font-bold">{trainer.name}</h3>
                  <p className="text-red-500 font-semibold text-sm mb-2">{trainer.role}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {trainer.specialties.slice(0, 2).map((specialty, i) => (
                      <span key={i} className="text-xs bg-dark-100 text-gray-400 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainer */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80"
                alt="Featured Trainer"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">5.0</span>
                  <span className="text-gray-400 text-sm">(200+ reviews)</span>
                </div>
                <p className="text-sm text-gray-400">Top Rated Trainer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">Featured Trainer</span>
              <h2 className="section-title mt-2 mb-4">
                <span className="text-gradient">Mike Thompson</span>
              </h2>
              <p className="text-xl text-red-500 font-semibold mb-4">Head Strength Coach</p>
              <p className="text-gray-400 mb-6">
                {trainers[0].bio}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4">
                  <FaCertificate className="text-red-500 text-2xl mb-2" />
                  <p className="font-bold">Certifications</p>
                  <p className="text-sm text-gray-400">{trainers[0].certifications.join(', ')}</p>
                </div>
                <div className="glass-card p-4">
                  <FaTrophy className="text-yellow-500 text-2xl mb-2" />
                  <p className="font-bold">Achievements</p>
                  <p className="text-sm text-gray-400">{trainers[0].achievements[0]}</p>
                </div>
              </div>

              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Book a Session <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              What Makes Our <span className="text-gradient">Trainers Different</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Certified Experts', desc: 'All trainers hold nationally recognized certifications and undergo continuous education.', stat: '100%', statLabel: 'Certified' },
              { title: 'Proven Results', desc: 'Our trainers have collectively helped thousands of clients achieve their goals.', stat: '10K+', statLabel: 'Transformations' },
              { title: 'Personalized Approach', desc: 'Every program is tailored to your unique goals, abilities, and preferences.', stat: '1:1', statLabel: 'Attention' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center"
              >
                <p className="text-5xl font-display font-bold text-red-500 mb-2">{item.stat}</p>
                <p className="text-sm text-gray-400 mb-4">{item.statLabel}</p>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
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
            Ready to Train with the Best?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Book a free consultation and get matched with the perfect trainer for your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact" className="btn-gold">
              Book Free Consultation
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Training Packages
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
