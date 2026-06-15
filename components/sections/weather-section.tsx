'use client'

import React from 'react'
import { motion } from 'framer-motion'
import WeatherCard from '@/components/ui/weather-card'
import TextReveal from '@/components/animations/text-reveal'
import { staggerContainerVariants } from '@/lib/animations'

interface WeatherData {
  location: string
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy'
  humidity: number
  windSpeed: number
}

interface WeatherSectionProps {
  title: string
  weatherData: WeatherData[]
}

export default function WeatherSection({
  title,
  weatherData,
}: WeatherSectionProps) {
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
            Check weather conditions at your dream destinations
          </motion.p>
        </div>

        {/* Weather Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {weatherData.map((weather, index) => (
            <motion.div
              key={weather.location}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <WeatherCard
                location={weather.location}
                temperature={weather.temperature}
                condition={weather.condition}
                humidity={weather.humidity}
                windSpeed={weather.windSpeed}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
