"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "08",
    title: "Hawkins Files",
    category: "DIGITAL",
    year: "2025",
    description:
      "Experience web immersive concue comme un systeme d'archives classifiees inspire de Stranger Things.",
    thumbnail: "/images/projects/hawkinsfilescover.webp",
    color: "#1a1a2e",
  },
  {
    id: "07",
    title: "Scared of My Own Image Pt.2",
    category: "VISUELS",
    year: "2026",
    description:
      "Série de 8 portraits digitaux réalisés avec une technique de hachures croisées.",
    thumbnail: "/images/portraits/portraits2.webp",
    color: "#0d0d0d",
  },
  {
    id: "11",
    title: "Nuance – Sensory Social Map",
    category: "DIGITAL",
    year: "2026",
    description:
      "Application sociale et géolocalisée pour les personnes neurodivergentes.",
    thumbnail: "/images/projects/nuancecover.webp",
    color: "#0d1f2d",
  },
  {
    id: "04",
    title: "EMOTIONS",
    category: "SON",
    year: "2024",
    description: "5 beats, 5 covers, 5 états d'esprit. Écoutable en ligne.",
    thumbnail: "/images/prods/covers.webp",
    color: "#1a0a0a",
  },
]

export function FeaturedProjects() {
  const [hero, ...rest] = projects

  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">

      {/* Header */}
      <div className="flex items-baseline justify-between mb-12">
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
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase hidden md:flex items-center gap-2 group"
          data-cursor="TOUT"
        >
          Voir tous les projets
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Grille asymétrique */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* Grand projet héros — 7 colonnes, pleine hauteur */}
        <Link
          href={`/portfolio/${hero.id}`}
          data-cursor="VOIR"
          className="group md:col-span-7 relative overflow-hidden border border-border hover:border-primary transition-[border-color] duration-300 block"
          style={{ minHeight: "520px" }}
        >
          {/* Image de fond */}
          <div className="absolute inset-0">
            <Image
              src={hero.thumbnail}
              alt={hero.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
              priority
            />
            {/* Dégradé bas */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>

          {/* Contenu */}
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            {/* Top : numéro + catégorie */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white/50 tracking-widest">
                {hero.id}
              </span>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase border border-primary/40 px-2 py-1">
                {hero.category}
              </span>
            </div>

            {/* Bottom : titre + flèche */}
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-sans text-xs text-white/50 mb-3 max-w-xs leading-relaxed">
                  {hero.description}
                </p>
                <h3 className="font-display text-4xl md:text-5xl uppercase text-white group-hover:text-primary transition-colors duration-300 leading-[0.9]">
                  {hero.title}
                </h3>
                <span className="font-mono text-xs text-white/40 mt-2 block">
                  {hero.year}
                </span>
              </div>
              <ArrowUpRight className="w-8 h-8 text-white/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
            </div>
          </div>
        </Link>

        {/* 3 petits projets — 5 colonnes, empilés */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {rest.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              data-cursor="VOIR"
              className="group relative overflow-hidden border border-border hover:border-primary transition-[border-color] duration-300 block flex-1"
              style={{ minHeight: "160px" }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/40 tracking-widest">
                    {project.id}
                  </span>
                  <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl uppercase text-white group-hover:text-primary transition-colors duration-300 leading-[0.9]">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-white/40 mt-1 block">
                      {project.year}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Lien mobile */}
      <div className="mt-8 md:hidden">
        <Link
          href="/portfolio"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase flex items-center gap-2"
          data-cursor="TOUT"
        >
          Voir tous les projets
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

    </section>
  )
}