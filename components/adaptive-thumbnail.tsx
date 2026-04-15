"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface AdaptiveThumbnailProps {
  src: string
  alt: string
  fallbackColor: string
  fallbackId: string
}

export function AdaptiveThumbnail({ src, alt, fallbackColor, fallbackId }: AdaptiveThumbnailProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight })
      setIsLoading(false)
    }
    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
    }
    img.src = src
  }, [src])

  // Error fallback
  if (hasError) {
    return (
      <div
        className="w-full aspect-video border border-border relative overflow-hidden"
        style={{ backgroundColor: fallbackColor + "10" }}
      >
        <span className="absolute inset-0 flex items-center justify-center font-display text-[15rem] md:text-[25rem] text-foreground/5 select-none">
          {fallbackId}
        </span>
      </div>
    )
  }

  // Loading state with default aspect ratio
  if (isLoading || !dimensions) {
    return (
      <div className="w-full border border-border relative overflow-hidden bg-muted animate-pulse" style={{ aspectRatio: "16 / 9" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full border border-border relative overflow-hidden bg-muted"
      style={{ aspectRatio: `${dimensions.width} / ${dimensions.height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
