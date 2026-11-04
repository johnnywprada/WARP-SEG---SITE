"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Settings, Users, FileText } from "lucide-react"

const portariaServices = [
  {
    icon: Monitor,
    title: "Atendimento Remoto 24h",
    description:
      "Substitua a portaria física por uma central de monitoramento ininterrupta. Reduza em até 60% os custos com folha de pagamento do condomínio.",
    benefits: [
      "Atendimento 24 horas por dia, 7 dias por semana",
      "Redução drástica na taxa condominial",
      "Gravação de áudio e vídeo de todos os atendimentos",
      "Eliminação de passivos trabalhistas",
    ],
  },
  {
    icon: Settings,
    title: "Controle de Acesso Inteligente",
    description: "Modernização das entradas com tecnologia de ponta para garantir agilidade aos moradores e bloqueio a invasores.",
    benefits: [
      "Reconhecimento facial e biometria",
      "Tags veiculares (RFID) para abertura de portões",
      "Aplicativo exclusivo para moradores",
      "Geração de QR Code para visitantes",
    ],
  },
  {
    icon: Users,
    title: "Transição e Treinamento",
    description: "Garantimos uma mudança de sistema suave e sem traumas para os moradores, síndico e zeladoria.",
    benefits: [
      "Apresentação do projeto em assembleia",
      "Período de operação assistida",
      "Treinamento prático para zeladores",
      "Suporte na adaptação dos moradores",
    ],
  },
  {
    icon: FileText,
    title: "Manutenção e Contingência",
    description: "Infraestrutura robusta projetada para nunca falhar, com equipe técnica de prontidão para intervenções rápidas.",
    benefits: [
      "Nobreaks e geradores para falta de energia",
      "Links de internet redundantes",
      "Manutenção preventiva e corretiva",
      "Equipe de acionamento tático em emergências",
    ],
  },
]

export function Consulting() {
  return (
    <section id="portaria-virtual" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Portaria Virtual para Condomínios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Aumente o nível de segurança do seu condomínio e reduza os custos operacionais com a nossa solução completa de Portaria Inteligente 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portariaServices.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 bg-white border-border hover:border-primary hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-pretty mt-4">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Diferenciais:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Pronto para modernizar seu condomínio?</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-pretty">
                Nossa equipe fará uma análise de risco sem custo e desenhará um projeto sob medida para a infraestrutura do seu prédio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto h-auto py-3 text-base sm:text-lg px-4 sm:px-8 whitespace-normal text-center"
                onClick={() => {
                  const contactSection = document.getElementById("contato")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Solicitar Orçamento para o Condomínio
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
