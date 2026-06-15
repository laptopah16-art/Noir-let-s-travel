'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { loaderVariants, loaderDotVariants } from '@/lib/animations'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Particle background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-neon-cyan"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 relative z-10">
        <motion.div
          className="text-6xl font-display text-neon-cyan font-bold tracking-wider animate-neon-flicker"
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              '0 0 10px rgba(0, 255, 255, 0.6)',
              '0 0 20px rgba(0, 255, 255, 0.8)',
              '0 0 10px rgba(0, 255, 255, 0.6)',
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          NOIR TRAVEL
        </motion.div>

        <motion.div
          className="flex gap-3"
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-neon-cyan rounded-full glow-cyan"
              variants={loaderDotVariants}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-muted-foreground tracking-widest uppercase"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  )
}
