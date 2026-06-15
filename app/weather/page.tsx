'use client'

import React, { useState } from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import PageHeader from '@/components/sections/page-header'
import WeatherSection from '@/components/sections/weather-section'
import TextReveal from '@/components/animations/text-reveal'
import TimelineSection from '@/components/sections/timeline-section'
import { motion } from 'framer-motion'

const currentWeather = [
  {
    location: 'Paris',
    temperature: 22,
    condition: 'sunny' as const,
    humidity: 65,
    windSpeed: 12,
  },
  {
    location: 'Tokyo',
    temperature: 28,
    condition: 'cloudy' as const,
    humidity: 75,
    windSpeed: 18,
  },
  {
    location: 'Bali',
    temperature: 31,
    condition: 'sunny' as const,
    humidity: 80,
    windSpeed: 15,
  },
  {
    location: 'Santorini',
    temperature: 25,
    condition: 'sunny' as const,
    humidity: 60,
    windSpeed: 20,
  },
  {
    location: 'Dubai',
    temperature: 38,
    condition: 'sunny' as const,
    humidity: 35,
    windSpeed: 8,
  },
  {
    location: 'New York',
    temperature: 20,
    condition: 'rainy' as const,
    humidity: 70,
    windSpeed: 14,
  },
]

const seasonalTimeline = [
  {
    id: '1',
    date: 'January - March',
    title: 'Winter / Early Spring',
    description:
      'Perfect for visiting Japan, New Zealand, and the Southern Hemisphere. Enjoy skiing in the Alps and Aurora viewing in Norway.',
      image :'https://plus.unsplash.com/premium_photo-1668049959223-0883bbd46b42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 },
  {
    id: '2',
    date: 'April - June',
    title: 'Spring / Early Summer',
    description:
      'Ideal for Europe and Mediterranean destinations. Cherry blossoms in Japan, tulips in Holland, and pleasant weather everywhere.',
      image:'https://plus.unsplash.com/premium_photo-1682091907070-4985a6fbe6d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    date: 'July - September',
    title: 'Summer',
    description:
      'Best for beach destinations, Iceland, and Scandinavia. Warm weather and long days make for perfect exploration.',
      image:'https://images.unsplash.com/photo-1501871732394-eccc65227089?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    date: 'October - December',
    title: 'Fall / Winter',
    description:
      'Experience autumn foliage, festive markets, and tropical destinations. Perfect time to visit Southeast Asia and the Caribbean.',
      image:'https://images.unsplash.com/photo-1763276764253-65ce9c1fbecd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function WeatherPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHeader
        title="Weather & Seasons"
        subtitle="Plan your trip based on climate and seasonal conditions at your chosen destination. Discover the best times to visit year-round."
      />

      {/* Current Weather */}
      <WeatherSection
        title="Current Conditions"
        weatherData={currentWeather}
      />

      {/* Seasonal Guide */}
      <TimelineSection
        title="Best Time to Visit by Season"
        events={seasonalTimeline}
      />

      {/* Tips Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              Packing Tips
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Check weather forecasts 2 weeks before departure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Pack layers for unpredictable weather changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Bring sunscreen and sunglasses for tropical destinations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Include rain gear for monsoon seasons</span>
              </li>
            </ul>
          </div>

          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              Climate Categories
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Tropical: Warm year-round with rainy seasons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Temperate: Mild seasons ideal for sightseeing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Desert: Hot days and cool nights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Alpine: Cold winters, cool summers, variable weather</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
