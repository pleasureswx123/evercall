'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CharacterShowcase } from '@/components/CharacterShowcase'
import { NewsSection } from '@/components/NewsSection'
import { TechnologySection } from '@/components/TechnologySection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { SideNav } from '@/components/SideNav'
import { HomeSection } from '@/components/HomeSection'
import { AboutSection } from '@/components/AboutSection'
import { FooterSection } from '@/components/FooterSection'
import { TransitionEffect } from '@/components/TransitionEffect'

// 定义区块数据
const sections = [
  { id: 'home', component: HomeSection },
  { id: 'characters', component: CharacterShowcase },
  { id: 'news', component: NewsSection },
  { id: 'tech', component: TechnologySection },
  { id: 'experience', component: ExperienceSection },
  { id: 'about', component: AboutSection },
]

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [direction, setDirection] = useState(0) // -1: 向上, 1: 向下, 0: 初始
  const [isAnimating, setIsAnimating] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>(Array(sections.length).fill(null))
  const touchStartY = useRef(0)
  const lastScrollTime = useRef(Date.now())
  const scrollLockTimer = useRef<NodeJS.Timeout | null>(null)
  const [scrollLocked, setScrollLocked] = useState(false)

  // 加载动画
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // 检查内容是否可滚动
  const isContentScrollable = (index: number): boolean => {
    const contentRef = contentRefs.current[index]
    if (!contentRef) return false
    
    return contentRef.scrollHeight > contentRef.clientHeight
  }

  // 检查内容是否已滚动到顶部或底部
  const isAtScrollBoundary = (index: number, direction: number): boolean => {
    const contentRef = contentRefs.current[index]
    if (!contentRef) return true
    
    // 向上滚动且已到顶部
    if (direction < 0 && contentRef.scrollTop <= 0) {
      return true
    }
    
    // 向下滚动且已到底部
    if (direction > 0 && 
        contentRef.scrollTop + contentRef.clientHeight >= 
        contentRef.scrollHeight - 2) {
      return true
    }
    
    return false
  }

  // 处理滚动事件
  const handleWheel = (e: WheelEvent) => {
    // 如果正在动画中，不处理滚动
    if (isAnimating) return
    
    // 获取滚动方向
    const direction = e.deltaY > 0 ? 1 : -1
    
    // 检查当前内容是否可滚动
    const contentScrollable = isContentScrollable(activeSection)
    
    // 如果内容不可滚动，或者已经滚动到边界，则切换区块
    if (!contentScrollable || isAtScrollBoundary(activeSection, direction)) {
      // 防止频繁切换区块
      const now = Date.now()
      if (now - lastScrollTime.current < 500) return
      lastScrollTime.current = now
      
      // 切换区块
      if (direction > 0 && activeSection < sections.length - 1) {
        e.preventDefault()
        setDirection(1)
        setIsAnimating(true)
        setActiveSection(prev => prev + 1)
      } else if (direction < 0 && activeSection > 0) {
        e.preventDefault()
        setDirection(-1)
        setIsAnimating(true)
        setActiveSection(prev => prev - 1)
      }
    }
  }

  // 设置滚动事件监听
  useEffect(() => {
    if (loading) return

    // 处理触摸事件（移动端支持）
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return
      
      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartY.current - touchEndY
      const direction = deltaY > 0 ? 1 : -1
      
      // 检查当前内容是否可滚动
      const contentScrollable = isContentScrollable(activeSection)
      
      // 检测是否为有效的滑动（防止轻触）
      if (Math.abs(deltaY) > 50) {
        // 如果内容不可滚动，或者已经滚动到边界，则切换区块
        if (!contentScrollable || isAtScrollBoundary(activeSection, direction)) {
          if (deltaY > 0 && activeSection < sections.length - 1) {
            // 向上滑动（屏幕上移）
            setDirection(1)
            setIsAnimating(true)
            setActiveSection(prev => prev + 1)
          } else if (deltaY < 0 && activeSection > 0) {
            // 向下滑动（屏幕下移）
            setDirection(-1)
            setIsAnimating(true)
            setActiveSection(prev => prev - 1)
          }
        }
      }
    }
    
    // 处理键盘事件
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return
      
      const direction = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0
      if (direction === 0) return
      
      // 检查当前内容是否可滚动
      const contentScrollable = isContentScrollable(activeSection)
      
      // 如果内容不可滚动，或者已经滚动到边界，则切换区块
      if (!contentScrollable || isAtScrollBoundary(activeSection, direction)) {
        if (direction > 0 && activeSection < sections.length - 1) {
          e.preventDefault()
          setDirection(1)
          setIsAnimating(true)
          setActiveSection(prev => prev + 1)
        } else if (direction < 0 && activeSection > 0) {
          e.preventDefault()
          setDirection(-1)
          setIsAnimating(true)
          setActiveSection(prev => prev - 1)
        }
      }
    }

    // 添加事件监听
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [loading, activeSection, isAnimating])

  // 导航到指定区块
  const navigateToSection = (index: number) => {
    if (isAnimating || index === activeSection) return
    
    setDirection(index > activeSection ? 1 : -1)
    setIsAnimating(true)
    setActiveSection(index)
  }

  // 动画完成后的回调
  const handleAnimationComplete = () => {
    setIsAnimating(false)
    
    // 动画完成后，将内容滚动到顶部
    if (direction > 0) {
      const contentRef = contentRefs.current[activeSection]
      if (contentRef) {
        contentRef.scrollTop = 0
      }
    }
  }

  // 加载屏幕
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Evercall Logo"
            className="w-64 mx-auto object-contain relative z-20 
                       drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                       hover:drop-shadow-[0_0_40px_rgba(0,255,255,1)] 
                       transition-all duration-500 
                       hover:scale-110 
                       animate-breathe
                       filter hover:brightness-125"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-white font-sans text-sm mb-4">
            LOADING - {loadingProgress}% <span className="loading-dots"></span>
          </div>
          <div className="w-64 h-1 bg-dark-300 rounded">
            <div
              className="h-full bg-cyber-blue rounded transition-all duration-100"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-cyber-blue font-sans text-xs mt-4">
            EVERCALL// https://evercall.ai/
          </div>
        </div>
      </div>
    )
  }

  // 页面变体动画
  const pageVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100vh' : '-100vh',
      opacity: 0,
      scale: 0.8,
      rotateX: direction > 0 ? 10 : -10,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100vh' : '100vh',
      opacity: 0,
      scale: 0.8,
      rotateX: direction > 0 ? -10 : 10,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // 背景变体动画
  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }

  // 导航指示器变体动画
  const indicatorVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  }

  return (
    <div
      ref={mainRef}
      className="fixed inset-0 overflow-hidden bg-black text-white perspective-1000"
    >
      {/* 过渡效果 */}
      <TransitionEffect isAnimating={isAnimating} />

      {/* 网格背景 */}
      <motion.div
        className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={backgroundVariants}
      />

      {/* 侧边导航 */}
      <div className="fixed left-0 top-0 h-full z-50">
        <SideNav
          activeSection={sections[activeSection].id}
          scrollToSection={(sectionId) => {
            const index = sections.findIndex(section => section.id === sectionId)
            if (index !== -1) {
              navigateToSection(index)
            }
          }}
        />
      </div>

      {/* 主内容区域 - 上下结构 */}
      <div className="ml-20 h-screen w-[calc(100%-5rem)] flex flex-col">
        {/* 上部分：主要内容区域 */}
        <div className="flex-grow relative preserve-3d">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={activeSection}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onAnimationComplete={handleAnimationComplete}
              className="absolute inset-0 w-full h-full"
            >
              {/* 当前活动区块 - 垂直水平居中 */}
              <div className="w-full h-full flex items-center justify-center">
                {/* 内容容器 - 可滚动 */}
                <div 
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[activeSection] = el;
                    return undefined;
                  }}
                  className="section-content w-full h-full overflow-y-auto custom-scrollbar"
                >
                  <div className="min-h-full w-full">
                      {(() => {
                        const Component = sections[activeSection].component
                        return <Component />
                      })()}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 滚动指示器 - 当内容可滚动时显示 */}
          {isContentScrollable(activeSection) && (
            <motion.div
              className="absolute bottom-16 right-8 text-cyber-blue text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <span>滚动查看更多</span>
                <motion.div
                  className="w-5 h-5"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.5a1 1 0 01-.71-.29l-4-4a1 1 0 111.42-1.42L12 13.1l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.28z"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* 页面指示器 */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial="initial"
                animate="animate"
                variants={indicatorVariants}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeSection 
                    ? 'bg-cyber-blue w-4 h-4 shadow-[0_0_10px_rgba(0,255,255,0.8)]' 
                    : 'bg-gray-500 hover:bg-gray-300'
                }`}
                onClick={() => navigateToSection(index)}
                style={{ transition: 'all 0.3s ease', transitionDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {/* 滚动提示 - 只在首页显示 */}
          {activeSection === 0 && (
            <motion.div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-cyber-blue text-sm flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="mb-2">向下滚动</span>
              <motion.div
                className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center pt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <motion.div className="w-1 h-2 bg-cyber-blue rounded-full" />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* 下部分：页脚区域 */}
        <div className="h-10 flex-shrink-0 z-10">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}