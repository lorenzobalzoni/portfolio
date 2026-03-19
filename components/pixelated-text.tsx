"use client"

import { motion } from "framer-motion"

// Complete A-Z 5x7 Pixel Dictionary
const letterPatterns: Record<string, number[][]> = {
  A: [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  B: [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
  C: [[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,1]],
  D: [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
  E: [[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
  F: [[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
  G: [[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,1,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  H: [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  I: [[0,1,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]],
  J: [[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  K: [[1,0,0,0,1],[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
  L: [[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
  M: [[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  N: [[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
  O: [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  P: [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
  Q: [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1]],
  R: [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
  S: [[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0]],
  T: [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  U: [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  V: [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],
  W: [[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,0,0,1]],
  X: [[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,0,0,0,1]],
  Y: [[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
  Z: [[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
}

interface PixelProps {
  active: boolean
  delay: number
}

function Pixel({ active, delay }: PixelProps) {
  if (!active) return <div className="w-full h-full" />

  // SLOWER: Increased duration from 1.5s to a slower 3-5 second breathing cycle
  const duration = 3 + (delay % 200) / 40; 
  const minOpacity = 0.08; // Darker minimum for higher contrast
  const maxOpacity = 0.35;

  return (
    <motion.div
      // ADDED: Slightly rounded corners (rounded-[2px]) look more like LEDs than pure squares
      className="w-full h-full bg-neutral-400 rounded-[2px] cursor-crosshair"
      // ADDED: Startup sequence - pixels fade in sequentially when scrolled into view
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: [minOpacity, maxOpacity, minOpacity],
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        opacity: {
          duration: duration, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay * 0.002 // Slowed down the initial wave delay
        },
        scale: {
          duration: 0.8,
          delay: delay * 0.001
        }
      }}
      // ADDED: Intense LED Glow effect on hover
      whileHover={{
        opacity: 1,
        backgroundColor: "#FF5500", 
        scale: 1.3,
        boxShadow: "0px 0px 12px 2px rgba(255, 85, 0, 0.6)", // Creates a neon bloom
        transition: { duration: 0.1, ease: "easeOut" }
      }}
    />
  )
}

interface PixelatedTextProps {
  text: string
  pixelSize?: number
  gap?: number
}

export function PixelatedText({ text, pixelSize = 6, gap = 3 }: PixelatedTextProps) {
  // Better parsing for spaces (treats space as an empty gap block)
  const letters = text.toUpperCase().split("")

  return (
    <div className="flex items-end justify-center" style={{ gap: pixelSize * 3 }}>
      {letters.map((letter, letterIndex) => {
        // Handle spaces by rendering an empty block
        if (letter === " ") {
          return <div key={`space-${letterIndex}`} style={{ width: pixelSize * 3 }} />
        }

        const pattern = letterPatterns[letter]
        // Fallback for unknown characters
        if (!pattern) return null 

        return (
          <div
            key={`${letter}-${letterIndex}`}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${pattern[0].length}, ${pixelSize}px)`,
              gridTemplateRows: `repeat(${pattern.length}, ${pixelSize}px)`,
              gap: `${gap}px`,
            }}
          >
            {pattern.flat().map((isActive, pixelIndex) => (
              <Pixel
                key={`${letterIndex}-${pixelIndex}`}
                active={isActive === 1}
                // Creates a diagonal wave effect across the word
                delay={letterIndex * 200 + pixelIndex * 50} 
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}