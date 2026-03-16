"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type ImageWithDimensions = {
  src: string
  width: number
  height: number
  aspectRatio: "portrait" | "landscape" | "square"
}

export function ImageGallery({
  images,
  projectTitle,
}: {
  images: string[]
  projectTitle: string
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesWithDimensions, setImagesWithDimensions] = useState<ImageWithDimensions[]>([])

  // Load image dimensions
  useEffect(() => {
    const loadImageDimensions = async () => {
      const loaded = await Promise.all(
        images.map((src) => {
          return new Promise<ImageWithDimensions>((resolve) => {
            const img = new window.Image()
            img.crossOrigin = "anonymous"
            img.onload = () => {
              const ratio = img.width / img.height
              let aspectRatio: "portrait" | "landscape" | "square" = "square"
              if (ratio > 1.2) aspectRatio = "landscape"
              else if (ratio < 0.8) aspectRatio = "portrait"
              resolve({
                src,
                width: img.width,
                height: img.height,
                aspectRatio,
              })
            }
            img.onerror = () => {
              resolve({
                src,
                width: 1,
                height: 1,
                aspectRatio: "square",
              })
            }
            img.src = src
          })
        })
      )
      setImagesWithDimensions(loaded)
    }
    loadImageDimensions()
  }, [images])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <>
      <span className="font-mono text-xs text-primary tracking-widest uppercase mb-8 block">
        Galerie
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagesWithDimensions.length > 0
          ? imagesWithDimensions.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="border border-border relative overflow-hidden bg-muted group cursor-pointer"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
                data-cursor="VOIR"
              >
                <Image
                  src={img.src}
                  alt={`${projectTitle} - ${i + 1}`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))
          : // Fallback while loading
            images.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="aspect-[3/4] border border-border relative overflow-hidden bg-muted group cursor-pointer"
                data-cursor="VOIR"
              >
                <Image
                  src={img}
                  alt={`${projectTitle} - ${i + 1}`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-background/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
            data-cursor="FERMER"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 md:left-8 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
            data-cursor="PREC"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 md:right-8 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
            data-cursor="SUIV"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image container */}
          <div
            className="relative w-[90vw] h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} - ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
