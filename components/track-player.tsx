"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import type { Track } from "@/lib/projects"

interface TrackPlayerProps {
  tracks: Track[]
}

export function TrackPlayer({ tracks }: TrackPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const clearProgressInterval = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }
  }, [])

  const startProgressInterval = useCallback(() => {
    clearProgressInterval()
    progressIntervalRef.current = setInterval(() => {
      if (audioRef.current) {
        setProgress(audioRef.current.currentTime)
      }
    }, 100)
  }, [clearProgressInterval])

  useEffect(() => {
    return () => {
      clearProgressInterval()
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [clearProgressInterval])

  function handleTrackClick(index: number) {
    if (currentTrack === index && isPlaying) {
      // Pause
      audioRef.current?.pause()
      setIsPlaying(false)
      clearProgressInterval()
      return
    }

    if (currentTrack === index && !isPlaying) {
      // Resume
      audioRef.current?.play()
      setIsPlaying(true)
      startProgressInterval()
      return
    }

    // New track
    if (audioRef.current) {
      audioRef.current.pause()
    }
    clearProgressInterval()

    const audio = new Audio(tracks[index].audio)
    audioRef.current = audio
    audio.muted = isMuted

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration)
    })

    audio.addEventListener("ended", () => {
      setIsPlaying(false)
      setProgress(0)
      clearProgressInterval()
      // Auto play next
      const nextIndex = (index + 1) % tracks.length
      handleTrackClick(nextIndex)
    })

    audio.play()
    setCurrentTrack(index)
    setIsPlaying(true)
    setProgress(0)
    startProgressInterval()
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    if (!audioRef.current || currentTrack === null) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    audioRef.current.currentTime = pct * duration
    setProgress(pct * duration)
  }

  function toggleMute() {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  function formatTime(s: number) {
    const min = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${min}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-0">
      <span className="font-mono text-xs text-primary tracking-widest uppercase mb-8 block">
        Tracklist
      </span>

      {/* Track grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tracks.map((track, i) => (
          <button
            key={i}
            onClick={() => handleTrackClick(i)}
            className="group text-left focus:outline-none cursor-none"
            data-cursor="ECOUTER"
          >
            <div className="relative aspect-square overflow-hidden border border-border">
              <Image
                src={track.cover}
                alt={track.title}
                fill
                className={`object-cover transition-all duration-500 ${
                  currentTrack === i && isPlaying
                    ? "scale-105"
                    : "group-hover:scale-105"
                }`}
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  currentTrack === i
                    ? "bg-background/60"
                    : "bg-background/0 group-hover:bg-background/40"
                }`}
              >
                <div
                  className={`w-14 h-14 border-2 border-foreground flex items-center justify-center transition-all duration-300 ${
                    currentTrack === i
                      ? "opacity-100 bg-primary border-primary"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {currentTrack === i && isPlaying ? (
                    <Pause className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  )}
                </div>
              </div>

              {/* Playing indicator bar */}
              {currentTrack === i && isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                  <div
                    className="h-full bg-primary transition-all duration-100"
                    style={{
                      width: duration > 0 ? `${(progress / duration) * 100}%` : "0%",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Track info */}
            <div className="mt-3">
              <p
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  currentTrack === i ? "text-primary" : "text-foreground"
                }`}
              >
                {track.title}
              </p>
              {track.volume && (
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">
                  {track.volume}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Bottom player bar */}
      {currentTrack !== null && (
        <div className="mt-12 border border-border p-4 md:p-6 flex flex-col gap-4 animate-fade-in">
          <div className="flex items-center gap-4">
            {/* Mini cover */}
            <div className="w-12 h-12 relative overflow-hidden border border-border shrink-0">
              <Image
                src={tracks[currentTrack].cover}
                alt={tracks[currentTrack].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Track info */}
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs text-foreground tracking-widest uppercase truncate">
                {tracks[currentTrack].title}
              </p>
              <p className="font-mono text-[10px] text-primary tracking-widest">
                ELK {tracks[currentTrack].volume && `/ ${tracks[currentTrack].volume}`}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleTrackClick(currentTrack)}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-none"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-none"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted-foreground w-10 text-right">
              {formatTime(progress)}
            </span>
            <div
              className="flex-1 h-1 bg-muted cursor-pointer group"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-primary relative transition-all duration-100"
                style={{
                  width: duration > 0 ? `${(progress / duration) * 100}%` : "0%",
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
