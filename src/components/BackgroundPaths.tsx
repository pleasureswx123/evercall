'use client'

import { motion } from 'framer-motion'

interface FloatingPathsProps {
  position: number
}

function FloatingPaths({ position }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(0,255,255,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg
        className="w-full h-full text-cyber-blue"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// 流动波浪路径 - 类似图片中的效果
function FlowingWaves() {
  const waves = Array.from({ length: 12 }, (_, i) => {
    const amplitude = 80 + i * 10
    const frequency = 0.01 + i * 0.002
    const phase = i * 0.5
    const yOffset = 100 + i * 40

    // 创建更自然的波浪路径
    const points = []
    for (let x = -200; x <= 1400; x += 20) {
      const y = yOffset + amplitude * Math.sin(frequency * x + phase)
      points.push(`${x},${y}`)
    }

    return {
      id: `wave-${i}`,
      d: `M${points.join(' L')}`,
      opacity: 0.03 + i * 0.01,
      width: 0.3 + i * 0.05,
      delay: i * 0.3,
      duration: 30 + i * 5,
    }
  })

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
            <stop offset="20%" stopColor="rgba(0, 255, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="80%" stopColor="rgba(0, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
          </linearGradient>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {waves.map((wave) => (
          <motion.path
            key={wave.id}
            d={wave.d}
            stroke="url(#waveGradient)"
            strokeWidth={wave.width}
            fill="none"
            strokeLinecap="round"
            filter="url(#waveGlow)"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: [0, 1, 0.7, 0],
              opacity: [0, wave.opacity * 5, wave.opacity * 3, 0], // 增加不透明度
              strokeDashoffset: [0, -50, -100, -150],
            }}
            transition={{
              duration: wave.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: wave.delay,
            }}
            style={{
              strokeDasharray: "10 20",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// 神经网络风格的路径
function NeuralPaths() {
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`
  }))

  // 明确定义 connections 类型
  const connections: { id: string; d: string; delay: number }[] = []

  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false
      const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
      return distance < 150 && Math.random() > 0.7
    })

    nearbyNodes.forEach(target => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 8
      })
    })
  })

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30 text-cyber-blue z-10"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6,
            delay: conn.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="1.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </svg>
  )
}

// 精细曲线路径 - 更接近图片效果
function RefinedCurves() {
  const curves = Array.from({ length: 16 }, (_, i) => {
    const layer = Math.floor(i / 4)
    const index = i % 4
    const baseY = 150 + layer * 120
    const amplitude = 60 + layer * 20
    const xOffset = index * 300

    return {
      id: `curve-${i}`,
      d: `M${-100 + xOffset},${baseY}
          C${100 + xOffset},${baseY - amplitude}
          ${200 + xOffset},${baseY + amplitude}
          ${400 + xOffset},${baseY}
          S${600 + xOffset},${baseY - amplitude * 0.7}
          ${800 + xOffset},${baseY}
          T${1200 + xOffset},${baseY}`,
      opacity: 0.04 + (layer * 0.01),
      width: 0.4 + layer * 0.1,
      delay: i * 0.4,
      duration: 20 + layer * 8,
    }
  })

  return (
    <div className="absolute inset-0 pointer-events-none z-15">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
            <stop offset="25%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="75%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
          </linearGradient>
        </defs>
        {curves.map((curve) => (
          <motion.path
            key={curve.id}
            d={curve.d}
            stroke="url(#curveGradient)"
            strokeWidth={curve.width}
            fill="none"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: [0, 0.8, 1, 0.2, 0],
              opacity: [0, curve.opacity * 3, curve.opacity * 5, curve.opacity * 3, 0], // 增加不透明度
            }}
            transition={{
              duration: curve.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: curve.delay,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// 数据流路径
function DataStreamPaths() {
  const streams = Array.from({ length: 6 }, (_, i) => {
    const startY = 120 + i * 80
    const controlY1 = startY + (i % 2 === 0 ? -40 : 40)
    const controlY2 = startY + (i % 2 === 0 ? 40 : -40)

    return {
      id: `stream-${i}`,
      d: `M-150,${startY}
          Q150,${controlY1} 400,${startY}
          Q650,${controlY2} 950,${startY}`,
      delay: i * 0.8,
      opacity: 0.15 + i * 0.02,
    }
  })

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40 z-20"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
          <stop offset="50%" stopColor="rgba(0, 255, 255, 0.6)" />
          <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
        </linearGradient>
      </defs>
      {streams.map((stream) => (
        <motion.path
          key={stream.id}
          d={stream.d}
          fill="none"
          stroke="url(#streamGradient)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="8,12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            strokeDashoffset: [0, -20, -40],
            opacity: [0, stream.opacity * 3, 0], // 增加不透明度
          }}
          transition={{
            duration: 12,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </svg>
  )
}

// 网格路径
function GridPaths() {
  const gridLines = []

  // 垂直线
  for (let x = 0; x <= 800; x += 50) {
    gridLines.push({
      id: `v-${x}`,
      d: `M${x},0 L${x},600`,
      delay: (x / 50) * 0.1
    })
  }

  // 水平线
  for (let y = 0; y <= 600; y += 50) {
    gridLines.push({
      id: `h-${y}`,
      d: `M0,${y} L800,${y}`,
      delay: (y / 50) * 0.1
    })
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 text-cyber-blue" viewBox="0 0 800 600">
      {gridLines.map((line) => (
        <motion.path
          key={line.id}
          d={line.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1],
            opacity: [0, 0.3, 0.1]
          }}
          transition={{
            duration: 2,
            delay: line.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  )
}

// 六边形网格
function HexagonGrid() {
  const hexagons = []
  const hexSize = 30
  const rows = 8
  const cols = 12

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexSize * 1.5 + (row % 2) * hexSize * 0.75
      const y = row * hexSize * 0.866

      if (Math.random() > 0.7) { // 只显示部分六边形
        hexagons.push({
          id: `hex-${row}-${col}`,
          x,
          y,
          delay: (row + col) * 0.1
        })
      }
    }
  }

  const hexPath = "M15,0 L30,8.66 L30,25.98 L15,34.64 L0,25.98 L0,8.66 Z"

  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 text-cyber-blue" viewBox="0 0 600 400">
      {hexagons.map((hex) => (
        <motion.path
          key={hex.id}
          d={hexPath}
          transform={`translate(${hex.x}, ${hex.y})`}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            delay: hex.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// 扫描线效果
function ScanLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* 水平扫描线 */}
      <motion.div
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30"
        initial={{ top: '-2px' }}
        animate={{ top: '100%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3
        }}
      />

      {/* 垂直扫描线 */}
      <motion.div
        className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-cyber-orange to-transparent opacity-20"
        initial={{ left: '-2px' }}
        animate={{ left: '100%' }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 5,
          delay: 2
        }}
      />
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* 主要浮动路径 - 双向流动 */}
      <div className="opacity-80">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* 基础网格背景 - 降低透明度 */}
      <div className="opacity-80">
        <GridPaths />
      </div>

      {/* 主要流动波浪 - 核心效果 */}
      {/* <FlowingWaves /> */}

      {/* 精细曲线路径 */}
      {/* <RefinedCurves /> */}


      {/* 数据流路径 */}
      {/* <DataStreamPaths /> */}

      {/* 神经网络路径 - 降低透明度 */}
      <div className="opacity-40">
        {/* <NeuralPaths /> */}
      </div>

      {/* 扫描线效果 */}
      {/* <ScanLines /> */}

      {/* 多层渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

      {/* 增强的科技感光效 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 主要光点 */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyber-blue rounded-full animate-pulse opacity-70 shadow-lg shadow-cyber-blue/50"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-cyber-orange rounded-full animate-pulse opacity-50 shadow-lg shadow-cyber-orange/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-cyber-blue rounded-full animate-pulse opacity-60 shadow-lg shadow-cyber-blue/50" style={{ animationDelay: '2s' }}></div>

        {/* 额外的小光点 */}
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyber-blue rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyber-orange rounded-full animate-pulse opacity-35" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-cyber-blue rounded-full animate-pulse opacity-45" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* 动态光晕效果 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyber-blue/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyber-orange/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  )
}
