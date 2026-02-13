"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Lightbulb, Cpu, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Briefing",
    description:
      "We start by understanding your brand, goals, target audience, and project requirements through a detailed discovery session. This ensures we are fully aligned on the creative direction and deliverables before any work begins.",
    details: [
      "In-depth project brief review",
      "Reference & mood board analysis",
      "Timeline & milestone planning",
      "Budget alignment & scope definition",
    ],
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Concept & Design",
    description:
      "Our creative team develops initial concepts, wireframes, and visual explorations based on the brief. We present multiple directions and iterate collaboratively until the design is approved and ready for production.",
    details: [
      "Concept sketching & ideation",
      "Wireframes & low-fidelity prototypes",
      "Visual design explorations",
      "Client feedback & revision rounds",
    ],
  },
  {
    icon: Cpu,
    step: "03",
    title: "Production & Development",
    description:
      "This is where the magic happens. Our artists and developers bring the approved concept to life using industry-leading tools, maintaining the highest quality standards throughout the production pipeline.",
    details: [
      "3D modeling, texturing & lighting",
      "Animation, compositing & VFX",
      "Frontend & backend development",
      "Quality assurance & testing",
    ],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Delivery & Support",
    description:
      "We deliver final assets in all required formats, optimized for their intended platforms. Post-delivery, we offer support and revisions to ensure complete satisfaction and a smooth handoff to your team.",
    details: [
      "Final file export & optimization",
      "Multi-platform format delivery",
      "Post-delivery revision support",
      "Ongoing maintenance & updates",
    ],
  },
]

export function ProcessSection() {
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
      { threshold: 0.05 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p
            className={`text-sm font-semibold uppercase tracking-widest text-primary mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            How We Work
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            Our Creative Process
          </h2>
          <p
            className={`mt-5 text-lg text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            We follow a structured yet flexible four-step process that ensures
            transparency, quality, and on-time delivery for every project we undertake.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 tracking-wider">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
