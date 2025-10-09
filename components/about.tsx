import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, Users, Wrench } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "2+",
    label: "Anos de Experiência",
    description: "Expertise consolidada em segurança eletrônica",
  },
  {
    icon: Users,
    number: "DIVERSOS",
    label: "Clientes Atendidos",
    description: "Residências e empresas protegidas",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Suporte Técnico",
    description: "Atendimento e monitoramento contínuo",
  },
  {
    icon: Wrench,
    number: "100%",
    label: "Garantia",
    description: "Satisfação garantida em todos os serviços",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Por que escolher a WARP?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg text-pretty">
                A WARP Segurança Eletrônica é uma empresa especializada em soluções completas de segurança, oferecendo
                desde a venda de equipamentos até a implementação de sistemas complexos de monitoramento.
              </p>
              <p className="text-pretty">
                Nossa equipe técnica altamente qualificada possui vasta experiência em projetos residenciais e
                corporativos, garantindo a implementação de soluções personalizadas que atendem às necessidades
                específicas de cada cliente.
              </p>
              <p className="text-pretty">
                Trabalhamos com as melhores marcas do mercado e oferecemos suporte técnico especializado, manutenção
                preventiva e consultoria para maximizar a eficiência e segurança dos seus sistemas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-primary">{stat.number}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
