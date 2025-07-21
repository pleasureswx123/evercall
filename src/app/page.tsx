'use client'

import { useState, useEffect } from 'react'
import { BackgroundPaths } from '@/components/BackgroundPaths'
import { CharacterShowcase } from '@/components/CharacterShowcase'
import { NewsSection } from '@/components/NewsSection'
import { TechnologySection } from '@/components/TechnologySection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { SectionDivider } from '@/components/SectionDivider'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [aboutTab, setAboutTab] = useState('about') // 'about' 或 'team'

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
      <nav className="fixed left-0 top-0 h-full w-20 bg-black bg-opacity-80 border-r border-cyber-blue border-opacity-30 z-50">
        <div className="flex flex-col items-center py-8 space-y-8">
          <div className="relative group">
            <div className="flex items-center justify-center relative">
              {/* 发光背景效果 */}
              <div className="absolute inset-0 bg-cyber-blue opacity-20 blur-md rounded-full animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Logo图片 */}
              <img
                src="/logo.png"
                alt="Evercall Logo"
                className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(0,255,255,0.8)] transition-all duration-300 hover:scale-110 animate-pulse"
                onError={(e) => {
                  // 如果图片加载失败，显示文字作为备用
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-cyber-blue font-orbitron text-xs writing-mode-vertical animate-pulse';
                  fallback.textContent = 'EVERCALL';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />

              {/* 边框发光效果 */}
              <div className="absolute inset-0 border border-cyber-blue opacity-30 rounded-full animate-ping"></div>
            </div>

            {/* 文字也添加发光效果 */}
            <div className="text-cyber-blue font-mono text-xs mt-2 text-center drop-shadow-[0_0_4px_rgba(0,255,255,0.8)] animate-pulse">
              EVERCALL
            </div>
          </div>

          <div className="flex flex-col space-y-6 text-xs font-mono">
            <a href="#home" className={`nav-item transition-all duration-200 ${activeSection === 'home' ? 'text-cyber-blue nav-active' : 'text-gray-400 hover:text-cyber-blue'}`}>
              <div>INDEX</div>
              <div className="text-white">首页</div>
            </a>
            <a href="#characters" className={`nav-item transition-all duration-200 ${activeSection === 'characters' ? 'text-cyber-blue nav-active' : 'text-gray-400 hover:text-cyber-blue'}`}>
              <div>CHARACTER</div>
              <div className="text-white">角色</div>
            </a>
            <a href="#news" className={`nav-item transition-all duration-200 ${activeSection === 'news' ? 'text-cyber-blue nav-active' : 'text-gray-400 hover:text-cyber-blue'}`}>
              <div>NEWS</div>
              <div className="text-white">新闻</div>
            </a>
            <a href="#tech" className={`nav-item transition-all duration-200 ${activeSection === 'tech' ? 'text-cyber-blue nav-active' : 'text-gray-400 hover:text-cyber-blue'}`}>
              <div>TECH</div>
              <div className="text-white">技术</div>
            </a>
            <a href="#experience" className={`nav-item transition-all duration-200 ${activeSection === 'experience' ? 'text-cyber-blue nav-active' : 'text-gray-400 hover:text-cyber-blue'}`}>
              <div>EXPERIENCE</div>
              <div className="text-white">体验</div>
            </a>
            <a href="#about" className={`nav-item transition-all duration-200 ${activeSection === 'about' ? 'text-cyber-blue nav-active' : 'text-gray-400 hover:text-cyber-blue'}`}>
              <div>ABOUT</div>
              <div className="text-white">关于</div>
            </a>
          </div>
        </div>
      </nav>

      {/* 主内容区域 */}
      <div className="ml-20 min-h-screen">
        {/* 首页 */}
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">

          <div className="text-center z-10 relative">
            {/* 静态资源图片logo - 带特效 */}
            <div className="mb-6 relative group logo-container transform-3d">
              {/* 外层发光环 */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-orange opacity-30 blur-3xl rounded-full animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div> */}

              {/* 中层发光环 */}
              {/* <div className="absolute inset-4 bg-cyber-blue opacity-20 blur-2xl rounded-full animate-ping"></div> */}

              {/* 能量波动环 */}
              {/* <div className="absolute inset-0 border-2 border-cyber-blue rounded-full animate-energy-wave"></div> */}
              {/* <div className="absolute inset-2 border border-cyber-orange rounded-full animate-energy-wave" style={{ animationDelay: '0.5s' }}></div> */}
              {/* <div className="absolute inset-4 border border-cyber-purple rounded-full animate-energy-wave" style={{ animationDelay: '1s' }}></div> */}

              {/* Logo容器 */}
              <div className="relative z-10 p-8">
                <img
                  src="/logo.png"
                  alt="Evercall Logo"
                  className="w-128 mx-auto object-contain relative z-20 
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

                {/* 旋转边框效果 */}
                {/* <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyber-blue via-transparent to-cyber-orange rounded-full animate-spin-slow opacity-60"></div> */}

                {/* 反向旋转边框 */}
                {/* <div className="absolute inset-1 border border-transparent bg-gradient-to-l from-cyber-orange via-transparent to-cyber-blue rounded-full animate-spin-slow opacity-40" style={{ animationDirection: 'reverse' }}></div> */}

                {/* 脉冲边框效果 */}
                {/* <div className="absolute inset-2 border border-cyber-blue rounded-full animate-glow-border"></div> */}

                {/* 内部发光点 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyber-blue rounded-full animate-pulse opacity-80"></div>

                {/* 四角发光点 */}
                <div className="absolute top-4 left-4 w-1 h-1 bg-cyber-orange rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>

              {/* 底部光束效果 */}
              {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-cyber-blue to-transparent opacity-60 animate-pulse"></div> */}

              {/* 侧面光束效果 */}
              {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-20 bg-gradient-to-r from-cyber-orange to-transparent opacity-40 animate-pulse" style={{ animationDelay: '0.3s' }}></div> */}
              {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-1 w-20 bg-gradient-to-l from-cyber-purple to-transparent opacity-40 animate-pulse" style={{ animationDelay: '0.7s' }}></div> */}

              {/* 全息扫描线 */}
              {/* <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-60 animate-holo-scan"></div>
              </div> */}
            </div>
            {/* <div className="font-orbitron text-6xl md:text-8xl font-bold mb-4">
              <span className="text-white">EVER</span>
              <span className="text-cyber-blue neon-blue">CALL</span>
            </div> */}
            {/* <div className="font-mono text-cyber-orange text-lg mb-8">
              AI COMPANION SYSTEM
            </div> */}
            <div className="text-white text-5xl mb-12 max-w-4xl mx-auto">
              连接平行世界
            </div>
            <div className="text-gray-400 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-cyber-blue text-black px-8 py-3 font-mono font-bold hover:bg-white transition-colors duration-300 cyber-border">
                立即体验
              </button>
              <button className="border border-cyber-blue text-cyber-blue px-8 py-3 font-mono hover:bg-cyber-blue hover:text-black transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>
          {/* 动态背景路径 */}
          <BackgroundPaths />
          {/* <div className="absolute inset-0 transform translate-x-[150px] translate-y-[150px] rotate-[315deg] scale-[1] z-0"><BackgroundPaths /></div> */}


          {/* 装饰性元素 */}
          <div className="absolute top-10 right-10 text-cyber-blue font-mono text-xs">
            HTTPS://EVERCALL.AI/
          </div>
        </section>

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
        <section id="about" className="min-h-screen bg-dark-100 border-t border-cyber-blue border-opacity-30 p-8">
          <div className="max-w-6xl mx-auto">
            {/* 标题区域 */}
            <div className="text-center mb-12">
              <div className="text-cyber-blue font-mono text-sm mb-2">ABOUT US ://</div>
              <div className="text-white font-orbitron text-3xl mb-8">关于我们</div>
            </div>

            {/* Tab 选项卡 */}
            <div className="mb-12">
              <div className="grid grid-cols-2 relative z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('COMPANY clicked')
                    setAboutTab('about')
                  }}
                  className={`font-mono text-sm pb-2 transition-all duration-300 cursor-pointer text-center relative z-20 ${aboutTab === 'about'
                    ? 'text-cyber-blue border-b border-cyber-blue'
                    : 'text-gray-400 border-b border-gray-600 hover:text-cyber-blue'
                    }`}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div>COMPANY <span className="text-xs">公司介绍</span></div>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('TEAM clicked')
                    setAboutTab('team')
                  }}
                  className={`font-mono text-sm pb-2 transition-all duration-300 cursor-pointer text-center relative z-20 ${aboutTab === 'team'
                    ? 'text-cyber-orange border-b border-cyber-orange'
                    : 'text-gray-400 border-b border-gray-600 hover:text-cyber-orange'
                    }`}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div>TEAM <span className="text-xs">团队介绍</span></div>
                </button>
              </div>
            </div>

            {/* Tab 内容区域 */}
            <div className="min-h-[600px]">
              {aboutTab === 'about' && (
                <div key="about" className="animate-fade-in">
                  {/* 公司介绍内容 */}
                  <div className="text-center mb-12">
                    <div className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                      我们是一群充满激情的技术专家和创新者，致力于通过先进的AI技术为人类带来更好的情感陪伴体验
                    </div>
                  </div>

                  {/* 使命区域 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="border border-gray-600 p-6 hover:border-cyber-blue transition-colors">
                      <div className="text-cyber-orange font-mono text-sm mb-4">MISSION</div>
                      <div className="text-white font-orbitron text-xl mb-4">我们的使命</div>
                      <div className="text-gray-400 leading-relaxed">
                        让每个人都能拥有一个真正理解自己的AI伙伴。我们相信，在这个快节奏的世界里，
                        每个人都需要一个可以倾诉、可以陪伴、可以理解的朋友。通过先进的AI技术，
                        我们要打破人与机器之间的界限，创造真正有温度的人工智能。
                      </div>
                    </div>

                    {/* 数据统计 */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-gray-600 p-4 text-center hover:border-cyber-blue transition-colors">
                        <div className="text-cyber-blue font-orbitron text-2xl mb-2">100万+</div>
                        <div className="text-white font-mono text-sm">注册用户</div>
                      </div>
                      <div className="border border-gray-600 p-4 text-center hover:border-cyber-orange transition-colors">
                        <div className="text-cyber-orange font-orbitron text-2xl mb-2">50+</div>
                        <div className="text-white font-mono text-sm">团队成员</div>
                      </div>
                      <div className="border border-gray-600 p-4 text-center hover:border-cyber-green transition-colors">
                        <div className="text-cyber-green font-orbitron text-2xl mb-2">10+</div>
                        <div className="text-white font-mono text-sm">AI角色</div>
                      </div>
                      <div className="border border-gray-600 p-4 text-center hover:border-cyber-purple transition-colors">
                        <div className="text-cyber-purple font-orbitron text-2xl mb-2">99.9%</div>
                        <div className="text-white font-mono text-sm">服务可用性</div>
                      </div>
                    </div>
                  </div>

                  {/* 核心价值观 */}
                  <div className="mb-16">
                    <div className="text-cyber-blue font-mono text-sm mb-6">CORE VALUES</div>
                    <div className="text-white font-orbitron text-2xl mb-8">核心价值观</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="border border-gray-600 p-6 hover:border-cyber-blue transition-colors">
                        <div className="text-cyber-blue font-mono text-sm mb-3">01</div>
                        <div className="text-white font-orbitron text-lg mb-3">以人为本</div>
                        <div className="text-gray-400 text-sm">
                          我们相信技术应该服务于人类的情感需求，让每个人都能感受到温暖和陪伴。
                        </div>
                      </div>
                      <div className="border border-gray-600 p-6 hover:border-cyber-orange transition-colors">
                        <div className="text-cyber-orange font-mono text-sm mb-3">02</div>
                        <div className="text-white font-orbitron text-lg mb-3">持续创新</div>
                        <div className="text-gray-400 text-sm">
                          不断探索AI技术的边界，为用户带来更加真实和智能的交互体验。
                        </div>
                      </div>
                      <div className="border border-gray-600 p-6 hover:border-cyber-green transition-colors">
                        <div className="text-cyber-green font-mono text-sm mb-3">03</div>
                        <div className="text-white font-orbitron text-lg mb-3">用户至上</div>
                        <div className="text-gray-400 text-sm">
                          倾听用户的声音，根据用户需求不断改进产品，提供最优质的服务。
                        </div>
                      </div>
                      <div className="border border-gray-600 p-6 hover:border-cyber-purple transition-colors">
                        <div className="text-cyber-purple font-mono text-sm mb-3">04</div>
                        <div className="text-white font-orbitron text-lg mb-3">开放包容</div>
                        <div className="text-gray-400 text-sm">
                          拥抱多元文化，为全球用户提供个性化的AI陪伴服务。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {aboutTab === 'team' && (
                <div key="team" className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div className="border border-gray-600 p-6 hover:border-cyber-blue transition-colors text-center">
                      <div className="w-20 h-20 bg-cyber-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-cyber-blue text-2xl">张</span>
                      </div>
                      <div className="text-white font-orbitron text-lg mb-2">张明</div>
                      <div className="text-cyber-blue font-mono text-sm mb-3">创始人 & CEO</div>
                      <div className="text-gray-400 text-sm">
                        前Google AI研究员，专注于自然语言处理和情感计算领域10年。
                      </div>
                    </div>

                    <div className="border border-gray-600 p-6 hover:border-cyber-orange transition-colors text-center">
                      <div className="w-20 h-20 bg-cyber-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-cyber-orange text-2xl">李</span>
                      </div>
                      <div className="text-white font-orbitron text-lg mb-2">李雪</div>
                      <div className="text-cyber-orange font-mono text-sm mb-3">技术总监</div>
                      <div className="text-gray-400 text-sm">
                        前Microsoft资深工程师，在大规模分布式系统和机器学习方面有丰富经验。
                      </div>
                    </div>

                    <div className="border border-gray-600 p-6 hover:border-cyber-green transition-colors text-center">
                      <div className="w-20 h-20 bg-cyber-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-cyber-green text-2xl">王</span>
                      </div>
                      <div className="text-white font-orbitron text-lg mb-2">王浩</div>
                      <div className="text-cyber-green font-mono text-sm mb-3">产品总监</div>
                      <div className="text-gray-400 text-sm">
                        前腾讯产品经理，深度理解用户需求，擅长打造极致的用户体验。
                      </div>
                    </div>

                    <div className="border border-gray-600 p-6 hover:border-cyber-purple transition-colors text-center">
                      <div className="w-20 h-20 bg-cyber-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-cyber-purple text-2xl">陈</span>
                      </div>
                      <div className="text-white font-orbitron text-lg mb-2">陈美</div>
                      <div className="text-cyber-purple font-mono text-sm mb-3">设计总监</div>
                      <div className="text-gray-400 text-sm">
                        前Apple设计师，在UI/UX设计和3D建模方面有着深厚的造诣。
                      </div>
                    </div>
                  </div>

                  {/* 发展历程 */}
                  <div className="mb-16">
                    <div className="text-cyber-blue font-mono text-sm mb-6">TIMELINE ://</div>
                    <div className="text-white font-orbitron text-2xl mb-8">发展历程</div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-6 border-l-2 border-cyber-blue pl-6">
                        <div className="text-cyber-blue font-orbitron text-lg">2023</div>
                        <div>
                          <div className="text-white font-mono text-sm mb-2">公司成立</div>
                          <div className="text-gray-400 text-sm">Evercall正式成立，获得天使轮投资</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6 border-l-2 border-cyber-orange pl-6">
                        <div className="text-cyber-orange font-orbitron text-lg">2023</div>
                        <div>
                          <div className="text-white font-mono text-sm mb-2">产品发布</div>
                          <div className="text-gray-400 text-sm">Evercall 1.0正式发布，首批用户突破10万</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6 border-l-2 border-cyber-green pl-6">
                        <div className="text-cyber-green font-orbitron text-lg">2024</div>
                        <div>
                          <div className="text-white font-mono text-sm mb-2">技术突破</div>
                          <div className="text-gray-400 text-sm">情感引擎2.0发布，用户数突破100万</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6 border-l-2 border-cyber-purple pl-6">
                        <div className="text-cyber-purple font-orbitron text-lg">2024</div>
                        <div>
                          <div className="text-white font-mono text-sm mb-2">国际化</div>
                          <div className="text-gray-400 text-sm">产品支持多语言，开始全球化布局</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <SectionDivider variant="gradient" color="purple" />

        {/* 页脚 */}
        <footer className="bg-black border-t border-cyber-blue border-opacity-30 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* 联系信息 */}
              <div>
                <div className="text-cyber-blue font-mono text-sm mb-4">CONTACT US ://</div>
                <div className="space-y-2">
                  <div className="text-white font-mono text-sm">contact@evercall.ai</div>
                  <div className="text-white font-mono text-sm">400-123-4567</div>
                  <div className="text-white font-mono text-sm">北京市朝阳区</div>
                </div>
              </div>

              {/* 快速链接 */}
              <div>
                <div className="text-cyber-orange font-mono text-sm mb-4">QUICK LINKS ://</div>
                <div className="space-y-2">
                  <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">首页</div>
                  <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">角色</div>
                  <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">技术</div>
                  <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">体验</div>
                </div>
              </div>

              {/* 社交媒体 */}
              <div>
                <div className="text-cyber-green font-mono text-sm mb-4">FOLLOW US ://</div>
                <div className="space-y-2">
                  <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">微博</div>
                  <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">微信</div>
                  <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">抖音</div>
                  <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">B站</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-8 text-center">
              <div className="text-cyber-blue font-mono text-xs mb-4">
                EVERCALL// https://evercall.ai/
              </div>
              <div className="text-gray-500 font-mono text-xs">
                © 2025 Evercall. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
