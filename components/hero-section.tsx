"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDownRight } from "lucide-react"

const categories = [
  { label: "VISUELS", href: "/portfolio?cat=visuals", num: "01" },
  { label: "DIGITAL", href: "/portfolio?cat=digital", num: "02" },
  { label: "SON", href: "/portfolio?cat=sound", num: "03" },
  { label: "MOTION", href: "/portfolio?cat=motion", num: "04" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
   <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-8">
  {/* Top bar */}
  <header className="flex items-center justify-between">
    <span
      className="font-mono text-xs text-muted-foreground tracking-widest uppercase"
      style={{
        opacity: mounted ? 1 : 0,
        animationName: mounted ? "fade-in" : "none",
        animationDuration: "0.6s",
        animationTimingFunction: "ease",
        animationFillMode: "forwards",
        animationDelay: "0.2s",
      }}
    >
          Portfolio 2026
        </span>
        <nav className="flex gap-6">
          {["Portfolio", "A propos", "Contact"].map((item, i) => (
            <Link
              key={item}
              href={
                item === "Portfolio"
                  ? "/portfolio"
                  : item === "A propos"
                    ? "/about"
                    : "/contact"
              }
              className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
              data-cursor={item === "CONTACT" ? "SALUT" : "VOIR"}
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted ? "fade-in 0.6s ease forwards" : "none",
                animationDelay: `${0.3 + i * 0.1}s`,
              }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-center py-20">
        <div className="overflow-hidden">
          <h1
            className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] uppercase tracking-tight text-foreground"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                : "none",
              animationDelay: "0.5s",
            }}
          >
            ELIKYA
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] uppercase tracking-tight text-foreground"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                : "none",
              animationDelay: "0.65s",
            }}
          >
            BOTOMBA
          </h1>
        </div>
        <div className="mt-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
          <p
            className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fade-in 0.6s ease forwards" : "none",
              animationDelay: "1s",
            }}
          >
            Web Designer
            <br />
            <span className="text-primary">{'// '}</span>Motion / Dev / Son /
            Visuels
          </p>
          <div
            className="flex gap-1 font-mono text-xs text-muted-foreground"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fade-in 0.6s ease forwards" : "none",
              animationDelay: "1.1s",
            }}
          >
            <span>{"Bas\u00e9 \u00e0 Paris, FR"}</span>
            <span className="text-primary mx-2">/</span>
            <span>Disponible</span>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <Link
            key={cat.label}
            href={cat.href}
            data-cursor={cat.label}
            className="group border border-border p-6 flex flex-col gap-4 hover:bg-primary hover:border-primary transition-all duration-300"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                : "none",
              animationDelay: `${1.2 + i * 0.1}s`,
            }}
          >
            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground transition-colors">
              {cat.num}
            </span>
            <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary-foreground uppercase transition-colors">
              {cat.label}
            </span>
            <ArrowDownRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors ml-auto" />
          </Link>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: mounted ? 1 : 0,
          animation: mounted ? "fade-in 0.6s ease forwards" : "none",
          animationDelay: "1.8s",
        }}
      >
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          Defiler
        </span>
        <div className="w-px h-8 bg-muted-foreground/30 relative overflow-hidden">
          <div className="w-full h-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
