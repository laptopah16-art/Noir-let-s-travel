'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How do I book a trip?',
    answer: 'Simply browse our curated destinations, select your preferred travel dates, and our team will customize the perfect itinerary for you. Contact our travel specialists for personalized recommendations.',
  },
  {
    question: 'What is included in your packages?',
    answer: 'Our packages include luxury accommodations, guided tours, meals at premium restaurants, transportation, and 24/7 concierge support. Each package is tailored to your preferences.',
  },
  {
    question: 'Can I customize my trip?',
    answer: 'Absolutely! We specialize in bespoke travel experiences. Our team will work with you to create a completely personalized itinerary based on your interests and preferences.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible cancellation policies. Most bookings can be modified up to 30 days before departure without penalty. Contact us for specific details on your booking.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer: 'Yes, we recommend and can arrange comprehensive travel insurance covering trip cancellation, medical emergencies, and lost baggage for peace of mind.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'Our 24/7 customer support team is available via phone, email, and live chat. We\'re here to help before, during, and after your trip.',
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      className="border border-border rounded-sm overflow-hidden hover:border-neon-cyan/50 transition-colors group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-lg font-medium text-foreground text-left">{question}</h3>
        <motion.svg
          className="w-6 h-6 text-neon-cyan flex-shrink-0 ml-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 pt-0 text-muted-foreground border-t border-border/50 bg-white/2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about NOIR TRAVEL
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 p-8 glass glass-sm text-center rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 border border-neon-cyan text-neon-cyan rounded-sm hover:bg-neon-cyan/10 transition-all"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
