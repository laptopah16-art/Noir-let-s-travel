'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TextReveal from '@/components/animations/text-reveal'

interface PageHeaderProps {
  title: string
  subtitle?: string
  accentLine?: boolean
}

export default function PageHeader({ title, subtitle, accentLine = true }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute -inset-96 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 blur-3xl -z-10" />

      {/* Accent line */}
      {accentLine && (
        <motion.div
          className="absolute left-6 top-20 w-64 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      <div className="space-y-6">
        {/* Main title */}
        <TextReveal
          text={title}
          className="text-6xl md:text-7xl font-display font-bold text-foreground text-balance"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
