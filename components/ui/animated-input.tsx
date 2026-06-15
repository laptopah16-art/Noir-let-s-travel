'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  className?: string
}

export default function AnimatedInput({
  placeholder = 'Enter text...',
  value,
  onChange,
  type = 'text',
  className = '',
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="relative"
      animate={{
        borderColor: isFocused ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)',
      }}
      transition={{ duration: 0.2 }}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 bg-input border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${className}`}
      />
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          borderRadius: '0.5rem',
        }}
        animate={{
          boxShadow: isFocused
            ? '0 0 20px rgba(255, 215, 0, 0.2)'
            : '0 0 0px rgba(255, 215, 0, 0)',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
