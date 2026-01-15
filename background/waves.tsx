"use client"

import * as React from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  baseY: number
  offset: number
  size: number
  speedX: number
  waveSpeed: number
  amplitude: number
  opacity: number
}

export function Waves() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const animationFrameRef = React.useRef<number | undefined>(undefined)
  const timeRef = React.useRef(0)
  const particlesRef = React.useRef<Particle[]>([])
  const mountedRef = React.useRef(false)

  // Check if dark mode is active
  const isDark = theme === "dark"

  React.useEffect(() => {
    if (!canvasRef.current) return
    mountedRef.current = true

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reinitialize particles on resize
      particlesRef.current = []
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          baseY: canvas.height / 2 + canvas.height * 0.05 + (Math.random() - 0.5) * 360,
          offset: Math.random() * Math.PI * 2,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          waveSpeed: Math.random() * 0.5 + 0.3,
          amplitude: Math.random() * 30 + 15,
          opacity: Math.random() * 0.5 + 0.3
        })
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawWave = (
      offset: number,
      amplitude: number,
      frequency: number,
      opacity: number,
      colorLight: string,
      colorDark: string
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * frequency + timeRef.current + offset) * amplitude +
          Math.sin(x * frequency * 0.5 + timeRef.current * 0.7 + offset) *
            (amplitude * 0.5)
        ctx.lineTo(x, y)
      }

      const color = isDark ? colorDark : colorLight
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(${color}, ${opacity * 0.3})`)
      gradient.addColorStop(0.5, `rgba(${color}, ${opacity})`)
      gradient.addColorStop(1, `rgba(${color}, ${opacity * 0.3})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 5
      ctx.shadowBlur = 20
      ctx.shadowColor = `rgba(${color}, ${opacity})`
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    const animate = () => {
      // Get the background color from CSS variable
      const bgColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim()
      
      // Fill with flat background color
      ctx.fillStyle = bgColor || (isDark ? "oklch(0.137 0.015 257.542)" : "oklch(0.991 0.001 257.542)")
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw multiple waves with theme-aware colors
      drawWave(0, 80, 0.003, 0.4, "0, 0, 0", "255, 255, 255")
      drawWave(1, 100, 0.0025, 0.3, "105, 105, 105", "220, 220, 220")
      drawWave(2, 60, 0.004, 0.5, "15, 15, 15", "240, 240, 240")
      drawWave(3, 90, 0.0035, 0.25, "90, 90, 90", "225, 225, 225")
      drawWave(4, 70, 0.0028, 0.35, "30, 30, 30", "235, 235, 235")
      drawWave(5, 110, 0.0032, 0.28, "75, 75, 75", "230, 230, 230")
      drawWave(6, 50, 0.0045, 0.45, "45, 45, 45", "250, 250, 250")
      drawWave(7, 95, 0.0038, 0.32, "60, 60, 60", "245, 245, 245")

      // Draw and update particles with theme-aware colors
      particlesRef.current.forEach((p) => {
        const y = p.baseY + Math.sin(timeRef.current * p.waveSpeed + p.offset) * p.amplitude

        ctx.beginPath()
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2)
        const particleColor = isDark ? "200, 220, 255" : "180, 200, 240"
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`
        ctx.shadowBlur = 4
        ctx.shadowColor = `rgba(${particleColor}, ${p.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0

        p.x += p.speedX

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
      })

      timeRef.current += 0.01
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}
