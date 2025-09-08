'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Zap, 
  Refrigerator, 
  Shirt, 
  Car, 
  Laptop,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles as SparklesIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sparkles } from '@/components/ui/sparkles'
import { GlowingStars } from '@/components/ui/glowing-stars'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Phones & Accessories',
    description: 'Latest smartphones, accessories, and mobile technology from leading brands.',
    features: ['Latest Models', 'Accessories', 'Warranty Support'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Power Generation Equipment',
    description: 'Advanced power generation, transmission, and distribution equipment.',
    features: ['Generators', 'Transmission', 'Distribution'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Refrigerator,
    title: 'Household Appliances',
    description: 'Premium refrigerators, washing machines, and electrical appliances.',
    features: ['Refrigerators', 'Washing Machines', 'Kitchen Appliances'],
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Laptop,
    title: 'Electronics & Appliances',
    description: 'Used and refurbished electrical and electronic appliances.',
    features: ['Quality Tested', 'Refurbished', 'Cost Effective'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shirt,
    title: 'Clothing & Personal Items',
    description: 'Used clothing and personal items trading for global markets.',
    features: ['Quality Garments', 'Personal Items', 'Global Export'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Car,
    title: 'Vehicle Trading',
    description: 'Used vehicles trading for export markets outside UAE.',
    features: ['Export Ready', 'Quality Inspection', 'Documentation'],
    color: 'from-red-500 to-pink-500'
  }
]

export function Services() {
  function handleGetQuote() {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 text-sm font-medium mb-6 shadow-lg">
            <SparklesIcon className="w-4 h-4 mr-2 text-sky-500 animate-pulse" />
            Our Trading Services
            <Star className="w-3 h-3 ml-2 text-sky-500" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium Trading
            <span className="block sky-blue-gradient bg-clip-text text-white rounded-lg p-4 animate-gradient">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in international trading of high-quality products across multiple 
            categories, ensuring excellence and reliability in every transaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white/95 backdrop-blur-xl border border-sky-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full group-hover:scale-105 transform">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 sky-blue-gradient rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Sparkles effect */}
                <Sparkles count={5} color="#0ea5e9" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl sky-blue-gradient mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sky-600 font-semibold group-hover:text-sky-700 transition-colors cursor-pointer">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative sky-blue-gradient rounded-3xl p-12 text-center text-white overflow-hidden"
        >
          {/* Background effects */}
          <GlowingStars count={15} size="md" />
          <Sparkles count={20} color="#fbbf24" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our expert team to discuss your trading requirements 
              and discover how we can help grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetQuote}
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-sky-600 hover:bg-white/100 backdrop-blur-md px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Catalog
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Trading Process</h3>
            <p className="text-gray-600 text-lg">Simple, transparent, and efficient</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inquiry', desc: 'Send us your requirements' },
              { step: '02', title: 'Quote', desc: 'Receive detailed proposal' },
              { step: '03', title: 'Order', desc: 'Confirm order details' },
              { step: '04', title: 'Delivery', desc: 'Secure global shipping' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2">
                    <div className="w-4 h-4 bg-blue-100 rounded-full absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}