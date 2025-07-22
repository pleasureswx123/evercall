'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'

interface TransitionManagerProps {
  isTransitioning: boolean
  fromSection: string
  toSection: string
  children: ReactNode
}

export function TransitionManager({
  isTransitioning,
  fromSection,
  toSection,
  children
}: TransitionManagerProps) {
  const [transitionType, setTransitionType] = useState<'digital' | 'quantum' | 'energy' | 'neural'>('digital')

  // 根据区域切换选择不同的过渡效果
  useEffect(() => {
    const sectionPairs = `${fromSection}-${toSection}`

    switch (sectionPairs) {
      case 'home-characters':
      case 'characters-home':
        setTransitionType('digital')
        break
      case 'characters-news':
      case 'news-characters':
        setTransitionType('quantum')
        break
      case 'news-tech':
      case 'tech-news':
        setTransitionType('energy')
        break
      case 'tech-experience':
      case 'experience-tech':
        setTransitionType('neural')
        break
      default:
        setTransitionType('digital')
    }
  }, [fromSection, toSection])

  const getTransitionEffect = () => {
    switch (transitionType) {
      case 'quantum':
        return (
          <div className="absolute inset-0 bg-black bg-opacity-90">
            {/* 量子粒子效果 */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: Math.random() * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-purple-400 font-orbitron text-xl"
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.2, 1.2, 0.8],
                }}
                transition={{ duration: 1.5 }}
              >
                QUANTUM TRANSFER...
              </motion.div>
            </div>
          </div>
        )

      case 'energy':
        return (
          <div className="absolute inset-0 bg-black bg-opacity-90">
            {/* 能量波动效果 */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-orange-500 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [0, 3],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-orange-400 font-orbitron text-xl"
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.2, 1.2, 0.8],
                }}
                transition={{ duration: 1.5 }}
              >
                ENERGY TRANSFER...
              </motion.div>
            </div>
          </div>
        )

      case 'neural':
        return (
          <div className="absolute inset-0 bg-black bg-opacity-90">
            {/* 神经网络连接效果 */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(10)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="#00ff00"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-green-400 font-orbitron text-xl"
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.2, 1.2, 0.8],
                }}
                transition={{ duration: 1.5 }}
              >
                NEURAL SYNC...
              </motion.div>
            </div>
          </div>
        )

      default: // digital
        return (
          <div className="absolute inset-0 bg-black bg-opacity-90">
            {/* 数字雨效果 */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-cyber-blue font-mono text-xs opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-20px',
                  }}
                  animate={{
                    y: '100vh',
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: Math.random() * 0.5,
                    ease: 'linear',
                  }}
                >
                  {Math.random().toString(2).substr(2, 8)}
                </motion.div>
              ))}
            </div>

            {/* 扫描线效果 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
              animate={{ y: '100vh' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-cyber-blue font-orbitron text-xl"
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.2, 1.2, 0.8],
                }}
                transition={{ duration: 1.2 }}
              >
                DIGITAL TRANSFER...
              </motion.div>
            </div>
          </div>
        )
    }
  }

  return (
    <>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getTransitionEffect()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}