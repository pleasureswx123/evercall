import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evercall - 连接平行世界',
  description: '拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验',
  keywords: 'AI陪伴, 二次元, 人工智能, 虚拟角色, 情感互动',
  authors: [{ name: 'Evercall Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Evercall - 连接平行世界',
    description: '拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evercall - 连接平行世界',
    description: '拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
