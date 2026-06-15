'use client'

import React from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import PageHeader from '@/components/sections/page-header'
import TextReveal from '@/components/animations/text-reveal'
import GlassmorphismCard from '@/components/ui/glassmorphism-card'
import { motion } from 'framer-motion'
import { Award, Globe, Heart, Zap } from 'lucide-react'

const values = [
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Access to destinations worldwide with local expertise in every region.',
  },
  {
    icon: Heart,
    title: 'Passion for Travel',
    description:
      'We believe travel transforms lives and creates lasting memories.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Every experience is carefully curated to exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'Using cutting-edge technology to simplify travel planning.',
  },
]

const teamMembers = [
  {
    name: 'Alexandra Morgan',
    role: 'Founder & CEO',
    bio: 'Travel enthusiast with 15+ years of industry experience.',
  },
  {
    name: 'James Chen',
    role: 'Head of Experiences',
    bio: 'Expert guide who has visited 130+ countries across 6 continents.',
  },
  {
    name: 'Sophie Laurent',
    role: 'Travel Curator',
    bio: 'Passionate about discovering hidden gems and local culture.',
  },
  {
    name: 'Marco Rossi',
    role: 'Customer Relations',
    bio: 'Dedicated to ensuring every traveler has an unforgettable experience.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHeader
        title="About NOIR TRAVEL"
        subtitle="We&apos;re on a mission to transform the way you travel by combining luxury, personalization, and authentic experiences. Since 2009, we&apos;ve curated unforgettable journeys for discerning travelers worldwide."
      />

      {/* Mission Section */}
      <section className="relative py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          className="text-lg text-muted-foreground max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We&apos;re on a mission to transform the way you travel by combining
          luxury, personalization, and authentic experiences.
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-gradient">
              Our Mission
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/planner"
                className="px-7 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-medium rounded-sm hover:bg-neon-cyan/20 transition-all glow-cyan text-center"
              >
                Book Now
              </a>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At NOIR TRAVEL, we believe that travel should be an art form. Every
              journey is an opportunity to discover something new, connect with
              different cultures, and create memories that last a lifetime.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;ve dedicated ourselves to curating world-class travel
              experiences that go beyond typical tourism. From hidden local gems to
              luxury accommodations, every detail is thoughtfully selected.
            </p>
          </div>
          <div className="relative glass rounded-xl h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Mission"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-serif font-bold text-gradient text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassmorphismCard>
                  <div className="space-y-4 h-full flex flex-col">
                    <Icon className="w-8 h-8 text-accent" />
                    <h3 className="font-semibold text-foreground text-lg">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {value.description}
                    </p>
                  </div>
                </GlassmorphismCard>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-serif font-bold text-gradient text-center mb-12">
          Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassmorphismCard>
                <div className="space-y-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent/30 rounded-full" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: '50+', label: 'Destinations' },
            { number: '10K+', label: 'Happy Travelers' },
            { number: '8+', label: 'Years of Excellence' },
            { number: '99%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
