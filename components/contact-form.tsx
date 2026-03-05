"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-primary p-12">
        <span className="font-display text-4xl md:text-6xl text-primary uppercase">
          {"ENVOY\u00c9."}
        </span>
        <p className="font-mono text-xs text-muted-foreground mt-4 text-center tracking-widest uppercase">
          {"Je vous recontacte tres vite."}
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: "", email: "", subject: "", message: "" })
          }}
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors mt-8 tracking-widest uppercase"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
        Envoyer un message
      </span>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
          Nom *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
          placeholder="Votre nom"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
          placeholder="you@email.com"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
          placeholder="Collaboration, freelance, etc."
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Parlez-moi de votre projet..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        data-cursor="SEND"
        className="group flex items-center justify-between border border-foreground p-6 hover:bg-primary hover:border-primary transition-all duration-300 mt-4"
      >
        <span className="font-display text-2xl uppercase text-foreground group-hover:text-primary-foreground transition-colors">
          ENVOYER
        </span>
        <ArrowUpRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
      </button>

      <p className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">
        {"/* Les champs marques d'un * sont obligatoires */"}
      </p>
    </form>
  )
}
