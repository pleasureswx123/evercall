# Evercall 官网

完全仿照 https://ak.gryphline.com/ (明日方舟官网) 风格设计的科技感 AI 陪伴平台官网。

## 🌟 设计特色

- **科技风格**: 深色主题 + 霓虹色彩 + 终端字体
- **明日方舟风格**: 完全复刻原网站的布局和视觉效果
- **赛博朋克美学**: 网格背景、扫描线、全息效果
- **分屏布局**: 左侧固定导航 + 右侧内容区域
- **动态效果**: 加载动画、霓虹发光、数据流效果
- **响应式设计**: 适配各种屏幕尺寸

## 🎨 视觉元素

- **配色方案**: 黑色背景 + 青色主色 + 橙色辅色
- **字体**: Orbitron (标题) + Inter (正文) + Courier New (代码)
- **特效**: 霓虹发光、扫描线、全息投影、故障效果
- **布局**: 固定侧边栏导航 + 全屏内容区块

## 🚀 技术栈

- **框架**: Next.js 14 (React 18)
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义 CSS
- **字体**: Google Fonts (Orbitron, Inter)
- **包管理**: pnpm

## 📦 安装和运行

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm dev
```

3. 打开浏览器访问：
```
http://localhost:3000
```

## 🏗️ 项目结构

```
src/
├── app/
│   ├── layout.tsx          # 根布局 + 元数据配置
│   ├── page.tsx            # 主页面 (仿明日方舟风格)
│   └── globals.css         # 全局样式 + 科技特效
└── components/             # (暂时移除，使用单页面设计)
```

## 🎨 页面内容 (完全仿照明日方舟)

### 加载界面
- 科技感加载动画
- 进度条显示
- 终端风格文字
- "EVERCALL// https://evercall.ai/" 标识

### 侧边导航 (固定左侧)
- 垂直 EVERCALL 标识
- 导航菜单：INDEX(首页)、CHARACTER(角色)、NEWS(新闻)、TECH(技术)、EXPERIENCE(体验)、ABOUT(关于)
- 中英文双语显示

### 主要区块
1. **首页标题区**: EVERCALL 大标题 + AI COMPANION SYSTEM + 连接平行世界
2. **新闻公告区**: BREAKING NEWS + 时间戳 + 公告列表 + READ MORE 按钮
3. **角色展示区**: AI COMPANION PROFILE + 角色信息 + 角色切换 + 角色图片
4. **技术/世界观区**: 技术模块展示 + WORLD 返回 + GALLERY/VIDEO 选项
5. **体验区**: ABOUT EVERCALL + 免费试用 + 下载应用 + MORE CONTENT
6. **页脚**: 版权信息 + 网站标识

## 🎯 设计特点 (明日方舟风格)

- **深色主题**: 纯黑背景 + 深灰色区块
- **霓虹色彩**: 青色主色 + 橙色辅色 + 绿色点缀
- **科技字体**: Orbitron 标题字体 + Courier New 代码字体
- **网格背景**: 半透明青色网格图案
- **边框效果**: 细线边框 + 悬停发光
- **终端美学**: 代码风格的文字排版

## 📱 响应式支持

- 桌面端 (1024px+)
- 平板端 (768px - 1023px)
- 移动端 (< 768px)

## 🎮 特殊效果

### CSS 动画效果
- **霓虹发光**: `neon-blue`, `neon-orange` 类
- **扫描线**: `scan-line` 动画效果
- **数据流**: `data-stream` 背景动画
- **全息投影**: `hologram` 效果
- **故障效果**: `glitch-text` 文字故障
- **脉冲发光**: `animate-pulse-glow` 动画

### 交互效果
- 悬停边框变色 (灰色 → 青色)
- 按钮悬停背景变化
- 角色切换高亮显示
- 导航项激活状态

## 🔧 自定义配置

### Tailwind 配置 (`tailwind.config.js`)
- **科技色彩**: cyber-blue, cyber-orange, cyber-green 等
- **字体家族**: Orbitron, Inter, Courier New
- **动画效果**: pulse-glow, scan-line, glitch 等
- **背景图案**: cyber-grid 网格背景

### 全局样式 (`globals.css`)
- 深色主题基础样式
- 科技感滚动条
- 霓虹发光效果
- 终端文字样式
- 各种动画关键帧

## 🌐 在线预览

本地开发服务器: http://localhost:3000

## 📄 许可证

MIT License

---

**注意**: 本项目完全仿照明日方舟官网 (https://ak.gryphline.com/) 的设计风格，仅用于学习和展示目的。
