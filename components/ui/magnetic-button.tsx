'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { createMagneticButton } from '@/lib/animations'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'neon'
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const cleanup = createMagneticButton(buttonRef.current)
    return cleanup
  }, [])

  const variants = {
    primary: 'bg-foreground text-background hover:bg-foreground/90',
    secondary: 'bg-secondary text-foreground hover:bg-secondary/80 border border-border',
    outline: 'border border-foreground/30 text-foreground hover:border-foreground/80 hover:bg-white/5',
    neon: 'bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 glow-cyan',
  }

  return (
    <motion.div
      ref={buttonRef}
      className={`inline-block relative ${variants[variant]} px-8 py-3 rounded-sm font-medium text-sm transition-all cursor-pointer overflow-hidden group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect background */}
      {isHovered && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
          style={{ backgroundSize: '1000px 100%' }}
        />
      )}

      {/* Text with relative positioning */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  )
}
