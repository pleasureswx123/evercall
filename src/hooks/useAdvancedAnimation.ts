'use client'

import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimationConfig {
  triggerOnce?: boolean
  rootMargin?: string
}

export function useAdvancedAnimation(config: AnimationConfig = {}) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [animationStage, setAnimationStage] = useState<'idle' | 'entering' | 'active' | 'exiting'>('idle')
  
  const isInView = useInView(ref, {
    once: config.triggerOnce || false
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setAnimationStage('entering')
      setHasAnimated(true)
      
      // 延迟设置为active状态
      const timer = setTimeout(() => {
        setAnimationStage('active')
      }, 800)
      
      return () => clearTimeout(timer)
    } else if (!isInView && hasAnimated && !config.triggerOnce) {
      setAnimationStage('exiting')
      
      const timer = setTimeout(() => {
        setAnimationStage('idle')
        setHasAnimated(false)
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, hasAnimated, config.triggerOnce])

  const getAnimationProps = (animationType: 'slide' | 'fade' | 'scale' | 'rotate' | 'quantum') => {
    const baseTransition = {
      duration: 0.8,
      ease: 'easeOut'
    }

    switch (animationType) {
      case 'slide':
        return {
          initial: { opacity: 0, y: 50 },
          animate: animationStage === 'entering' || animationStage === 'active' 
            ? { opacity: 1, y: 0 } 
            : { opacity: 0, y: 50 },
          transition: baseTransition
        }
      
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: animationStage === 'entering' || animationStage === 'active' 
            ? { opacity: 1 } 
            : { opacity: 0 },
          transition: baseTransition
        }
      
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: animationStage === 'entering' || animationStage === 'active' 
            ? { opacity: 1, scale: 1 } 
            : { opacity: 0, scale: 0.8 },
          transition: baseTransition
        }
      
      case 'rotate':
        return {
          initial: { opacity: 0, rotateY: 45 },
          animate: animationStage === 'entering' || animationStage === 'active' 
            ? { opacity: 1, rotateY: 0 } 
            : { opacity: 0, rotateY: 45 },
          transition: { ...baseTransition, transformPerspective: 1000 }
        }
      
      case 'quantum':
        return {
          initial: { 
            opacity: 0, 
            scale: 0.5, 
            rotateZ: 180,
            filter: 'blur(10px) hue-rotate(0deg)'
          },
          animate: animationStage === 'entering' || animationStage === 'active' 
            ? { 
                opacity: 1, 
                scale: 1, 
                rotateZ: 0,
                filter: 'blur(0px) hue-rotate(360deg)'
              } 
            : { 
                opacity: 0, 
                scale: 0.5, 
                rotateZ: 180,
                filter: 'blur(10px) hue-rotate(0deg)'
              },
          transition: { ...baseTransition, duration: 1.2 }
        }
      
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: baseTransition
        }
    }
  }

  return {
    ref,
    isInView,
    animationStage,
    hasAnimated,
    getAnimationProps
  }
}