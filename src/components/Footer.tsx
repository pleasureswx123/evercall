'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Users } from 'lucide-react'

const Footer = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'support@evercall.ai',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      label: '微信',
      value: 'EvercallAI',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      label: 'QQ群',
      value: '123456789',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const quickLinks = [
    { name: '首页', href: '#home' },
    { name: '角色', href: '#characters' },
    { name: '技术', href: '#technology' },
    { name: '体验', href: '#experience' }
  ]

  const legalLinks = [
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '用户协议', href: '#' },
    { name: '帮助中心', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold">Evercall</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                连接平行世界，拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验。
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.div
                    key={contact.label}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">快速导航</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">法律信息</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">订阅我们的更新</h3>
            <p className="text-gray-300 mb-6">第一时间获取新角色发布和功能更新</p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                订阅
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Evercall. 保留所有权利。
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">关注我们</span>
              <div className="flex gap-3">
                {['微博', '抖音', 'B站'].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-200"
                  >
                    <span className="text-xs font-medium">{platform[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
    </footer>
  )
}

export default Footer
