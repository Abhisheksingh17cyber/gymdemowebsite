'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaUser, FaFire, FaArrowRight } from 'react-icons/fa'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const schedule = {
  Monday: [
    { time: '6:00 AM', name: 'Morning HIIT', trainer: 'Sarah M.', duration: '45 min', intensity: 'High', spots: 5 },
    { time: '8:00 AM', name: 'Yoga Flow', trainer: 'Lisa K.', duration: '60 min', intensity: 'Low', spots: 8 },
    { time: '10:00 AM', name: 'Strength Training', trainer: 'Mike T.', duration: '60 min', intensity: 'Medium', spots: 3 },
    { time: '12:00 PM', name: 'Express Cardio', trainer: 'John A.', duration: '30 min', intensity: 'High', spots: 10 },
    { time: '5:00 PM', name: 'CrossFit WOD', trainer: 'Chris B.', duration: '60 min', intensity: 'High', spots: 2 },
    { time: '7:00 PM', name: 'Boxing Basics', trainer: 'Marcus R.', duration: '60 min', intensity: 'Medium', spots: 6 },
    { time: '8:30 PM', name: 'Evening Stretch', trainer: 'Lisa K.', duration: '45 min', intensity: 'Low', spots: 12 },
  ],
  Tuesday: [
    { time: '6:00 AM', name: 'Spin Class', trainer: 'Anna P.', duration: '45 min', intensity: 'High', spots: 4 },
    { time: '8:00 AM', name: 'Pilates', trainer: 'Lisa K.', duration: '60 min', intensity: 'Low', spots: 7 },
    { time: '10:00 AM', name: 'Bodybuilding', trainer: 'Mike T.', duration: '90 min', intensity: 'High', spots: 5 },
    { time: '12:00 PM', name: 'Core Blast', trainer: 'Sarah M.', duration: '30 min', intensity: 'Medium', spots: 8 },
    { time: '5:00 PM', name: 'Kickboxing', trainer: 'Marcus R.', duration: '60 min', intensity: 'High', spots: 3 },
    { time: '7:00 PM', name: 'Functional Training', trainer: 'Chris B.', duration: '60 min', intensity: 'Medium', spots: 6 },
  ],
  Wednesday: [
    { time: '6:00 AM', name: 'Morning HIIT', trainer: 'Sarah M.', duration: '45 min', intensity: 'High', spots: 6 },
    { time: '8:00 AM', name: 'Power Yoga', trainer: 'Lisa K.', duration: '60 min', intensity: 'Medium', spots: 5 },
    { time: '10:00 AM', name: 'Olympic Lifting', trainer: 'Chris B.', duration: '75 min', intensity: 'High', spots: 4 },
    { time: '12:00 PM', name: 'Lunch Express', trainer: 'John A.', duration: '30 min', intensity: 'Medium', spots: 10 },
    { time: '5:00 PM', name: 'CrossFit WOD', trainer: 'Chris B.', duration: '60 min', intensity: 'High', spots: 0 },
    { time: '7:00 PM', name: 'MMA Training', trainer: 'Marcus R.', duration: '90 min', intensity: 'High', spots: 4 },
  ],
  Thursday: [
    { time: '6:00 AM', name: 'Spin Class', trainer: 'Anna P.', duration: '45 min', intensity: 'High', spots: 5 },
    { time: '8:00 AM', name: 'Stretching & Recovery', trainer: 'Lisa K.', duration: '60 min', intensity: 'Low', spots: 10 },
    { time: '10:00 AM', name: 'Strength Circuit', trainer: 'Mike T.', duration: '60 min', intensity: 'Medium', spots: 6 },
    { time: '12:00 PM', name: 'Abs & Arms', trainer: 'Sarah M.', duration: '30 min', intensity: 'Medium', spots: 8 },
    { time: '5:00 PM', name: 'Boxing Advanced', trainer: 'Marcus R.', duration: '60 min', intensity: 'High', spots: 3 },
    { time: '7:00 PM', name: 'HIIT & Burn', trainer: 'John A.', duration: '45 min', intensity: 'High', spots: 4 },
  ],
  Friday: [
    { time: '6:00 AM', name: 'Full Body Blast', trainer: 'Sarah M.', duration: '60 min', intensity: 'High', spots: 7 },
    { time: '8:00 AM', name: 'Yoga Flow', trainer: 'Lisa K.', duration: '60 min', intensity: 'Low', spots: 9 },
    { time: '10:00 AM', name: 'Powerlifting', trainer: 'Mike T.', duration: '90 min', intensity: 'High', spots: 4 },
    { time: '12:00 PM', name: 'Quick HIIT', trainer: 'John A.', duration: '30 min', intensity: 'High', spots: 6 },
    { time: '5:00 PM', name: 'CrossFit Friday', trainer: 'Chris B.', duration: '60 min', intensity: 'High', spots: 2 },
    { time: '7:00 PM', name: 'Dance Fitness', trainer: 'Anna P.', duration: '45 min', intensity: 'Medium', spots: 10 },
  ],
  Saturday: [
    { time: '8:00 AM', name: 'Weekend Warrior', trainer: 'Chris B.', duration: '90 min', intensity: 'High', spots: 6 },
    { time: '10:00 AM', name: 'Family Fitness', trainer: 'Sarah M.', duration: '60 min', intensity: 'Low', spots: 15 },
    { time: '12:00 PM', name: 'Open Gym', trainer: 'Staff', duration: '120 min', intensity: 'Varies', spots: 20 },
    { time: '2:00 PM', name: 'MMA Workshop', trainer: 'Marcus R.', duration: '120 min', intensity: 'High', spots: 8 },
    { time: '5:00 PM', name: 'Sunset Yoga', trainer: 'Lisa K.', duration: '60 min', intensity: 'Low', spots: 12 },
  ],
  Sunday: [
    { time: '8:00 AM', name: 'Sunrise Run Club', trainer: 'John A.', duration: '60 min', intensity: 'Medium', spots: 10 },
    { time: '10:00 AM', name: 'Restorative Yoga', trainer: 'Lisa K.', duration: '75 min', intensity: 'Low', spots: 15 },
    { time: '12:00 PM', name: 'Open Gym', trainer: 'Staff', duration: '120 min', intensity: 'Varies', spots: 25 },
    { time: '3:00 PM', name: 'Meditation & Mindfulness', trainer: 'Lisa K.', duration: '45 min', intensity: 'Low', spots: 10 },
  ],
}

const intensityColors: Record<string, string> = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-green-500',
  Varies: 'bg-blue-500',
}

export default function ClassesPage() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
            alt="Classes Hero"
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
              Class Schedule
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Find Your <span className="text-red-500">Perfect Class</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Choose from over 50+ weekly classes led by expert instructors. 
              Book your spot today and start your fitness journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-red-600 text-white'
                    : 'bg-dark-100 text-gray-400 hover:bg-dark-300 hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Grid */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {schedule[selectedDay as keyof typeof schedule].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  classItem.spots === 0 ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className="text-center min-w-[80px]">
                    <p className="text-2xl font-display font-bold text-red-500">{classItem.time}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{classItem.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-red-500" /> {classItem.trainer}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-red-500" /> {classItem.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <FaFire className={`${classItem.intensity === 'High' ? 'text-red-500' : classItem.intensity === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`} />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${intensityColors[classItem.intensity]} text-white`}>
                      {classItem.intensity}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${classItem.spots === 0 ? 'text-red-500' : classItem.spots <= 3 ? 'text-yellow-500' : 'text-green-500'}`}>
                      {classItem.spots === 0 ? 'Full' : `${classItem.spots} spots left`}
                    </p>
                  </div>
                  <button
                    disabled={classItem.spots === 0}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      classItem.spots === 0
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {classItem.spots === 0 ? 'Waitlist' : 'Book'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Class Categories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Explore Our <span className="text-gradient">Classes</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Cardio', count: '15+ classes/week', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
              { name: 'Strength', count: '20+ classes/week', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' },
              { name: 'Mind & Body', count: '10+ classes/week', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
              { name: 'Combat', count: '8+ classes/week', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80' },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold">{category.name}</h3>
                  <p className="text-red-500">{category.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">Easy Booking</span>
              <h2 className="section-title mt-2 mb-6">
                How to <span className="text-gradient">Book a Class</span>
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Choose Your Class', desc: 'Browse our schedule and pick a class that fits your goals and schedule.' },
                  { step: '2', title: 'Book Your Spot', desc: 'Reserve your place up to 7 days in advance through our app or website.' },
                  { step: '3', title: 'Show Up & Sweat', desc: 'Arrive 10 minutes early, check in, and give it your all!' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
                Download Our App <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80"
                alt="Booking"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6">
                <p className="text-4xl font-display font-bold text-red-500">50+</p>
                <p className="text-gray-400">Weekly Classes</p>
              </div>
            </motion.div>
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
            First Class Free for New Members!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Try any class for free and experience the IRONFORGE difference. 
            No commitment required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="btn-gold">
              Claim Your Free Class
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
