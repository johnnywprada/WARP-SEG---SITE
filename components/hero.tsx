"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full pulse-red"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-cyan-300 rounded-full pulse-red"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-500 rounded-full pulse-red"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-200 rounded-full pulse-red"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Proteja o que é mais importante para você
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              A WARP oferece soluções completas em segurança eletrônica com tecnologia de ponta, instalação profissional
              e suporte especializado para residências e empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => {
                  const contactSection = document.getElementById("contato")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Solicitar Orçamento Gratuito
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
                onClick={() => {
                  const servicesSection = document.getElementById("servicos")
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-1xl font-bold text-primary">DIVERSOS</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Técnico</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <button
                onClick={() => {
                  const aboutSection = document.getElementById("sobre")
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="cursor-pointer"
              >
                <Image
                  src="/images/mascote-novo.png"
                  alt="Mascote WARP - Robô de Segurança Eletrônica"
                  width={562}
                  height={806}
                  className="w-full max-w-sm h-auto floating-animation hover:scale-105 transition-transform duration-300"
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
