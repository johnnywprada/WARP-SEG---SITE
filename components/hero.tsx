"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-2 dga-glass-panel">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Proteja o que é mais importante com Inteligência
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              A D'GA DW oferece soluções completas em segurança eletrônica, Portaria Remota/Virtual e monitoramento 24h com tecnologia de ponta para condomínios e empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto h-auto py-3 text-base sm:text-lg px-4 sm:px-8 whitespace-normal text-center"
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
                className="w-full sm:w-auto h-auto py-3 text-base sm:text-lg px-4 sm:px-8 whitespace-normal text-center bg-popover"
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
              <div className="relative text-center p-6 bg-card rounded-xl border border-border/40 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(255,121,0,0.15)] hover:-translate-y-1 group">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="relative text-center p-6 bg-card rounded-xl border border-border/40 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(255,121,0,0.15)] hover:-translate-y-1 group">
                <div className="text-xl font-bold text-primary">DIVERSOS</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="relative text-center p-6 bg-card rounded-xl border border-border/40 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(255,121,0,0.15)] hover:-translate-y-1 group">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Técnico</div>
              </div>
              <div className="relative text-center p-6 bg-card rounded-xl border border-border/40 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(255,121,0,0.15)] hover:-translate-y-1 group">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify">
            {/* O SEGREDO ESTÁ AQUI: A div relative agora segura o mascote e as bolinhas juntas */}
            <div className="relative">
              
              {/* Pontos de luz orbitando ao redor do mascote */}
              <div className="absolute -inset-4 md:-inset-8 pointer-events-none z-0">
                <div className="absolute top-1/4 left-0 w-3 h-3 bg-primary rounded-full pulse-orange opacity-80"></div>
                <div 
                  className="absolute top-1/3 right-0 w-4 h-4 bg-accent rounded-full pulse-orange opacity-90" 
                  style={{ animationDelay: "1s" }}
                ></div>
                <div 
                  className="absolute bottom-1/3 left-4 w-2 h-2 bg-primary rounded-full pulse-orange opacity-70" 
                  style={{ animationDelay: "2s" }}
                ></div>
                <div 
                  className="absolute bottom-1/4 right-8 w-3 h-3 bg-secondary rounded-full pulse-orange opacity-80" 
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Botão com o mascote, posicionado acima (z-10) das luzes */}
              <button
                onClick={() => {
                  const aboutSection = document.getElementById("sobre")
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="cursor-pointer relative z-10 block"
              >
                <Image
                  src="/images/mascote-novo.png"
                  alt="Mascote D'GA DW - Robô de Segurança Eletrônica"
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