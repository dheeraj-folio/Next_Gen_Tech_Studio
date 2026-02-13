import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Figtree } from 'next/font/google'

import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  title: 'Next Gen Tech Studio | 3D & Digital Design',
  description:
    'We specialize in 3D visualization, animation, CGI advertising, interior design, and digital design solutions for modern brands.',
}

export const viewport: Viewport = {
  themeColor: '#F8FAFC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <head>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
          type="module"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
