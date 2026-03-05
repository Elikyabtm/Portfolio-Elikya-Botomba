"use client"

const items = [
  "WEB DESIGN",
  "DESIGN GRAPHIQUE",
  "MOTION DESIGN",
  "BEATMAKING",
  "CREATIVE CODING",
  "BRANDING",
  "UI/UX",
]

export function MarqueeSection() {
  return (
    <section className="border-y border-border py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-4xl md:text-6xl uppercase text-foreground/10 mx-8 flex-shrink-0"
          >
            {item}
            <span className="text-primary mx-6">{"*"}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
