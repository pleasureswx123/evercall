'use client'

import { useState, useEffect } from 'react'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import { motion } from 'framer-motion'

interface TechModule {
  id: string
  title: string
  titleEn: string
  description: string
  features: string[]
  icon: string
  color: string
  bgColor: string
  details: string
  metrics: { label: string; value: string; unit: string }[]
}

const techModules: TechModule[] = [
  {
    id: 'deep-learning',
    title: '深度学习引擎',
    titleEn: 'DEEP LEARNING ENGINE',
    description: '基于最新的Transformer架构，结合情感计算和自然语言处理技术，让AI拥有真实的情感理解能力。',
    features: ['情感识别', '语义理解', '上下文记忆', '个性化学习'],
    icon: '🧠',
    color: 'cyber-blue',
    bgColor: 'bg-blue-500/10',
    details: '采用先进的神经网络架构，通过多层注意力机制和情感计算模块，实现对用户情感状态的精准识别和理解。支持多语言处理和跨文化情感表达。',
    metrics: [
      { label: '情感识别准确率', value: '96.8', unit: '%' },
      { label: '响应延迟', value: '<50', unit: 'ms' },
      { label: '支持语言', value: '12', unit: '种' }
    ]
  },
  {
    id: 'rendering',
    title: '实时渲染系统',
    titleEn: 'REAL-TIME RENDERING',
    description: '采用先进的3D渲染技术和动作捕捉算法，实现角色的实时表情和动作生成，带来沉浸式的视觉体验。',
    features: ['实时表情', '动作同步', '光影效果', '高清渲染'],
    icon: '🎨',
    color: 'cyber-orange',
    bgColor: 'bg-orange-500/10',
    details: '基于GPU加速的实时渲染引擎，支持物理基础渲染(PBR)和动态光照系统。通过面部表情捕捉技术，实现角色情感的视觉化表达。',
    metrics: [
      { label: '渲染帧率', value: '60', unit: 'FPS' },
      { label: '表情同步延迟', value: '<16', unit: 'ms' },
      { label: '渲染分辨率', value: '4K', unit: '' }
    ]
  },
  {
    id: 'memory',
    title: '记忆存储架构',
    titleEn: 'MEMORY ARCHITECTURE',
    description: '创新的分层记忆系统，能够长期保存对话历史和用户偏好，让AI角色真正"记住"你。',
    features: ['长期记忆', '情感关联', '偏好学习', '智能检索'],
    icon: '💾',
    color: 'cyber-green',
    bgColor: 'bg-green-500/10',
    details: '采用分层存储架构，结合向量数据库和图神经网络，实现高效的记忆存储和检索。支持情感标记和关联记忆，让AI角色具备真实的记忆能力。',
    metrics: [
      { label: '记忆容量', value: '无限', unit: '' },
      { label: '检索速度', value: '<10', unit: 'ms' },
      { label: '记忆保持率', value: '99.9', unit: '%' }
    ]
  },
  {
    id: 'privacy',
    title: '隐私保护技术',
    titleEn: 'PRIVACY PROTECTION',
    description: '采用端到端加密和联邦学习技术，确保用户数据安全，所有敏感信息都在本地处理。',
    features: ['端到端加密', '本地处理', '匿名化', '安全审计'],
    icon: '🔒',
    color: 'cyber-purple',
    bgColor: 'bg-purple-500/10',
    details: '基于零知识证明和同态加密技术，确保用户隐私数据在传输和存储过程中的绝对安全。采用联邦学习框架，模型训练无需上传原始数据。',
    metrics: [
      { label: '加密强度', value: 'AES-256', unit: '' },
      { label: '数据本地化', value: '100', unit: '%' },
      { label: '安全等级', value: '军用级', unit: '' }
    ]
  },
  {
    id: 'optimization',
    title: '低延迟优化',
    titleEn: 'LOW LATENCY OPTIMIZATION',
    description: '通过模型压缩和边缘计算技术，实现毫秒级响应，让对话更加自然流畅。',
    features: ['模型压缩', '边缘计算', '智能缓存', '负载均衡'],
    icon: '⚡',
    color: 'cyber-yellow',
    bgColor: 'bg-yellow-500/10',
    details: '采用知识蒸馏和量化技术压缩模型大小，结合边缘计算节点部署，实现超低延迟响应。智能预测和缓存机制进一步优化用户体验。',
    metrics: [
      { label: '平均响应时间', value: '23', unit: 'ms' },
      { label: '模型压缩比', value: '10:1', unit: '' },
      { label: '边缘节点', value: '50+', unit: '个' }
    ]
  },
  {
    id: 'architecture',
    title: '分布式架构',
    titleEn: 'DISTRIBUTED ARCHITECTURE',
    description: '基于微服务和容器化技术构建的可扩展架构，支持海量用户同时在线使用。',
    features: ['微服务', '容器化', '自动扩容', '故障恢复'],
    icon: '🏗️',
    color: 'cyber-pink',
    bgColor: 'bg-pink-500/10',
    details: '采用Kubernetes编排的微服务架构，支持水平扩展和自动故障恢复。通过服务网格技术实现高可用性和负载均衡，确保系统稳定运行。',
    metrics: [
      { label: '并发用户', value: '100万+', unit: '' },
      { label: '系统可用性', value: '99.99', unit: '%' },
      { label: '扩容速度', value: '<30', unit: 's' }
    ]
  }
]

export function TechnologySection() {
  const [selectedTech, setSelectedTech] = useState<TechModule | null>(null)
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'infrastructure'>('all')
  const [animationStep, setAnimationStep] = useState(0)

  // 动画步骤控制
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  // 分类过滤
  const filteredTechs = techModules.filter(tech => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'core') return ['deep-learning', 'rendering', 'memory'].includes(tech.id)
    if (activeCategory === 'infrastructure') return ['privacy', 'optimization', 'architecture'].includes(tech.id)
    return true
  })

  return (
    <section id="tech" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900/20 border-t border-cyber-blue border-opacity-30 relative overflow-hidden">
      {/* 动态背景效果 */}
      <div className="absolute inset-0">
        {/* 电路板背景 */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyber-blue"/>
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cyber-blue"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* 能量波动效果 */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyber-blue rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* 数据传输线 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-pulse"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-orange/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* 头部区域 */}
          <ScrollAnimationWrapper direction="down" className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse mr-4"></div>
              <div className="text-cyber-blue font-mono text-sm">TECHNOLOGY ARCHITECTURE</div>
              <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse ml-4"></div>
            </div>
            <div className="text-white font-orbitron text-4xl mb-6">技术架构</div>
            <div className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              探索Evercall背后的先进技术，了解我们如何通过创新的AI技术栈打造真实的情感陪伴体验
            </div>
          </ScrollAnimationWrapper>

          {/* 分类导航 */}
          <ScrollAnimationWrapper direction="up" delay={0.3} className="flex justify-center mb-12">
            <motion.div 
              className="flex space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { key: 'all', label: '全部技术', count: techModules.length },
                { key: 'core', label: '核心技术', count: 3 },
                { key: 'infrastructure', label: '基础设施', count: 3 }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key as any)}
                  className={`px-6 py-3 font-mono text-sm transition-all duration-300 rounded-md relative overflow-hidden ${
                    activeCategory === category.key
                      ? 'bg-cyber-blue text-black'
                      : 'text-gray-400 hover:text-cyber-blue hover:bg-gray-800/50'
                  }`}
                >
                  <span className="relative z-10">
                    {category.label} ({category.count})
                  </span>
                </button>
              ))}
            </motion.div>
          </ScrollAnimationWrapper>

          {/* 技术模块网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTechs.map((tech, index) => (
              <div
                key={tech.id}
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 hover:border-cyber-blue transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => setSelectedTech(tech)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 悬停背景效果 */}
                <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* 顶部装饰线 */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${tech.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10 p-8">
                  {/* 图标和标题 */}
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div>
                      <div className={`text-${tech.color} font-mono text-xs mb-1`}>
                        {tech.titleEn}
                      </div>
                      <div className="text-white font-medium text-lg">
                        {tech.title}
                      </div>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  {/* 特性标签 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tech.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-mono border border-${tech.color}/30 text-${tech.color} bg-${tech.color}/5 rounded-full`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 性能指标预览 */}
                  <div className="space-y-2">
                    {tech.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-500 text-xs">{metric.label}</span>
                        <span className={`text-${tech.color} font-mono text-sm`}>
                          {metric.value}{metric.unit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 查看更多指示器 */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`text-${tech.color} font-mono text-xs`}>
                      EXPLORE →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 技术统计面板 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700">
              <div className="text-cyber-blue font-orbitron text-2xl mb-2">6</div>
              <div className="text-gray-400 font-mono text-sm">核心技术模块</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700">
              <div className="text-cyber-orange font-orbitron text-2xl mb-2">99.9%</div>
              <div className="text-gray-400 font-mono text-sm">系统可用性</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700">
              <div className="text-cyber-green font-orbitron text-2xl mb-2">&lt;50ms</div>
              <div className="text-gray-400 font-mono text-sm">平均响应时间</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700">
              <div className="text-cyber-purple font-orbitron text-2xl mb-2">100万+</div>
              <div className="text-gray-400 font-mono text-sm">并发用户支持</div>
            </div>
          </div>

          {/* 底部操作区 */}
          <div className="text-center">
            <div className="text-gray-400 font-mono text-sm mb-6">
              想了解更多技术细节？点击上方技术模块查看详情
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-cyber-blue text-black font-mono font-bold hover:bg-white transition-all duration-300 transform hover:scale-105">
                技术文档
              </button>
              <button className="px-8 py-3 border border-cyber-blue text-cyber-blue font-mono hover:bg-cyber-blue hover:text-black transition-all duration-300">
                开发者API
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 技术详情模态框 */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-cyber-blue max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* 模态框头部 */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="text-5xl mr-6">{selectedTech.icon}</div>
                  <div>
                    <div className={`text-${selectedTech.color} font-mono text-sm mb-1`}>
                      {selectedTech.titleEn}
                    </div>
                    <div className="text-white font-orbitron text-2xl">
                      {selectedTech.title}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* 详细描述 */}
              <div className="mb-8">
                <h3 className="text-white text-lg font-medium mb-4">技术概述</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {selectedTech.description}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {selectedTech.details}
                </p>
              </div>

              {/* 核心特性 */}
              <div className="mb-8">
                <h3 className="text-white text-lg font-medium mb-4">核心特性</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedTech.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`p-4 border border-${selectedTech.color}/30 ${selectedTech.bgColor} text-center`}
                    >
                      <div className={`text-${selectedTech.color} font-mono text-sm`}>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 性能指标 */}
              <div className="mb-8">
                <h3 className="text-white text-lg font-medium mb-4">性能指标</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedTech.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-6 bg-gray-800/50 border border-gray-700">
                      <div className={`text-${selectedTech.color} font-orbitron text-2xl mb-2`}>
                        {metric.value}{metric.unit}
                      </div>
                      <div className="text-gray-400 font-mono text-sm">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 底部操作 */}
              <div className="flex justify-center space-x-4">
                <button className={`px-6 py-3 bg-${selectedTech.color} text-black font-mono hover:bg-white transition-all duration-300`}>
                  查看文档
                </button>
                <button className={`px-6 py-3 border border-${selectedTech.color} text-${selectedTech.color} font-mono hover:bg-${selectedTech.color} hover:text-black transition-all duration-300`}>
                  技术支持
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}