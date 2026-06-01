import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects, getProjectById } from "@/lib/projects"
import { SiteFooter } from "@/components/site-footer"
import { TrackPlayer } from "@/components/track-player"
import { ImageGallery } from "@/components/image-gallery"
import { WebsiteEmbed } from "@/components/website-embed"
import { AdaptiveThumbnail } from "@/components/adaptive-thumbnail"
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

  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  // Le projet a-t-il un champ approche distinct ?
  const approachText =
    "approach" in project && (project as typeof project & { approach?: string }).approach
      ? (project as typeof project & { approach: string }).approach
      : null

  return (
    <main>

      {/* ── HEADER ── */}
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
            <Link href="/" className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors">
              À propos
            </Link>
          </nav>
        </div>
      </section>

      {/* ── INTRO : META + TITRE ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-12 pb-16 md:pt-20 md:pb-24">

        {/* Meta */}
        <div className="flex flex-wrap gap-8 font-mono text-xs text-muted-foreground tracking-widest uppercase mb-10">
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
            <span className="text-foreground uppercase">{project.category}</span>
          </div>
        </div>

        {/* Titre */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase text-foreground leading-[0.85]">
          {project.title}
        </h1>

      </section>

      {/* ── COVER HERO (pleine largeur, aucun padding horizontal) ── */}
      <div className="w-full">
        {project.video ? (
          <div className="w-full aspect-video relative overflow-hidden bg-muted">
            <video
              src={project.video}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-background"
            />
          </div>
        ) : project.thumbnail ? (
          <div className="w-full border-y border-border">
            <AdaptiveThumbnail
              src={project.thumbnail}
              alt={project.title}
              fallbackColor={project.thumbnailColor}
              fallbackId={project.id}
            />
          </div>
        ) : (
          <div
            className="w-full aspect-video border-y border-border relative overflow-hidden"
            style={{ backgroundColor: project.thumbnailColor + "10" }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-display text-[15rem] md:text-[25rem] text-foreground/5 select-none">
              {project.id}
            </span>
          </div>
        )}
      </div>

      {/* ── DÉFI & APPROCHE — layout aéré, texte respirant ── */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">

        {/* 01 — Le Défi */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase">01</span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em] uppercase">Le D&eacute;fi</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Le défi : grand, très lisible, pas de max-width trop serré */}
          <p className="font-sans text-xl md:text-2xl lg:text-3xl text-foreground leading-[1.5] max-w-3xl">
            {project.challenge}
          </p>
        </div>

        {/* 02 — L'Approche */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

          {/* Label vertical sur desktop */}
          <div className="md:col-span-1 hidden md:flex flex-col items-center pt-1">
            <span
              className="font-mono text-[10px] text-muted-foreground tracking-[0.25em] uppercase"
              style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            >
              L&apos;Approche
            </span>
          </div>

          {/* Numéro + label mobile */}
          <div className="flex items-center gap-3 md:hidden mb-2">
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase">02</span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em] uppercase">L&apos;Approche</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Texte approche — découpé en paragraphes pour respirer */}
          <div className="md:col-span-11 md:pl-8 border-l border-border">
            {approachText ? (
              // Si plusieurs phrases, on les sépare en §
              approachText.split(/(?<=\.) (?=[A-ZÀ-Ü])/).map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base md:text-lg text-muted-foreground leading-[1.8] max-w-2xl mb-6 last:mb-0"
                >
                  {para}
                </p>
              ))
            ) : (
              // Fallback : description découpée aussi
              project.description.split(/(?<=\.) (?=[A-ZÀ-Ü])/).map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base md:text-lg text-muted-foreground leading-[1.8] max-w-2xl mb-6 last:mb-0"
                >
                  {para}
                </p>
              ))
            )}
          </div>

        </div>
      </section>

      {/* ── OUTILS ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-y border-border">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          Outils &amp; Technologies
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

      {/* ── CONTENU DU PROJET : audio, site, galerie ── */}
      {/* Ces sections arrivent en scrollant, après avoir lu le contexte */}

      {project.tracks && project.tracks.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase">Écouter</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <TrackPlayer tracks={project.tracks} />
        </section>
      )}

      {project.websiteUrl && (
        <section className="px-6 md:px-12 lg:px-20 py-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase">Explorer le site</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <WebsiteEmbed url={project.websiteUrl} title={project.title} mobileOnly={project.mobileOnly} />
        </section>
      )}

      {project.images && project.images.length > 0 && project.showImages !== false && (
        <section className="px-6 md:px-12 lg:px-20 py-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase">Visuels</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <ImageGallery images={project.images} projectTitle={project.title} />
        </section>
      )}

      {/* Placeholder si aucun contenu */}
      {!project.tracks?.length && !project.websiteUrl && !project.images?.length && project.showImages !== false && (
        <section className="px-6 md:px-12 lg:px-20 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square border border-border flex items-center justify-center" style={{ backgroundColor: project.thumbnailColor + "08" }}>
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{"D\u00e9tail 01"}</span>
            </div>
            <div className="aspect-square border border-border flex items-center justify-center" style={{ backgroundColor: project.thumbnailColor + "05" }}>
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{"D\u00e9tail 02"}</span>
            </div>
          </div>
          <div className="mt-4 aspect-[21/9] border border-border flex items-center justify-center" style={{ backgroundColor: project.thumbnailColor + "06" }}>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{"D\u00e9tail Pleine Largeur"}</span>
          </div>
        </section>
      )}

      {/* ── PROJET SUIVANT ── */}
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