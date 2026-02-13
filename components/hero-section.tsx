"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Play, Zap, Shield, Clock } from "lucide-react"

const highlights = [
  {
    icon: Zap,
    label: "Fast Delivery",
    description: "Projects delivered on time, every time",
  },
  {
    icon: Shield,
    label: "Premium Quality",
    description: "Industry-leading standards in every project",
  },
  {
    icon: Clock,
    label: "24/7 Support",
    description: "Round-the-clock assistance for all clients",
  },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-8 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Creative 3D & Digital Studio  |  Accepting New Projects
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1] ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            Building Powerful{" "}
            <span className="text-primary">3D Experiences</span>{" "}
            for Modern Brands
          </h1>

          {/* Subheading */}
          <p
            className={`mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            We specialize in photorealistic 3D visualization, cinematic animation,
            CGI advertising, architectural interior design, and full-stack digital
            design solutions. From concept to delivery, we transform your vision
            into stunning visual experiences that captivate audiences and elevate brands.
          </p>

          {/* Buttons */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center gap-4 ${
              isVisible ? "animate-fade-up animation-delay-300" : "opacity-0"
            }`}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-muted hover:shadow-md active:scale-[0.98] w-full sm:w-auto"
            >
              <Play className="h-4 w-4" />
              See Our Work
            </a>
          </div>

          {/* Highlight Cards */}
          <div
            className={`mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl ${
              isVisible ? "animate-fade-up animation-delay-400" : "opacity-0"
            }`}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm px-5 py-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-12 md:mt-16 flex flex-col items-center gap-4 ${
              isVisible ? "animate-fade-up animation-delay-500" : "opacity-0"
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
              Trusted by innovative brands worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
              {["Nexora", "Vertex Labs", "Lumina AI", "Arcfield", "Primex"].map((brand) => (
                <span
                  key={brand}
                  className="text-sm md:text-base font-bold tracking-wider text-foreground/70"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
