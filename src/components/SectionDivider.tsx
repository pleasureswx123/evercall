'use client'

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'circuit' | 'wave'
  color?: 'blue' | 'orange' | 'green' | 'purple'
}

export function SectionDivider({ variant = 'default', color = 'blue' }: SectionDividerProps) {
  const colorClasses = {
    blue: 'border-cyber-blue bg-cyber-blue text-cyber-blue',
    orange: 'border-cyber-orange bg-cyber-orange text-cyber-orange',
    green: 'border-cyber-green bg-cyber-green text-cyber-green',
    purple: 'border-cyber-purple bg-cyber-purple text-cyber-purple'
  }

  if (variant === 'gradient') {
    return (
      <div className="relative h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-orange to-transparent opacity-30 animate-pulse"></div>
        
        {/* 移动的光束效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 w-20 animate-scan-line"></div>
        
        {/* 装饰性光点 */}
        <div className="absolute left-1/4 top-0 w-1 h-1 bg-cyber-blue rounded-full animate-pulse shadow-lg shadow-cyber-blue"></div>
        <div className="absolute right-1/4 top-0 w-1 h-1 bg-cyber-orange rounded-full animate-pulse shadow-lg shadow-cyber-orange" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute left-1/2 top-0 w-2 h-2 bg-cyber-green rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyber-green" style={{ animationDelay: '1s' }}></div>
        
        {/* 数据流粒子 */}
        <div className="absolute left-0 top-0 w-1 h-1 bg-cyber-blue rounded-full opacity-60 animate-data-particle"></div>
        <div className="absolute left-0 top-0 w-1 h-1 bg-cyber-orange rounded-full opacity-40 animate-data-particle" style={{ animationDelay: '1s' }}></div>
      </div>
    )
  }

  if (variant === 'circuit') {
    return (
      <div className="relative h-16 my-12 flex items-center justify-center overflow-hidden">
        {/* 主线路 */}
        <div className={`absolute w-full h-px ${colorClasses[color]} opacity-60`}></div>
        
        {/* 能量传输效果 */}
        <div className={`absolute w-4 h-1 ${colorClasses[color]} opacity-80 animate-energy-transfer`}></div>
        <div className={`absolute w-2 h-1 ${colorClasses[color]} opacity-60 animate-energy-transfer`} style={{ animationDelay: '1s' }}></div>
        
        {/* 电路节点 */}
        <div className="flex items-center space-x-8 relative z-10">
          <div className={`w-3 h-3 ${colorClasses[color]} rounded-full animate-circuit-node`}></div>
          <div className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-circuit-node`} style={{ animationDelay: '0.3s' }}></div>
          <div className={`w-4 h-4 border-2 ${colorClasses[color]} rounded-full animate-circuit-node`} style={{ animationDelay: '0.6s' }}></div>
          <div className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-circuit-node`} style={{ animationDelay: '0.9s' }}></div>
          <div className={`w-3 h-3 ${colorClasses[color]} rounded-full animate-circuit-node`} style={{ animationDelay: '1.2s' }}></div>
        </div>

        {/* 侧边连接线 */}
        <div className={`absolute left-1/4 top-1/2 w-px h-8 ${colorClasses[color]} opacity-40 transform -translate-y-1/2 animate-pulse`}></div>
        <div className={`absolute right-1/4 top-1/2 w-px h-8 ${colorClasses[color]} opacity-40 transform -translate-y-1/2 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
        
        {/* 电路板纹理 */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`border-r border-${color === 'blue' ? 'cyber-blue' : color === 'orange' ? 'cyber-orange' : color === 'green' ? 'cyber-green' : 'cyber-purple'} opacity-20`}></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div className="relative h-8 my-16 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 32" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`waveGradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor={color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M0,16 Q300,0 600,16 T1200,16"
            stroke={`url(#waveGradient-${color})`}
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M0,16 Q300,32 600,16 T1200,16"
            stroke={color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'}
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
          />
          <path
            d="M0,16 Q150,8 300,16 Q450,24 600,16 Q750,8 900,16 Q1050,24 1200,16"
            stroke={color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'}
            strokeWidth="0.5"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
        
        {/* 波形光点 */}
        <div className={`absolute left-1/4 top-1/2 w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse transform -translate-y-1/2 shadow-lg`} style={{ boxShadow: `0 0 10px ${color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'}` }}></div>
        <div className={`absolute right-1/4 top-1/2 w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse transform -translate-y-1/2 shadow-lg`} style={{ animationDelay: '0.5s', boxShadow: `0 0 10px ${color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'}` }}></div>
        <div className={`absolute left-1/2 top-1/2 w-1 h-1 ${colorClasses[color]} rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2`} style={{ animationDelay: '1s' }}></div>
        
        {/* 频谱效果 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-0.5 ${colorClasses[color]} opacity-40 animate-pulse`}
              style={{
                height: `${Math.random() * 8 + 4}px`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    )
  }

  // 默认样式
  return (
    <div className="relative h-px my-16 overflow-hidden">
      <div className={`absolute inset-0 ${colorClasses[color]} opacity-30`}></div>
      <div className={`absolute inset-0 ${colorClasses[color]} opacity-60 animate-pulse`}></div>
      
      {/* 中心发光点 */}
      <div className={`absolute left-1/2 top-0 w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2`}></div>
      
      {/* 两侧装饰 */}
      <div 
        className="absolute left-0 top-0 w-8 h-px opacity-80"
        style={{
          background: `linear-gradient(to right, transparent, ${color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'})`
        }}
      ></div>
      <div 
        className="absolute right-0 top-0 w-8 h-px opacity-80"
        style={{
          background: `linear-gradient(to left, transparent, ${color === 'blue' ? '#00ffff' : color === 'orange' ? '#ff6600' : color === 'green' ? '#00ff00' : '#9966ff'})`
        }}
      ></div>
    </div>
  )
}