'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaDumbbell, FaUsers, FaTrophy, FaClock, FaArrowRight, FaStar, FaPlay, FaCheck, FaQuoteLeft } from 'react-icons/fa'
import { GiMuscleUp, GiWeightLiftingUp, GiRunningShoe, GiMeditation } from 'react-icons/gi'
import dynamic from 'next/dynamic'

// Dynamic import for 3D component
const GymShowcase3D = dynamic(() => import('@/components/GymShowcase3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-dark-300 to-dark-900 rounded-2xl">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Loading 3D Experience...</p>
      </div>
    </div>
  ),
})

// Stats Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Program Card Component
function ProgramCard({ icon: Icon, title, description, delay }: { icon: React.ElementType; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-dark-100 to-dark-300 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-red-900/30 hover:to-dark-300 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-all duration-300">
          <Icon className="text-3xl text-red-500 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link href="/programs" className="inline-flex items-center gap-2 text-red-500 font-semibold group-hover:text-red-400 transition-colors">
          Learn More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

// Testimonial Card
function TestimonialCard({ name, role, image, text, rating }: { name: string; role: string; image: string; text: string; rating: number }) {
  return (
    <div className="glass-card p-8 relative">
      <FaQuoteLeft className="text-4xl text-red-600/30 absolute top-6 right-6" />
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-display font-bold text-lg">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          <div className="flex gap-1 mt-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 text-sm" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300 italic">"{text}"</p>
    </div>
  )
}

export default function HomePage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  const programs = [
    { icon: GiWeightLiftingUp, title: 'Strength Training', description: 'Build muscle and increase your strength with our comprehensive weight training programs.' },
    { icon: GiRunningShoe, title: 'Cardio Fitness', description: 'Improve your cardiovascular health with high-intensity interval training and endurance workouts.' },
    { icon: GiMuscleUp, title: 'Bodybuilding', description: 'Sculpt your physique with targeted workouts designed for maximum muscle growth.' },
    { icon: GiMeditation, title: 'Yoga & Flexibility', description: 'Enhance flexibility, balance, and mental wellness with our yoga classes.' },
  ]

  const stats = [
    { value: 15000, suffix: '+', label: 'Active Members' },
    { value: 50, suffix: '+', label: 'Expert Trainers' },
    { value: 100, suffix: '+', label: 'Fitness Programs' },
    { value: 25, suffix: '', label: 'Years Experience' },
  ]

  const testimonials = [
    { name: 'Michael Johnson', role: 'Bodybuilder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', text: 'IRONFORGE transformed my life. The trainers are world-class and the facilities are unmatched. I\'ve gained 30 lbs of muscle in just 8 months!', rating: 5 },
    { name: 'Sarah Williams', role: 'Fitness Enthusiast', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', text: 'Best gym experience ever! The community here is amazing and supportive. Lost 40 lbs and feeling stronger than ever.', rating: 5 },
    { name: 'David Chen', role: 'CrossFit Athlete', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', text: 'The CrossFit program here is intense but incredibly effective. The coaches push you to your limits while ensuring proper form.', rating: 5 },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Gym Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              initial={{ 
                opacity: 0 
              }}
              animate={{ 
                y: [0, -100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4
              }}
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle mb-4 block">Welcome to IRONFORGE GYM</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-tight mb-6">
                Transform Your <span className="text-gradient">Body</span>,<br />
                Transform Your <span className="text-gradient-gold">Life</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Join the ultimate fitness experience with state-of-the-art equipment, 
                expert trainers, and a community that pushes you to be your best.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing" className="btn-primary">
                  Start Your Journey
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-red-500"><AnimatedCounter end={15000} suffix="+" /></p>
                  <p className="text-gray-400 text-sm">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-red-500"><AnimatedCounter end={50} suffix="+" /></p>
                  <p className="text-gray-400 text-sm">Trainers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-red-500"><AnimatedCounter end={25} /></p>
                  <p className="text-gray-400 text-sm">Years</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image/Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                  alt="Fitness"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl glow-red" />
                
                {/* Play Button Overlay */}
                <button 
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-red-600/50">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </button>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <FaTrophy className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold">#1 Gym</p>
                    <p className="text-sm text-gray-400">in the City</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 3D Animation Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Premium Facilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              World-Class <span className="text-gradient">Equipment</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              Experience our state-of-the-art gym equipment designed for maximum performance. 
              From free weights to advanced machines, we have everything you need.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <GymShowcase3D />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h3 className="text-3xl font-display font-bold">Train With <span className="text-red-500">The Best</span></h3>
              <p className="text-gray-400">
                Our gym features premium equipment from world-renowned brands. 
                Every piece is carefully selected to help you achieve your fitness goals.
              </p>
              
              <div className="space-y-4">
                {[
                  'Premium free weights & dumbbells',
                  'State-of-the-art cardio machines',
                  'Olympic lifting platforms',
                  'Functional training zones',
                  'Recovery & stretching areas',
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
              
              <Link href="/programs" className="btn-primary inline-flex items-center gap-2">
                Explore Programs <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=20')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/80 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Our Programs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Build Your <span className="text-gradient">Perfect Body</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/programs" className="btn-primary inline-flex items-center gap-2">
              View All Programs <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-900/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80"
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6">
                <p className="text-4xl font-display font-bold text-red-500">25+</p>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title mt-2 mb-6">
                We Are <span className="text-gradient">IRONFORGE</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Founded in 1999, IRONFORGE has been the premier destination for fitness enthusiasts 
                seeking to transform their bodies and lives. Our state-of-the-art facility spans 
                over 50,000 sq ft, featuring the latest equipment and world-class amenities.
              </p>
              <p className="text-gray-400 mb-8">
                We believe in creating a supportive community where everyone, from beginners to 
                professional athletes, can achieve their fitness goals with expert guidance.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: FaDumbbell, label: 'Modern Equipment' },
                  { icon: FaUsers, label: 'Expert Trainers' },
                  { icon: FaTrophy, label: 'Award Winning' },
                  { icon: FaClock, label: '24/7 Access' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <item.icon className="text-red-500" />
                    </div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Discover More <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              What Our <span className="text-gradient">Members Say</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-red-900/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Ready to Start?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6"
            >
              Start Your Fitness Journey <span className="text-red-500">Today</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Join IRONFORGE and get access to world-class facilities, expert trainers, 
              and a supportive community. Your transformation starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/pricing" className="btn-primary">
                Get Started Now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
