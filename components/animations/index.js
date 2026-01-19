'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Animation Wrapper Components
 * Reusable Framer Motion wrappers for consistent animations
 */

// Fade in from bottom
export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = '',
  once = true,
  amount = 0.3
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.16, 1, 0.3, 1] // ease-out-expo
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Fade in from left
export function FadeInLeft({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = '',
  once = true 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Fade in from right
export function FadeInRight({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = '',
  once = true 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scale in
export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.4, 
  className = '',
  once = true 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration, delay, ease: [0.34, 1.56, 0.64, 1] }} // spring
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children
export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1, 
  className = '',
  once = true 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger child item
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation (continuous)
export function Float({ 
  children, 
  duration = 6, 
  distance = 10, 
  className = '',
  delay = 0,
  rotate = 2
}) {
  return (
    <motion.div
      animate={{ 
        y: [-distance/2, distance/2, -distance/2],
        rotate: [-rotate/2, rotate/2, -rotate/2]
      }}
      transition={{ 
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax wrapper
export function Parallax({ 
  children, 
  offset = 50, 
  className = '' 
}) {
  const ref = useRef(null)
  
  return (
    <motion.div
      ref={ref}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false, amount: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hover lift effect
export function HoverLift({ children, className = '', lift = -8 }) {
  return (
    <motion.div
      whileHover={{ y: lift }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hover scale effect
export function HoverScale({ children, className = '', scale = 1.02 }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal (word by word)
export function TextReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.4, 
            delay: delay + (i * 0.08),
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Page transition wrapper
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
