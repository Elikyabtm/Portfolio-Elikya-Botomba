import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Portfolio | ELIKYA BOTOMBA",
  description: "Travaux choisis - Motion, Digital, Son, Visuels",
}

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const { cat } = await searchParams

  return (
    <main>
      <section className="px-6 md:px-12 lg:px-20 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            data-cursor="ACCUEIL"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
          <nav className="flex gap-6">
            {["A propos", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "A propos" ? "/about" : "/contact"}
                className="font-mono text-xs text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Title */}
        <div className="mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Travaux choisis
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase text-foreground leading-[0.85] mt-4">
            PORT
            <br />
            FOLIO
          </h1>
        </div>

        <PortfolioGallery initialCategory={cat || "all"} />
      </section>
      <SiteFooter />
    </main>
  )
}
