"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const proProjects = [
  {
    id: "P01",
    title: "Refonte Identite de Marque",
    client: "Studio Volta",
    type: "BRANDING",
    year: "2025",
    slug: "brand-identity-redesign",
  },
  {
    id: "P02",
    title: "Plateforme E-commerce",
    client: "Maison Noire",
    type: "WEB DESIGN",
    year: "2025",
    slug: "ecommerce-platform",
  },
  {
    id: "P03",
    title: "Bande Demo Motion",
    client: "Agence Flux",
    type: "MOTION",
    year: "2024",
    slug: "motion-reel",
  },
  {
    id: "P04",
    title: "Systeme Design Editorial",
    client: "Revue Graphique",
    type: "PRINT",
    year: "2024",
    slug: "editorial-design-system",
  },
  {
    id: "P05",
    title: "Site Portfolio",
    client: "Freelance",
    type: "DEV",
    year: "2024",
    slug: "portfolio-website",
  },
  {
    id: "P06",
    title: "Campagne Reseaux Sociaux",
    client: "Urban Collective",
    type: "VISUALS",
    year: "2024",
    slug: "social-media-campaign",
  },
]

export function LabSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-border">
      <div className="flex items-baseline justify-between mb-12">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Travaux
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase text-foreground mt-2">
            PROJETS PRO
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="group flex items-center gap-2 font-mono text-[10px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
          data-cursor="TOUT VOIR"
        >
          Voir tout
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {proProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group border border-border p-6 flex flex-col gap-4 hover:border-primary transition-colors duration-300"
            data-cursor="VOIR"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-primary tracking-widest">
                {project.id}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-1 tracking-widest group-hover:border-primary/50 transition-colors">
                {project.type}
              </span>
            </div>

            {/* Visual placeholder */}
            <div className="aspect-[4/3] border border-border/50 bg-secondary/30 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
              <span className="font-display text-5xl text-foreground/5 select-none group-hover:text-primary/10 transition-colors">
                {project.id}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl uppercase text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {project.client}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/50">
                  {project.year}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
