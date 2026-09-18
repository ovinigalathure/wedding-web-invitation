import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import GoldSparkle from './gold-butterfly-animation/butterflies/GoldSparkle'
import './gold-butterfly-animation/butterflies/GoldButterfly.css'
import './Preloader.css'
import weddingData from '../data/weddingData'

export default function Preloader({ onEnter }) {
  const [ready, setReady] = useState(false)
  const [hide, setHide] = useState(false)
  const enteredRef = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1600)
    return () => clearTimeout(t)
  }, [])

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
          <div className="inv-env">
            <div className="inv-env-back" />
            <div className="inv-letter">
              <span className="inv-letter-seq" aria-hidden="true" />
              <span className="inv-letter-monogram">{weddingData.monogram.replace(' & ', '&')}</span>
              <Heart size={18} className="inv-letter-heart" fill="currentColor" />
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
            onClick={handleEnter}
            className="inv-btn"
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