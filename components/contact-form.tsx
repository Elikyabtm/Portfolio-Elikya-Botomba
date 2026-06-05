"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error || "Une erreur est survenue.")
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setErrorMessage("Impossible d'envoyer le message. Vérifie ta connexion.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center border border-primary p-12">
        <span className="font-display text-4xl md:text-6xl text-primary uppercase">
          {"ENVOY\u00c9."}
        </span>
        <p className="font-mono text-xs text-muted-foreground mt-4 text-center tracking-widest uppercase">
          {"Je te recontacte tr\u00e8s vite."}
        </p>
        <button
          onClick={() => {
            setStatus("idle")
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
        <label
          htmlFor="name"
          className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase"
        >
          Nom *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
          placeholder="Ton nom"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase"
        >
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
        <label
          htmlFor="subject"
          className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase"
        >
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
          placeholder="Collaboration, freelance, etc."
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase"
        >
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="bg-secondary border border-border p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Parle-moi de ton projet..."
        />
      </div>

      {/* Erreur */}
      {status === "error" && (
        <p className="font-mono text-xs text-red-500 tracking-widest">
          ⚠ {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        data-cursor="ENVOYER"
        className="group flex items-center justify-between border border-foreground p-6 hover:bg-primary hover:border-primary transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="font-display text-2xl uppercase text-foreground group-hover:text-primary-foreground transition-colors">
          {status === "loading" ? "ENVOI..." : "ENVOYER"}
        </span>
        <ArrowUpRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
      </button>

      <p className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">
        {"/* Les champs marqu\u00e9s d'un * sont obligatoires */"}
      </p>
    </form>
  )
}