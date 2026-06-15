'use client'

import React, { useState } from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import DestinationCard from '@/components/ui/destination-card'
import TextReveal from '@/components/animations/text-reveal'
import { motion } from 'framer-motion'

const allDestinations = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop',
    title: 'Paris',
    location: 'France',
    description: 'The Eiffel Tower, the Louvre, and world-class cuisine await.',
    rating: 4.9,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=600&fit=crop',
    title: 'Tokyo',
    location: 'Japan',
    description: 'Neon lights, ancient temples, and culinary excellence.',
    rating: 4.8,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    title: 'Bali',
    location: 'Indonesia',
    description: 'Pristine beaches, lush rice terraces, and spiritual retreats.',
    rating: 4.7,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
    title: 'Santorini',
    location: 'Greece',
    description: 'Whitewashed buildings and stunning Aegean Sea views.',
    rating: 4.9,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
    title: 'New York',
    location: 'USA',
    description: 'Broadway, Central Park, and iconic skyscrapers.',
    rating: 4.6,
  },
  {
    id: '6',
    image: 'https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Dubai',
    location: 'UAE',
    description: 'Luxury shopping, desert safaris, and modern architecture.',
    rating: 4.8,
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop',
    title: 'Barcelona',
    location: 'Spain',
    description: 'Gaudí masterpieces and vibrant Mediterranean culture.',
    rating: 4.7,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop',
    title: 'Rome',
    location: 'Italy',
    description: 'Ancient ruins, Renaissance art, and timeless romance.',
    rating: 4.9,
  },
]

export default function DestinationsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const countries = ['all', ...new Set(allDestinations.map((d) => d.location))]

  const filteredDestinations =
    selectedFilter === 'all'
      ? allDestinations
      : allDestinations.filter((d) => d.location === selectedFilter)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <TextReveal
          text="All Destinations"
          className="text-6xl md:text-7xl font-display font-bold text-foreground text-balance"
        />
        <motion.p
          className="text-lg text-muted-foreground mt-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore our complete collection of 150+ curated travel destinations. From hidden gems to iconic landmarks, find your next adventure.
        </motion.p>
      </section>

      {/* Filter */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {countries.map((country) => (
            <motion.button
              key={country}
              onClick={() => setSelectedFilter(country)}
              className={`px-6 py-2 rounded-sm font-medium text-sm transition-all ${
                selectedFilter === country
                  ? 'bg-neon-cyan/10 border border-neon-cyan text-neon-cyan'
                  : 'glass text-foreground hover:border-neon-cyan/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {country === 'all' ? 'All Destinations' : country}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <DestinationCard
                image={destination.image}
                title={destination.title}
                location={destination.location}
                description={destination.description}
                rating={destination.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
