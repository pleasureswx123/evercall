'use client'

import { motion } from 'framer-motion'
import { Play, Smartphone, MessageCircle } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Play,
      title: '免费试用',
      description: '立即体验Evercall的魅力，无需注册即可开始对话',
      buttonText: '立即试用',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Smartphone,
      title: '下载应用',
      description: '支持iOS和Android平台，随时随地与你的AI伙伴互动',
      buttonText: '下载应用',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: MessageCircle,
      title: '联系我们',
      description: '有任何问题或建议，欢迎联系我们的客服团队',
      buttonText: '联系客服',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
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

  const cardVariants = {
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
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            开始你的
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
              AI陪伴之旅
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            多种体验方式，随时随地与你的AI伙伴互动
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative p-8 bg-gradient-to-br ${experience.bgColor} rounded-3xl border border-white/50 hover:border-white transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <experience.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {experience.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${experience.color} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    {experience.buttonText}
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🎉 限时优惠
            </h3>
            <p className="text-gray-600 mb-6">
              现在注册即可获得7天免费高级体验，解锁所有AI角色和功能
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              立即注册
            </motion.button>
          </div>
        </motion.div>

        {/* Platform Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">支持平台</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['iOS', 'Android', 'Web', 'Windows', 'macOS'].map((platform) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
