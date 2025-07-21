'use client'

import { useState, useEffect } from 'react'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'

interface NewsItem {
  id: string
  type: 'announcement' | 'event' | 'news' | 'update'
  title: string
  date: string
  content: string
  isNew: boolean
  isHot: boolean
  priority: 'high' | 'medium' | 'low'
}

const newsData: NewsItem[] = [
  {
    id: '1',
    type: 'announcement',
    title: '[Evercall] AI陪伴系统重大更新公告',
    date: '2025-01-21',
    content: '全新的情感引擎上线，角色记忆系统全面升级，支持更深层次的情感交流体验。新增多模态交互功能，让AI伙伴更懂你的心。',
    isNew: true,
    isHot: true,
    priority: 'high'
  },
  {
    id: '2',
    type: 'event',
    title: '[活动预告] 新角色「雪音」限时体验即将开启',
    date: '2025-01-20',
    content: '知识渊博的AI学者雪音即将与大家见面！限时免费体验活动将于本周末开启，不要错过与这位冷静理智的AI伙伴交流的机会。',
    isNew: true,
    isHot: false,
    priority: 'high'
  },
  {
    id: '3',
    type: 'news',
    title: '[技术突破] Evercall获得AI情感计算专利',
    date: '2025-01-19',
    content: '我们的情感计算技术获得国际专利认证，这标志着Evercall在AI情感理解领域达到了新的里程碑。',
    isNew: false,
    isHot: true,
    priority: 'medium'
  },
  {
    id: '4',
    type: 'announcement',
    title: '[系统维护] 定期维护完成公告',
    date: '2025-01-18',
    content: '系统维护已于今日凌晨完成，所有服务已恢复正常。本次维护优化了响应速度，提升了整体用户体验。',
    isNew: false,
    isHot: false,
    priority: 'low'
  },
  {
    id: '5',
    type: 'event',
    title: '[社区活动] AI伙伴创作大赛开始报名',
    date: '2025-01-17',
    content: '展示你与AI伙伴的精彩互动！创作大赛现已开放报名，丰厚奖品等你来拿。',
    isNew: false,
    isHot: false,
    priority: 'medium'
  },
  {
    id: '6',
    type: 'update',
    title: '[版本更新] v2.1.0 新功能上线',
    date: '2025-01-16',
    content: '新增语音交互功能、表情包系统、个性化主题设置等多项实用功能。',
    isNew: false,
    isHot: false,
    priority: 'medium'
  }
]

const typeConfig = {
  announcement: { label: '公告', color: 'cyber-blue', bgColor: 'bg-blue-500/10' },
  event: { label: '活动', color: 'cyber-orange', bgColor: 'bg-orange-500/10' },
  news: { label: '新闻', color: 'cyber-green', bgColor: 'bg-green-500/10' },
  update: { label: '更新', color: 'cyber-purple', bgColor: 'bg-purple-500/10' }
}

export function NewsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'announcement' | 'event' | 'news'>('all')
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [visibleItems, setVisibleItems] = useState(4)

  // 实时时间更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 过滤新闻数据
  const filteredNews = newsData.filter(item => 
    activeTab === 'all' || item.type === activeTab
  ).slice(0, visibleItems)

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return `${date.getFullYear()} // ${String(date.getMonth() + 1).padStart(2, '0')} / ${String(date.getDate()).padStart(2, '0')}`
  }

  // 计算相对时间
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '今天'
    if (diffDays === 2) return '昨天'
    if (diffDays <= 7) return `${diffDays}天前`
    return formatDate(dateString)
  }

  return (
    <section id="news" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-cyber-blue border-opacity-30 relative overflow-hidden">
      {/* 动态背景效果 */}
      <div className="absolute inset-0">
        {/* 数据流背景 */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-blue font-mono text-xs animate-data-stream"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + i}s`
              }}
            >
              {Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>

        {/* 扫描线效果 */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent animate-scan-line"></div>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* 头部区域 */}
          <ScrollAnimationWrapper direction="down" className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse mr-3"></div>
                <div className="text-cyber-blue font-mono text-sm">BREAKING NEWS SYSTEM</div>
              </div>
              <div className="text-white text-3xl font-orbitron mb-2">
                {currentTime.toLocaleDateString('zh-CN', { 
                  year: 'numeric', 
                  month: '2-digit', 
                  day: '2-digit' 
                }).replace(/\//g, ' // ')}
              </div>
              <div className="text-cyber-blue font-mono text-xs">
                REAL-TIME: {currentTime.toLocaleTimeString('zh-CN')} | HTTPS://EVERCALL.AI/
              </div>
            </div>

            {/* 统计信息 */}
            <ScrollAnimationWrapper direction="left" delay={0.3} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-3 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-cyber-blue font-orbitron text-lg">{newsData.filter(n => n.isNew).length}</div>
                <div className="text-gray-400 font-mono text-xs">NEW</div>
              </div>
              <div className="text-center p-3 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-cyber-orange font-orbitron text-lg">{newsData.filter(n => n.isHot).length}</div>
                <div className="text-gray-400 font-mono text-xs">HOT</div>
              </div>
              <div className="text-center p-3 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-cyber-green font-orbitron text-lg">{newsData.length}</div>
                <div className="text-gray-400 font-mono text-xs">TOTAL</div>
              </div>
              <div className="text-center p-3 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="text-cyber-purple font-orbitron text-lg">24/7</div>
                <div className="text-gray-400 font-mono text-xs">LIVE</div>
              </div>
            </ScrollAnimationWrapper>
          </ScrollAnimationWrapper>

          {/* 标签页导航 */}
          <ScrollAnimationWrapper direction="up" delay={0.4} className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { key: 'all', label: '全部', count: newsData.length },
                { key: 'announcement', label: '公告', count: newsData.filter(n => n.type === 'announcement').length },
                { key: 'event', label: '活动', count: newsData.filter(n => n.type === 'event').length },
                { key: 'news', label: '新闻', count: newsData.filter(n => n.type === 'news').length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-4 py-2 font-mono text-sm border transition-all duration-300 relative overflow-hidden group ${
                    activeTab === tab.key
                      ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10'
                      : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
                  }`}
                >
                  <span className="relative z-10">
                    {tab.label} ({tab.count})
                  </span>
                  {activeTab === tab.key && (
                    <div className="absolute inset-0 bg-cyber-blue/5 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </ScrollAnimationWrapper>

          {/* 新闻列表 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredNews.map((item, index) => (
              <div
                key={item.id}
                className="group border border-gray-700 bg-gray-900/30 backdrop-blur-sm hover:border-cyber-blue transition-all duration-300 cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedNews(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 优先级指示器 */}
                <div className={`absolute top-0 left-0 w-1 h-full ${
                  item.priority === 'high' ? 'bg-red-500' :
                  item.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>

                {/* 悬停效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="p-6 relative z-10">
                  {/* 头部信息 */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-mono border ${typeConfig[item.type].bgColor} text-${typeConfig[item.type].color} border-${typeConfig[item.type].color}/30`}>
                        {typeConfig[item.type].label}
                      </span>
                      {item.isNew && (
                        <span className="px-2 py-1 text-xs font-mono bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                          NEW
                        </span>
                      )}
                      {item.isHot && (
                        <span className="px-2 py-1 text-xs font-mono bg-orange-500/20 text-orange-400 border border-orange-500/30">
                          HOT
                        </span>
                      )}
                    </div>
                    <div className="text-gray-500 font-mono text-xs">
                      {getRelativeTime(item.date)}
                    </div>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-white font-medium mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* 内容预览 */}
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {item.content}
                  </p>

                  {/* 底部信息 */}
                  <div className="flex items-center justify-between">
                    <div className="text-gray-500 font-mono text-xs">
                      {formatDate(item.date)}
                    </div>
                    <div className="text-cyber-blue font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      READ MORE →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 加载更多按钮 */}
          {visibleItems < newsData.length && (
            <div className="text-center mb-8">
              <button
                onClick={() => setVisibleItems(prev => prev + 4)}
                className="px-8 py-3 border border-cyber-blue text-cyber-blue font-mono hover:bg-cyber-blue hover:text-black transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">LOAD MORE ({newsData.length - visibleItems} 条剩余)</span>
                <div className="absolute inset-0 bg-cyber-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          )}

          {/* 底部操作区 */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-700">
            <div className="text-gray-400 font-mono text-sm mb-4 sm:mb-0">
              显示 {filteredNews.length} / {newsData.length} 条新闻
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 border border-cyber-blue text-cyber-blue font-mono hover:bg-cyber-blue hover:text-black transition-all duration-300">
                订阅更新
              </button>
              <button className="px-6 py-2 border border-cyber-orange text-cyber-orange font-mono hover:bg-cyber-orange hover:text-black transition-all duration-300">
                RSS订阅
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 新闻详情模态框 */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-cyber-blue max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* 模态框头部 */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-mono ${typeConfig[selectedNews.type].bgColor} text-${typeConfig[selectedNews.type].color} border border-${typeConfig[selectedNews.type].color}/30`}>
                    {typeConfig[selectedNews.type].label}
                  </span>
                  {selectedNews.isNew && (
                    <span className="px-2 py-1 text-xs font-mono bg-red-500/20 text-red-400 border border-red-500/30">
                      NEW
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* 标题和日期 */}
              <h2 className="text-white text-xl font-medium mb-4">
                {selectedNews.title}
              </h2>
              <div className="text-gray-400 font-mono text-sm mb-6">
                发布时间: {formatDate(selectedNews.date)}
              </div>

              {/* 内容 */}
              <div className="text-gray-300 leading-relaxed">
                {selectedNews.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}