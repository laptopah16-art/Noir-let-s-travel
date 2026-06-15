'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const glow = glowRef.current

    if (!cursor || !glow) return

    let mouseX = 0
    let mouseY = 0

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        overwrite: 'auto',
      })

      gsap.to(glow, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        overwrite: 'auto',
      })
    })

    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  }, [])

  return (
    <>
      {/* Core cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 border-2 border-neon-cyan rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 glow-cyan"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Inner glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-10 h-10 bg-neon-cyan/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2 z-45"
        ref={glowRef}
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Outer glow halo */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-32 h-32 bg-gradient-to-r from-neon-cyan/10 via-neon-magenta/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-40"
        ref={glowRef}
        style={{ mixBlendMode: 'screen' }}
      />
    </>
  )
}
