'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Github } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Developer */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-gradient mb-4">
              Developer Details
            </h3>
            <p className="text-sm text-muted-foreground">
              Reach out for collaborations, internships, or full-time roles.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                anand.code.16@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                +91 7841996463
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                Solapur, Maharashtra, India
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/laptopah16-art"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">What I Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Frontend: React.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js, REST APIs</li>
              <li>Stack: MERN + MongoDB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/laptopah16-art"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="mailto:anand.code.16@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="/planner"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Planner"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NOIR TRAVEL. Built by Anand Mallinath Helave.
          </p>
        </div>
      </div>
    </footer>
  )
}