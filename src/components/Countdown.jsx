import React, { useEffect, useState } from 'react'
import { Heart, CalendarHeart, Sparkles } from 'lucide-react'
import weddingData from '../data/weddingData'
import Reveal from './Reveal'
import { Flourish, CornerOrnament } from './Ornament'

function getTimeLeft() {
  const total = new Date(weddingData.weddingDateISO).getTime() - new Date().getTime()
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    done: false,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days, max: 90 },
    { label: 'Hours', value: time.hours, max: 24 },
    { label: 'Minutes', value: time.minutes, max: 60 },
    { label: 'Seconds', value: time.seconds, max: 60 },
  ]

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      {/* ── ambient gold glows & rotating halo rings ── */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 animate-spin-slow rounded-full border border-gold-300/20" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 animate-spin-slow rounded-full border border-gold-300/10" style={{ animationDirection: 'reverse' }} />
      <div className="pointer-events-none absolute left-[6%] top-1/2 h-96 w-96 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-gold-200/15" />

      {/* ── twinkling sparkle dots ── */}
      <div className="pointer-events-none absolute left-[10%] top-[18%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-300/90" />
      <div className="pointer-events-none absolute right-[14%] top-[24%] h-2 w-2 animate-pulse rounded-full bg-gold-200/70" style={{ animationDelay: '0.8s' }} />
      <div className="pointer-events-none absolute bottom-[22%] left-[18%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400/90" style={{ animationDelay: '0.4s' }} />
      <div className="pointer-events-none absolute bottom-[16%] right-[8%] h-2 w-2 animate-pulse rounded-full bg-gold-300/70" style={{ animationDelay: '1.2s' }} />
      <div className="pointer-events-none absolute left-[48%] top-[7%] h-1 w-1 animate-pulse rounded-full bg-white/60" style={{ animationDelay: '0.6s' }} />

      {/* ── corner ornaments ── */}
      <CornerOrnament className="absolute left-5 top-5 h-9 w-9 opacity-80 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute right-5 top-5 h-9 w-9 rotate-90 opacity-80 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 left-5 h-9 w-9 -rotate-90 opacity-80 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 right-5 h-9 w-9 rotate-180 opacity-80 sm:h-11 sm:w-11" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-gold-300">
            <Sparkles size={18} />
            <p className="font-script text-2xl sm:text-3xl">
              {time.done ? 'Happily Ever After' : 'The Countdown Begins'}
            </p>
            <Sparkles size={18} />
          </div>

          <h2 className="mt-1 font-heading text-3xl text-ivory sm:text-5xl">
            {time.done ? 'We Are Married' : 'Our Forever Awaits'}
          </h2>

          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/70" />
            <Heart className="heart-beat h-6 w-6 fill-gold-300 text-gold-300 sm:h-7 sm:w-7" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/70" />
          </div>

          {/* ── date banner ── */}
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-gold-300/25 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <CalendarHeart className="h-5 w-5 shrink-0 text-gold-300" size={20} />
            <div>
              <p className="font-heading text-lg tracking-[0.18em] text-gold-100 sm:text-xl">
                {weddingData.weddingDateDisplay}
              </p>
              <p className="mt-0.5 font-display text-xs uppercase tracking-[0.3em] text-gold-300/80">
                {weddingData.weddingDayLabel}
              </p>
            </div>
            <CalendarHeart className="h-5 w-5 shrink-0 text-gold-300" size={20} />
          </div>

          {/* ── countdown dials ── */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-4 gap-4 sm:gap-6">
            {units.map((u) => {
              const progress = Math.max(0.06, Math.min(1, u.value / u.max))
              const gold = u.label === 'Seconds' ? '#f1e0b3' : '#c9a24a'
              return (
                <div key={u.label} className="group">
                  <div
                    className="relative aspect-square w-full rounded-full p-[3px] transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `conic-gradient(${gold} ${progress * 360}deg, rgba(255,255,255,0.08) 0deg)`,
                    }}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-charcoal/85 backdrop-blur-sm">
                      <p
                        key={`${u.label}-${u.value}`}
                        className="tick-pop font-heading text-2xl tabular-nums text-shimmer sm:text-5xl"
                      >
                        {String(u.value).padStart(2, '0')}
                      </p>
                      <p className="mt-1 font-display text-[10px] uppercase tracking-[0.2em] text-gold-200/90 sm:text-xs">
                        {u.label}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mt-12 font-display italic text-lg text-gold-200/90 sm:text-xl">
            {time.done
              ? 'Let the celebration begin — thank you for sharing this day with us.'
              : 'We can’t wait to celebrate this moment with you.'}
          </p>
        </Reveal>
      </div>
    </section>
  )
}