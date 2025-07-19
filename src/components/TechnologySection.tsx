'use client'

import { motion } from 'framer-motion'
import { Cpu, Database, Mic, MessageSquare } from 'lucide-react'

const TechnologySection = () => {
  const technologies = [
    {
      icon: Cpu,
      title: '深度学习引擎',
      subtitle: '采用最新的大语言模型技术，结合情感计算和个性化算法',
      features: [
        '理解复杂的情感表达',
        '生成自然流畅的对话',
        '展现独特的个性特征',
        '适应用户的交流风格'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: '记忆网络系统',
      subtitle: '创新的记忆架构设计，实现长期记忆存储和检索',
      features: [
        '长期记忆存储和检索',
        '情感记忆关联',
        '个性化偏好学习',
        '关系发展追踪'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: '多模态交互',
      subtitle: '支持多种交互方式，提供丰富的沟通体验',
      features: [
        '文字对话',
        '语音通话',
        '表情互动',
        '动作反馈'
      ],
      color: 'from-green-500 to-teal-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            领先的AI技术，
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-400">
              真实的情感体验
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            先进的技术架构，为每一次互动提供强大的支撑
          </p>
        </motion.div>

        {/* Technology Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Icon and Title */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl mb-6`}
                >
                  <tech.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {tech.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {tech.subtitle}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: featureIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`} />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600 backdrop-blur-sm">
                    <div className="space-y-4">
                      {/* Animated Bars */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${60 + i * 10}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-3 bg-gradient-to-r ${tech.color} rounded-full`}
                        />
                      ))}
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-60" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-40" />
                  </div>

                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 blur-xl rounded-3xl`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '99.9%', label: '情感识别准确率' },
            { number: '100+', label: '表情动作类型' },
            { number: '24/7', label: '全天候陪伴' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border border-gray-600"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection
