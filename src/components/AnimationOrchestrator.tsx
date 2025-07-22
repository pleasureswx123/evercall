'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface AnimationOrchestratorProps {
  children: ReactNode
  activeSection: string
}

export function AnimationOrchestrator({ children, activeSection }: AnimationOrchestratorProps) {
  const [sectionHistory, setSectionHistory] = useState<string[]>(['home'])
  const [globalAnimationState, setGlobalAnimationState] = useState<'idle' | 'transitioning'>('idle')

  useEffect(() => {
    if (activeSection && !sectionHistory.includes(activeSection)) {
      setGlobalAnimationState('transitioning')
      setSectionHistory(prev => [...prev, activeSection])
      
      // 重置动画状态
      const timer = setTimeout(() => {
        setGlobalAnimationState('idle')
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [activeSection, sectionHistory])

  // 为每个区域定义特殊的背景效果
  const getSectionBackgroundEffect = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* 首页：数字网格效果 */}
            <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10 animate-pulse"></div>
          </div>
        )
      
      case 'characters':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* 角色：粒子浮动效果 */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${10 + (i * 6)}%`,
                  top: `${20 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + (i * 0.2),
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )
      
      case 'news':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* 新闻：数据流效果 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${15 + (i * 12)}%`,
                  left: 0,
                  right: 0,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )
      
      case 'tech':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* 技术：电路板效果 */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={`${20 + (i * 8)}%`}
                  cy={`${30 + (i % 3) * 25}%`}
                  r="2"
                  fill="#00ffff"
                  animate={{
                    r: [1, 4, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </svg>
          </div>
        )
      
      case 'experience':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* 体验：能量波动效果 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-orange-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${100 + (i * 50)}px`,
                  height: `${100 + (i * 50)}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )
      
      case 'about':
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* 关于：全息投影效果 */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-transparent animate-pulse"></div>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {/* 全局背景效果 */}
      <motion.div
        className="fixed inset-0 z-0"
        animate={{
          opacity: globalAnimationState === 'transitioning' ? 0.5 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {getSectionBackgroundEffect()}
      </motion.div>

      {/* 全局过渡指示器 */}
      {globalAnimationState === 'transitioning' && (
        <motion.div
          className="fixed top-4 right-4 z-50 text-cyber-blue font-mono text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
            <span>SYNCING...</span>
          </div>
        </motion.div>
      )}

      {/* 主要内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}