'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TransitionEffectProps {
  isAnimating: boolean
}

export function TransitionEffect({ isAnimating }: TransitionEffectProps) {
  const [showEffect, setShowEffect] = useState(false)
  
  useEffect(() => {
    if (isAnimating) {
      setShowEffect(true)
      const timer = setTimeout(() => {
        setShowEffect(false)
      }, 800)
      
      return () => clearTimeout(timer)
    }
  }, [isAnimating])
  
  return (
    <>
      {/* 闪光效果 */}
      <div className={`flash-overlay ${showEffect ? 'active' : ''}`} />
      
      {/* 光线效果 */}
      {showEffect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-70" />
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-70" />
          <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyber-blue to-transparent opacity-70" />
        </motion.div>
      )}
      
      {/* 粒子效果 */}
      {showEffect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 pointer-events-none z-40"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)'
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  )
}