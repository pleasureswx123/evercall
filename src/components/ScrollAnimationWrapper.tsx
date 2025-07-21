'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export function ScrollAnimationWrapper({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directionOffset: Record<typeof direction, { x?: number; y?: number }> = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  }

  const initial = {
    opacity: 0,
    ...directionOffset[direction]
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : (directionOffset[direction]?.x ?? 0),
        y: isInView ? 0 : (directionOffset[direction]?.y ?? 0)
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}