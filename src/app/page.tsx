'use client'

import { useState, useEffect } from 'react'
import { CharacterShowcase } from '@/components/CharacterShowcase'
import { NewsSection } from '@/components/NewsSection'
import { TechnologySection } from '@/components/TechnologySection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { SectionDivider } from '@/components/SectionDivider'
import { SideNav } from '@/components/SideNav'
import { HomeSection } from '@/components/HomeSection'
import { AboutSection } from '@/components/AboutSection'
import { Footer } from '@/components/Footer'
import { FooterSection } from '@/components/FooterSection'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

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

  // 平滑滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
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
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>

      {/* 侧边导航 */}
      <SideNav activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* 主内容区域 */}
      <div className="ml-20 min-h-screen">
        {/* 首页区域 */}
        <HomeSection />

        {/* 首页与角色展示区块之间的分隔 */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <SectionDivider variant="gradient" color="purple" />

        {/* 角色展示区块 */}
        <CharacterShowcase />

        {/* 角色展示与新闻区块之间的分隔 */}
        <SectionDivider variant="gradient" color="purple" />

        {/* 新闻/公告区块 */}
        <NewsSection />

        {/* 新闻与技术区块之间的分隔 */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <SectionDivider variant="gradient" color="purple" />

        {/* 世界观/技术区块 */}
        <TechnologySection />

        {/* 技术与体验区块之间的分隔 */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <SectionDivider variant="gradient" color="purple" />

        {/* 体验区块 */}
        <ExperienceSection />

        {/* 体验与关于我们区块之间的分隔 */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <SectionDivider variant="gradient" color="purple" />

        {/* 关于我们区块 - 带Tab选项卡 */}
        <AboutSection />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <SectionDivider variant="gradient" color="purple" />

        <FooterSection />
      </div>
    </main>
  )
}
