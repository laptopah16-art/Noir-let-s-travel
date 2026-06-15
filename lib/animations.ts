import { MotionConfig } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Text reveal animation
export const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

// Fade in up animation
export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Stagger container for children
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Scale animation
export const scaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Hover animations
export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
}

export const hoverLiftVariants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
}

// Scroll trigger animation helper
export const createScrollAnimation = (
  element: HTMLElement | null,
  animation: gsap.core.Tween | null,
) => {
  if (!element) return

  ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    onEnter: () => animation?.play(),
  })
}

// Parallax animation helper
export const createParallaxAnimation = (
  element: HTMLElement | null,
  speed: number = 0.5,
) => {
  if (!element) return

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      scrub: 1,
    },
    y: -50 * speed,
    ease: 'none',
  })
}

// Magnetic button helper
export const createMagneticButton = (element: HTMLElement | null) => {
  if (!element) return

  let x = 0
  let y = 0
  let width = 0
  let height = 0

  const onMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const distance = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    }
    const distance_length = Math.sqrt(
      distance.x ** 2 + distance.y ** 2,
    )

    if (distance_length < 100) {
      x = (distance.x / 5) * 0.3
      y = (distance.y / 5) * 0.3
      gsap.to(element, { x, y, duration: 0.4 })
    } else {
      gsap.to(element, { x: 0, y: 0, duration: 0.4 })
    }
  }

  const onMouseLeave = () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.4 })
  }

  element.addEventListener('mousemove', onMouseMove)
  element.addEventListener('mouseleave', onMouseLeave)

  return () => {
    element.removeEventListener('mousemove', onMouseMove)
    element.removeEventListener('mouseleave', onMouseLeave)
  }
}

// Text split animation
export const splitTextIntoSpans = (text: string) => {
  return text.split('').map((char) => char)
}

// Loader animation
export const loaderVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const loaderDotVariants = {
  hidden: { y: 0 },
  visible: {
    y: -20,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
}
