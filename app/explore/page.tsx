'use client'

import React from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import PageHeader from '@/components/sections/page-header'
import InteractiveMap from '@/components/sections/interactive-map'
import ScrollExperience from '@/components/sections/scroll-experience'

const mapLocations = [
  {
    id: '1',
    name: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    description: 'The city of light with iconic landmarks and museums',
  },
  {
    id: '2',
    name: 'Tokyo',
    lat: 35.6762,
    lng: 139.6503,
    description: 'A vibrant metropolis blending tradition and modernity',
  },
  {
    id: '3',
    name: 'Bali',
    lat: -8.6705,
    lng: 115.2126,
    description: 'Tropical paradise with beaches and spiritual heritage',
  },
  {
    id: '4',
    name: 'New York',
    lat: 40.7128,
    lng: -74.006,
    description: 'The city that never sleeps with endless entertainment',
  },
  {
    id: '5',
    name: 'Dubai',
    lat: 25.2048,
    lng: 55.2708,
    description: 'Luxury and innovation in the desert',
  },
]

const experiences = [
  {
    id: '1',
    title: 'Cultural Immersion',
    description:
      'Dive deep into local cultures with guided tours led by experts. Learn traditional crafts, sample authentic cuisine, and connect with local communities in meaningful ways.',
       image:'https://plus.unsplash.com/premium_photo-1664476057303-d54cfb044541?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Adventure Activities',
    description:
      'From mountain climbing to scuba diving, we offer thrilling adventures for every comfort level. Safety and expert guidance are always our top priorities.',
      image:'https://plus.unsplash.com/premium_photo-1663047386229-637af57cecfe?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  {
    id: '3',
    title: 'Wellness Retreats',
    description:
      'Rejuvenate mind, body, and soul with curated wellness experiences. Yoga sessions, spa treatments, and meditation in the world\'s most serene locations.',
      image:'https://images.unsplash.com/photo-1644612105654-b6b0a941ecde?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHeader
        title="Explore the World"
        subtitle="Discover 150+ destinations with interactive maps, real-time weather, and curated experiences tailored to your interests."
      />

      <InteractiveMap
        title="Explore Global Destinations"
        locations={mapLocations}
      />

      <ScrollExperience
        title="Types of Experiences"
        items={experiences}
      />

      <Footer />
    </main>
  )
}
