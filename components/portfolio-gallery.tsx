"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects, categories, type Project } from "@/lib/projects"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLarge = index % 3 === 0

  return (
    <Link
      href={`/portfolio/${project.id}`}
      data-cursor="VOIR"
      className={`group block relative overflow-hidden border border-border hover:border-primary transition-colors duration-300 ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className="aspect-[4/3] w-full relative overflow-hidden"
        style={{ backgroundColor: project.thumbnail ? "#1A1A1A" : project.thumbnailColor + "10" }}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-display text-[8rem] md:text-[12rem] text-foreground/5 select-none">
            {project.id}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
          <span className="font-display text-3xl text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
            VOIR
            <ArrowUpRight className="w-6 h-6" />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl md:text-2xl uppercase text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1">
          {project.description}
        </p>
      </div>
    </Link>
  )
}

export function PortfolioGallery({ initialCategory = "all" }: { initialCategory?: string }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            data-cursor={cat.label}
            className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-primary border-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            {cat.label}
            <span className="ml-2 text-[10px]">
              ({cat.value === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.value).length})
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
