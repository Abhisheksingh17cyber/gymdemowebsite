'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheckCircle, FaTrophy, FaUsers, FaDumbbell, FaClock, FaMedal, FaHandshake, FaStar, FaArrowRight } from 'react-icons/fa'

const milestones = [
  { year: '1999', title: 'Founded', description: 'IRONFORGE opened its doors with a vision to transform lives through fitness.' },
  { year: '2005', title: 'Expansion', description: 'Expanded to 20,000 sq ft with state-of-the-art equipment.' },
  { year: '2012', title: 'Award Winner', description: 'Named Best Gym in the Region for 3 consecutive years.' },
  { year: '2018', title: 'Community Hub', description: 'Reached 10,000 active members milestone.' },
  { year: '2024', title: 'Innovation', description: 'Launched AI-powered training programs and virtual classes.' },
]

const values = [
  { icon: FaTrophy, title: 'Excellence', description: 'We strive for excellence in everything we do, from equipment to training.' },
  { icon: FaUsers, title: 'Community', description: 'Building a supportive community where everyone belongs and thrives.' },
  { icon: FaHandshake, title: 'Integrity', description: 'Honest guidance and transparent practices in all our services.' },
  { icon: FaMedal, title: 'Results', description: 'Focused on delivering real, measurable results for every member.' },
]

const team = [
  { name: 'John Anderson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', description: '25 years in fitness industry' },
  { name: 'Sarah Mitchell', role: 'Head Trainer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop', description: 'NASM Certified, 15 years experience' },
  { name: 'Mike Thompson', role: 'Strength Coach', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', description: 'Former Olympic athlete' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
            alt="About Hero"
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
              About IRONFORGE
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Building <span className="text-red-500">Champions</span> Since 1999
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              For over 25 years, we've been dedicated to helping people transform their bodies 
              and lives through expert training, premium facilities, and unwavering support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">Our Story</span>
              <h2 className="section-title mt-2 mb-6">
                From Humble Beginnings to <span className="text-gradient">Industry Leader</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  IRONFORGE was born from a simple belief: everyone deserves access to world-class 
                  fitness facilities and expert guidance. Founded in 1999 by fitness enthusiast 
                  John Anderson, we started as a small 5,000 sq ft gym in downtown.
                </p>
                <p>
                  What set us apart from day one was our commitment to creating a community, not 
                  just a gym. We invested in the best equipment, hired certified trainers, and 
                  fostered an environment where members felt supported and motivated.
                </p>
                <p>
                  Today, IRONFORGE spans over 50,000 sq ft with three locations, serving more 
                  than 15,000 active members. We've helped thousands achieve their fitness goals, 
                  from weight loss to competitive bodybuilding.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-red-500">50K+</p>
                  <p className="text-gray-400 text-sm">Sq Ft Facility</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-red-500">15K+</p>
                  <p className="text-gray-400 text-sm">Active Members</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-red-500">25</p>
                  <p className="text-gray-400 text-sm">Years Strong</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80"
                  alt="Gym Interior"
                  className="rounded-2xl h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80"
                  alt="Training"
                  className="rounded-2xl h-64 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80"
                  alt="Equipment"
                  className="rounded-2xl h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80"
                  alt="Community"
                  className="rounded-2xl h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-4">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <p className="text-sm text-gray-400 mt-1">Rated 4.9/5 by members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              25 Years of <span className="text-gradient">Excellence</span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-red-500 to-red-600 hidden lg:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="glass-card p-6">
                    <span className="text-red-500 font-display font-bold text-2xl">{milestone.year}</span>
                    <h3 className="text-xl font-display font-bold mt-2">{milestone.title}</h3>
                    <p className="text-gray-400 mt-2">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-8 h-8 bg-red-600 rounded-full items-center justify-center z-10 mx-4">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              What We Stand For
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Our Core <span className="text-gradient">Values</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300">
                  <value.icon className="text-4xl text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Meet Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Leadership <span className="text-gradient">Team</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-600 group-hover:border-yellow-500 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-bold">{member.name}</h3>
                <p className="text-red-500 font-semibold">{member.role}</p>
                <p className="text-gray-400 mt-2 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/trainers" className="btn-primary inline-flex items-center gap-2">
              Meet All Trainers <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              World-Class Facilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              What We <span className="text-gradient">Offer</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Cardio Zone', desc: '50+ premium cardio machines', icon: '🏃' },
              { title: 'Free Weights', desc: 'Dumbbells up to 150 lbs', icon: '💪' },
              { title: 'Functional Training', desc: 'CrossFit certified area', icon: '🎯' },
              { title: 'Swimming Pool', desc: 'Olympic-sized pool', icon: '🏊' },
              { title: 'Sauna & Steam', desc: 'Recovery and relaxation', icon: '🧖' },
              { title: 'Juice Bar', desc: 'Fresh smoothies & supplements', icon: '🥤' },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 glass-card p-6"
              >
                <span className="text-4xl">{facility.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-lg">{facility.title}</h3>
                  <p className="text-gray-400 text-sm">{facility.desc}</p>
                </div>
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
            Ready to Join the IRONFORGE Family?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Take the first step towards your transformation. Join over 15,000 members who've already started their journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/pricing" className="btn-gold">
              View Membership Plans
            </Link>
            <Link href="/contact" className="btn-secondary">
              Schedule a Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
