import React, { useEffect, useState } from 'react'
import weddingData from '../data/weddingData'

export default function Preloader({ onEnter }) {
  const [ready, setReady] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500)
    return () => clearTimeout(t)
  }, [])

  const handleEnter = () => {
    setHide(true)
    setTimeout(onEnter, 700)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-cream via-ivory to-cream transition-opacity duration-700 ${
        hide ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#c9a24a,transparent_35%),radial-gradient(circle_at_80%_80%,#c9a24a,transparent_35%)]" />

      <div style={{ perspective: '800px' }}>
        <div className="envelope">
          <div className="envelope-back" />
          <div className="envelope-seal">{weddingData.monogram.replace(' & ', '&')}</div>
          <div className="envelope-flap" />
        </div>
      </div>

      <p className="mt-10 font-display italic text-gold-700 tracking-wide text-sm animate-pulse">
        {ready ? '' : 'preparing your invitation…'}
      </p>

      <div
        className={`mt-4 flex flex-col items-center gap-3 transition-all duration-700 ${
          ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <p className="font-script text-3xl text-gold-700">{weddingData.bride} &amp; {weddingData.groom}</p>
        <button
          onClick={handleEnter}
          className="mt-2 rounded-full border border-gold-500 px-8 py-2.5 font-heading text-xs uppercase tracking-[0.25em] text-gold-700 transition hover:bg-gold-500 hover:text-white"
        >
          Open Invitation
        </button>
      </div>
    </div>
  )
}
