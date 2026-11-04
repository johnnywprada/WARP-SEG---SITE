"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/D'GA DW-logo-novo.png"
                alt="D'GA DW - Multiserviços em Eletrônica e Inteligência Artificial"
                width={448}
                height={200}
                quality={100}
                className="h-20 w-auto"
              />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#portaria-virtual" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Portaria Virtual
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button onClick={scrollToContact}>Solicitar Orçamento</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#servicos" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Serviços
              </a>
              <a
                href="#portaria-virtual"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Consultoria
              </a>
              <a href="#sobre" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Sobre
              </a>
              <a href="#contato" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                Contato
              </a>
              <div className="px-3 py-2">
                <Button className="w-full" onClick={scrollToContact}>
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
