import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { TechStack } from "@/components/tech-stack"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "A propos | ELIKYA BOTOMBA",
  description:
    "Web Designer. Motion, Dev, Son, Visuels.",
}

export default function AboutPage() {
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
              href="/contact"
              className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
              data-cursor="SALUT"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>

      {/* Title */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          À propos
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase text-foreground leading-[0.85] mt-4">
          {"À PROPOS"}
        </h1>
      </section>

      {/* Bio */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: labels */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Nom
              </span>
              <p className="font-display text-2xl uppercase text-foreground mt-1">
                ELIKYA BOTOMBA
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Localisation
              </span>
              <p className="font-sans text-sm text-foreground mt-1">
                Paris, France
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Formation
              </span>
              <p className="font-sans text-sm text-foreground mt-1">
                {"3ème année - Web Design & Communication visuelle - ICAN"}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
                Statut
              </span>
              <p className="font-sans text-sm text-primary mt-1">
                Disponible
              </p>
            </div>
          </div>

          {/* Right: bio text */}
          <div className="md:col-span-8">
            <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed">
              {
                "Je suis une créatrice pluridisciplinaire qui évolue entre le design, le développement web, la direction artistique, l’écriture et les expériences interactives. J’aime créer des projets qui racontent quelque chose, avec une vraie identité visuelle et émotionnelle."
              }
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mt-6">
              {
                "Actuellement en 3ème année d’études en web design, j’ai développé une approche mélangeant UI/UX, scrollytelling, branding, motion et développement front-end. Mon univers est influencé par le cinéma, la culture populaire, la mode streetwear, les expériences éditoriales immersives et les univers narratifs forts."
              }
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mt-4">
              {
                "J’aborde chaque projet comme une expérience complète : je ne cherche pas seulement à concevoir quelque chose de fonctionnel, mais à construire une atmosphère, une émotion et une intention. Qu’il s’agisse d’un site immersif, d’un projet interactif, d’un univers de marque ou d’un concept narratif, je porte une attention particulière aux détails, au rythme visuel et à la cohérence artistique."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      <SiteFooter />
    </main>
  )
}