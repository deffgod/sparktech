'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto md:max-w-lg md:left-auto md:right-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-blue-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  We use cookies
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze our traffic. 
                  By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={acceptCookies}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Decline
                  </Button>
                </div>
              </div>
              
              <button
                onClick={declineCookies}
                className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}