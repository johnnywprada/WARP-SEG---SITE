import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Wrench, ShoppingCart, Camera, Home, Lock, Zap } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Camera,
    image: "/images/cftv-servico.png",
    title: "Câmeras de Segurança",
    description: "Sistemas de CFTV com alta resolução, visão noturna e monitoramento remoto 24h.",
    features: ["Câmeras IP e analógicas", "Gravação em nuvem", "Acesso via smartphone", "Visão noturna HD"],
  },
  {
    icon: Zap,
    image: "/images/alarme-servico.png",
    title: "Sistemas de Alarme",
    description: "Alarmes inteligentes com sensores de movimento, abertura e detecção de fumaça.",
    features: ["Sensores sem fio", "Central de monitoramento", "Notificações em tempo real", "Backup de energia"],
  },
  {
    icon: Lock,
    image: "/images/controle-acesso.png",
    title: "Controle de Acesso",
    description: "Controle quem entra e sai com biometria, cartões e códigos de acesso.",
    features: ["Biometria digital", "Cartões de proximidade", "Códigos PIN", "Relatórios de acesso"],
  },
  {
    icon: Home,
    image: "/images/automacao-residencial.png",
    title: "Casa Inteligente",
    description: "Automação residencial integrada para conforto, segurança e economia de energia.",
    features: [
      "Iluminação inteligente",
      "Controle de temperatura",
      "Integração com assistentes",
      "Economia de energia",
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas em segurança eletrônica com vendas, instalação e manutenção especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 bg-white border-blue-200 hover:border-blue-500 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`Mascote DÉF - ${service.title}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                  <service.icon className="absolute top-0 right-0 w-6 h-6 text-cyan-400 bg-blue-600 rounded-full p-1" />
                </div>
                <CardTitle className="text-xl text-blue-700">{service.title}</CardTitle>
                <CardDescription className="text-pretty text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:scale-105 transition-transform">
            <CardHeader className="text-center">
              <ShoppingCart className="h-10 w-10 mx-auto mb-4 text-cyan-300" />
              <CardTitle>Vendas</CardTitle>
              <CardDescription className="text-blue-100">
                Equipamentos de alta qualidade das melhores marcas do mercado
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-blue-700 to-blue-800 text-white hover:scale-105 transition-transform">
            <CardHeader className="text-center">
              <Wrench className="h-10 w-10 mx-auto mb-4 text-cyan-300" />
              <CardTitle>Instalação</CardTitle>
              <CardDescription className="text-blue-100">
                Instalação profissional com garantia e suporte técnico especializado
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-blue-800 to-blue-900 text-white hover:scale-105 transition-transform">
            <CardHeader className="text-center">
              <Shield className="h-10 w-10 mx-auto mb-4 text-cyan-300" />
              <CardTitle>Manutenção</CardTitle>
              <CardDescription className="text-blue-100">
                Manutenção preventiva e corretiva para máximo desempenho
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
