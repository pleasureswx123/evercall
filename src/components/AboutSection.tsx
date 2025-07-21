'use client'

import { useState, useEffect } from 'react'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import { motion } from 'framer-motion'

export function AboutSection() {

  const [aboutTab, setAboutTab] = useState('about') // 'about' 或 'team'

  return (
    <section id="about" className="min-h-screen bg-dark-100 border-t border-cyber-blue border-opacity-30 p-8">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <ScrollAnimationWrapper direction="down" className="text-center mb-12">
          <div className="text-cyber-blue font-mono text-sm mb-2">ABOUT US ://</div>
          <div className="text-white font-orbitron text-3xl mb-8">关于我们</div>
        </ScrollAnimationWrapper>

        {/* Tab 选项卡 */}
        <ScrollAnimationWrapper direction="up" delay={0.3} className="mb-12">
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
        </ScrollAnimationWrapper>

        {/* Tab 内容区域 */}
        <div className="min-h-[600px]">
          {aboutTab === 'about' && (
            <div key="about" className="animate-fade-in">
              {/* 公司介绍内容 */}
              <ScrollAnimationWrapper direction="up" delay={0.4} className="text-center mb-12">
                <div className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  我们是一群充满激情的技术专家和创新者，致力于通过先进的AI技术为人类带来更好的情感陪伴体验
                </div>
              </ScrollAnimationWrapper>

              {/* 使命区域 */}
              <ScrollAnimationWrapper direction="up" delay={0.5} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
              </ScrollAnimationWrapper>

              {/* 核心价值观 */}
              <ScrollAnimationWrapper direction="up" delay={0.6} className="mb-16">
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
              </ScrollAnimationWrapper>
            </div>
          )}

          {aboutTab === 'team' && (
            <div key="team" className="animate-fade-in">
              <ScrollAnimationWrapper direction="up" delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              </ScrollAnimationWrapper>

              {/* 发展历程 */}
              <ScrollAnimationWrapper direction="up" delay={0.5} className="mb-16">
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
              </ScrollAnimationWrapper>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}