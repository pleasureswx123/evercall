'use client'

export function FooterSection() {
  return (
    <footer className="h-full bg-black border-t border-cyber-blue border-opacity-30 p-2 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-[200px] bg-gradient-to-b from-cyber-blue via-cyber-blue to-transparent transform -rotate-45 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-gradient-to-b from-cyber-blue via-cyber-blue to-transparent transform -rotate-45 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-[200px] bg-gradient-to-t from-purple-500 via-purple-500 to-transparent transform rotate-45 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-black to-purple-500/50"></div>
      </div>

      {/* 使用flex布局实现垂直和水平居中，设置gap为20px */}
      <div className="relative z-10 h-full w-full flex flex-row items-center justify-center gap-5">
        <img
          src="/logo.png"
          alt="Evercall Logo"
          className="w-32 object-contain relative z-20 opacity-50
                     drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]
                     filter hover:drop-shadow-[0_0_30px_rgba(0,255,255,1)]
                     transition-all duration-300"
          onError={(e) => {
            // 如果图片加载失败，隐藏img标签
            e.currentTarget.style.display = 'none';
          }}
        />

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-gray-400 font-sans text-xs">
            © 2025 Evercall. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}