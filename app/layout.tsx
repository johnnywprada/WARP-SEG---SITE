import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "D'GA DW - Multiserviços em Eletrônica e Inteligência Artificial",
  description:
    "D'GA DW - Multiserviços em Eletrônica e Inteligência Artificial oferece vendas, instalação e manutenção de câmeras, alarmes, controle de acesso e Portaria Remota/Virtual.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/dgadwicon.png", sizes: "1071x808", type: "image/png" },
      { url: "/dgadw-2.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/dgadw-apple.png",
  }, 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  )
}
