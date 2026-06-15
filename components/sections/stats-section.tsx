'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { label: 'Destinations', value: 150, suffix: '+' },
  { label: 'Happy Travelers', value: 50000, suffix: '+' },
  { label: 'Experiences', value: 1000, suffix: '+' },
  { label: 'Years of Excellence', value: 15, suffix: '' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return

    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our impact on global travel experiences
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="group relative p-8 glass hover:glass-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
                <div className="text-4xl md:text-5xl font-display font-bold text-neon-cyan">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
