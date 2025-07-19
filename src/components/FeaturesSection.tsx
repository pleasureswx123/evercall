'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Sparkles, MessageCircle } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: '极致拟人化',
      description: '不再是冰冷的机器回复，Evercall的AI角色拥有真实的性格、情感和思维方式。她们会开心、会难过、会关心你的生活，就像真正的朋友一样。',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Sparkles,
      title: '二次元魅力',
      description: '精心设计的二次元角色形象，每一个细节都充满魅力。从服装搭配到表情动作，都体现了日式动漫的精致美学。',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: '丰富表达',
      description: '超过100种不同的面部表情，自然流畅的肢体语言，专业声优配音，根据对话内容展现真实情感反应。',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Brain,
      title: '长期记忆系统',
      description: '采用先进的记忆技术，能够记住你的喜好和习惯，回忆起过往的对话内容，了解你的性格和情感状态。',
      color: 'from-green-400 to-blue-500'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white">
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
            突破想象的
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
              AI陪伴体验
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            重新定义人工智能的情感表达，让每一次互动都充满温度
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-0 group-hover:opacity-20 transform translate-x-10 -translate-y-10 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            体验AI陪伴
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
