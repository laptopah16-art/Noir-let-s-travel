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
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHeader
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you. Our dedicated team is available 24/7 to assist with your travel plans and inquiries."
      />

      {/* Content Section */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard>
              <div className="space-y-4">
                <Mail className="w-8 h-8 text-accent" />
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">hello@noirtravel.com</p>
                <p className="text-muted-foreground">support@noirtravel.com</p>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard>
              <div className="space-y-4">
                <Phone className="w-8 h-8 text-accent" />
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-xs text-muted-foreground">
                  Available 24/7
                </p>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard>
              <div className="space-y-4">
                <MapPin className="w-8 h-8 text-accent" />
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground">123 Travel Street</p>
                <p className="text-muted-foreground">New York, NY 10001</p>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <AnimatedInput
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, name: value }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <AnimatedInput
                  placeholder="your@email.com"
                  type="email"
                  value={formData.email}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, email: value }))
                  }
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <AnimatedInput
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, phone: value }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <AnimatedInput
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, subject: value }))
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 bg-input border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none h-32"
              />
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MagneticButton
                onClick={handleSubmit}
                className="px-12 py-4 text-lg"
              >
                Send Message
              </MagneticButton>
            </motion.div>
          </form>
        </motion.div>
      </section>

      {/* Office Hours */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <GlassmorphismCard>
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Office Hours
              </h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
              <p className="text-muted-foreground">
                Saturday - Sunday: 10:00 AM - 4:00 PM EST
              </p>
            </div>
          </div>
        </GlassmorphismCard>
      </section>

      <Footer />
    </main>
  )
}
