"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Define the pixel patterns for each letter
const letterPatterns: Record<string, number[][]> = {
  F: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  R: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
}

interface PixelProps {
  active: boolean
  delay: number
}

function Pixel({ active, delay }: PixelProps) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (!active) return

    const animate = () => {
      const baseOpacity = 0.15 + Math.random() * 0.25
      setOpacity(baseOpacity)
    }

    // Initial delay
    const initialTimeout = setTimeout(() => {
      animate()
      // Continuous animation
      const interval = setInterval(() => {
        animate()
      }, 800 + Math.random() * 1200)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(initialTimeout)
  }, [active, delay])

  if (!active) return <div className="w-full h-full" />

  return (
    <motion.div
      className="w-full h-full bg-white rounded-[1px]"
      animate={{ opacity }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  )
}

interface PixelatedTextProps {
  text: string
  pixelSize?: number
  gap?: number
}

export function PixelatedText({ text, pixelSize = 8, gap = 2 }: PixelatedTextProps) {
  const letters = text.toUpperCase().split("")

  return (
    <div className="flex items-end justify-center" style={{ gap: pixelSize * 2 }}>
      {letters.map((letter, letterIndex) => {
        const pattern = letterPatterns[letter]
        if (!pattern) return null

        return (
          <div
            key={letterIndex}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${pattern[0].length}, ${pixelSize}px)`,
              gridTemplateRows: `repeat(${pattern.length}, ${pixelSize}px)`,
              gap: `${gap}px`,
            }}
          >
            {pattern.flat().map((isActive, pixelIndex) => (
              <Pixel
                key={pixelIndex}
                active={isActive === 1}
                delay={letterIndex * 100 + pixelIndex * 20}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}
