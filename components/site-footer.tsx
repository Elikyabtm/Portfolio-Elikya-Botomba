"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/elikya-botomba-839b96284/" },
  { label: "Github", href: "https://github.com/Elikyabtm" },
  { label: "Instagram", href: "https://www.instagram.com/elk_prodz/" },
  { label: "SoundCloud", href: "https://soundcloud.com/elkprodz?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_sPLz--atekenOrflAJ8_A026cG0zJRPQStxiYmcSPZETDyXpw-HHmygvBg_aem_G_sC7wytWbMmaD9kHI-wIg" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border px-6 md:px-12 lg:px-20 py-24">
      <div className="flex flex-col gap-16">
        {/* CTA */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] uppercase text-foreground leading-[0.85]">
            {"CREONS"}
            <br />
            <span className="text-primary">QUELQUE CHOSE.</span>
          </h2>
          <a
            href="mailto:elikya.botomba@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mt-4 w-fit"
            data-cursor="SALUT"
          >
            elikya.botomba@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-border">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              {`/* Conçu & Developpé par Elikya Botomba */`}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              {`// ${new Date().getFullYear()} Tous droits reservés`}
            </span>
          </div>

          <nav className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
                data-cursor={s.label.toUpperCase()}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
