'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'

interface DestinationCardProps {
  image: string
  title: string
  location: string
  description: string
  rating?: number
  onClick?: () => void
}

export default function DestinationCard({
  image,
  title,
  location,
  description,
  rating = 4.8,
  onClick,
}: DestinationCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative cursor-pointer rounded-xl overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          animate={{ opacity: isHovered ? 0.8 : 0.5 }}
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
          className="absolute top-4 right-4 z-10 glass p-2 rounded-full"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isFavorite
                ? 'fill-accent text-accent'
                : 'text-white'
            }`}
          />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-white/90 mb-3">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="text-sm text-white/80 line-clamp-2 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-sm text-accent font-semibold">{rating}</span>
              <span className="text-xs text-white/60">★★★★★</span>
            </div>
            <motion.button
              className="px-4 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
