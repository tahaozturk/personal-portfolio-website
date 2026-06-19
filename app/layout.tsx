import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


export const metadata: Metadata = {
  metadataBase: new URL("https://taha-ozturk.com"),
  title: "Taha Öztürk — Data Professional",
  description:
    "Data Engineer, AI & ML Engineer, and Data Analyst building end-to-end pipelines, machine learning systems, and data-driven products. Explore my apps, courses, and writing.",
  keywords: [
    "Taha Öztürk",
    "Data Engineer",
    "ML Engineer",
    "Machine Learning",
    "Data Analyst",
    "ETL",
    "Python",
    "Fraud Detection",
    "Analytics",
    "Portfolio",
  ],
  authors: [{ name: "Taha Öztürk", url: "https://taha-ozturk.com" }],
  openGraph: {
    type: "website",
    url: "https://taha-ozturk.com",
    title: "Taha Öztürk — Data Professional",
    description:
      "Data Engineer, AI & ML Engineer, and Data Analyst building end-to-end pipelines, machine learning systems, and data-driven products.",
    siteName: "Taha Öztürk",
  },
  twitter: {
    card: "summary",
    title: "Taha Öztürk — Data Professional",
    description:
      "Data Engineer, AI & ML Engineer, and Data Analyst building end-to-end pipelines, machine learning systems, and data-driven products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.png",
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
