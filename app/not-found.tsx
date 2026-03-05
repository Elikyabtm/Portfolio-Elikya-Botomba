import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <span className="font-display text-[12rem] md:text-[20rem] text-foreground/5 leading-none select-none">
        404
      </span>
      <h1 className="font-display text-4xl md:text-6xl uppercase text-foreground -mt-16">
        PAGE INTROUVABLE
      </h1>
      <p className="font-mono text-xs text-muted-foreground tracking-widest mt-4">
        {`// la page que vous cherchez n'existe pas`}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-colors tracking-widest uppercase border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground"
        data-cursor="ACCUEIL"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à l{"'"}accueil
      </Link>
    </main>
  )
}
