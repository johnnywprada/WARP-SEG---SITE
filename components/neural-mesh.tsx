"use client"

import { useEffect, useRef } from "react"

export function NeuralMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles: Particle[] = []
    // Calcula a quantidade ideal de nós com base no tamanho da tela (evita lentidão em celulares)
    const particleCount = Math.floor((width * height) / 12000)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        // Velocidade flutuante e sutil
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = (Math.random() - 0.5) * 0.8
        // 80% dos nós em Azul Elétrico (Dados), 20% em Laranja Principal (Alerta/IA)
        this.color = Math.random() > 0.2 ? "#00BFFF" : "#FF7900"
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        // Rebate nas bordas da tela
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Calcula a distância entre este nó e todos os outros
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Se estiverem próximos (menos de 130px), traça a conexão (Plexus Effect)
          if (distance < 130) {
            ctx.beginPath()
            // A opacidade da linha diminui quanto mais distantes os nós estiverem
            const opacity = (1 - distance / 130) * 0.4
            // Linha de conexão em Azul Elétrico
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(render)
    }
    
    render()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-60" 
    />
  )
}