"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Founder & CEO",
    company: "Zenith Infra, Jaipur",
    content:
      "Next Gen Tech Studio delivered outstanding interior visualizations for our luxury villa project in Jaipur. The photorealistic renders helped us close pre-sales 3x faster. Their understanding of Indian architecture and modern aesthetics is truly impressive.",
    rating: 5,
  },
  {
    name: "Ananya Verma",
    role: "Marketing Head",
    company: "NovaByte Technologies, Bangalore",
    content:
      "We partnered with Next Gen for our entire product launch campaign including CGI commercials and social media creatives. The results exceeded every KPI we set. Engagement went up 45% and our brand recall improved significantly across all platforms.",
    rating: 5,
  },
  {
    name: "Vikram Singh Rathore",
    role: "Creative Director",
    company: "Sandstone Studios, Mumbai",
    content:
      "Working with Next Gen has been a game-changer for our agency. Their 3D animation and VFX work is on par with top international studios. They delivered a 60-second CGI ad film for our client Tata Motors that won multiple awards at the Kyoorius Awards.",
    rating: 5,
  },
  {
    name: "Priya Iyer",
    role: "Co-Founder",
    company: "UrbanNest Interiors, Chennai",
    content:
      "The 3D walkthrough videos they created for our residential projects are phenomenal. Our clients can now experience their future homes before construction begins. It has completely transformed how we present our designs and boosted client confidence.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Product Manager",
    company: "Apex Gaming, San Francisco",
    content:
      "Next Gen delivered game-ready 3D assets for our mobile title within an incredibly tight deadline. The quality of the models, textures, and animations was top-tier. They understand the technical requirements of game development inside and out.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Brand Strategist",
    company: "Maison Digital, Paris",
    content:
      "From our logo redesign to a full suite of marketing materials and website, Next Gen nailed every aspect of our rebrand. Their design sensibility is modern, clean, and effective. Working across time zones was seamless thanks to their professionalism.",
    rating: 5,
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`flex flex-col rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Quote className="h-8 w-8 text-primary/20 mb-4" aria-hidden="true" />
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-1 mt-5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-primary text-primary"
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
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
      id="testimonials"
      className="relative py-24 md:py-32 bg-card"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p
            className={`text-sm font-semibold uppercase tracking-widest text-primary mb-3 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Client Testimonials
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`mt-5 text-lg text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            We take pride in building lasting relationships with our clients. Here is
            what some of them have to say about working with Next Gen Tech Studio.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
