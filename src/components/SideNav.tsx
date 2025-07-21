'use client'

import { useState, useEffect } from 'react'

interface SideNavProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function SideNav({ activeSection, scrollToSection }: SideNavProps) {
  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-black bg-opacity-80 border-r border-cyber-blue border-opacity-30 z-50">
      <div className="flex flex-col items-center py-8 space-y-8">
        <div className="relative group">
          <div className="flex items-center justify-center relative">
            {/* 发光背景效果 */}
            <div className="absolute inset-0 bg-cyber-blue opacity-20 blur-md rounded-full animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Logo图片 */}
            <img
              src="/logo.png"
              alt="Evercall Logo"
              className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(0,255,255,0.8)] transition-all duration-300 hover:scale-110 animate-pulse"
              onError={(e) => {
                // 如果图片加载失败，显示文字作为备用
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'text-cyber-blue font-orbitron text-xs writing-mode-vertical animate-pulse';
                fallback.textContent = 'EVERCALL';
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />

            {/* 边框发光效果 */}
            <div className="absolute inset-0 border border-cyber-blue opacity-30 rounded-full animate-ping"></div>
          </div>

          {/* 文字也添加发光效果 */}
          <div className="text-cyber-blue font-mono text-xs mt-2 text-center drop-shadow-[0_0_4px_rgba(0,255,255,0.8)] animate-pulse">
            EVERCALL
          </div>
        </div>

        <div className="flex flex-col space-y-6 text-xs font-mono">
          <button
            onClick={() => scrollToSection('home')}
            className={`nav-item transition-all duration-500 transform hover:scale-105 ${activeSection === 'home' ? 'text-cyber-blue nav-active scale-110' : 'text-gray-400 hover:text-cyber-blue'}`}
          >
            <div>INDEX</div>
            <div className="text-white">首页</div>
          </button>
          <button
            onClick={() => scrollToSection('characters')}
            className={`nav-item transition-all duration-500 transform hover:scale-105 ${activeSection === 'characters' ? 'text-cyber-blue nav-active scale-110' : 'text-gray-400 hover:text-cyber-blue'}`}
          >
            <div>CHARACTER</div>
            <div className="text-white">角色</div>
          </button>
          <button
            onClick={() => scrollToSection('news')}
            className={`nav-item transition-all duration-500 transform hover:scale-105 ${activeSection === 'news' ? 'text-cyber-blue nav-active scale-110' : 'text-gray-400 hover:text-cyber-blue'}`}
          >
            <div>NEWS</div>
            <div className="text-white">新闻</div>
          </button>
          <button
            onClick={() => scrollToSection('tech')}
            className={`nav-item transition-all duration-500 transform hover:scale-105 ${activeSection === 'tech' ? 'text-cyber-blue nav-active scale-110' : 'text-gray-400 hover:text-cyber-blue'}`}
          >
            <div>TECH</div>
            <div className="text-white">技术</div>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`nav-item transition-all duration-500 transform hover:scale-105 ${activeSection === 'experience' ? 'text-cyber-blue nav-active scale-110' : 'text-gray-400 hover:text-cyber-blue'}`}
          >
            <div>EXPERIENCE</div>
            <div className="text-white">体验</div>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-item transition-all duration-500 transform hover:scale-105 ${activeSection === 'about' ? 'text-cyber-blue nav-active scale-110' : 'text-gray-400 hover:text-cyber-blue'}`}
          >
            <div>ABOUT</div>
            <div className="text-white">关于</div>
          </button>
        </div>
      </div>
    </nav>
  )
}