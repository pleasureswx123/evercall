'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
  animationType?: 'slide' | 'fade' | 'scale' | 'rotate' | 'parallax' | 'quantum'
  enableParallax?: boolean
}

export function ScrollAnimationWrapper({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  animationType = 'slide',
  enableParallax = false
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  
  // 视差滚动效果
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const getAnimationConfig = () => {
    const directionOffset: Record<typeof direction, { x?: number; y?: number }> = {
      up: { y: 50 },
      down: { y: -50 },
      left: { x: 50 },
      right: { x: -50 }
    }

    switch (animationType) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: isInView ? 1 : 0 }
        }
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { 
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.8
          }
        }
      case 'rotate':
        return {
          initial: { opacity: 0, rotateY: 45 },
          animate: { 
            opacity: isInView ? 1 : 0,
            rotateY: isInView ? 0 : 45
          }
        }
      case 'quantum':
        return {
          initial: { 
            opacity: 0, 
            scale: 0.5, 
            rotateZ: 180,
            filter: 'blur(10px)'
          },
          animate: { 
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.5,
            rotateZ: isInView ? 0 : 180,
            filter: isInView ? 'blur(0px)' : 'blur(10px)'
          }
        }
      case 'parallax':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        }
      default: // slide
        return {
          initial: {
            opacity: 0,
            ...directionOffset[direction]
          },
          animate: {
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : (directionOffset[direction]?.x ?? 0),
            y: isInView ? 0 : (directionOffset[direction]?.y ?? 0)
          }
        }
    }
  }

  const animationConfig = getAnimationConfig()

  // 如果启用视差效果，使用不同的样式
  if (enableParallax || animationType === 'parallax') {
    return (
      <motion.div
        ref={ref}
        className={`${className} relative`}
        style={{
          y: parallaxY,
          opacity: parallaxOpacity
        }}
      >
        {/* 背景粒子效果 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} relative overflow-hidden`}
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      transition={{
        duration: animationType === 'quantum' ? 1.2 : 0.8,
        delay: delay,
        ease: animationType === 'quantum' ? 'easeInOut' : 'easeOut'
      }}
      style={animationType === 'rotate' ? { transformPerspective: 1000 } : {}}
    >
      {/* 进入动画的能量波效果 */}
      {isInView && animationType !== 'fade' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {/* <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
          /> */}
        </motion.div>
      )}
      
      {children}
    </motion.div>
  )
}