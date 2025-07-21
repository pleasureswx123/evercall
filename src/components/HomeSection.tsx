'use client'

import { BackgroundPaths } from '@/components/BackgroundPaths'

export function HomeSection() {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 relative">
        {/* 静态资源图片logo - 带特效 */}
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

            {/* 内部发光点 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyber-blue rounded-full animate-pulse opacity-80"></div>

            {/* 四角发光点 */}
            <div className="absolute top-4 left-4 w-1 h-1 bg-cyber-orange rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-4 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        <div className="text-white text-5xl mb-12 max-w-4xl mx-auto">
          连接平行世界
        </div>
        <div className="text-gray-400 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验
        </div>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-cyber-blue text-black px-8 py-3 font-mono font-bold hover:bg-white transition-colors duration-300 cyber-border">
            立即体验
          </button>
          <button className="border border-cyber-blue text-cyber-blue px-8 py-3 font-mono hover:bg-cyber-blue hover:text-black transition-all duration-300">
            了解更多
          </button>
        </div>
      </div>
      {/* 动态背景路径 */}
      <BackgroundPaths />

      {/* 装饰性元素 */}
      <div className="absolute top-10 right-10 text-cyber-blue font-mono text-xs">
        HTTPS://EVERCALL.AI/
      </div>
    </section>
  )
}