import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  // Insira o número do comercial da D'GA DW. 
  // Formato obrigatório: 55 + DDD + Número (sem espaços ou traços).
  const whatsappNumber = "5511975898511" 
  
  // Mensagem pré-preenchida para facilitar a vida do lead
  const defaultMessage = "Olá! Acessei o site da D'GA DW e gostaria de falar com um consultor sobre Segurança Eletrônica."
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip explicativo que aparece apenas no Desktop ao passar o mouse */}
      <span className="absolute right-16 bg-background text-foreground text-sm font-medium py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-border hidden sm:block">
        Fale com um especialista
      </span>
    </a>
  )
}