'use client'

import React from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import HeroCinema from '@/components/sections/hero-cinema'
import MarqueeSection from '@/components/sections/marquee-section'
import StatsSection from '@/components/sections/stats-section'
import DestinationsShowcase from '@/components/sections/destinations-showcase'
import ScrollExperience from '@/components/sections/scroll-experience'
import TestimonialsSection from '@/components/sections/testimonials-section'
import FAQSection from '@/components/sections/faq-section'
import CursorFollower from '@/components/animations/cursor-follower'
import LoadingScreen from '@/components/animations/loading-screen'

const featuredDestinations = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop',
    title: 'Paris',
    location: 'France',
    description: 'Experience the city of light with iconic landmarks and world-class cuisine.',
    rating: 4.9,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=600&fit=crop',
    title: 'Tokyo',
    location: 'Japan',
    description: 'Discover the perfect blend of ancient traditions and cutting-edge modernity.',
    rating: 4.8,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    title: 'Bali',
    location: 'Indonesia',
    description: 'Immerse yourself in tropical paradise with pristine beaches and lush temples.',
    rating: 4.7,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
    title: 'Santorini',
    location: 'Greece',
    description: 'Witness breathtaking sunsets and whitewashed architecture on the Aegean Sea.',
    rating: 4.9,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
    title: 'New York',
    location: 'USA',
    description: 'The city that never sleeps offers endless entertainment and iconic skylines.',
    rating: 4.6,
  },
  {
    id: '6',
    image: 'https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Dubai',
    location: 'UAE',
    description: 'Experience luxury and innovation in the heart of the desert.',
    rating: 4.8,
  },
]

const scrollItems = [
  {
    id: '1',
    title: 'Curated Experiences',
    description:
      'Each destination is carefully selected and curated by our team of travel experts. We ensure every experience meets our high standards for quality, authenticity, and unforgettable memories.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: '2',
    title: 'Seamless Planning',
    description:
      'Our intelligent travel planner takes the stress out of organizing your trip. From flights to accommodations, we handle all the details while you focus on the adventure ahead.',
    image:
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Local Insights',
    description:
      'Connect with local guides who share authentic stories and hidden gems. Experience destinations through the eyes of those who know them best.',
    image:
      'https://images.unsplash.com/photo-1771780601318-8cfc9219276d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Adventure Traveler',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content:
      'NOIR TRAVEL transformed my travel experience. Every detail was perfect, from accommodations to guided tours. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content:
      'Efficient, luxurious, and hassle-free. NOIR TRAVEL handles all my business travel needs with sophistication and attention to detail.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Luxury Explorer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content:
      'The personalized service is exceptional. They understood my preferences and delivered experiences that exceeded all expectations.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LoadingScreen />
      <CursorFollower />
      <Navbar />

      {/* Hero Section */}
      <HeroCinema />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Destinations Showcase */}
      <section id="destinations">
        <DestinationsShowcase
          title="Featured Destinations"
          destinations={featuredDestinations}
          onDestinationClick={(dest) => {
            console.log('Clicked:', dest.title)
          }}
        />
      </section>

      {/* Scroll Experience Section */}
      <ScrollExperience
        title="Why Choose NOIR TRAVEL"
        items={scrollItems}
      />

      {/* Testimonials */}
      <TestimonialsSection
        title="Traveler Stories"
        testimonials={testimonials}
      />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let NOIR craft your perfect travel experience. Curated, personalized, unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-medium rounded-sm hover:bg-neon-cyan/20 transition-all glow-cyan">
              <a href='/planner'>Book Your Trip</a>
            </button>
            <button className="px-8 py-4 border border-foreground/30 text-foreground font-medium rounded-sm hover:bg-white/5 transition-all">
              <a href='/contact'>Contact Us</a>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
