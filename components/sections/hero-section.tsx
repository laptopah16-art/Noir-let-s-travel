'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TextReveal from '@/components/animations/text-reveal'
import MagneticButton from '@/components/ui/magnetic-button'
import { fadeInUpVariants } from '@/lib/animations'

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  cta?: {
    text: string
    onClick: () => void
  }
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  cta,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className="space-y-6"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <div>
            <TextReveal
              text={title}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 text-balance"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl text-white/80 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          {cta && (
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagneticButton
                onClick={cta.onClick}
                className="text-lg"
              >
                {cta.text}
              </MagneticButton>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
