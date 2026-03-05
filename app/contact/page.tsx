import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | ELIKYA BOTOMBA",
  description: "Contactez Elikya Botomba pour des collaborations, du freelance ou simplement dire bonjour.",
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/elikya-botomba-839b96284/" },
  { label: "Github", href: "https://github.com/Elikyabtm" },
  { label: "Instagram", href: "https://www.instagram.com/elk_prodz/" },
  { label: "SoundCloud", href: "https://soundcloud.com/elkprodz?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_sPLz--atekenOrflAJ8_A026cG0zJRPQStxiYmcSPZETDyXpw-HHmygvBg_aem_G_sC7wytWbMmaD9kHI-wIg" },
]

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 py-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            data-cursor="ACCUEIL"
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/portfolio"
              className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
            >
              A propos
            </Link>
          </nav>
        </div>
      </section>

      {/* Title */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          Me contacter
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase text-foreground leading-[0.85] mt-4">
          {"ON"}
          <br />
          <span className="text-primary">DISCUTE.</span>
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-lg leading-relaxed mt-8">
          {"Vous avez un projet en tete, une idee de collaboration, ou simplement envie de dire bonjour ? Je suis toujours ouvert aux nouvelles opportunites creatives."}
        </p>
      </section>

      {/* Contact Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="flex flex-col gap-12">
            {/* Email */}
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                E-mail
              </span>
              <a
                href="mailto:elikya.botomba@gmail.com"
                className="group flex items-center gap-3 mt-3"
                data-cursor="SALUT"
              >
                <span className="font-display text-3xl md:text-5xl uppercase text-foreground group-hover:text-primary transition-colors">
                  elikya.botomba@gmail.com
                </span>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Availability */}
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Statut
              </span>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-2 h-2 bg-primary animate-pulse" />
                <span className="font-sans text-sm text-foreground">
                  Disponible en freelance
                </span>
              </div>
            </div>

            {/* Location */}
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Localisation
              </span>
              <p className="font-sans text-sm text-foreground mt-3">
                Paris, France
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                Ouvert aux propositions
              </p>
            </div>

            {/* Socials */}
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Réseaux
              </span>
              <div className="flex flex-col gap-3 mt-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-border p-4 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    data-cursor={s.label.toUpperCase()}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs text-foreground tracking-widest uppercase group-hover:text-primary transition-colors">
                        {s.label}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {s.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
