'use client'

import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  index?: number
}

// 简化的过渡动画变体
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function SectionWrapper({ children, id, index = 0 }: SectionWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  // 确保只在客户端渲染时应用动画
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <motion.div
      id={`wrapper-${id}`}
      initial={isClient ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
      className="section-wrapper"
    >
      {children}
    </motion.div>
  )
}