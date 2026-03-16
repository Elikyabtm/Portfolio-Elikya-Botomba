"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Maximize2, X, Monitor, Tablet, Smartphone, AlertCircle } from "lucide-react"

type DeviceSize = "desktop" | "tablet" | "mobile"

interface WebsiteEmbedProps {
  url: string
  title: string
  mobileOnly?: boolean
}

export function WebsiteEmbed({ url, title, mobileOnly = false }: WebsiteEmbedProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [deviceSize, setDeviceSize] = useState<DeviceSize>(mobileOnly ? "mobile" : "desktop")
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [loadTimeout, setLoadTimeout] = useState(false)

  // Timeout to detect if iframe failed to load (some sites block without triggering error)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setLoadTimeout(true)
      }
    }, 8000) // 8 seconds timeout

    return () => clearTimeout(timer)
  }, [isLoading])

  const deviceWidths: Record<DeviceSize, string> = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px",
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Site Web
            </span>
            {mobileOnly && (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground bg-muted px-3 py-1 border border-border">
                <Smartphone className="w-3 h-3" />
                Mobile uniquement
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Device size toggles - hide if mobile only */}
            {!mobileOnly && (
              <div className="flex border border-border">
                <button
                  onClick={() => setDeviceSize("desktop")}
                  className={`p-2 transition-colors ${
                    deviceSize === "desktop"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Desktop"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceSize("tablet")}
                  className={`p-2 border-x border-border transition-colors ${
                    deviceSize === "tablet"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Tablet"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceSize("mobile")}
                  className={`p-2 transition-colors ${
                    deviceSize === "mobile"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Mobile"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Fullscreen button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              title="Plein ecran"
              data-cursor="AGRANDIR"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* External link */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              title="Ouvrir dans un nouvel onglet"
              data-cursor="OUVRIR"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Iframe container */}
        <div className="flex justify-center">
          <div
            className="border border-border bg-muted relative overflow-hidden transition-all duration-300"
            style={{
              width: deviceWidths[deviceSize],
              maxWidth: "100%",
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-muted px-3 py-1.5 text-xs text-muted-foreground font-mono truncate">
                  {url}
                </div>
              </div>
            </div>

            {/* Loading state */}
            {isLoading && !loadTimeout && !hasError && (
              <div className="absolute inset-0 top-12 flex items-center justify-center bg-background z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    Chargement...
                  </span>
                </div>
              </div>
            )}

            {/* Error/Blocked state */}
            {(hasError || loadTimeout) && (
              <div className="absolute inset-0 top-12 flex items-center justify-center bg-background z-10">
                <div className="flex flex-col items-center gap-6 text-center px-8">
                  <AlertCircle className="w-12 h-12 text-muted-foreground" />
                  <div className="space-y-2">
                    <p className="font-mono text-sm text-foreground">
                      Ce site ne peut pas etre affiche dans un apercu
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      Le site bloque l'affichage en iframe pour des raisons de securite
                    </p>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ouvrir le site
                  </a>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              src={url}
              title={title}
              className="w-full bg-white"
              style={{ height: deviceSize === "mobile" ? "667px" : "600px" }}
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)}
            />
          </div>
        </div>

        {/* URL display */}
        <div className="flex items-center justify-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest underline underline-offset-4"
          >
            {url}
          </a>
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="font-mono text-xs text-foreground tracking-widest uppercase">
              {title}
            </span>
            <div className="flex items-center gap-2">
              {/* Device size toggles - hide if mobile only */}
              {!mobileOnly && (
                <div className="flex border border-border">
                  <button
                    onClick={() => setDeviceSize("desktop")}
                    className={`p-2 transition-colors ${
                      deviceSize === "desktop"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceSize("tablet")}
                    className={`p-2 border-x border-border transition-colors ${
                      deviceSize === "tablet"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceSize("mobile")}
                    className={`p-2 transition-colors ${
                      deviceSize === "mobile"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              )}

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                data-cursor="FERMER"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Iframe */}
          <div className="flex-1 flex justify-center items-start p-4 overflow-auto bg-muted">
            <div
              className="bg-white h-full transition-all duration-300 shadow-2xl"
              style={{
                width: deviceWidths[deviceSize],
                maxWidth: "100%",
              }}
            >
              <iframe
                src={url}
                title={title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
