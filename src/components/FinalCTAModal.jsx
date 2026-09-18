// src/components/FinalCTAModal.jsx
import { useEffect, useMemo } from 'react'
import { CalendarHeart, Heart, ArrowRight } from 'lucide-react'
import CoupleIllustration from './final-cta-animation/CoupleIllustration'
import FloatingHearts from './final-cta-animation/FloatingHearts'
import GoldSparkle from './gold-butterfly-animation/butterflies/GoldSparkle'
import FlyingButterflies from './gold-butterfly-animation/butterflies/FlyingButterflies'
import './gold-butterfly-animation/butterflies/GoldButterfly.css'
import './FinalCTAModal.css'
import weddingData from '../data/weddingData'

export default function FinalCTAModal({ open, onClose, onRSVP }) {
  const { heading, message, buttonText } = weddingData.finalReminder

  // lock body scroll + allow Esc to close while modal is open
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  // scattered twinkling sparkles (reuses GoldSparkle + its twinkle CSS)
  const sparkles = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        top: `${3 + Math.random() * 90}%`,
        left: `${2 + Math.random() * 92}%`,
        size: 8 + Math.random() * 10,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
      })),
    []
  )

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center
                 overflow-hidden bg-[#241c10]/60 px-4 py-6 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="final-cta-heading"
      onClick={onClose}
    >
      {/* warm golden glow behind the card */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[62vh] w-[62vh] -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_70%)]"
        aria-hidden="true"
      />

      {/* full-screen ambient layer: a few gold butterflies + drifting hearts */}
      <div
        className="pointer-events-none absolute inset-0 z-[30] overflow-hidden"
        aria-hidden="true"
      >
        <FlyingButterflies count={4} starCount={0} layout="random" />
        <FloatingHearts count={14} fullScreen />
      </div>

      <div
        className="relative w-full max-w-lg text-center
                   rounded-[2.2rem] border border-[#d4af37]/45
                   bg-[linear-gradient(165deg,#fffdf6_0%,#fbf1de_45%,#f6e6cb_100%)]
                   shadow-[0_30px_80px_-20px_rgba(120,90,40,0.55)] animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* layered gilded frames */}
        <span className="final-corner final-corner-tl" aria-hidden="true" />
        <span className="final-corner final-corner-tr" aria-hidden="true" />
        <span className="final-corner final-corner-br" aria-hidden="true" />
        <span className="final-corner final-corner-bl" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-3 rounded-[1.8rem] border border-[#d4af37]/25" />
        <div className="pointer-events-none absolute inset-5 rounded-[1.6rem] border border-dashed border-[#d4af37]/30" aria-hidden="true" />

        {/* ambient sparkles + hearts, click-through */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {sparkles.map((s) => (
            <GoldSparkle
              key={s.id}
              size={s.size}
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            />
          ))}
          <FloatingHearts count={6} />
        </div>

        {/* close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3.5 top-3.5 z-30 grid h-9 w-9 place-items-center
                     rounded-full border border-[#d4af37]/40 bg-white/60 text-[#a8823a]
                     shadow-sm backdrop-blur-sm transition-all duration-300
                     hover:rotate-90 hover:bg-[#d4af37] hover:text-white"
        >
          ✕
        </button>

        {/* wax-seal monogram, overlapping the card's top edge */}
        <div className="final-seal absolute -top-8 left-1/2 z-20 -translate-x-1/2">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full
                       bg-[radial-gradient(circle_at_35%_30%,#f4d47a,#d4af37_55%,#a8792a)]
                       shadow-[0_10px_24px_-6px_rgba(168,121,42,0.65)]
                       ring-2 ring-[#fffaf0]/90"
          >
            <span className="font-script text-2xl leading-none text-white drop-shadow-sm">
              {weddingData.monogram}
            </span>
          </div>
        </div>

        {/* inner content */}
        <div className="relative flex flex-col items-center px-7 pb-6 pt-11 sm:px-10">
          {/* golden halo + floating couple illustration */}
          <div className="final-rise relative mb-1" style={{ animationDelay: '120ms' }}>
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-full
                         bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.28),transparent_70%)]"
              aria-hidden="true"
            />
            <CoupleIllustration className="mx-auto w-36 sm:w-40" />
          </div>

          <div
            className="final-rise flex items-center justify-center gap-3
                       text-[0.7rem] uppercase tracking-[0.28em] text-[#ad8036]"
            style={{ animationDelay: '200ms' }}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]/70" aria-hidden="true" />
            You&rsquo;re warmly invited
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]/70" aria-hidden="true" />
          </div>

          <h3
            id="final-cta-heading"
            className="final-rise mt-3 font-heading text-3xl leading-tight text-[#6b4f1d] sm:text-4xl"
            style={{ animationDelay: '280ms' }}
          >
            {heading}
          </h3>

          <p className="final-rise mt-2 font-script text-2xl text-[#ad8036]" style={{ animationDelay: '360ms' }}>
            {weddingData.bride} &amp; {weddingData.groom}
          </p>

          <p
            className="final-rise mt-3 max-w-sm font-body text-lg leading-relaxed text-[#7a6a4d]"
            style={{ animationDelay: '440ms' }}
          >
            {message}
          </p>

          <div
            className="final-rise mt-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40
                       bg-white/60 px-4 py-1.5 text-sm text-[#8c692d] shadow-sm backdrop-blur-sm"
            style={{ animationDelay: '520ms' }}
          >
            <CalendarHeart size={15} className="text-[#b8860b]" />
            {weddingData.weddingDateDisplay}
            <span className="text-[#a7854d]" aria-hidden="true">·</span>
            {weddingData.weddingDayLabel}
          </div>

          <div className="final-rise final-divider mt-4 w-full max-w-[250px]" style={{ animationDelay: '560ms' }}>
            <span className="final-gem" aria-hidden="true" />
          </div>

          <button
            onClick={onRSVP}
            className="final-rise final-sheen group mt-4 inline-flex items-center gap-2.5 rounded-full
                       bg-gradient-to-r from-[#d4af37] via-[#e0c069] to-[#b8860b] px-9 py-3.5
                       font-body text-lg font-semibold tracking-wide text-[#3f2f10]
                       shadow-[0_12px_26px_-8px_rgba(168,121,42,0.7)] transition-transform duration-300
                       hover:scale-[1.04] active:scale-[0.98]"
            style={{ animationDelay: '640ms' }}
          >
            <Heart size={17} className="-ml-1 fill-[#3f2f10]/25" />
            {buttonText}
            <ArrowRight size={17} className="-mr-1 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <button
            onClick={onClose}
            className="final-rise mt-4 text-[0.72rem] uppercase tracking-[0.22em] text-[#a8823a]
                       underline-offset-4 transition-colors hover:text-[#7a5c1e] hover:underline"
            style={{ animationDelay: '720ms' }}
          >
            Not now &mdash; keep exploring
          </button>

          <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-[#b89a5e]">
            {weddingData.hashtag}
          </p>
        </div>
      </div>
    </div>
  )
}