'use client'

export function FooterSection() {
  return (
    <footer className="bg-black border-t border-cyber-blue border-opacity-30 p-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-[200px] bg-gradient-to-b from-cyber-blue via-cyber-blue to-transparent transform -rotate-45 blur-3xl animate-pulse-slow"></div><div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-gradient-to-b from-cyber-blue via-cyber-blue to-transparent transform -rotate-45 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-[00px] bg-gradient-to-t from-purple-500 via-purple-500 to-transparent transform rotate-45 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-black to-purple-500/50"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 联系信息 */}
          <div>
            <div className="text-cyber-blue font-sans text-sm mb-4">CONTACT US ://</div>
            <div className="space-y-2">
              <div className="text-white font-sans text-sm">contact@evercall.ai</div>
              <div className="text-white font-sans text-sm">400-123-4567</div>
              <div className="text-white font-sans text-sm">北京市朝阳区</div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <div className="text-cyber-orange font-sans text-sm mb-4">QUICK LINKS ://</div>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">首页</div>
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">角色</div>
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">技术</div>
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">体验</div>
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <div className="text-cyber-green font-sans text-sm mb-4">FOLLOW US ://</div>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">微博</div>
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">微信</div>
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">抖音</div>
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">B站</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <img
            src="/logo.png"
            alt="Evercall Logo"
            className="w-32 mx-auto object-contain relative z-20 mb-2
                           drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]
                          filter"
            onError={(e) => {
              // 如果图片加载失败，隐藏img标签
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-gray-500 font-sans text-xs">
            © 2025 Evercall. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  )
}