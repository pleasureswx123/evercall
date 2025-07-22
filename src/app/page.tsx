'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CharacterShowcase } from '@/components/CharacterShowcase'
import { NewsSection } from '@/components/NewsSection'
import { TechnologySection } from '@/components/TechnologySection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionTransition } from '@/components/SectionTransition'
import { TransitionManager } from '@/components/TransitionManager'
import { AnimationOrchestrator } from '@/components/AnimationOrchestrator'
import { SideNav } from '@/components/SideNav'
import { HomeSection } from '@/components/HomeSection'
import { AboutSection } from '@/components/AboutSection'
import { FooterSection } from '@/components/FooterSection'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [previousSection, setPreviousSection] = useState('home')

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

  // 增强的区域切换函数，包含过渡效果
  const scrollToSection = (sectionId: string) => {
    if (sectionId === activeSection || isTransitioning) return
    
    setIsTransitioning(true)
    setPreviousSection(activeSection)
    
    // 添加切换动画延迟
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        })
        setActiveSection(sectionId)
        
        // 动画完成后重置状态
        setTimeout(() => {
          setIsTransitioning(false)
        }, 800)
      }
    }, 200)
  }

  // 监听滚动位置，更新活动导航项
  useEffect(() => {
    if (loading) return

    const handleScroll = () => {
      const sections = ['home', 'characters', 'news', 'tech', 'experience', 'about']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始检查

    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          {/* <div className="text-cyber-blue font-orbitron text-4xl mb-8 animate-pulse-glow">
            EVERCALL
          </div> */}
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
              // 如果图片加载失败，隐藏img标签
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-white font-mono text-sm mb-4">
            LOADING - {loadingProgress}% <span className="loading-dots"></span>
          </div>
          <div className="w-64 h-1 bg-dark-300 rounded">
            <div
              className="h-full bg-cyber-blue rounded transition-all duration-100"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-cyber-blue font-mono text-xs mt-4">
            EVERCALL// https://evercall.ai/
          </div>
        </div>
      </div>
    )
  }

  return (
    <AnimationOrchestrator activeSection={activeSection}>
      <TransitionManager 
        isTransitioning={isTransitioning}
        fromSection={previousSection}
        toSection={activeSection}
      >
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>

          {/* 侧边导航 */}
          <SideNav activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* 主内容区域 */}
      <motion.div 
        className="ml-20 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* 首页区域 */}
        <SectionTransition id="home" animationType="fade" delay={0}>
          <HomeSection />
        </SectionTransition>

        {/* 动态分隔器 */}
        <motion.div
          className="relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
          <SectionDivider variant="gradient" color="purple" />
        </motion.div>

        {/* 角色展示区块 */}
        <SectionTransition id="characters" animationType="slideLeft" delay={0.2}>
          <CharacterShowcase />
        </SectionTransition>

        {/* 动态分隔器 */}
        <motion.div
          className="relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SectionDivider variant="gradient" color="purple" />
        </motion.div>

        {/* 新闻/公告区块 */}
        <SectionTransition id="news" animationType="slideRight" delay={0.2}>
          <NewsSection />
        </SectionTransition>

        {/* 动态分隔器 */}
        <motion.div
          className="relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
          <SectionDivider variant="gradient" color="purple" />
        </motion.div>

        {/* 世界观/技术区块 */}
        <SectionTransition id="tech" animationType="slideUp" delay={0.2}>
          <TechnologySection />
        </SectionTransition>

        {/* 动态分隔器 */}
        <motion.div
          className="relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
          <SectionDivider variant="gradient" color="purple" />
        </motion.div>

        {/* 体验区块 */}
        <SectionTransition id="experience" animationType="scale" delay={0.2}>
          <ExperienceSection />
        </SectionTransition>

        {/* 动态分隔器 */}
        <motion.div
          className="relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
          <SectionDivider variant="gradient" color="purple" />
        </motion.div>

        {/* 关于我们区块 */}
        <SectionTransition id="about" animationType="rotate" delay={0.2}>
          <AboutSection />
        </SectionTransition>

        <motion.div
          className="relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
          <SectionDivider variant="gradient" color="purple" />
        </motion.div>

        <SectionTransition id="footer" animationType="fade" delay={0}>
          <FooterSection />
        </SectionTransition>
      </motion.div>
    </main>
    </TransitionManager>
    </AnimationOrchestrator>
  )
}
