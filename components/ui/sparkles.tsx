'use client'

import React, { useEffect, useRef } from 'react'

interface SparklesProps {
  className?: string
  count?: number
  color?: string
}

export function Sparkles({ className = '', count = 20, color = '#fbbf24' }: SparklesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createSparkle = () => {
      const sparkle = document.createElement('div')
      sparkle.className = 'absolute pointer-events-none'
      sparkle.style.cssText = `
        width: 4px;
        height: 4px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 6px ${color};
        animation: sparkle 2s ease-in-out infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 2}s;
      `
      container.appendChild(sparkle)

      // Remove sparkle after animation
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle)
        }
      }, 2000)
    }

    const interval = setInterval(createSparkle, 200)

    return () => {
      clearInterval(interval)
    }
  }, [color])

  return (
    <>
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`} />
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
      `}</style>
    </>
  )
}
