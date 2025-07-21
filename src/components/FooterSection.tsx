'use client'

export function FooterSection() {
  return (
    <footer className="bg-black border-t border-cyber-blue border-opacity-30 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 联系信息 */}
          <div>
            <div className="text-cyber-blue font-mono text-sm mb-4">CONTACT US ://</div>
            <div className="space-y-2">
              <div className="text-white font-mono text-sm">contact@evercall.ai</div>
              <div className="text-white font-mono text-sm">400-123-4567</div>
              <div className="text-white font-mono text-sm">北京市朝阳区</div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <div className="text-cyber-orange font-mono text-sm mb-4">QUICK LINKS ://</div>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">首页</div>
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">角色</div>
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">技术</div>
              <div className="text-gray-400 hover:text-cyber-blue cursor-pointer transition-colors">体验</div>
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <div className="text-cyber-green font-mono text-sm mb-4">FOLLOW US ://</div>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">微博</div>
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">微信</div>
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">抖音</div>
              <div className="text-gray-400 hover:text-cyber-green cursor-pointer transition-colors">B站</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <div className="text-cyber-blue font-mono text-xs mb-4">
            EVERCALL// https://evercall.ai/
          </div>
          <div className="text-gray-500 font-mono text-xs">
            © 2025 Evercall. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  )
}