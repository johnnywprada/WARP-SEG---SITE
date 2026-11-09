"use client"

import { useEffect, useRef } from "react"

export function DgadwCyberMesh() {
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

    const gridSize = 40

    class DataTrace {
      x: number
      y: number
      history: { x: number; y: number }[]
      maxLength: number
      direction: number 
      speed: number
      color: string
      active: boolean
      lineWidth: number

      constructor() {
        this.x = Math.floor((Math.random() * width) / gridSize) * gridSize
        this.y = Math.floor((Math.random() * height) / gridSize) * gridSize
        this.history = []
        
        this.maxLength = Math.floor(Math.random() * 20) + 15 
        this.direction = Math.floor(Math.random() * 4)
        this.speed = 2 
        
        const isBlue = Math.random() > 0.25
        this.color = isBlue ? "0, 191, 255" : "255, 121, 0"
        this.lineWidth = isBlue ? 1.5 : 2.5 
        
        this.active = true
      }

      update() {
        if (!this.active) return

        this.history.push({ x: this.x, y: this.y })
        if (this.history.length > this.maxLength * (gridSize / this.speed)) {
          this.history.shift()
        }

        if (this.direction === 0) this.y -= this.speed
        else if (this.direction === 1) this.x += this.speed
        else if (this.direction === 2) this.y += this.speed
        else if (this.direction === 3) this.x -= this.speed

        if (this.x % gridSize === 0 && this.y % gridSize === 0) {
          if (Math.random() < 0.3) {
            if (this.direction === 0 || this.direction === 2) {
              this.direction = Math.random() > 0.5 ? 1 : 3
            } else {
              this.direction = Math.random() > 0.5 ? 0 : 2
            }
          }
          
          if (
            Math.random() < 0.05 ||
            this.x < 0 ||
            this.x > width ||
            this.y < 0 ||
            this.y > height
          ) {
            this.active = false
          }
        }
      }

      draw() {
        if (this.history.length < 2 || !ctx) return // Adicionada verificação rigorosa do ctx

        ctx.beginPath()
        ctx.moveTo(this.history[0].x, this.history[0].y)

        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y)
        }

        const startX = this.history[0].x
        const startY = this.history[0].y
        
        const gradient = ctx.createLinearGradient(startX, startY, this.x, this.y)
        gradient.addColorStop(0, `rgba(${this.color}, 0)`)
        gradient.addColorStop(0.5, `rgba(${this.color}, 0.5)`)
        gradient.addColorStop(1, `rgba(${this.color}, 1)`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = this.lineWidth

        ctx.shadowBlur = 12
        ctx.shadowColor = `rgba(${this.color}, 0.8)`
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.lineWidth * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = "#FFFFFF"
        ctx.shadowBlur = 15
        ctx.shadowColor = `rgba(${this.color}, 1)`
        ctx.fill()

        ctx.shadowBlur = 0
      }
    }

    const traces: DataTrace[] = []
    const traceCount = Math.floor((width * height) / 12000)

    for (let i = 0; i < traceCount; i++) {
      traces.push(new DataTrace())
    }

    const drawGrid = () => {
      if (!ctx) return // Adicionada verificação rigorosa do ctx
      ctx.strokeStyle = "rgba(0, 27, 77, 0.03)" 
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    let animationFrameId: number

    const render = () => {
      if (!ctx) return // Adicionada verificação rigorosa do ctx
      ctx.clearRect(0, 0, width, height)
      drawGrid()

      for (let i = 0; i < traces.length; i++) {
        if (!traces[i].active) {
          traces[i] = new DataTrace()
        }
        traces[i].update()
        traces[i].draw()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      if (canvasRef.current) {
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
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
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}