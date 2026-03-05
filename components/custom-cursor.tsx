"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState("")
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const labelEl = labelRef.current
    if (!cursor || !labelEl) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
      labelEl.style.left = `${e.clientX}px`
      labelEl.style.top = `${e.clientY}px`
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, [data-cursor]")
      if (interactive) {
        setIsHovering(true)
        const cursorLabel =
          interactive.getAttribute("data-cursor") || "VOIR"
        setLabel(cursorLabel)
      } else {
        setIsHovering(false)
        setLabel("")
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseover", onMouseOver)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseover", onMouseOver)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor hidden md:block ${isHovering ? "hovering" : ""}`}
      />
      <div
        ref={labelRef}
        className="fixed pointer-events-none z-[99999] hidden md:flex items-center justify-center"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {isHovering && label && (
          <span className="text-foreground text-[10px] font-mono font-bold uppercase tracking-widest">
            {label}
          </span>
        )}
      </div>
    </>
  )
}
