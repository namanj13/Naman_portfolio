import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Naman Jain - Portfolio",
  description: "Personal portfolio of Naman Jain, Computer Science Engineering Student",
    generator: 'v0.dev'
}

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
  <html lang="en">
    <body suppressHydrationWarning={true}>{children}</body>
  </html>
);
  }
