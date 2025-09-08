'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, Sparkles as SparklesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  function handleNavClick(href: string) {
    setIsMenuOpen(false)
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200' 
            : 'bg-sky-600'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 sky-blue-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <SparklesIcon className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <div className="absolute inset-0 sky-blue-gradient rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <span className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  SparkTech
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="ml-4 sky-blue-bg hover:bg-sky-600 text-white border border-sky-500/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 backdrop-blur-md border ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-gray-100 border-gray-200 bg-white/80' 
                    : 'text-white hover:bg-white/10 border-white/20 bg-white/10'
                }`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-6 space-y-1">
                {navigation.map((item) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigation.indexOf(item) * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <Button 
                    onClick={() => handleNavClick('#contact')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 space-y-3 border-t border-gray-200"
                >
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">spartech77@gmail.com</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <MapPin className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span className="text-sm">Dubai Silicon Oasis, UAE</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}