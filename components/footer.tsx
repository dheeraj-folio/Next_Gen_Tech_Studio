import { Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "3D Game Assets", href: "#services" },
  { label: "3D Animation", href: "#services" },
  { label: "Product Visualization", href: "#services" },
  { label: "CGI & VFX Ads", href: "#services" },
  { label: "Interior Design", href: "#services" },
  { label: "Website Development", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "Logo & Branding", href: "#services" },
]

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                NG
              </div>
              <span className="text-lg font-bold text-foreground tracking-tight">
                Next Gen Tech Studio
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              A creative 3D and digital design studio delivering high-quality
              visualization, animation, and immersive digital experiences for
              brands worldwide. From concept to final delivery, we bring your
              vision to life.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-[-2px] transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-[-2px] transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a href="mailto:info@nextgentechstudio.com" className="hover:text-primary transition-colors">info@nextgentechstudio.com</a>
              </div>
              <div>
                <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-1">
                  Location
                </p>
                <p>Indiagate, Sitaura, Sanganer, Jaipur 302033</p>
              </div>
              <div>
                <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-1">
                  Working Hours
                </p>
                <p>Mon - Fri: 9 AM - 7 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Next Gen Tech Studio. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
