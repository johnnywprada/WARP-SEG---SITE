"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Settings, Users, FileText } from "lucide-react"

const consultingServices = [
  {
    icon: Monitor,
    title: "Sala de Monitoramento 24h",
    description:
      "Projeto e implementação de centrais de monitoramento profissionais com redundância e alta disponibilidade.",
    benefits: [
      "Projeto arquitetônico",
      "Especificação de equipamentos",
      "Treinamento da equipe",
      "Certificação técnica",
    ],
  },
  {
    icon: Settings,
    title: "Atualização de Software",
    description: "Modernização e otimização de sistemas de monitoramento de câmeras e alarmes existentes.",
    benefits: ["Análise do sistema atual", "Migração de dados", "Integração de sistemas", "Suporte pós-implementação"],
  },
  {
    icon: Users,
    title: "Treinamento e Capacitação",
    description: "Capacitação técnica especializada para equipes de segurança e operadores de sistemas.",
    benefits: ["Treinamento prático", "Certificação profissional", "Material didático", "Acompanhamento contínuo"],
  },
  {
    icon: FileText,
    title: "Manuais e POPs",
    description: "Criação de documentação técnica, normas operacionais e procedimentos padronizados.",
    benefits: ["Manuais técnicos", "Procedimentos operacionais", "Normas de segurança", "Documentação customizada"],
  },
]

export function Consulting() {
  return (
    <section id="consultoria" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Consultoria Especializada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Oferecemos consultoria técnica especializada para empresas que desejam implementar ou aprimorar seus
            sistemas de segurança e monitoramento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {consultingServices.map((service, index) => (
            <Card key={index} className="h-full">
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
                  <h4 className="font-semibold text-foreground">Benefícios inclusos:</h4>
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
              <CardTitle className="text-2xl">Precisa de uma Consultoria Personalizada?</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-pretty">
                Nossa equipe de especialistas está pronta para analisar suas necessidades e desenvolver a solução ideal
                para seu negócio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8"
                onClick={() => {
                  const contactSection = document.getElementById("contato")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Agendar Consultoria Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
