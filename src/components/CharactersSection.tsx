'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, BookOpen } from 'lucide-react'

const CharactersSection = () => {
  const characters = [
    {
      id: 1,
      name: '小樱',
      nameEn: 'Sakura',
      personality: '温柔体贴，善解人意',
      specialty: '倾听和安慰，擅长情感支持',
      hobbies: '阅读、音乐、烹饪',
      quote: '没关系的，我会一直陪着你~',
      icon: Heart,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      avatar: '🌸'
    },
    {
      id: 2,
      name: '星野',
      nameEn: 'Hoshino',
      personality: '活泼开朗，充满活力',
      specialty: '聊天互动，带来欢乐',
      hobbies: '游戏、动漫、运动',
      quote: '今天也要元气满满哦！',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      avatar: '⭐'
    },
    {
      id: 3,
      name: '雪音',
      nameEn: 'Yukine',
      personality: '冷静理智，知识渊博',
      specialty: '学习辅导，问题解答',
      hobbies: '科学、技术、哲学',
      quote: '让我们一起探索知识的海洋吧。',
      icon: BookOpen,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      avatar: '❄️'
    }
  ]

  return (
    <section id="characters" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            遇见你的
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
              专属伙伴
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            每个AI角色都有独特的性格和魅力，找到最适合你的那一个
          </p>
        </motion.div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: character.id * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative p-8 bg-gradient-to-br ${character.bgColor} rounded-3xl border border-white/50 hover:border-white transition-all duration-300 overflow-hidden`}>
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${character.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {character.avatar}
                  </div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${character.color} rounded-xl absolute -top-2 -right-2 group-hover:rotate-12 transition-transform duration-300`}>
                    <character.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Character Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {character.name}
                    <span className="text-lg text-gray-500 ml-2">({character.nameEn})</span>
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">{character.personality}</p>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">特长：</span>
                    <span className="text-sm text-gray-600">{character.specialty}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">爱好：</span>
                    <span className="text-sm text-gray-600">{character.hobbies}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                    <p className="text-gray-700 italic text-center">
                      "{character.quote}"
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${character.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              </div>

              {/* Interaction Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-4 bg-gradient-to-r ${character.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
              >
                与{character.name}聊天
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">还有更多角色等你发现...</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            探索所有角色
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CharactersSection
