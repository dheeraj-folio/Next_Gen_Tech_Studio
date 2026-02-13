"use client"

import { useEffect, useRef, useState } from "react"
import {
  Gamepad2,
  Clapperboard,
  Box,
  Sparkles,
  Home,
  Palette,
  Globe,
  CheckCircle2,
  MonitorSmartphone,
  PenTool,
} from "lucide-react"

const services = [
  {
    icon: Gamepad2,
    title: "3D Game Assets",
    description:
      "We create high-quality, game-ready 3D assets designed for real-time engines like Unreal and Unity. Our team delivers optimized models with proper topology, UV mapping, and PBR texturing to ensure maximum performance.",
    features: [
      "Environment & level design assets",
      "Character models & rigging",
      "Props, weapons & vehicles",
      "Texture & material creation (PBR)",
      "LOD optimization for all platforms",
    ],
  },
  {
    icon: Clapperboard,
    title: "3D Animation & Motion",
    description:
      "From character animation to complex mechanical simulations, we produce cinematic-quality motion that tells your story. Our animations are crafted frame by frame for maximum impact across film, games, and advertising.",
    features: [
      "Character & creature animation",
      "Mechanical & product animation",
      "Cinematic sequences & trailers",
      "Motion graphics & explainers",
      "Facial capture & lip sync",
    ],
  },
  {
    icon: Box,
    title: "Product Visualization",
    description:
      "We craft photorealistic 3D product renders that showcase every detail of your product. Whether for e-commerce, catalogs, or marketing campaigns, our renders are indistinguishable from photography.",
    features: [
      "Photorealistic product renders",
      "360-degree interactive views",
      "Exploded view & cutaway renders",
      "Packaging & label mockups",
      "Lifestyle & context scenes",
    ],
  },
  {
    icon: Sparkles,
    title: "CGI & VFX Advertisement",
    description:
      "We produce eye-catching CGI commercials and visual effects sequences that push creative boundaries. Our VFX pipeline integrates seamlessly with live-action footage for broadcast, digital, and social media campaigns.",
    features: [
      "CGI commercial production",
      "Compositing & green screen VFX",
      "Particle & fluid simulations",
      "CGI food & beverage ads",
      "Product launch reveal videos",
    ],
  },
  {
    icon: Home,
    title: "Interior Design Visualization",
    description:
      "We create stunning architectural and interior visualizations that bring spaces to life before they are built. From residential homes to commercial showrooms, our renders communicate design intent with clarity and elegance.",
    features: [
      "Residential interior walkthroughs",
      "Commercial space visualization",
      "Furniture & fixture rendering",
      "Lighting & material studies",
      "Virtual staging for real estate",
    ],
  },
  {
    icon: Palette,
    title: "Social Media & Marketing Design",
    description:
      "We design scroll-stopping social media content and marketing visuals that amplify your brand presence. Our design team creates cohesive campaigns across Instagram, LinkedIn, Facebook, YouTube, and beyond.",
    features: [
      "Social media post & story design",
      "Ad banners & promotional graphics",
      "Brand identity & guidelines",
      "Infographics & data visualization",
      "Email & newsletter templates",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "We build modern, responsive, and performant websites with clean UI/UX that convert visitors into customers. From single-page landing sites to full-scale web applications, we handle design and development end-to-end.",
    features: [
      "Custom responsive web design",
      "Next.js & React development",
      "E-commerce & Shopify builds",
      "SEO optimization & analytics",
      "CMS integration & management",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    description:
      "We design intuitive user interfaces and seamless user experiences for web and mobile applications. Our process involves deep research, wireframing, prototyping, and high-fidelity design that prioritizes usability.",
    features: [
      "User research & persona mapping",
      "Wireframing & prototyping",
      "High-fidelity interface design",
      "Design system creation",
      "Usability testing & iteration",
    ],
  },
  {
    icon: PenTool,
    title: "Logo & Branding",
    description:
      "We create distinctive brand identities that communicate your values and differentiate you in the market. From logo design to full brand systems, we build visual foundations that scale with your business.",
    features: [
      "Logo design & variations",
      "Color palette & typography selection",
      "Brand guidelines documentation",
      "Business card & stationery design",
      "Brand strategy & positioning",
    ],
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index,
}: {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <ul className="mt-5 flex flex-col gap-2.5 flex-1" aria-label={`${title} features`}>
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary/70" />
            <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServicesSection() {
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
      id="services"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p
            className={`text-sm font-semibold uppercase tracking-widest text-primary mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            What We Do
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            Comprehensive Creative Services
          </h2>
          <p
            className={`mt-5 text-lg text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            From photorealistic 3D visualization and cinematic animation to full-stack
            web development and brand design, we offer an end-to-end creative pipeline.
            Each service is backed by industry expertise, cutting-edge tools, and a
            commitment to exceeding your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
