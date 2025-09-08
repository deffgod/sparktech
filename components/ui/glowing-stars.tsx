'use client'

import React, { useEffect, useRef } from 'react'

interface GlowingStarsProps {
  className?: string
  count?: number
  size?: 'sm' | 'md' | 'lg'
}

export function GlowingStars({ className = '', count = 15, size = 'md' }: GlowingStarsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createStar = () => {
      const star = document.createElement('div')
      star.className = `absolute ${sizeClasses[size]} bg-white rounded-full opacity-0`
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4);
        animation: starGlow 3s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
      `
      container.appendChild(star)

      // Remove star after animation
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      }, 3000)
    }

    // Create initial stars
    for (let i = 0; i < count; i++) {
      setTimeout(createStar, i * 200)
    }

    const interval = setInterval(() => {
      createStar()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count, size, sizeClasses])

  return (
    <>
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
      <style jsx>{`
        @keyframes starGlow {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}
