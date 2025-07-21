'use client'

import { useState, useEffect } from 'react'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import { motion } from 'framer-motion'

interface ExperienceOption {
  id: string
  title: string
  titleEn: string
  description: string
  features: string[]
  icon: string
  color: string
  bgColor: string
  buttonText: string
  details: {
    overview: string
    steps: string[]
    benefits: string[]
    requirements: string[]
  }
  stats: { label: string; value: string }[]
}

const experienceOptions: ExperienceOption[] = [
  {
    id: 'free-trial',
    title: '免费试用',
    titleEn: 'FREE TRIAL',
    description: '立即体验Evercall的魅力，无需注册即可开始对话，感受AI伙伴的真实陪伴',
    features: ['无需注册', '即时体验', '多角色选择', '基础功能'],
    icon: '🎮',
    color: 'cyber-blue',
    bgColor: 'bg-blue-500/10',
    buttonText: '立即开始',
    details: {
      overview: '我们提供完全免费的试用体验，让您在不需要任何注册或付费的情况下，直接感受Evercall AI伙伴的魅力。试用版本包含核心对话功能，支持与多个AI角色进行基础交流。',
      steps: [
        '点击"立即开始"按钮',
        '选择您喜欢的AI角色',
        '开始与AI伙伴对话',
        '体验情感陪伴功能'
      ],
      benefits: [
        '零门槛体验，无需注册',
        '支持多个AI角色选择',
        '基础对话和情感交流',
        '了解产品核心功能'
      ],
      requirements: [
        '现代浏览器支持',
        '稳定的网络连接',
        '无需下载安装'
      ]
    },
    stats: [
      { label: '试用用户', value: '50万+' },
      { label: '满意度', value: '98%' }
    ]
  },
  {
    id: 'mobile-app',
    title: '移动应用',
    titleEn: 'MOBILE APP',
    description: '支持iOS和Android平台，随时随地与你的AI伙伴互动，享受完整的移动体验',
    features: ['跨平台支持', '离线功能', '推送通知', '云端同步'],
    icon: '📱',
    color: 'cyber-orange',
    bgColor: 'bg-orange-500/10',
    buttonText: '下载应用',
    details: {
      overview: '我们的移动应用为iOS和Android用户提供完整的Evercall体验。应用支持离线对话、智能推送通知、云端数据同步等高级功能，让您随时随地都能与AI伙伴保持连接。',
      steps: [
        '从App Store或Google Play下载',
        '创建账户或登录',
        '选择并自定义AI角色',
        '开始移动端AI陪伴体验'
      ],
      benefits: [
        '随时随地访问AI伙伴',
        '离线对话功能',
        '智能推送提醒',
        '数据云端同步'
      ],
      requirements: [
        'iOS 14.0+ 或 Android 8.0+',
        '2GB以上可用存储空间',
        '网络连接（部分功能可离线使用）'
      ]
    },
    stats: [
      { label: '下载量', value: '100万+' },
      { label: '评分', value: '4.8★' }
    ]
  },
  {
    id: 'web-platform',
    title: '网页平台',
    titleEn: 'WEB PLATFORM',
    description: '功能完整的网页版本，支持所有高级功能，无需下载即可享受完整体验',
    features: ['全功能支持', '多设备同步', '高清渲染', '实时更新'],
    icon: '🌐',
    color: 'cyber-green',
    bgColor: 'bg-green-500/10',
    buttonText: '访问网页版',
    details: {
      overview: '网页平台提供最完整的Evercall体验，包含所有高级功能如3D角色渲染、高级对话模式、个性化设置等。支持多设备数据同步，让您在不同设备间无缝切换。',
      steps: [
        '访问官方网站',
        '注册或登录账户',
        '完成个人偏好设置',
        '开始完整的AI陪伴体验'
      ],
      benefits: [
        '功能最完整的版本',
        '高清3D角色渲染',
        '多设备数据同步',
        '定期功能更新'
      ],
      requirements: [
        '现代浏览器（Chrome 90+, Firefox 88+, Safari 14+）',
        '稳定的网络连接',
        '推荐4GB以上内存'
      ]
    },
    stats: [
      { label: '活跃用户', value: '80万+' },
      { label: '在线时长', value: '2.5小时/天' }
    ]
  }
]

export function ExperienceSection() {
  const [selectedOption, setSelectedOption] = useState<ExperienceOption | null>(null)
  const [activeDemo, setActiveDemo] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // 演示轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo(prev => (prev + 1) % experienceOptions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleOptionClick = (option: ExperienceOption) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setSelectedOption(option)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black border-t border-cyber-blue border-opacity-30 relative overflow-hidden">
      {/* 动态背景效果 */}
      <div className="absolute inset-0">
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent transform rotate-45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-orange/20 to-transparent transform -rotate-45"></div>
        </div>

        {/* 浮动粒子 */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyber-blue/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* 光束效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-orange/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* 头部区域 */}
          <ScrollAnimationWrapper direction="down" className="text-center mb-16">
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse mr-4"></div>
              <div className="text-cyber-blue font-mono text-sm">EXPERIENCE EVERCALL</div>
              <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse ml-4"></div>
            </motion.div>
            <motion.div 
              className="text-white font-orbitron text-4xl mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              体验方式
            </motion.div>
            <motion.div 
              className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              选择最适合您的方式开始AI陪伴之旅，从免费试用到完整体验，我们为每种需求提供完美的解决方案
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 体验选项网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {experienceOptions.map((option, index) => (
              <div
                key={option.id}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-${option.color} transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeDemo === index ? `border-${option.color} shadow-lg shadow-${option.color}/20` : ''
                }`}
                onClick={() => handleOptionClick(option)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 激活指示器 */}
                {activeDemo === index && (
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${option.color} animate-pulse`}></div>
                )}

                {/* 悬停背景效果 */}
                <div className={`absolute inset-0 ${option.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10 p-6">
                  {/* 图标和标题 */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <div className={`text-${option.color} font-mono text-xs mb-2`}>
                      {option.titleEn}
                    </div>
                    <div className="text-white font-medium text-lg">
                      {option.title}
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
                    {option.description}
                  </p>

                  {/* 特性标签 */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {option.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs font-mono border border-${option.color}/30 text-${option.color} bg-${option.color}/5 rounded-full`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 统计信息 */}
                  <div className="space-y-2 mb-6">
                    {option.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-500 text-xs">{stat.label}</span>
                        <span className={`text-${option.color} font-mono text-sm`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <button className={`w-full py-3 border border-${option.color} text-${option.color} font-mono text-sm hover:bg-${option.color} hover:text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${option.color}/20`}>
                    {option.buttonText}
                  </button>

                  {/* 查看详情指示器 */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`text-${option.color} font-mono text-xs`}>
                      详情 →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      {/* 体验详情模态框 */}
      {selectedOption && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-cyber-blue max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* 模态框头部 */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="text-5xl mr-6">{selectedOption.icon}</div>
                  <div>
                    <div className={`text-${selectedOption.color} font-mono text-sm mb-1`}>
                      {selectedOption.titleEn}
                    </div>
                    <div className="text-white font-orbitron text-2xl">
                      {selectedOption.title}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* 详细信息 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左侧：概述和步骤 */}
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">产品概述</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedOption.details.overview}
                  </p>

                  <h3 className="text-white text-lg font-medium mb-4">使用步骤</h3>
                  <div className="space-y-3">
                    {selectedOption.details.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full bg-${selectedOption.color} text-black text-xs flex items-center justify-center mr-3 mt-0.5 font-mono`}>
                          {idx + 1}
                        </div>
                        <div className="text-gray-300">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 右侧：优势和要求 */}
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">核心优势</h3>
                  <div className="space-y-2 mb-6">
                    {selectedOption.details.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-2 h-2 bg-${selectedOption.color} rounded-full mr-3`}></div>
                        <div className="text-gray-300">{benefit}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-white text-lg font-medium mb-4">系统要求</h3>
                  <div className="space-y-2 mb-6">
                    {selectedOption.details.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <div className="text-gray-400">{req}</div>
                      </div>
                    ))}
                  </div>

                  {/* 统计数据 */}
                  <div className="grid grid-cols-2 gap-4">
                    {selectedOption.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-800/50 border border-gray-700">
                        <div className={`text-${selectedOption.color} font-orbitron text-xl mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-400 font-mono text-xs">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 底部操作 */}
              <div className="flex justify-center space-x-4 mt-8">
                <button className={`px-8 py-3 bg-${selectedOption.color} text-black font-mono hover:bg-white transition-all duration-300`}>
                  {selectedOption.buttonText}
                </button>
                <button className={`px-8 py-3 border border-${selectedOption.color} text-${selectedOption.color} font-mono hover:bg-${selectedOption.color} hover:text-black transition-all duration-300`}>
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}