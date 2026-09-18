import React, { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import weddingData from '../data/weddingData'
import Reveal from './Reveal'
import { Flourish, CornerOrnament } from './Ornament'
import FlyingButterflies from './gold-butterfly-animation/butterflies/FlyingButterflies'

const photos = [
  weddingData.images.hero,
  weddingData.images.embrace,
  weddingData.images.bouquet,
  weddingData.images.rings,
  weddingData.images.flatlay,
  weddingData.images.toast,
]

const titles = [
  'The First Wink',
  'Our Embrace',
  'Bridal Blooms',
  'Two Hearts, One Ring',
  'A Little Love Note',
  'To Forever',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = () => setActive(null)
  const prev = () => setActive((a) => (a - 1 + photos.length) % photos.length)
  const next = () => setActive((a) => (a + 1) % photos.length)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="gallery" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-gold-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600">Memories</p>
          <div className="my-4">
            <Flourish />
          </div>
          <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">Our Gallery</h2>
          <p className="mx-auto mt-4 max-w-xl font-display text-charcoal/70">
            A few favourite moments, framed like prints. Tap any photo to step inside.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {photos.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 100}
              className={i === 0 ? 'col-span-2 md:col-span-1' : ''}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Preview ${titles[i]}`}
                className="group relative block w-full overflow-hidden rounded-xl bg-ivory p-2.5 pb-4 shadow-sm ring-1 ring-gold-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:ring-gold-400"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={titles[i]}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/90 text-gold-700 shadow-lg backdrop-blur-sm transition duration-500 group-hover:scale-110">
                      <ZoomIn size={20} />
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-4 translate-y-1 font-heading text-[10px] uppercase tracking-[0.3em] text-ivory opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {titles[i]}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-gold-300 transition duration-300 group-hover:bg-gold-500" />
                  <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-gold-700">
                    Memory 0{i + 1}
                  </p>
                  <span className="h-px w-6 bg-gold-300 transition duration-300 group-hover:bg-gold-500" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-charcoal/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${titles[active]}, photo ${active + 1} of ${photos.length}`}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-8 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/5 blur-2xl" />
          </div>

          <div className="relative z-10 flex max-w-[92vw] flex-col items-center">
            <div
              className="lightbox-zoom relative rounded-2xl border border-gold-300 bg-ivory p-3 shadow-2xl drop-shadow-[0_0_30px_rgba(201,162,74,0.35)] sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <CornerOrnament className="absolute -left-2 -top-2 h-9 w-9 opacity-90 sm:h-11 sm:w-11" />
              <CornerOrnament className="absolute -right-2 -top-2 h-9 w-9 rotate-90 opacity-90 sm:h-11 sm:w-11" />
              <CornerOrnament className="absolute -bottom-2 -left-2 h-9 w-9 -rotate-90 opacity-90 sm:h-11 sm:w-11" />
              <CornerOrnament className="absolute -bottom-2 -right-2 h-9 w-9 rotate-180 opacity-90 sm:h-11 sm:w-11" />

              <div className="overflow-hidden rounded-lg border border-gold-200/80 bg-charcoal/5">
                <img
                  key={active}
                  src={photos[active]}
                  alt={titles[active]}
                  className="max-h-[66vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold-400" />
                <p className="font-heading text-[11px] uppercase tracking-[0.35em] text-gold-700">
                  {titles[active]} · {active + 1} / {photos.length}
                </p>
                <span className="h-px w-10 bg-gold-400" />
              </div>
            </div>

            <div className="mt-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-center gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-gold-400' : 'w-2 bg-gold-200/70 hover:bg-gold-300'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-center font-heading text-[10px] uppercase tracking-[0.3em] text-gold-200/70">
                Use ← &amp; → to browse · Esc to close
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true">
            <FlyingButterflies count={6} starCount={12} layout="reference" />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            aria-label="Close preview"
            className="absolute right-5 top-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/60 bg-charcoal/40 text-gold-300 transition hover:bg-gold-500 hover:text-ivory"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/60 bg-charcoal/40 text-gold-300 transition hover:bg-gold-500 hover:text-ivory sm:left-6"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/60 bg-charcoal/40 text-gold-300 transition hover:bg-gold-500 hover:text-ivory sm:right-6"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  )
}