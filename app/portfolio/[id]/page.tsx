import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects, getProjectById } from "@/lib/projects"
import { SiteFooter } from "@/components/site-footer"
import { TrackPlayer } from "@/components/track-player"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)
  if (!project) return { title: "Not Found" }
  return {
    title: `${project.title} | ELIKYA BOTOMBA`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main>
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 py-8">
        <div className="flex items-center justify-between">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            data-cursor="RETOUR"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les projets
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
            >
              Accueil
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

      {/* Project intro */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col gap-8">
          {/* Meta info */}
          <div className="flex flex-wrap gap-8 font-mono text-xs text-muted-foreground tracking-widest uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-primary">{"R\u00f4le"}</span>
              <span className="text-foreground">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary">{"Ann\u00e9e"}</span>
              <span className="text-foreground">{project.year}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary">{"Cat\u00e9gorie"}</span>
              <span className="text-foreground uppercase">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase text-foreground leading-[0.85]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Hero visual */}
      <section className="px-6 md:px-12 lg:px-20">
        {project.video ? (
          <div className="w-full aspect-video border border-border relative overflow-hidden bg-muted">
            <video
              src={project.video}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-background"
              poster=""
            />
          </div>
        ) : project.thumbnail ? (
          <div className="w-full aspect-video border border-border relative overflow-hidden bg-muted">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div
            className="w-full aspect-video border border-border relative overflow-hidden"
            style={{ backgroundColor: project.thumbnailColor + "10" }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-display text-[15rem] md:text-[25rem] text-foreground/5 select-none">
              {project.id}
            </span>
          </div>
        )}
      </section>

      {/* Challenge section */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Le Defi
            </span>
            <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed mt-4">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {"L'Approche"}
            </span>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mt-4">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-y border-border">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          Outils & Technologies
        </span>
        <div className="flex flex-wrap gap-3 mt-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-xs text-foreground border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Audio tracks section */}
      {project.tracks && project.tracks.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-24">
          <TrackPlayer tracks={project.tracks} />
        </section>
      )}

      {/* Visual sections */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        {project.images && project.images.length > 0 ? (
          <>
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-8 block">
              Galerie
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] border border-border relative overflow-hidden bg-muted group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="aspect-square border border-border"
                style={{ backgroundColor: project.thumbnailColor + "08" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {"D\u00e9tail 01"}
                  </span>
                </div>
              </div>
              <div
                className="aspect-square border border-border"
                style={{ backgroundColor: project.thumbnailColor + "05" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {"D\u00e9tail 02"}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="mt-4 aspect-[21/9] border border-border"
              style={{ backgroundColor: project.thumbnailColor + "06" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {"D\u00e9tail Pleine Largeur"}
                </span>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Next project */}
      <section className="border-t border-border">
        <Link
          href={`/portfolio/${nextProject.id}`}
          data-cursor="SUIVANT"
          className="group block px-6 md:px-12 lg:px-20 py-24 hover:bg-primary/5 transition-colors"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Projet Suivant
            </span>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] uppercase text-foreground group-hover:text-primary transition-colors leading-[0.85]">
                {nextProject.title}
              </h2>
              <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" />
            </div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {nextProject.category} / {nextProject.year}
            </span>
          </div>
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}
