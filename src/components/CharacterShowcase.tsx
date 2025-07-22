'use client'

import { useState, useEffect } from 'react'

interface Character {
  id: string
  name: string
  nameEn: string
  personality: string
  specialty: string
  hobbies: string
  quote: string
  color: string
  emoji: string
}

const characters: Character[] = [
  {
    id: 'sakura',
    name: '小樱',
    nameEn: 'Sakura',
    personality: '温柔体贴，善解人意',
    specialty: '倾听和安慰，擅长情感支持',
    hobbies: '阅读、音乐、烹饪',
    quote: '没关系的，我会一直陪着你~',
    color: 'pink',
    emoji: '🌸'
  },
  {
    id: 'hoshino',
    name: '星野',
    nameEn: 'Hoshino',
    personality: '活泼开朗，充满活力',
    specialty: '聊天互动，带来欢乐',
    hobbies: '游戏、动漫、运动',
    quote: '今天也要元气满满哦！',
    color: 'orange',
    emoji: '⭐'
  },
  {
    id: 'yukine',
    name: '雪音',
    nameEn: 'Yukine',
    personality: '冷静理智，知识渊博',
    specialty: '学习辅导，问题解答',
    hobbies: '科学、技术、哲学',
    quote: '让我们一起探索知识的海洋吧。',
    color: 'blue',
    emoji: '❄️'
  }
]

export function CharacterShowcase() {
  const [activeCharacter, setActiveCharacter] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCharacter((prev) => (prev + 1) % characters.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const handleCharacterChange = (index: number) => {
    if (index !== activeCharacter && !isAnimating) {
      setIsAnimating(true)
      setActiveCharacter(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const currentCharacter = characters[activeCharacter]

  return (
    <section id="characters" className="min-h-screen bg-black border-t border-cyber-blue border-opacity-30 relative overflow-hidden">
      {/* 动态背景 - 日照香炉生紫烟效果 */}
      <div className="absolute inset-0">
        {/* 基础渐变背景 - 增强版 */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-indigo-900/20 to-purple-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>

        {/* 动态光晕效果 */}
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* 光线效果 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-gradient-to-b from-cyber-blue/10 via-cyber-blue/5 to-transparent transform -rotate-45 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-[500px] bg-gradient-to-t from-purple-500/10 via-purple-500/5 to-transparent transform rotate-45 blur-3xl"></div>
        </div>

        {/* 粒子效果 */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={i + 'cyan'}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="text-cyber-blue font-sans text-sm mb-2">AI COMPANIONS ://</div>
            <div className="text-white font-orbitron text-4xl mb-4">角色展示</div>
            <div className="text-gray-400 max-w-2xl mx-auto">
              每个角色都拥有独特的性格、专长和记忆，为你带来不同的陪伴体验
            </div>
          </div>

          {/* 角色展示区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧 - 角色信息 */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-[-20px]' : 'opacity-100 transform translate-x-0'}`}>
              {/* 角色名称 */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="text-6xl mr-4">{currentCharacter.emoji}</div>
                  <div>
                    <div className="text-white font-orbitron text-3xl">{currentCharacter.nameEn}</div>
                    <div className="text-cyber-blue font-orbitron text-2xl">{currentCharacter.name}</div>
                  </div>
                </div>
              </div>

              {/* 角色详情 */}
              <div className="space-y-6">
                <div className="border-l-2 border-cyber-blue pl-4">
                  <div className="text-cyber-blue font-sans text-xs mb-1">性格 PERSONALITY</div>
                  <div className="text-white">{currentCharacter.personality}</div>
                </div>

                <div className="border-l-2 border-cyber-orange pl-4">
                  <div className="text-cyber-orange font-sans text-xs mb-1">特长 SPECIALTY</div>
                  <div className="text-white">{currentCharacter.specialty}</div>
                </div>

                <div className="border-l-2 border-cyber-green pl-4">
                  <div className="text-cyber-green font-sans text-xs mb-1">爱好 HOBBIES</div>
                  <div className="text-white">{currentCharacter.hobbies}</div>
                </div>

                {/* 角色语录 */}
                <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-gray-400 font-sans text-xs mb-2">SIGNATURE QUOTE</div>
                  <div className="text-white italic text-lg">"{currentCharacter.quote}"</div>
                </div>
              </div>

              {/* 交互按钮 */}
              <div className="mt-8 flex space-x-4">
                <button className="bg-cyber-blue text-black px-6 py-3 font-sans font-bold hover:bg-white transition-all duration-300 transform hover:scale-105">
                  开始对话
                </button>
                <button className="border border-cyber-blue text-cyber-blue px-6 py-3 font-sans hover:bg-cyber-blue hover:text-black transition-all duration-300">
                  了解更多
                </button>
              </div>
            </div>

            {/* 右侧 - 角色展示区域 */}
            <div className="flex flex-col items-center">
              {/* 角色头像区域 */}
              <div className="relative mb-8">
                <div className="w-80 h-80 relative">
                  {/* 外层发光环 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>

                  {/* 角色容器 */}
                  <div className="absolute inset-4 border-2 border-cyber-blue/50 rounded-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-8xl animate-bounce-slow">{currentCharacter.emoji}</div>
                  </div>

                  {/* 装饰性元素 */}
                  <div className="absolute top-4 right-4 text-cyber-blue font-sans text-xs">
                    {currentCharacter.nameEn.toUpperCase()}.AI
                  </div>

                  {/* 旋转装饰环 */}
                  <div className="absolute inset-0 border border-cyber-blue/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 border border-cyber-orange/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                </div>
              </div>

              {/* 角色切换器 */}
              <div className="flex space-x-4">
                {characters.map((character, index) => (
                  <button
                    key={character.id}
                    onClick={() => handleCharacterChange(index)}
                    className={`w-16 h-16 border-2 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 ${index === activeCharacter
                      ? 'border-cyber-blue bg-cyber-blue/20 text-cyber-blue'
                      : 'border-gray-600 hover:border-cyber-blue text-gray-400 hover:text-cyber-blue'
                      }`}
                  >
                    <div className="text-center">
                      <div className="text-lg">{character.emoji}</div>
                      <div className="text-xs font-sans">{character.name}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* 进度指示器 */}
              <div className="flex space-x-2 mt-6">
                {characters.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 transition-all duration-300 ${index === activeCharacter ? 'w-8 bg-cyber-blue' : 'w-2 bg-gray-600'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}