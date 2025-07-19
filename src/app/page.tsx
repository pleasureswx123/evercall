'use client'

import { useState, useEffect } from 'react'
import { BackgroundPaths } from '@/components/BackgroundPaths'

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
    }, 50)

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
          <div className="text-cyber-blue font-orbitron text-4xl mb-8 animate-pulse-glow">
            EVERCALL
          </div>
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
          <div className="text-cyber-blue font-orbitron text-xs writing-mode-vertical">
            EVERCALL
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
          {/* 动态背景路径 */}
          <BackgroundPaths />

          <div className="text-center z-10 relative">
            <div className="font-orbitron text-6xl md:text-8xl font-bold mb-4">
              <span className="text-white">EVER</span>
              <span className="text-cyber-blue neon-blue">CALL</span>
            </div>
            <div className="font-mono text-cyber-orange text-lg mb-8">
              AI COMPANION SYSTEM
            </div>
            <div className="text-white text-xl mb-12 max-w-2xl mx-auto">
              连接平行世界
            </div>
            <div className="text-gray-400 text-sm mb-8 max-w-3xl mx-auto leading-relaxed">
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

          {/* 装饰性元素 */}
          <div className="absolute top-10 right-10 text-cyber-blue font-mono text-xs">
            HTTPS://EVERCALL.AI/
          </div>
        </section>

        {/* 角色展示区块 */}
        <section id="characters" className="min-h-screen bg-black border-t border-cyber-blue border-opacity-30 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              {/* 左侧角色信息 */}
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <div className="text-cyber-blue font-mono text-sm mb-2">AI COMPANION ://</div>
                  <div className="text-cyber-orange font-mono text-lg mb-2">PROFILE</div>
                  <div className="text-white font-orbitron text-4xl mb-4">SAKURA</div>
                  <div className="text-white font-orbitron text-2xl mb-8">小樱</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-cyber-blue font-mono text-xs mb-1">CHARACTER VOICE</div>
                    <div className="text-white">花澤香菜</div>
                    <div className="text-white">劉雪</div>
                  </div>

                  <div className="text-gray-400 leading-relaxed">
                    温柔体贴的AI伙伴，擅长倾听和安慰。拥有独特的性格和永久记忆，能够理解你的情感状态，为你提供最贴心的陪伴体验。
                  </div>
                </div>

                {/* 角色切换 */}
                <div className="flex space-x-4">
                  <div className="w-12 h-12 border-2 border-cyber-blue bg-cyber-blue bg-opacity-20 flex items-center justify-center cursor-pointer">
                    <span className="text-cyber-blue text-xs">小樱</span>
                  </div>
                  <div className="w-12 h-12 border border-gray-600 flex items-center justify-center cursor-pointer hover:border-cyber-blue">
                    <span className="text-gray-400 text-xs hover:text-cyber-blue">星野</span>
                  </div>
                  <div className="w-12 h-12 border border-gray-600 flex items-center justify-center cursor-pointer hover:border-cyber-blue">
                    <span className="text-gray-400 text-xs hover:text-cyber-blue">雪音</span>
                  </div>
                </div>
              </div>

              {/* 右侧角色图片区域 */}
              <div className="flex items-center justify-center relative">
                <div className="w-80 h-80 border border-cyber-blue border-opacity-30 flex items-center justify-center relative">
                  <div className="text-6xl">🌸</div>
                  <div className="absolute top-4 right-4 text-cyber-blue font-mono text-xs">
                    SAKURA.AI
                  </div>
                  <div className="absolute bottom-4 left-4 text-gray-500 font-mono text-xs">
                    CHARACTER_001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 新闻/公告区块 */}
        <section id="news" className="min-h-screen bg-dark-100 border-t border-cyber-blue border-opacity-30 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-cyber-blue font-mono text-sm mb-2">BREAKING NEWS</div>
                <div className="text-white text-2xl font-orbitron">2025 // 01 / 19</div>
                <div className="text-cyber-blue font-mono text-xs mt-2">HTTPS://EVERCALL.AI/</div>
              </div>
              <button className="text-cyber-blue font-mono text-sm border border-cyber-blue px-4 py-2 hover:bg-cyber-blue hover:text-black transition-all">
                更多情報<br/>READ MORE
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-cyber-blue font-mono text-sm border-b border-cyber-blue pb-2">最新</div>
              <div className="text-gray-400 font-mono text-sm border-b border-gray-600 pb-2 hover:text-cyber-blue cursor-pointer">公告</div>
              <div className="text-gray-400 font-mono text-sm border-b border-gray-600 pb-2 hover:text-cyber-blue cursor-pointer">活動</div>
              <div className="text-gray-400 font-mono text-sm border-b border-gray-600 pb-2 hover:text-cyber-blue cursor-pointer">新聞</div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-600 p-4 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-cyber-blue font-mono text-xs mb-1">公告</div>
                    <div className="text-white text-sm mb-2">2025 // 01 / 19</div>
                    <div className="text-white">[Evercall]AI陪伴系统重大更新公告</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-600 p-4 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-cyber-orange font-mono text-xs mb-1">活動</div>
                    <div className="text-white text-sm mb-2">2025 // 01 / 18</div>
                    <div className="text-white">[活動預告]新角色「雪音」限時體驗即將開啟</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-600 p-4 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-cyber-blue font-mono text-xs mb-1">公告</div>
                    <div className="text-white text-sm mb-2">2025 // 01 / 17</div>
                    <div className="text-white">[Evercall]系統維護完成公告</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="text-cyber-blue font-mono text-sm border border-cyber-blue px-6 py-2 hover:bg-cyber-blue hover:text-black transition-all">
                READ MORE
              </button>
            </div>
          </div>
        </section>

        {/* 世界观/技术区块 */}
        <section id="tech" className="min-h-screen bg-dark-100 border-t border-cyber-blue border-opacity-30 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-blue font-orbitron text-lg mb-2">DEEP LEARNING</div>
                <div className="text-white mb-4">深度学习引擎</div>
                <div className="text-gray-400 text-sm">采用最新的大语言模型技术，结合情感计算和个性化算法</div>
              </div>

              <div className="text-center p-6 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-orange font-orbitron text-lg mb-2">MEMORY SYSTEM</div>
                <div className="text-white mb-4">记忆网络系统</div>
                <div className="text-gray-400 text-sm">创新的记忆架构设计，实现长期记忆存储和检索</div>
              </div>

              <div className="text-center p-6 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-green font-orbitron text-lg mb-2">MULTIMODAL</div>
                <div className="text-white mb-4">多模态交互</div>
                <div className="text-gray-400 text-sm">支持多种交互方式，提供丰富的沟通体验</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-cyber-blue font-mono text-sm mb-2">WORLD</div>
              <div className="text-white font-orbitron text-2xl mb-4">返回</div>
              <div className="text-white font-orbitron text-2xl">GO BACK</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-blue font-mono text-xs mb-2">GALLERY</div>
                <div className="text-white text-sm">画廊</div>
              </div>

              <div className="text-center p-4 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-orange font-mono text-xs mb-2">VIDEO</div>
                <div className="text-white text-sm">视频</div>
              </div>

              <div className="text-center p-4 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-green font-mono text-xs mb-2">ABOUT AI</div>
                <div className="text-white text-sm">关于AI</div>
              </div>

              <div className="text-center p-4 border border-gray-600 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-purple font-mono text-xs mb-2">EXPERIENCE</div>
                <div className="text-white text-sm">体验</div>
              </div>
            </div>
          </div>
        </section>

        {/* 体验区块 */}
        <section id="experience" className="min-h-screen bg-black border-t border-cyber-blue border-opacity-30 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-cyber-blue font-mono text-sm mb-2">ABOUT EVERCALL</div>
              <div className="text-white font-orbitron text-3xl mb-4">AI陪伴万象</div>
              <div className="text-gray-400">请选择您要查阅的内容</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border border-gray-600 p-6 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-blue font-mono text-sm mb-2">檢視詳情</div>
                <div className="text-white font-orbitron text-xl mb-4">免费试用</div>
                <div className="text-cyber-blue font-mono text-lg mb-2">FREE TRIAL</div>
                <div className="text-gray-400 text-sm mb-4">立即体验Evercall的魅力，无需注册即可开始对话</div>
                <div className="text-cyber-blue font-mono text-xs">VIEW MORE ></div>
              </div>

              <div className="border border-gray-600 p-6 hover:border-cyber-blue transition-colors cursor-pointer">
                <div className="text-cyber-orange font-mono text-sm mb-2">檢視詳情</div>
                <div className="text-white font-orbitron text-xl mb-4">下载应用</div>
                <div className="text-cyber-orange font-mono text-lg mb-2">DOWNLOAD APP</div>
                <div className="text-gray-400 text-sm mb-4">支持iOS和Android平台，随时随地与你的AI伙伴互动</div>
                <div className="text-cyber-orange font-mono text-xs">VIEW MORE ></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-cyber-blue font-mono text-sm mb-4">MORE CONTENT</div>
              <div className="flex justify-center space-x-8">
                <button className="text-cyber-blue font-mono text-sm border border-cyber-blue px-6 py-2 hover:bg-cyber-blue hover:text-black transition-all">
                  立即体验
                </button>
                <button className="text-cyber-orange font-mono text-sm border border-cyber-orange px-6 py-2 hover:bg-cyber-orange hover:text-black transition-all">
                  联系我们
                </button>
              </div>
            </div>
          </div>
        </section>

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
                  className={`font-mono text-sm pb-2 transition-all duration-300 cursor-pointer text-center relative z-20 ${
                    aboutTab === 'about'
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
                  className={`font-mono text-sm pb-2 transition-all duration-300 cursor-pointer text-center relative z-20 ${
                    aboutTab === 'team'
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
