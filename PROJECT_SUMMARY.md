# Noir Travel Website — Project Summary

## Tech Stack
- **Framework:** Next.js (App Router) + React
- **Language:** TypeScript / TSX
- **Styling:** Tailwind CSS + custom global styles
- **UI/Effects:** Framer Motion (animations), GSAP (scroll effects)
- **Component Library:** Locally implemented UI components under `components/ui/`
- **Routing:** File-based routing in `app/`

## Pages / Routes
Located in the `app/` directory:
- `/` → `app/page.tsx`
  - Home page composition:
    - Loading screen + cursor follower animations
    - Navbar + hero cinema section
    - Marquee, stats, destinations showcase
    - Scroll experience, testimonials, FAQ
    - Final CTA section + Footer
- `/planner` → `app/planner/page.tsx`
  - Travel Planner form UI:
    - Destination, travelers, start/end dates, budget
    - Interests multi-select UI
    - Submit generates itinerary (currently logs to console)
    - Includes Navbar and Footer
- Additional routes exist:
  - `/about` (`app/about/page.tsx`)
  - `/contact` (`app/contact/page.tsx`)
  - `/destinations` (`app/destinations/page.tsx`)
  - `/explore` (`app/explore/page.tsx`)
  - `/weather` (`app/weather/page.tsx`)

## Core Components
Located in `components/`:

### Layout
- `components/layout/navbar.tsx`
  - Fixed, blurred glass-style navbar
  - Desktop nav links + GitHub icon + CTA
  - **Book Now** CTA now routes to **`/planner`** (both desktop and mobile variants)
  - Mobile menu toggle with animated expand/collapse
- `components/layout/footer.tsx`
  - Footer UI (imported by pages)

### Sections
- `components/sections/hero-cinema.tsx`
  - Full-screen hero with animated background and GSAP parallax layer
  - Text reveal for the hero heading
  - CTA buttons (Explore / Learn)
- `components/sections/destinations-showcase.tsx`
  - Section that renders a grid of destination cards
  - Animated title + animated destination cards
  - Accepts `destinations` and optional `onDestinationClick`
- Other sections used on Home:
  - `marquee-section.tsx`, `stats-section.tsx`, `scroll-experience.tsx`, `testimonials-section.tsx`, `faq-section.tsx`
  - plus additional section utilities like `page-header.tsx`

### Animations
- `components/animations/*`
  - Cursor follower
  - Loading screen
  - Text reveal component (used in hero and destinations)

### UI Components
- `components/ui/*`
  - Reusable styled components (buttons, cards, dialog, tooltip, inputs, etc.)
  - Includes `magnetic-button.tsx` and `animated-input.tsx` used in Planner and Hero

## Styling / Theme
- Tailwind configured via `tailwind.config.ts`
- Global styles in:
  - `app/globals.css`
  - `styles/globals.css`
- Theme provider:
  - `components/theme-provider.tsx`

## Important Behaviors
- **Planner CTA navigation:**
  - Navbar “Book Now” routes to `/planner`.
- **Animations:**
  - Home hero uses GSAP `ScrollTrigger` for parallax-style motion.
  - Multiple sections use Framer Motion for entrance and hover animations.
- **Planner form:**
  - Client-side state using React `useState`.
  - Submit currently logs form data to the console.

## File Structure (High Level)
- `app/`
  - `page.tsx` (Home)
  - `planner/page.tsx` (Planner)
  - other route folders for About/Contact/Destinations/Explore/Weather
- `components/`
  - `layout/` (Navbar, Footer)
  - `sections/` (Hero, Destinations, Stats, etc.)
  - `animations/` (Cursor follower, Loading screen, Text reveal)
  - `ui/` (reusable UI primitives)
- `lib/`
  - animation helpers and utilities

## Current Project Update Summary
- Updated `components/layout/navbar.tsx` so **“Book Now” navigates to `/planner`** on both desktop and mobile.
- Updated `components/sections/hero-cinema.tsx` hero headline to include the phrase requested (“Discover on the Extraordinary Destinations”).

## How to Run
From project root:
- `npm run dev`
- App runs at: **http://localhost:3000**

