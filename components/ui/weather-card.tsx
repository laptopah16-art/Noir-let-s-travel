'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react'

interface WeatherCardProps {
  location: string
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy'
  humidity: number
  windSpeed: number
}

export default function WeatherCard({
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
}: WeatherCardProps) {
  const getWeatherIcon = () => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-12 h-12 text-accent" />
      case 'cloudy':
        return <Cloud className="w-12 h-12 text-muted-foreground" />
      case 'rainy':
        return <CloudRain className="w-12 h-12 text-blue-400" />
      default:
        return <Sun className="w-12 h-12 text-accent" />
    }
  }

  return (
    <motion.div
      className="glass rounded-xl p-6 min-w-[280px]"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{location}</h3>
          {getWeatherIcon()}
        </div>

        {/* Temperature */}
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-accent">{temperature}</span>
          <span className="text-xl text-muted-foreground">°C</span>
        </div>

        {/* Condition */}
        <p className="text-sm text-muted-foreground capitalize">{condition}</p>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-400" />
            <div>
              <p className="text-xs text-muted-foreground">Humidity</p>
              <p className="text-sm font-semibold text-foreground">
                {humidity}%
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Wind</p>
              <p className="text-sm font-semibold text-foreground">
                {windSpeed} km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
