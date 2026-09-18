import React from 'react'
import { Heart } from 'lucide-react'
import weddingData from '../data/weddingData'
import Reveal from './Reveal'
import { Flourish, CornerOrnament } from './Ornament'

const milestones = ['The First Hello', 'The Yes', 'Forever Begins']

export default function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      {/* ── ambient background ── */}
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-gold-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 animate-spin-slow rounded-full border border-gold-300/30" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-gold-300/40" style={{ animationDirection: 'reverse' }} />
      <div className="pointer-events-none absolute left-[12%] top-[14%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500/60" />
      <div className="pointer-events-none absolute right-[16%] top-[10%] h-2 w-2 animate-pulse rounded-full bg-gold-400/70" style={{ animationDelay: '0.7s' }} />
      <div className="pointer-events-none absolute bottom-[16%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-gold-400/70" style={{ animationDelay: '1.1s' }} />
      <div className="pointer-events-none absolute bottom-[24%] right-[8%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500/50" style={{ animationDelay: '1.6s' }} />

      {/* ── corner ornaments ── */}
      <CornerOrnament className="absolute left-5 top-5 h-9 w-9 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute right-5 top-5 h-9 w-9 rotate-90 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 left-5 h-9 w-9 -rotate-90 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 right-5 h-9 w-9 rotate-180 opacity-70 sm:h-11 sm:w-11" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600">Our Story</p>
          <div className="my-4">
            <Flourish />
          </div>
          <h2 className="font-heading text-3xl text-charcoal sm:text-5xl">A Love Written in the Stars</h2>
          <p className="mx-auto mt-4 max-w-xl font-display italic text-lg text-charcoal/70">
            Every love story is beautiful — but ours will always be our favourite.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-20 grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-10">
          {/* ── photo polaroid column ── */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-md md:col-span-5">
            <span className="pointer-events-none absolute -left-8 top-8 hidden h-16 w-16 rounded-full border border-gold-300/60 bg-gold-100/40 md:block" />
            <span className="pointer-events-none absolute right-[-2.5rem] top-1/2 hidden h-px w-14 border-t-2 border-dashed border-gold-400/70 md:block" />

            <div className="group relative mx-auto w-72 rotate-[-4deg] rounded-2xl bg-white p-3 pb-5 shadow-2xl ring-1 ring-gold-200 transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105 sm:w-80">
              <span className="absolute -top-3 left-8 h-7 w-20 -rotate-6 rounded-sm bg-gold-200/80 shadow-sm" />
              <div className="overflow-hidden rounded-lg">
                <img
                  src={weddingData.images.embrace}
                  alt={`${weddingData.bride} and ${weddingData.groom} embracing`}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center font-script text-xl text-gold-700">
                {weddingData.bride} &amp; {weddingData.groom}
              </p>
            </div>

            <div className="absolute -bottom-10 -right-2 w-40 rotate-6 rounded-xl bg-white p-2 pb-3 shadow-xl ring-1 ring-gold-200 transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105 sm:w-44">
              <span className="absolute -top-2 right-6 h-5 w-14 rotate-3 rounded-sm bg-gold-300/70 shadow-sm" />
              <div className="overflow-hidden rounded-md">
                <img
                  src={weddingData.images.rings}
                  alt="The couple's wedding rings"
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-center font-heading text-[10px] uppercase tracking-[0.2em] text-gold-600">
                The Ring
              </p>
            </div>
          </Reveal>

          {/* ── love letter column ── */}
          <Reveal delay={220} className="md:col-span-7">
            <div className="relative rounded-2xl border border-gold-200 bg-gradient-to-b from-white to-cream p-8 shadow-2xl sm:p-12">
              <span className="absolute -top-3 left-10 h-7 w-20 -rotate-6 rounded-sm bg-gold-200/80 shadow-sm" />
              <span className="absolute -top-3 right-10 h-7 w-20 rotate-6 rounded-sm bg-gold-300/70 shadow-sm" />

              <p className="font-script text-3xl text-gold-600">Dear everyone,</p>
              <p className="mt-4 font-display text-xl leading-relaxed text-charcoal/85 first-letter:float-left first-letter:mr-2 first-letter:font-script first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-gold-600">
                {weddingData.story}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-gold-300" />
                <span className="font-script text-3xl text-gold-700">
                  {weddingData.bride} &amp; {weddingData.groom}
                </span>
                <span className="h-px flex-1 bg-gold-300" />
              </div>

              <Heart
                fill="currentColor"
                className="heart-beat absolute -bottom-5 left-1/2 h-11 w-11 -translate-x-1/2 rounded-full bg-ivory p-2 text-gold-600 shadow-lg ring-1 ring-gold-300"
              />
            </div>

            {/* ── milestones ── */}
            <div className="relative mt-16 flex items-start justify-center gap-6 sm:gap-14">
              <span className="pointer-events-none absolute left-[10%] right-[10%] top-4 border-t-2 border-dashed border-gold-300" />
              {milestones.map((m) => (
                <div key={m} className="relative flex flex-col items-center gap-3 text-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-400 bg-ivory text-gold-600 shadow-md">
                    <Heart size={14} fill="currentColor" />
                  </span>
                  <span className="font-heading text-[10px] uppercase tracking-[0.22em] text-gold-700 sm:text-xs">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}