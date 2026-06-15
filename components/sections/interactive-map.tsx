'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GlassmorphismCard from '@/components/ui/glassmorphism-card'
import TextReveal from '@/components/animations/text-reveal'

interface MapLocation {
  id: string
  name: string
  lat: number
  lng: number
  description: string
}

interface InteractiveMapProps {
  title: string
  locations: MapLocation[]
}

export default function InteractiveMap({
  title,
  locations,
}: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(
    locations[0] || null
  )

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Title */}
        <div className="text-center">
          <TextReveal
            text={title}
            className="text-4xl md:text-5xl font-serif font-bold text-gradient"
          />
        </div>

        {/* Map Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="md:col-span-2 rounded-xl overflow-hidden">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center glass">
              <svg
                className="w-full h-full text-white/10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.5}
                  d="M9 20l3 -9m4 0l3 9M7 4l10 0"
                />
              </svg>

              {/* Location Markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {locations.map((location) => (
                    <motion.button
                      key={location.id}
                      className="absolute w-8 h-8 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg hover:scale-125 transition-transform"
                      style={{
                        left: `${(location.lng + 180) / 3.6}%`,
                        top: `${(90 - location.lat) / 1.8}%`,
                      }}
                      onClick={() => setSelectedLocation(location)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          selectedLocation?.id === location.id
                            ? 'bg-white'
                            : 'bg-accent-foreground'
                        }`}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Destinations
            </h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {locations.map((location) => (
                <GlassmorphismCard
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`cursor-pointer transition-all ${
                    selectedLocation?.id === location.id
                      ? 'border-accent/50 bg-accent/10'
                      : ''
                  }`}
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      {location.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {location.description}
                    </p>
                  </div>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <motion.div
            className="glass rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-serif font-bold text-gradient mb-2">
              {selectedLocation.name}
            </h3>
            <p className="text-muted-foreground">{selectedLocation.description}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
