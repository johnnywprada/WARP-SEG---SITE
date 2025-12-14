import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DÉF Segurança Eletrônica</span>
            </div>
            <p className="text-background/80 mb-4 text-pretty">
              Especialistas em segurança eletrônica oferecendo soluções completas para proteger o que é mais importante
              para você.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 95990-2308</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>johnnywprada@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo - SP</span>
              </div>
              <div className="text-xs text-background/60 mt-2">CNPJ: 35.550.155/0001-86</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Câmeras de Segurança</li>
              <li>Sistemas de Alarme</li>
              <li>Controle de Acesso</li>
              <li>Casa Inteligente</li>
              <li>Manutenção</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Consultoria</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Sala de Monitoramento</li>
              <li>Atualização de Software</li>
              <li>Treinamento</li>
              <li>Manuais e POPs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">© 2024 DÉF Segurança Eletrônica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
