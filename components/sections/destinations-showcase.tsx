'use client'

import React from 'react'
import { motion } from 'framer-motion'
import DestinationCard from '@/components/ui/destination-card'
import TextReveal from '@/components/animations/text-reveal'
import { staggerContainerVariants } from '@/lib/animations'

interface Destination {
  id: string
  image: string
  title: string
  location: string
  description: string
  rating: number
}

interface DestinationsShowcaseProps {
  title: string
  destinations: Destination[]
  onDestinationClick?: (destination: Destination) => void
}

export default function DestinationsShowcase({
  title,
  destinations,
  onDestinationClick,
}: DestinationsShowcaseProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <TextReveal
            text={title}
            className="text-4xl md:text-5xl font-serif font-bold text-gradient"
          />
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover our curated selection of the world&apos;s most enchanting destinations
          </motion.p>
        </div>

        {/* Destinations Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <DestinationCard
                image={destination.image}
                title={destination.title}
                location={destination.location}
                description={destination.description}
                rating={destination.rating}
                onClick={() => onDestinationClick?.(destination)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
