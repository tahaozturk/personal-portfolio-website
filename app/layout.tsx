import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Taha Öztürk's portfolio
export const metadata: Metadata = {
  title: "Taha Öztürk — Data Professional",
  description: "Data Engineer • ML Practitioner • Analytics & Fraud Detection Specialist",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "machine_learning.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "data.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "data.jpg",
        type: "image/jpg",
      },
    ],
    apple: "data.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
