'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Github } from 'lucide-react'


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Explore', href: '/explore' },
  { name: 'Planner', href: '/planner' },
  { name: 'Weather', href: '/weather' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-40 glass-sm border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-display font-bold text-neon-cyan hover:text-neon-cyan/80 transition-colors"
        >
          NOIR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-neon-cyan transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/laptopah16-art"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-sm border border-border/40 text-foreground/70 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/planner"
            className="px-6 py-2 border border-neon-cyan/50 text-neon-cyan text-sm font-medium rounded-sm hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all glow-cyan"
          >
            Book Now
          </Link>
        </motion.div>



        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-3 bg-card/50 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-sm text-foreground/80 hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://github.com/laptopah16-art"
            target="_blank"
            rel="noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-2 border border-border/40 text-sm font-medium rounded-lg hover:border-neon-cyan/50 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <motion.div
            className="w-full mt-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/planner"
              className="px-6 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity block text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>


        </div>
      </motion.div>
    </nav>
  )
}