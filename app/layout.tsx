import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Anton } from 'next/font/google'
import { CustomCursor } from '@/components/custom-cursor'
import { NoiseOverlay } from '@/components/noise-overlay'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'ELIKYA BOTOMBA | Web Designer & Creative Polymath',
  description: 'Portfolio of Elikya Botomba - Web Designer, Motion Designer, Beatmaker & Creative Developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable} ${anton.variable}`}>
      <body className="font-sans antialiased cursor-none">
        <CustomCursor />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  )
}
