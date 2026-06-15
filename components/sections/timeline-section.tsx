'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TextReveal from '@/components/animations/text-reveal'

interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  image?: string
}


interface TimelineSectionProps {
  title: string
  events: TimelineEvent[]
}

export default function TimelineSection({
  title,
  events,
}: TimelineSectionProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Title */}
        <div className="text-center">
          <TextReveal
            text={title}
            className="text-4xl md:text-5xl font-serif font-bold text-gradient"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/0 transform md:-translate-x-1/2" />

          {/* Timeline events */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`pl-12 md:pl-0 relative ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-auto md:w-1/2 md:pr-8' : 'md:ml-auto md:mr-0 md:w-1/2 md:pl-8'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full transform -translate-x-1.5 md:-translate-x-1/2 border-4 border-background" />

                {/* Content */}
                <div className="glass rounded-xl p-6">
                  {event.image && (
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="text-sm text-accent font-semibold mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gradient mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
