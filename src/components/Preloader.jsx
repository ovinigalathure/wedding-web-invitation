import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import GoldSparkle from './gold-butterfly-animation/butterflies/GoldSparkle'
import './gold-butterfly-animation/butterflies/GoldButterfly.css'
import './Preloader.css'
import weddingData from '../data/weddingData'

export default function Preloader({ onEnter }) {
  const [ready, setReady] = useState(false)
  const [hide, setHide] = useState(false)
  const [sent, setSent] = useState(false)
  const [fallHit, setFallHit] = useState(false)

  const envRef = useRef(null)
  const btnRef = useRef(null)
  const heartRef = useRef(null)
  const enteredRef = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1600)
    return () => clearTimeout(t)
  }, [])

  // once the letter has risen, drop a gold heart from the envelope
  // onto the Open Invitation button, then enter the site
  useEffect(() => {
    if (!ready) return
    const t = setTimeout(startFall, 300)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  const startFall = () => {
    if (enteredRef.current) return
    const heart = heartRef.current
    const env = envRef.current
    const btn = btnRef.current
    if (!heart || !env || !btn) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const s = env.getBoundingClientRect()
    const b = btn.getBoundingClientRect()
    const sx = s.left + s.width / 2
    const sy = s.top + s.height / 2
    const tx = b.left + b.width / 2
    const ty = b.top + b.height / 2

    heart.style.transform = `translate3d(${sx}px, ${sy}px, 0) translate(-50%, -50%)`
    setSent(true)

    // commit the start position (no transform transition yet),
    // then enable the transition and only then set the target
    requestAnimationFrame(() => {
      void heart.offsetWidth
      heart.classList.add('is-falling')
      requestAnimationFrame(() => {
        heart.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`
      })
    })

    window.setTimeout(() => setFallHit(true), 350)
    window.setTimeout(() => handleEnter(), 600)
  }

  const handleEnter = () => {
    if (enteredRef.current) return
    enteredRef.current = true
    setHide(true)
    setTimeout(onEnter, 700)
  }

  const sparkles = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        top: `${4 + Math.random() * 88}%`,
        left: `${2 + Math.random() * 94}%`,
        size: 9 + Math.random() * 10,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
      })),
    []
  )

  const dust = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() < 0.5 ? 4 : 6,
        delay: `${(Math.random() * 9).toFixed(2)}s`,
        duration: `${(6 + Math.random() * 6).toFixed(2)}s`,
      })),
    []
  )

  return (
    <div
      className={`inv-stage ${ready ? 'is-ready' : ''} ${hide ? 'is-exiting' : ''}`}
      role="dialog"
      aria-label={`${weddingData.bride} & ${weddingData.groom} wedding invitation`}
      aria-modal="true"
    >
      {/* the heart that falls from the opened letter onto the button */}
      <span ref={heartRef} className="inv-falling-heart" aria-hidden="true">
        <Heart size={40} fill="currentColor" />
      </span>

      {/* ambient gold sheens + corner frames */}
      <div className="inv-aurora inv-aurora-a" aria-hidden="true" />
      <div className="inv-aurora inv-aurora-b" aria-hidden="true" />
      <span className="inv-corner inv-corner-tl" aria-hidden="true" />
      <span className="inv-corner inv-corner-tr" aria-hidden="true" />
      <span className="inv-corner inv-corner-bl" aria-hidden="true" />
      <span className="inv-corner inv-corner-br" aria-hidden="true" />

      {/* twinkling sparkles + rising gold dust */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {sparkles.map((s) => (
          <GoldSparkle
            key={s.id}
            size={s.size}
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}
        {dust.map((d) => (
          <span
            key={d.id}
            className="inv-dust"
            style={{
              left: `${d.left}%`,
              width: d.size,
              height: d.size,
              animationDelay: d.delay,
              animationDuration: d.duration,
            }}
          />
        ))}
      </div>

      {/* rotating halo rings */}
      <div className="inv-halo" aria-hidden="true" />
      <div className="inv-halo inv-halo-2" aria-hidden="true" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <p className="inv-eyebrow">You are cordially invited</p>

        <div className="inv-scene my-7">
          <div className="inv-glow" aria-hidden="true" />
          <div className="inv-env" ref={envRef}>
            <div className="inv-env-back" />
            <div className="inv-letter">
              <span className="inv-letter-seq" aria-hidden="true" />
              <span className="inv-letter-monogram">{weddingData.monogram.replace(' & ', '&')}</span>
              <Heart size={18} className={`inv-letter-heart ${sent ? 'is-sent' : ''}`} fill="currentColor" />
            </div>
            <div className="inv-pocket" />
            <div className="inv-flap" />
            <div className="inv-seal">{weddingData.monogram.replace(' & ', '&')}</div>
          </div>
          <div className="inv-burst" aria-hidden="true" />
        </div>

        <div className="inv-infos">
          <p className="inv-names">
            {weddingData.bride} <span className="inv-amp">&amp;</span> {weddingData.groom}
          </p>
          <p className="inv-sub">are tying the knot</p>
          <p className="inv-date">
            {weddingData.weddingDateDisplay} · {weddingData.weddingDayLabel}
          </p>
        </div>

        <div className="inv-actions">
          <button
            ref={btnRef}
            onClick={handleEnter}
            className={`inv-btn ${fallHit ? 'is-hit' : ''}`}
          >
            Open Invitation
            <ArrowRight size={16} />
          </button>
          <p className="inv-ready">The celebration awaits</p>
        </div>
      </div>

      <div className="inv-vignette" aria-hidden="true" />
    </div>
  )
}