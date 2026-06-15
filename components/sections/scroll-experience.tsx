'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextReveal from '@/components/animations/text-reveal'

gsap.registerPlugin(ScrollTrigger)

interface ScrollExperienceProps {
  title: string
  items: {
    id: string
    title: string
    description: string
    image?: string
  }[]
}

export default function ScrollExperience({

  title,
  items,
}: ScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="space-y-16">
        {/* Title */}
        <div className="text-center">
          <TextReveal
            text={title}
            className="text-4xl md:text-5xl font-serif font-bold text-gradient"
          />
        </div>

        {/* Items */}
        <div className="space-y-12">
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el
              }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div
                className={`order-2 md:order-${index % 2 === 0 ? '2' : '1'}`}
              >
                <div className="aspect-square rounded-xl glass overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <svg
                      className="w-32 h-32 text-white/10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
              </div>


              {/* Text content */}
              <div className={`order-1 md:order-${index % 2 === 0 ? '1' : '2'} space-y-4`}>
                <h3 className="text-3xl font-serif font-bold text-gradient">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
