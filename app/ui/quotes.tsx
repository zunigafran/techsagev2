'use client'

import { useState, useEffect } from 'react'
import { quotes } from "@/lib/quotes"

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(100)

  // Auto-advance quotes every 7.5 seconds with fade effect
  useEffect(() => {
    if (quotes.length <= 1) return

    const interval = setInterval(() => {
      // Fade out
      setOpacity(0)
      
      // After fade out, change quote and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
        setOpacity(100)
      }, 125) // Half of transition duration
    }, 7500)

    return () => clearInterval(interval)
  }, [])

  const currentQuote = quotes[currentIndex]

  return (
    <div 
      className="transition-opacity duration-500 h-full pt-4" 
      style={{ opacity: opacity / 100 }}
    >
      <p className="text-2xl italic pb-4">&rdquo;{currentQuote.quote}&rdquo;</p>
      <p className="text-2xl">{currentQuote.author}</p>
    </div>
  )
}

export default Quotes