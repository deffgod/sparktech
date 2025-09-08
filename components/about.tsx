'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Globe2, TrendingUp } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 sky-blue-gradient rounded-3xl transform opacity-10"></div>
              <div className="relative bg-white/95 backdrop-blur-xl border border-sky-200/50 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold sky-blue-gradient bg-clip-text text-white rounded-lg p-4 mb-4">
                      SparkTech
                    </div>
                    <div className="text-gray-600 text-lg">Trading Excellence</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Founded', value: '2022' },
                    { label: 'Location', value: 'Dubai, UAE' },
                    { label: 'Markets', value: 'Global' },
                    { label: 'Partners', value: '50+' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors duration-300"
                    >
                      <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                      <div className="text-gray-600 text-sm">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              About SparkTech Trading
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted
              <span className="block sky-blue-text">Trading Partner</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Based in Dubai Silicon Oasis, SparkTech Trading FZCO is a leading international trading 
              company specializing in premium electronics, vehicles, and consumer goods. We bridge 
              markets across continents, delivering excellence in every transaction.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Globe2,
                  title: 'Global Network',
                  description: 'Extensive international partnerships spanning multiple continents and markets.'
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Experienced professionals with deep knowledge of international trade regulations.'
                },
                {
                  icon: TrendingUp,
                  title: 'Growth Focus',
                  description: 'Committed to expanding our reach and helping partners scale their businesses.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="sky-blue-gradient rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-sky-100">
                To facilitate seamless international trade by connecting quality suppliers with 
                discerning buyers, ensuring excellence, reliability, and mutual growth in every partnership.
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}