"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  baseY: number;
  offset: number;
  size: number;
  speedX: number;
  waveSpeed: number;
  amplitude: number;
  opacity: number;
}

// Helper function to get CSS variable value as RGB string
function getCSSVariableColor(variableName: string): string {
  if (typeof window === "undefined") return "37, 37, 37";

  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(variableName).trim();

  if (!value) return "37, 37, 37";

  // Create a temporary element to convert oklch to RGB
  const tempEl = document.createElement("div");
  tempEl.style.color = value;
  tempEl.style.position = "absolute";
  tempEl.style.visibility = "hidden";
  document.body.appendChild(tempEl);

  const computed = getComputedStyle(tempEl).color;
  document.body.removeChild(tempEl);

  // Extract RGB values from rgb(r, g, b) format
  const rgbMatch = computed.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    return `${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}`;
  }

  return "37, 37, 37";
}

// Helper function to get CSS variable value as hex string
function getCSSVariableHex(variableName: string): string {
  if (typeof window === "undefined") return "#fcfcfc";

  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(variableName).trim();

  if (!value) return "#fcfcfc";

  // Create a temporary element to convert oklch to RGB
  const tempEl = document.createElement("div");
  tempEl.style.backgroundColor = value;
  tempEl.style.position = "absolute";
  tempEl.style.visibility = "hidden";
  document.body.appendChild(tempEl);

  const computed = getComputedStyle(tempEl).backgroundColor;
  document.body.removeChild(tempEl);

  // Convert rgb(r, g, b) to hex
  const rgbMatch = computed.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]).toString(16).padStart(2, "0");
    const g = parseInt(rgbMatch[2]).toString(16).padStart(2, "0");
    const b = parseInt(rgbMatch[3]).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
  }

  return "#fcfcfc";
}

export default function Gradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const displayDimsRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Function to get colors from CSS variables
    const getColors = () => {
      const bgTop = getCSSVariableHex("--background");
      const bgMid = getCSSVariableHex("--card");
      const bgBottom = getCSSVariableHex("--background");

      // Get primary/ring colors for waves
      const primaryRGB = getCSSVariableColor("--primary");
      const ringRGB = getCSSVariableColor("--ring");
      const accentRGB = getCSSVariableColor("--accent");
      const mutedRGB = getCSSVariableColor("--muted");

      // Get foreground colors for particles
      const primaryForegroundRGB = getCSSVariableColor("--primary-foreground");

      return {
        bgTop,
        bgMid,
        bgBottom,
        primaryRGB,
        ringRGB,
        accentRGB,
        mutedRGB,
        primaryForegroundRGB,
      };
    };

    // Set initial canvas size - full width and height of screen
    // Account for device pixel ratio to avoid blurriness on high-DPI displays
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      
      // Always use full screen dimensions for the gradient
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Store display dimensions for drawing calculations
      displayDimsRef.current = { width: displayWidth, height: displayHeight };

      // Set the internal resolution to the device pixel ratio times the display size
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      // Set the display size (CSS pixels)
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      // Reset transform and scale the context to match the device pixel ratio
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();

    // Initialize particles
    const particleCount = 80;
    const particles: Particle[] = [];
    const { width: displayWidth, height: displayHeight } = displayDimsRef.current;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * displayWidth,
        baseY: displayHeight / 2 + displayHeight * 0.35 + (Math.random() - 0.5) * 180,
        offset: Math.random() * Math.PI * 4,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.3 - 0.15,
        waveSpeed: Math.random() * 0.5 + 0.3,
        amplitude: Math.random() * 30 + 15,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    particlesRef.current = particles;

    const drawWave = (
      offset: number,
      amplitude: number,
      frequency: number,
      opacity: number,
      color: string
    ) => {
      const { width: displayWidth, height: displayHeight } = displayDimsRef.current;
      const centerY = displayHeight / 2 + displayHeight * 0.3;
      ctx.beginPath();
      ctx.moveTo(0, centerY);

      for (let x = 0; x < displayWidth; x++) {
        const y =
          centerY +
          Math.sin(x * frequency + timeRef.current + offset) * amplitude +
          Math.sin(x * frequency * 0.5 + timeRef.current * 0.7 + offset) *
            (amplitude * 0.5);
        ctx.lineTo(x, y);
      }

      const gradient = ctx.createLinearGradient(0, 0, displayWidth, displayHeight);
      gradient.addColorStop(0, `rgba(${color}, ${opacity * 0.3})`);
      gradient.addColorStop(0.5, `rgba(${color}, ${opacity})`);
      gradient.addColorStop(1, `rgba(${color}, ${opacity * 0.3})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgba(${color}, ${opacity})`;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      const colors = getColors();
      const { width: displayWidth, height: displayHeight } = displayDimsRef.current;

      // Create gradient background using CSS variables
      const bgGradient = ctx.createLinearGradient(0, 0, 0, displayHeight);
      bgGradient.addColorStop(0, colors.bgTop);
      bgGradient.addColorStop(0.5, colors.bgMid);
      bgGradient.addColorStop(1, colors.bgBottom);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Draw multiple waves using CSS variable colors
      drawWave(0, 80, 0.003, 0.4, colors.ringRGB);
      drawWave(1, 100, 0.0025, 0.3, colors.primaryRGB);
      drawWave(2, 60, 0.004, 0.5, colors.accentRGB);
      drawWave(3, 90, 0.0035, 0.25, colors.mutedRGB);
      drawWave(4, 70, 0.0028, 0.35, colors.ringRGB);
      drawWave(5, 110, 0.0032, 0.28, colors.primaryRGB);
      drawWave(6, 50, 0.0045, 0.45, colors.accentRGB);
      drawWave(7, 95, 0.0038, 0.32, colors.mutedRGB);

      // Draw and update particles using CSS variable colors
      particlesRef.current.forEach((p) => {
        const y =
          p.baseY + Math.sin(timeRef.current * p.waveSpeed + p.offset) * p.amplitude;

        ctx.beginPath();
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.primaryForegroundRGB}, ${p.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(${colors.primaryForegroundRGB}, ${p.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x += p.speedX;

        if (p.x < 0) p.x = displayWidth;
        if (p.x > displayWidth) p.x = 0;
      });

      timeRef.current += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle container resize
    const handleResize = () => {
      updateCanvasSize();
      const { width: displayWidth, height: displayHeight } = displayDimsRef.current;

      // Update particle positions based on new canvas size
      particlesRef.current.forEach((p) => {
        if (p.x > displayWidth) p.x = Math.random() * displayWidth;
        p.baseY = displayHeight / 2 + displayHeight * 0.35 + (Math.random() - 0.5) * 180;
      });
    };

    // Use ResizeObserver to watch container size changes
    const resizeObserver = new ResizeObserver(handleResize);
    const container = canvas.parentElement;
    if (container) {
      resizeObserver.observe(container);
    }

    // Listen for theme changes (dark mode toggle)
    const observer = new MutationObserver(() => {
      forceUpdate((prev) => prev + 1);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also listen to window resize as fallback
    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 block w-full h-full bg-background"
      style={{
        width: "101vw",
        left: "50%",
        transform: "translateX(-50%) translateY(-55%)",
        right: "auto",
      }}
    />
  );
}
