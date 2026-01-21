'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaCheck, FaDumbbell, FaFireAlt, FaHeartbeat, FaRunning, FaUserFriends } from 'react-icons/fa'
import { GiMuscleUp, GiWeightLiftingUp, GiBoxingGlove, GiMeditation, GiCycling, GiRunningShoe } from 'react-icons/gi'

const programs = [
  {
    id: 1,
    title: 'Strength Training',
    icon: GiWeightLiftingUp,
    description: 'Build muscle mass and increase strength with our comprehensive weight training program designed for all levels.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    features: ['Personalized workout plans', 'Progressive overload training', 'Form correction', 'Nutrition guidance'],
    duration: '60-90 min',
    level: 'All Levels',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 2,
    title: 'HIIT Training',
    icon: FaFireAlt,
    description: 'High-intensity interval training to burn fat, boost metabolism, and improve cardiovascular fitness.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    features: ['Calorie-torching workouts', 'Metabolic conditioning', 'Group sessions', 'Heart rate monitoring'],
    duration: '45 min',
    level: 'Intermediate',
    color: 'from-orange-600 to-orange-800',
  },
  {
    id: 3,
    title: 'CrossFit',
    icon: GiMuscleUp,
    description: 'Functional fitness combining weightlifting, cardio, and gymnastics for total body conditioning.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80',
    features: ['WOD challenges', 'Olympic lifting', 'Mobility work', 'Competition prep'],
    duration: '60 min',
    level: 'All Levels',
    color: 'from-yellow-600 to-yellow-800',
  },
  {
    id: 4,
    title: 'Boxing & MMA',
    icon: GiBoxingGlove,
    description: 'Learn combat sports techniques while getting an incredible full-body workout.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    features: ['Boxing fundamentals', 'Kickboxing', 'Self-defense', 'Sparring sessions'],
    duration: '60 min',
    level: 'All Levels',
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 5,
    title: 'Yoga & Flexibility',
    icon: GiMeditation,
    description: 'Improve flexibility, balance, and mental wellness with our diverse yoga program.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    features: ['Vinyasa flow', 'Hot yoga', 'Restorative yoga', 'Meditation'],
    duration: '60 min',
    level: 'All Levels',
    color: 'from-teal-600 to-teal-800',
  },
  {
    id: 6,
    title: 'Spinning & Cycling',
    icon: GiCycling,
    description: 'Indoor cycling classes that push your cardio limits with energizing music and motivation.',
    image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=600&q=80',
    features: ['Rhythm cycling', 'Endurance rides', 'Hill climbing', 'Heart rate training'],
    duration: '45 min',
    level: 'All Levels',
    color: 'from-blue-600 to-blue-800',
  },
]

const specialPrograms = [
  {
    title: 'Personal Training',
    description: 'One-on-one sessions with expert trainers tailored to your specific goals.',
    icon: FaUserFriends,
    price: 'From $75/session',
  },
  {
    title: 'Transformation Challenge',
    description: '12-week intensive program with guaranteed results or your money back.',
    icon: FaHeartbeat,
    price: '$499 for 12 weeks',
  },
  {
    title: 'Athletic Performance',
    description: 'Sport-specific training for athletes looking to enhance their performance.',
    icon: FaRunning,
    price: 'Custom pricing',
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Programs Hero"
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
              Our Programs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Training Programs for <span className="text-red-500">Every Goal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Whether you're looking to build muscle, lose weight, or improve your overall fitness, 
              we have a program designed to help you succeed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-dark-100 rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <program.icon className="text-5xl text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-bold">{program.title}</h3>
                    <span className="text-sm text-gray-400">{program.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{program.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <FaCheck className="text-red-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-red-500 font-semibold group-hover:text-red-400 transition-colors"
                  >
                    Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Premium Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Specialized <span className="text-gradient">Programs</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center group hover:bg-red-900/20 transition-colors"
              >
                <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300">
                  <program.icon className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <p className="text-red-500 font-bold text-lg">{program.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Getting Started
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              How It <span className="text-gradient">Works</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book Consultation', desc: 'Schedule a free fitness assessment with our experts' },
              { step: '02', title: 'Set Your Goals', desc: 'Define your fitness objectives and timeline' },
              { step: '03', title: 'Get Your Plan', desc: 'Receive a personalized training and nutrition plan' },
              { step: '04', title: 'Start Training', desc: 'Begin your transformation journey with full support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="text-6xl font-display font-bold text-red-600/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=20')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Ready to Start Your Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Book a free consultation today and let our experts help you choose the perfect program for your goals.
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
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
