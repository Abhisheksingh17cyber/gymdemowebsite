'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheck, FaTimes, FaStar, FaCrown, FaArrowRight, FaPercent } from 'react-icons/fa'

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      { text: 'Access to gym floor', included: true },
      { text: 'Standard equipment', included: true },
      { text: 'Locker room access', included: true },
      { text: 'Free WiFi', included: true },
      { text: 'Group classes', included: false },
      { text: 'Personal training', included: false },
      { text: 'Pool & sauna', included: false },
      { text: 'Nutrition consultation', included: false },
    ],
    popular: false,
    color: 'border-gray-700',
  },
  {
    id: 2,
    name: 'Pro',
    price: 59,
    period: 'month',
    description: 'Most popular choice for serious fitness enthusiasts',
    features: [
      { text: 'Access to gym floor', included: true },
      { text: 'Premium equipment', included: true },
      { text: 'Locker room & towels', included: true },
      { text: 'Free WiFi', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: '2 PT sessions/month', included: true },
      { text: 'Pool & sauna', included: true },
      { text: 'Nutrition consultation', included: false },
    ],
    popular: true,
    color: 'border-red-600',
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    period: 'month',
    description: 'The ultimate fitness experience with all benefits',
    features: [
      { text: '24/7 gym access', included: true },
      { text: 'All premium equipment', included: true },
      { text: 'Private locker', included: true },
      { text: 'Free WiFi & charging', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: '4 PT sessions/month', included: true },
      { text: 'Pool, sauna & steam', included: true },
      { text: 'Monthly nutrition plan', included: true },
    ],
    popular: false,
    color: 'border-yellow-500',
  },
]

const annualDiscount = 20 // 20% off for annual

const addons = [
  { name: 'Personal Training (1 session)', price: 75 },
  { name: 'Personal Training (5 pack)', price: 325 },
  { name: 'Personal Training (10 pack)', price: 600 },
  { name: 'Nutrition Consultation', price: 100 },
  { name: 'InBody Assessment', price: 50 },
  { name: 'Private Locker Rental', price: 25 },
]

const faqs = [
  { q: 'Can I cancel my membership anytime?', a: 'Yes, you can cancel your membership at any time. For monthly plans, cancellation takes effect at the end of your billing cycle. Annual plans can be cancelled with a prorated refund.' },
  { q: 'Is there a joining fee?', a: 'No joining fees! We believe in transparent pricing. The price you see is the price you pay.' },
  { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.' },
  { q: 'Do you offer student/senior discounts?', a: 'Yes! Students and seniors (65+) receive 15% off all membership plans with valid ID.' },
  { q: 'Can I bring a guest?', a: 'Pro members can bring 1 guest per visit. Elite members enjoy unlimited guest passes.' },
  { q: 'What are the gym hours?', a: 'Standard hours: Mon-Fri 5am-11pm, Sat 6am-10pm, Sun 7am-8pm. Elite members have 24/7 access.' },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const calculatePrice = (basePrice: number) => {
    if (billingPeriod === 'annual') {
      return Math.round(basePrice * (1 - annualDiscount / 100))
    }
    return basePrice
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Pricing Hero"
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
              Membership Plans
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6"
            >
              Choose Your <span className="text-red-500">Perfect Plan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Flexible membership options designed to fit your lifestyle and goals. 
              No hidden fees, no contracts, just results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 flex gap-2">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingPeriod === 'monthly' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  billingPeriod === 'annual' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save {annualDiscount}%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative glass-card p-8 border-2 ${plan.color} ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <FaStar /> Most Popular
                    </span>
                  </div>
                )}

                {plan.name === 'Elite' && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <FaCrown /> Premium
                    </span>
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-display font-bold text-white">
                      ${calculatePrice(plan.price)}
                    </span>
                    <span className="text-gray-400 mb-2">/{plan.period}</span>
                  </div>
                  {billingPeriod === 'annual' && (
                    <p className="text-green-500 text-sm mt-2">
                      <FaPercent className="inline mr-1" />
                      You save ${plan.price * 12 - calculatePrice(plan.price) * 12}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <FaCheck className="text-green-500 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-gray-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-4 rounded-lg font-bold uppercase tracking-wider transition-all ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : plan.name === 'Elite'
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Enhance Your Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Premium <span className="text-gradient">Add-ons</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex justify-between items-center"
              >
                <span className="text-gray-300">{addon.name}</span>
                <span className="text-red-500 font-bold">${addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Compare Plans
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Find Your <span className="text-gradient">Perfect Fit</span>
            </motion.h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Basic</th>
                  <th className="text-center py-4 px-4 bg-red-900/20">Pro</th>
                  <th className="text-center py-4 px-4">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Gym Access Hours', basic: '5am-11pm', pro: '5am-11pm', elite: '24/7' },
                  { feature: 'Group Classes', basic: '—', pro: 'Unlimited', elite: 'Unlimited' },
                  { feature: 'Personal Training', basic: '—', pro: '2/month', elite: '4/month' },
                  { feature: 'Pool Access', basic: '—', pro: '✓', elite: '✓' },
                  { feature: 'Sauna & Steam', basic: '—', pro: '✓', elite: '✓' },
                  { feature: 'Nutrition Plan', basic: '—', pro: '—', elite: 'Monthly' },
                  { feature: 'Guest Passes', basic: '—', pro: '1/visit', elite: 'Unlimited' },
                  { feature: 'Towel Service', basic: '—', pro: '✓', elite: '✓' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{row.basic}</td>
                    <td className="py-4 px-4 text-center bg-red-900/10">{row.pro}</td>
                    <td className="py-4 px-4 text-center text-yellow-500">{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Got Questions?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title mt-2"
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className={`text-red-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                )}
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
            Start Your Free Trial Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Try IRONFORGE free for 7 days. No credit card required. 
            Experience the difference and see why we're the #1 gym in the city.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Start Free Trial <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
