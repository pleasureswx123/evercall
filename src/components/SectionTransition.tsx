'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTransitionProps {
  children: ReactNode
  id: string
  animationType?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'fade'
  delay?: number
}

export function SectionTransition({ 
  children, 
  id, 
  animationType = 'slideUp',
  delay = 0.2 
}: SectionTransitionProps) {
  
  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 100 },
          whileInView: { opacity: 1, y: 0 },
        }
      case 'slideLeft':
        return {
          initial: { opacity: 0, x: -100 },
          whileInView: { opacity: 1, x: 0 },
        }
      case 'slideRight':
        return {
          initial: { opacity: 0, x: 100 },
          whileInView: { opacity: 1, x: 0 },
        }
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
        }
      case 'rotate':
        return {
          initial: { opacity: 0, rotateX: 45 },
          whileInView: { opacity: 1, rotateX: 0 },
        }
      case 'fade':
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
        }
      default:
        return {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
        }
    }
  }

  const variants = getAnimationVariants()

  return (
    <motion.div
      id={id}
      className="section-container relative"
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut", 
        delay: delay 
      }}
      style={animationType === 'rotate' ? { transformPerspective: 1000 } : {}}
    >
      {/* 区域进入时的粒子效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: delay + (i * 0.1),
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </motion.div>

      {/* 扫描线效果 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ 
          duration: 1.2, 
          ease: "easeInOut",
          delay: delay 
        }}
      />

      {/* 主要内容 */}
      <div className="relative z-10">
        {children}
      </div>

      {/* 底部扫描线 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ 
          duration: 1.2, 
          ease: "easeInOut",
          delay: delay + 0.3 
        }}
      />
    </motion.div>
  )
}