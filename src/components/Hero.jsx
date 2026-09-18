import React from 'react'
import { ChevronDown, Heart } from 'lucide-react'
import weddingData from '../data/weddingData'
import { Flourish } from './Ornament'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-charcoal">
      {/* ── full-bleed photo + cinematic grading ── */}
      <img
        src={weddingData.images.hero}
        alt={`${weddingData.bride} and ${weddingData.groom}`}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/35 to-charcoal/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_18%,rgba(226,190,110,0.22),transparent_70%)]" />

      {/* ── giant watermark monogram ── */}
      <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-script text-[38vw] text-white/[0.04] sm:text-[26rem]">
        {weddingData.monogram}
      </span>

      {/* ── rotating halo rings ── */}
      <div className="pointer-events-none absolute left-1/2 top-[4%] h-[46rem] w-[46rem] max-w-none -translate-x-1/2 animate-spin-slow rounded-full border border-gold-300/15" />
      <div
        className="pointer-events-none absolute left-1/2 top-[7%] h-[38rem] w-[38rem] max-w-none -translate-x-1/2 animate-spin-slow rounded-full border border-dashed border-gold-200/20"
        style={{ animationDirection: 'reverse' }}
      />

      {/* ── twinkling sparkle dots ── */}
      <div className="pointer-events-none absolute left-[18%] top-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-200/90" />
      <div className="pointer-events-none absolute right-[16%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-gold-300/80" style={{ animationDelay: '0.6s' }} />
      <div className="pointer-events-none absolute right-[24%] bottom-[26%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" style={{ animationDelay: '1.1s' }} />
      <div className="pointer-events-none absolute left-[26%] bottom-[30%] h-2 w-2 animate-pulse rounded-full bg-gold-300/70" style={{ animationDelay: '1.7s' }} />

      {/* ── editorial side note ── */}
      <span className="pointer-events-none absolute bottom-28 left-9 hidden font-display text-[10px] uppercase tracking-[0.45em] text-gold-300/70 [writing-mode:vertical-rl] lg:block">
        Est. {new Date(weddingData.weddingDateISO).getFullYear()} · Two Hearts · One Story
      </span>

      {/* ── gold mat frame ── */}
      <div className="pointer-events-none absolute inset-4 border border-gold-400/30 sm:inset-8" />
      <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l border-t border-gold-300/90 sm:left-8 sm:top-8" />
      <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 border-r border-t border-gold-300/90 sm:right-8 sm:top-8" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 border-b border-l border-gold-300/90 sm:bottom-8 sm:left-8" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b border-r border-gold-300/90 sm:bottom-8 sm:right-8" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-white">
        {/* ── quote ── */}
        <p className="font-display italic text-sm text-gold-200 sm:text-base">“{weddingData.quote}”</p>
        <div className="my-5 opacity-90">
          <Flourish />
        </div>

        {/* ── golden arch portrait ── */}
        <div className="float-slow relative mt-2 h-[36vh] max-h-[400px] w-52 sm:h-[46vh] sm:max-h-[490px] sm:w-72">
          <div className="absolute inset-0 rounded-t-full rounded-b-[3.5rem] border border-gold-400/80 bg-gold-300/10" />
          <div className="absolute inset-3 rounded-t-full rounded-b-[3rem] border border-gold-300/50" />
          <img
            src={weddingData.images.hero}
            alt={`${weddingData.bride} and ${weddingData.groom} first wink`}
            className="absolute inset-0 h-full w-full rounded-t-full rounded-b-[3.5rem] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-t-full rounded-b-[3.5rem] bg-gradient-to-b from-transparent via-transparent to-charcoal/45" />
          <div className="pointer-events-none absolute inset-3 rounded-t-full rounded-b-[3rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />

          <span className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 animate-pulse rounded-full bg-gold-200" />
          <span className="absolute right-10 top-16 h-1.5 w-1.5 animate-pulse rounded-full bg-white/80" style={{ animationDelay: '0.9s' }} />

          {/* apex monogram medallion */}
          <div className="absolute -top-8 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-gold-300 bg-charcoal/85 shadow-[0_0_25px_rgba(201,162,74,0.45)] backdrop-blur-sm sm:h-16 sm:w-16">
            <span className="font-script text-lg text-gold-200 sm:text-xl">{weddingData.monogram}</span>
          </div>
        </div>

        {/* ── names ── */}
        <h1 className="relative z-10 -mt-9 flex flex-wrap items-center justify-center gap-x-4 font-script text-5xl leading-none text-shimmer drop-shadow-[0_3px_10px_rgba(43,38,34,0.55)] sm:text-7xl">
          <span>{weddingData.bride}</span>
          <span className="my-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/80 bg-charcoal/70 text-2xl text-gold-200 backdrop-blur-sm sm:h-16 sm:w-16 sm:text-3xl">
            &amp;
          </span>
          <span>{weddingData.groom}</span>
        </h1>

        {/* ── announce ── */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold-300/70" />
          <p className="flex items-center gap-2 font-heading text-[11px] uppercase tracking-[0.4em] text-gold-100 sm:text-xs">
            <Heart className="heart-beat h-3.5 w-3.5 text-gold-300" fill="currentColor" />
            Are getting married
            <Heart className="heart-beat h-3.5 w-3.5 text-gold-300" fill="currentColor" />
          </p>
          <span className="h-px w-10 bg-gold-300/70" />
        </div>

        {/* ── date ── */}
        <div className="mt-7 flex flex-col items-center">
          <p className="font-heading text-2xl tracking-[0.22em] text-white sm:text-3xl">
            {weddingData.weddingDateDisplay}
          </p>
          <p className="mt-1.5 font-display text-xs uppercase tracking-[0.4em] text-gold-200">
            {weddingData.weddingDayLabel}
          </p>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll down"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-gold-200"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.4em] text-gold-300/80">Scroll</span>
        <ChevronDown size={22} strokeWidth={1.2} className="animate-bounce" />
      </a>
    </section>
  )
}