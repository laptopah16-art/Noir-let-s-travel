'use client'

import React from 'react'
import { motion } from 'framer-motion'

const destinations = [
  'Tokyo',
  'Paris',
  'Dubai',
  'Bali',
  'Iceland',
  'Maldives',
  'New York',
  'Barcelona',
]

export default function MarqueeSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-secondary/30">
      <div className="space-y-12">
        {/* Top marquee - left to right */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...destinations, ...destinations].map((dest, i) => (
              <span
                key={i}
                className="text-5xl md:text-7xl font-display font-bold text-foreground/20 hover:text-neon-cyan transition-colors duration-300"
              >
                {dest}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom marquee - right to left */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: [-2000, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {[...destinations.reverse(), ...destinations.reverse()].map((dest, i) => (
              <span
                key={i}
                className="text-5xl md:text-7xl font-display font-bold text-foreground/20 hover:text-neon-magenta transition-colors duration-300"
              >
                {dest}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  )
}
