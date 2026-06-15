'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TextReveal from '@/components/animations/text-reveal'
import { staggerContainerVariants } from '@/lib/animations'

interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  content: string
  rating: number
}

interface TestimonialsSectionProps {
  title: string
  testimonials: Testimonial[]
}

export default function TestimonialsSection({
  title,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Title */}
        <div className="text-center">
          <TextReveal
            text={title}
            className="text-4xl md:text-5xl font-serif font-bold text-gradient"
          />
          <motion.p
            className="text-muted-foreground text-lg mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            What our travelers say about their experiences
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="glass rounded-xl p-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < testimonial.rating ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 italic">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
