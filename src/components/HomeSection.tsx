'use client'

import { BackgroundPaths } from '@/components/BackgroundPaths'

export function HomeSection() {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* 动态背景 */}
      <div className="absolute inset-0">
        {/* 光线效果 - 增强版 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-gradient-to-b from-cyber-blue via-cyber-blue to-transparent transform -rotate-45 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-[500px] bg-gradient-to-t from-purple-500 via-purple-500 to-transparent transform rotate-45 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* 电路板效果 */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#00ffff" strokeWidth="0.5" />
              <path d="M30,10 L30,30 L50,30 L50,50 L70,50 L70,90" fill="none" stroke="#00ffff" strokeWidth="0.5" />
              <path d="M10,50 L30,50 L30,70 L50,70 L50,90" fill="none" stroke="#00ffff" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="3" fill="#00ffff" className="animate-circuit-pulse" />
              <circle cx="50" cy="50" r="3" fill="#00ffff" className="animate-circuit-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="30" cy="70" r="3" fill="#00ffff" className="animate-circuit-pulse" style={{ animationDelay: '1s' }} />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>

      <div className="text-center z-10 relative">
        {/* 静态资源图片logo - 带增强特效 */}
        <div className="mb-6 relative group logo-container transform-3d">
          {/* Logo容器 */}
          <div className="relative z-10 p-8">
            <img
              src="/logo.png"
              alt="Evercall Logo"
              className="w-128 mx-auto object-contain relative z-20 
                       drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                       hover:drop-shadow-[0_0_40px_rgba(0,255,255,1)] 
                       transition-all duration-500 
                       hover:scale-110 
                       animate-breathe
                       filter hover:brightness-125"
              onError={(e) => {
                // 如果图片加载失败，隐藏img标签
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* 四角发光点 - 增强版 */}
            <div className="absolute top-4 left-4 w-1 h-1 bg-cyber-orange rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-4 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

          </div>
        </div>

        {/* 标题 - 带打字机效果 */}
        <div className="text-white text-5xl mb-12 max-w-4xl mx-auto overflow-hidden">
          连接平行世界
        </div>

        {/* 副标题 - 带淡入效果 */}
        <div className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '2s' }}>
          拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验
        </div>

        {/* CTA 按钮 - 增强版 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-cyber-blue text-black px-8 py-3 font-sans font-bold hover:bg-white transition-all duration-300 cyber-border animate-button-glow relative overflow-hidden group">
            <span className="relative z-10">立即体验</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
          <button className="border border-cyber-blue text-cyber-blue px-8 py-3 font-sans hover:bg-cyber-blue hover:text-black transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">了解更多</span>
            <span className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
        </div>
      </div>

      {/* 动态背景路径 */}
      <BackgroundPaths />

      {/* 装饰性元素 - 增强版 */}
      <div className="absolute top-10 right-10 text-cyber-blue font-sans text-xs animate-text-flicker">
        HTTPS://EVERCALL.AI/
      </div>

    </section>
  )
}