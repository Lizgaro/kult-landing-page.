import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "cyrillic"] })
const _playfair = Playfair_Display({ subsets: ["latin", "cyrillic"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "КУЛЬТ — Комьюнити деловой ассамблеи",
  description:
    "Первое в России место, где фаундеры растут без венчура, а лидеры мнений становятся совладельцами проектов.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
