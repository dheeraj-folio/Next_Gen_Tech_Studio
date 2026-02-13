"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { Send, Mail, MapPin, Phone, Clock, CheckCircle2, Loader2, XCircle } from "lucide-react"

const reasons = [
  "Free initial consultation for all new clients",
  "Detailed project estimate within 48 hours",
  "Flexible pricing: per-project or retainer options",
  "NDA and confidentiality agreements available",
  "Dedicated project manager for every engagement",
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("loading")

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch(
        "https://formsubmit.co/ajax/info@nextgentechstudio.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      )

      if (response.ok) {
        setFormStatus("success")
        formRef.current?.reset()
      } else {
        throw new Error("Submission failed")
      }
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get in Touch
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            {"Let's Start Your Project"}
          </h2>
          <p
            className={`mt-5 text-lg text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            Have a project in mind? Whether it is a quick question or a detailed brief,
            we would love to hear from you. Fill out the form below and our team will
            get back to you within 24 hours with a tailored response.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 ${
            isVisible ? "animate-fade-up animation-delay-300" : "opacity-0"
          }`}
        >
          {/* Contact Form */}
          <form
            ref={formRef}
            className="lg:col-span-3 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit hidden config fields */}
            <input type="hidden" name="_subject" value="New Enquiry from Next Gen Tech Studio Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                  <span className="text-muted-foreground font-normal ml-1">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="Service Interested In"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="3d-game-assets">3D Game Assets</option>
                  <option value="3d-animation">3D Animation & Motion</option>
                  <option value="product-visualization">Product Visualization</option>
                  <option value="cgi-vfx">CGI & VFX Advertisement</option>
                  <option value="interior-design">Interior Design Visualization</option>
                  <option value="social-media">Social Media & Marketing Design</option>
                  <option value="website">Website Design & Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="branding">Logo & Branding</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Estimated Budget
                <span className="text-muted-foreground font-normal ml-1">(optional)</span>
              </label>
              <select
                id="budget"
                name="Estimated Budget"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
              >
                <option value="">Select a range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="Project Details"
                rows={5}
                placeholder="Tell us about your project: What do you need? What are your goals? Do you have a timeline in mind?"
                required
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? "Sending..." : "Send Message"}
              {formStatus === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>

            {formStatus === "success" && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <p className="text-base font-semibold text-green-800">
                    Message Sent Successfully!
                  </p>
                </div>
                <p className="text-sm text-green-700">
                  Thank you for reaching out. We will get back to you at{" "}
                  <strong>info@nextgentechstudio.com</strong> within 24 hours.
                </p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <p className="text-base font-semibold text-red-800">
                    Something went wrong
                  </p>
                </div>
                <p className="text-sm text-red-700">
                  Please try again or email us directly at{" "}
                  <a
                    href="mailto:info@nextgentechstudio.com"
                    className="underline font-medium"
                  >
                    info@nextgentechstudio.com
                  </a>
                </p>
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:info@nextgentechstudio.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@nextgentechstudio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Indiagate, Sitaura, Sanganer, Jaipur 302033
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Working Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Fri: 9:00 AM - 7:00 PM IST
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Weekend support available on request
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-6 md:p-8">
              <p className="text-base font-semibold text-foreground mb-4">
                Why Work With Us
              </p>
              <ul className="flex flex-col gap-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary/70" />
                    <span className="text-sm text-muted-foreground leading-snug">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
