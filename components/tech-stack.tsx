"use client"

const tools = [
  { name: "Photoshop", abbr: "Ps", category: "Design" },
  { name: "Illustrator", abbr: "Ai", category: "Design" },
  { name: "InDesign", abbr: "Id", category: "Design" },
  { name: "After Effects", abbr: "Ae", category: "Motion" },
  { name: "VS Code", abbr: "</>", category: "Dev" },
  { name: "CapCut", abbr: "Cc", category: "Motion" },
  { name: "Figma", abbr: "Fi", category: "UX/UI" },
  { name: "React.js", abbr: "Re", category: "Dev" },
  { name: "Canva", abbr: "Ca", category: "Design" },
  { name: "Notion", abbr: "No", category: "Tools" },
]

export function TechStack() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-border">
      <span className="font-mono text-xs text-primary tracking-widest uppercase">
        Stack Technique
      </span>
      <h2 className="font-display text-4xl md:text-6xl uppercase text-foreground mt-2 mb-12">
        OUTILS
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group border border-border p-6 flex flex-col items-center gap-3 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            data-cursor={tool.name.toUpperCase()}
          >
            <span className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
              {tool.abbr}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              {tool.name}
            </span>
            <span className="font-mono text-[8px] text-primary/50 tracking-widest uppercase">
              {tool.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
