"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Lightbulb, Target, Rocket, Heart } from "lucide-react"

const stats = [
  { icon: Award, label: "Projects Delivered", target: 150, suffix: "+" },
  { icon: Lightbulb, label: "Creative Concepts", target: 300, suffix: "+" },
  { icon: Users, label: "Happy Clients", target: 80, suffix: "+" },
  { icon: Rocket, label: "Years of Experience", target: 5, suffix: "+" },
]

const values = [
  {
    icon: Target,
    title: "Precision Craftsmanship",
    description:
      "Every pixel, polygon, and frame is meticulously crafted. We obsess over the details so you don't have to, delivering work that meets the highest industry standards.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "We believe in transparent communication, collaborative workflows, and building lasting partnerships. Your vision drives every decision we make throughout the project lifecycle.",
  },
  {
    icon: Rocket,
    title: "Innovation at Core",
    description:
      "We stay at the forefront of technology, adopting the latest tools, techniques, and trends in 3D, VFX, and digital design to give your brand a competitive edge.",
  },
]

const tools = [
  "Blender", "Cinema 4D", "Unreal Engine", "Unity", "After Effects",
  "Substance Painter", "Figma", "Next.js", "Photoshop", "Houdini",
]

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target])

  return (
    <span className="text-4xl md:text-5xl font-bold text-foreground tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 bg-card"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top: About Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div
            className={isVisible ? "animate-slide-in-left" : "opacity-0"}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              About Next Gen Tech Studio
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Next Gen Tech Studio is a creative 3D and digital design studio
              delivering high-quality visualization, animation, and immersive
              digital experiences. Founded in 2020, we have grown from a small
              team of passionate creatives into a full-service studio trusted by
              startups, agencies, and enterprise brands alike.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our multidisciplinary team combines technical expertise in 3D modeling,
              VFX compositing, motion design, and web development with a deep
              understanding of storytelling and brand communication. We do not just
              create visuals; we craft experiences that move people and drive results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need a single product render for your e-commerce store or a
              full CGI commercial for a global campaign, we bring the same level of
              dedication, creativity, and attention to detail to every project we take on.
            </p>

            {/* Tools & Technologies */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground mb-3">
                Tools & Technologies We Use
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - 3D Model Viewer */}
          <div
            className={isVisible ? "animate-slide-in-right" : "opacity-0"}
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.08),transparent_70%)]" />
              {/* @google/model-viewer web component */}
              {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
              <script
                type="module"
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
              />
              {/*
                @ts-expect-error model-viewer is a custom element not typed in JSX
              */}
              <model-viewer
                src="/models/Baby_Boy.glb"
                alt="Interactive 3D Baby Boy model showcasing Next Gen Tech Studio capabilities"
                auto-rotate
                camera-controls
                touch-action="pan-y"
                interaction-prompt="auto"
                shadow-intensity="1"
                exposure="1"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "1.5rem",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                  </svg>
                  Drag to rotate &middot; Scroll to zoom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 ${
            isVisible ? "animate-fade-up animation-delay-300" : "opacity-0"
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 md:p-8 rounded-2xl border border-border/50 bg-background"
            >
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div
          className={`mt-20 ${
            isVisible ? "animate-fade-up animation-delay-400" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Our Values
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              What Drives Us Every Day
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border/50 bg-background p-6 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
