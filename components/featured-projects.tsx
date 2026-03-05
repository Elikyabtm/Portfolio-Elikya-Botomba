"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "NOCTA - SOCIAL AD",
    category: "MOTION",
    year: "2025",
    description: "Courte publicite video pour la marque NOCTA. Format Social Ad pour Snapchat, Instagram, Youtube.",
    color: "#E60000",
  },
  {
    id: "02",
    title: "RAWTYPE",
    category: "DIGITAL",
    year: "2025",
    description: "Experience web experimentale construite avec Next.js. La typographie interactive rencontre le code.",
    color: "#F2F2F2",
  },
  {
    id: "03",
    title: "EMOTIONS VOL.",
    category: "SON",
    year: "2024",
    description: "Serie de prods liees a mes emotions. 5 beats, 5 covers, 5 etats d'esprit. Ecoutable en ligne.",
    color: "#E60000",
  },
  {
    id: "04",
    title: "SERIE DE PORTRAITS",
    category: "VISUELS",
    year: "2024",
    description: "Serie de 7 portraits illustres en hachures a l'encre. Style brut, expressif et personnel.",
    color: "#F2F2F2",
  },
]

export function FeaturedProjects() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">
      <div className="flex items-baseline justify-between mb-16">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Travaux choisis
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground mt-2">
            PROJETS
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase hidden md:block"
          data-cursor="TOUT"
        >
          Voir tous les projets
        </Link>
      </div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.id}`}
            data-cursor="VOIR"
            className="group block border-t border-border last:border-b py-8 md:py-12"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* Number */}
              <span className="font-mono text-xs text-muted-foreground w-8">
                {project.id}
              </span>

              {/* Title */}
              <h3 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                {project.title}
              </h3>

              {/* Category & Year */}
              <div className="flex items-center gap-4 md:gap-8">
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </div>

            {/* Description on hover */}
            <p className="font-sans text-sm text-muted-foreground mt-4 max-w-xl md:ml-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
