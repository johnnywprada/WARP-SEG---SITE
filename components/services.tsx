import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Wrench, ShoppingCart } from "lucide-react"
import Image from "next/image"

const services = [
  {
    image: "/images/cftv-servico.png",
    title: "Câmeras de Segurança (CFTV)",
    description: "Venda e instalação de sistemas completos de videomonitoramento. Executamos desde a infraestrutura física até a configuração para você acompanhar tudo em tempo real.",
    features: [
      "Instalação de infraestrutura e postes de CFTV",
      "Câmeras de alta resolução (IP e Multi HD)",
      "Visão noturna avançada (Infravermelho/Full Color)",
      "Acesso remoto das imagens via smartphone",
    ],
  },
  {
    image: "/images/alarme-servico.png",
    title: "Alarme e Monitoramento 24h",
    description: "Segurança de ponta a ponta. Realizamos a venda, a instalação técnica do sistema de alarme e operamos o monitoramento 24 horas ininterrupto pela nossa central.",
    features: [
      "Venda e instalação de equipamentos modernos",
      "Monitoramento 24h por central especializada",
      "Resposta imediata a eventos e disparos",
      "Arme e desarme remoto via aplicativo",
    ],
  },
  {
    image: "/images/controle-acesso.png",
    title: "Controle de Acesso Avançado",
    description: "Gestão inteligente e automatizada do fluxo de pessoas e veículos. Segurança de alta precisão sem gerar gargalos na entrada.",
    features: [
      "Reconhecimento facial anti-fraude",
      "Integração com catracas e cancelas",
      "Acesso via QR Code, Tags veiculares e App",
      "Gestão de visitantes e relatórios em tempo real",
    ],
  },
  {
    image: "/images/portaria-virtual.png",
    title: "Portaria Remota/Virtual",
    description: "Controle de acesso remoto e monitoramento 24 horas. Eleve a segurança do condomínio e reduza drasticamente os custos operacionais.",
    features: [
      "Atendimento 24h ininterrupto",
      "Redução de custos na folha",
      "Acesso via biometria e app",
      "Gravação de áudio e vídeo",
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas em segurança eletrônica com vendas, instalação e manutenção especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 bg-white border-border hover:border-primary hover:scale-105 overflow-hidden flex flex-col"
            >
              <div className="w-full h-80 relative border-b border-border/50">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`Mascote D'GA DW - ${service.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="text-center pt-6">
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-pretty text-muted-foreground mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <ShoppingCart className="h-10 w-10 mx-auto mb-4 text-primary-foreground" />
              <CardTitle>Vendas</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Equipamentos de alta qualidade das melhores marcas do mercado
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-accent to-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Wrench className="h-10 w-10 mx-auto mb-4 text-primary-foreground" />
              <CardTitle>Instalação</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Instalação profissional com garantia e suporte técnico especializado
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <Shield className="h-10 w-10 mx-auto mb-4 text-secondary-foreground" />
              <CardTitle className="text-secondary-foreground">Manutenção</CardTitle>
              <CardDescription className="text-secondary-foreground/90">
                Manutenção preventiva e corretiva para máximo desempenho
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}