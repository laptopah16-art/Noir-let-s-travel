'use client'

import React, { useState } from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import PageHeader from '@/components/sections/page-header'
import TextReveal from '@/components/animations/text-reveal'
import AnimatedInput from '@/components/ui/animated-input'
import MagneticButton from '@/components/ui/magnetic-button'
import GlassmorphismCard from '@/components/ui/glassmorphism-card'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, AlertCircle } from 'lucide-react'

export default function PlannerPage() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '',
    budget: '',
    interests: [] as string[],
  })

  const interests = [
    'Adventure',
    'Culture',
    'Relaxation',
    'Food',
    'History',
    'Nature',
    'Shopping',
    'Nightlife',
  ]

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHeader
        title="Travel Planner"
        subtitle="Our AI-powered planner creates personalized itineraries for your dream vacation. Tell us your preferences, and we'll craft the perfect journey."
      />

      {/* Form Section */}
      <section className="px-6 max-w-4xl mx-auto pb-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <GlassmorphismCard>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gradient">
                Trip Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Destination
                  </label>
                  <AnimatedInput
                    placeholder="Where do you want to go?"
                    value={formData.destination}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, destination: value }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Travelers
                  </label>
                  <AnimatedInput
                    placeholder="How many people?"
                    type="number"
                    value={formData.travelers}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, travelers: value }))
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Start Date
                  </label>
                  <AnimatedInput
                    placeholder="When to start?"
                    type="date"
                    value={formData.startDate}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, startDate: value }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    End Date
                  </label>
                  <AnimatedInput
                    placeholder="When to end?"
                    type="date"
                    value={formData.endDate}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, endDate: value }))
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget (USD)
                </label>
                <AnimatedInput
                  placeholder="What's your budget?"
                  type="number"
                  value={formData.budget}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                />
              </div>
            </div>
          </GlassmorphismCard>

          {/* Interests */}
          <GlassmorphismCard>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gradient">
                Your Interests
              </h3>
              <p className="text-muted-foreground">
                Select the activities and experiences that interest you
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest) => (
                  <motion.button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      formData.interests.includes(interest)
                        ? 'bg-accent text-accent-foreground'
                        : 'glass text-foreground hover:border-accent/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {interest}
                  </motion.button>
                ))}
              </div>
            </div>
          </GlassmorphismCard>

          {/* Info Box */}
          <div className="flex gap-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Based on your preferences, we'll generate a personalized itinerary with
              flight recommendations, accommodations, and activities.
            </p>
          </div>

          {/* Submit Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton
              onClick={handleSubmit}
              className="px-12 py-4 text-lg"
            >
              Generate Itinerary
            </MagneticButton>
          </motion.div>
        </form>
      </section>

      <Footer />
    </main>
  )
}
