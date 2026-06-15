'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { hoverLiftVariants } from '@/lib/animations'

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function GlassmorphismCard({
  children,
  className = '',
  onClick,
  href,
}: GlassmorphismCardProps) {
  const content = (
    <motion.div
      className={`glass p-6 rounded-xl cursor-pointer group ${className}`}
      variants={hoverLiftVariants}
      initial="rest"
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}
