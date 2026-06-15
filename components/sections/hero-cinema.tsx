'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/magnetic-button'
import TextReveal from '@/components/animations/text-reveal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroCinema() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Parallax effect on scroll
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -100,
    })
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background with gradient and dynamic elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Video/Image background layer */}
      <div
        ref={videoRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 z-10">
        {/* Top accent line */}
        <motion.div
          className="absolute top-24 w-64 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Main headline */}
        <motion.div
          className="text-center space-y-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Tagline */}
          <motion.p
            className="text-neon-cyan text-xs uppercase tracking-widest font-display"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Elevate Your Journey
          </motion.p>

          {/* Main heading with text reveal */}
          <TextReveal
            text="Discover Destinations"
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-tighter"
          />

          {/* Subheading */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Curated luxury experiences beyond imagination. Travel differently with NOIR.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton variant="neon">
           <a href="/explore">Explore Now</a>
          </MagneticButton>
          <MagneticButton variant="outline">
           <a href='/about'>About Us</a>
          </MagneticButton>
        </motion.div>

    

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</p>
          <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Floating elements */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background: i === 0 ? 'radial-gradient(circle, var(--neon-cyan), transparent)' : 'radial-gradient(circle, var(--neon-magenta), transparent)',
            left: `${10 + i * 30}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </section>
  )
}
