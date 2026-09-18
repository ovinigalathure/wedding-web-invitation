import React, { useState } from 'react'
import {
  CalendarHeart,
  MapPin,
  Navigation,
  Flower2,
  Clock2,
  Bell,
  Drum,
  Sun,
  Sparkles,
  ChevronRight,
  Palmtree,
} from 'lucide-react'
import weddingData from '../data/weddingData'
import Reveal from './Reveal'
import Modal from './Modal'
import { Flourish, CornerOrnament } from './Ornament'

const { dateTime, location, poruwa } = weddingData.details

const cards = [
  {
    key: 'date',
    icon: CalendarHeart,
    title: 'Date & Time',
    line1: 'Friday, 18 June 2027',
    line2: `From ${dateTime.ceremony.time}`,
    hint: 'View the schedule',
  },
  {
    key: 'location',
    icon: MapPin,
    title: 'Location',
    line1: location.venues[0].name,
    line2: 'Ceremony & Reception · Colombo',
    hint: 'Get directions',
  },
  {
    key: 'poruwa',
    icon: Flower2,
    title: 'Poruwa Ceremony',
    line1: `Auspicious hour · ${poruwa.time}`,
    line2: 'A sacred Sri Lankan rite',
    hint: 'Discover the traditions',
  },
]

export default function EventDetails() {
  const [modal, setModal] = useState(null)

  return (
    <section id="details" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-gold-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-gold-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 animate-spin-slow rounded-full border border-gold-300/30" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 animate-spin-slow rounded-full border border-dashed border-gold-300/40" style={{ animationDirection: 'reverse' }} />
      <div className="pointer-events-none absolute left-[10%] top-[12%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500/60" />
      <div className="pointer-events-none absolute right-[14%] top-[16%] h-2 w-2 animate-pulse rounded-full bg-gold-400/70" style={{ animationDelay: '0.8s' }} />
      <div className="pointer-events-none absolute bottom-[14%] left-[14%] h-2 w-2 animate-pulse rounded-full bg-gold-400/70" style={{ animationDelay: '1.3s' }} />
      <div className="pointer-events-none absolute bottom-[20%] right-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500/50" style={{ animationDelay: '0.5s' }} />

      <CornerOrnament className="absolute left-5 top-5 h-9 w-9 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute right-5 top-5 h-9 w-9 rotate-90 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 left-5 h-9 w-9 -rotate-90 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 right-5 h-9 w-9 rotate-180 opacity-70 sm:h-11 sm:w-11" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-2 font-heading text-xs uppercase tracking-[0.35em] text-gold-600">
            <Sparkles size={14} /> When &amp; Where <Sparkles size={14} />
          </p>
          <div className="my-4">
            <Flourish />
          </div>
          <h2 className="font-heading text-3xl text-charcoal sm:text-5xl">Wedding Details</h2>
          <p className="mx-auto mt-4 max-w-xl font-display italic text-lg text-charcoal/60">
            Three little invitations — the day, the place, and the sacred rite that unites our
            families.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.key} delay={i * 140} className="h-full">
              <div className="float-soft h-full" style={{ animationDelay: `${i * 0.8}s` }}>
                <button
                  type="button"
                  onClick={() => setModal(c.key)}
                  className="group relative flex h-full w-full flex-col items-center overflow-hidden rounded-3xl border border-gold-200 bg-ivory px-8 py-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-300 hover:shadow-2xl"
                >
                  <span className="shine-top absolute inset-x-0 top-0 h-1" />

                  <span className="relative mb-7 flex h-20 w-20 items-center justify-center">
                    <span
                      className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold-400/50"
                      style={{ animationDuration: '9s' }}
                    >
                      <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-400/90 shadow-[0_0_6px_rgba(201,162,74,0.8)]" />
                    </span>
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-ivory shadow-lg shadow-gold-500/40 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <c.icon size={27} strokeWidth={1.5} />
                    </span>
                  </span>

                  <h3 className="font-heading text-2xl text-charcoal">{c.title}</h3>
                  <p className="mt-2 font-display text-xl text-gold-700">{c.line1}</p>
                  <p className="mt-1 font-display text-base text-charcoal/55">{c.line2}</p>

                  <span className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-gold-300 px-5 py-2 font-heading text-[10px] uppercase tracking-[0.25em] text-gold-700 transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                    {c.hint}
                    <ChevronRight
                      size={13}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                  <Palmtree
                    size={72}
                    strokeWidth={0.8}
                    className="pointer-events-none absolute -bottom-6 -right-6 text-gold-100 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-full border border-gold-200/80" />
                  <span className="pointer-events-none absolute right-6 top-6 h-1.5 w-1.5 animate-pulse rounded-full bg-gold-300/70" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Date & Time modal ─────────────────────────────── */}
      <Modal open={modal === 'date'} onClose={() => setModal(null)}>
        <div className="relative px-6 py-10 text-center sm:px-10">
          <CornerOrnament className="absolute left-4 top-4 h-9 w-9 opacity-60" />
          <CornerOrnament className="absolute bottom-4 right-4 h-9 w-9 -rotate-180 opacity-60" />

          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-ivory shadow-lg shadow-gold-500/40">
            <CalendarHeart size={28} strokeWidth={1.5} />
          </span>
          <h3 className="mt-5 font-heading text-2xl text-charcoal sm:text-3xl">Save the Date</h3>
          <p className="mt-1 font-script text-2xl text-gold-600 sm:text-3xl">{dateTime.display}</p>

          <div className="mt-8 rounded-2xl border border-gold-300 bg-gradient-to-br from-gold-50 to-cream px-6 py-8">
            <p className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600">
              {dateTime.day}
            </p>
            <p className="mt-2 font-heading text-4xl text-charcoal sm:text-5xl">{dateTime.date}</p>
            <div className="mt-4 flex items-center justify-center gap-2 font-display text-lg text-charcoal/70">
              <Clock2 size={16} className="text-gold-600" /> From {dateTime.ceremony.time}
            </div>
            <p className="mt-3 font-display text-sm italic text-gold-700">{dateTime.note}</p>
          </div>

          <div className="mt-8 space-y-3 text-left">
            {[dateTime.ceremony, dateTime.reception].map((e, i) => (
              <div
                key={e.label}
                className="flex items-center gap-4 rounded-2xl border border-gold-200 bg-cream/70 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  {i === 0 ? <Bell size={20} /> : <Drum size={20} />}
                </span>
                <div className="flex-1">
                  <p className="font-heading text-lg leading-tight text-charcoal">{e.label}</p>
                  <p className="font-display text-sm text-charcoal/55">{e.note}</p>
                </div>
                <span className="font-display text-xl text-gold-700">{e.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* ── Location modal ────────────────────────────────── */}
      <Modal open={modal === 'location'} onClose={() => setModal(null)} wide>
        <div className="relative px-6 py-10 text-center sm:px-10">
          <CornerOrnament className="absolute left-4 top-4 h-9 w-9 opacity-60" />
          <CornerOrnament className="absolute bottom-4 right-4 h-9 w-9 -rotate-180 opacity-60" />

          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-ivory shadow-lg shadow-gold-500/40">
            <MapPin size={28} strokeWidth={1.5} />
          </span>
          <h3 className="mt-5 font-heading text-2xl text-charcoal sm:text-3xl">
            Locations &amp; Directions
          </h3>
          <p className="mt-2 font-display text-base text-charcoal/60">{location.note}</p>

          <div className="mt-8 space-y-5 text-left">
            {location.venues.map((v, i) => (
              <div
                key={v.label}
                className="flex flex-col gap-4 rounded-2xl border border-gold-200 bg-cream/70 p-5 sm:flex-row sm:items-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-ivory shadow-md shadow-gold-500/30">
                  {i === 0 ? <Sun size={21} /> : <Palmtree size={21} />}
                </span>
                <div className="flex-1">
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-gold-600">
                    {v.label} · {v.time}
                  </p>
                  <h4 className="mt-1 font-heading text-xl text-charcoal">{v.name}</h4>
                  <p className="mt-0.5 flex items-start gap-1.5 font-display text-charcoal/60">
                    <MapPin size={15} className="mt-1 shrink-0 text-gold-500" /> {v.address}
                  </p>
                </div>
                <a
                  href={v.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 font-heading text-[11px] uppercase tracking-[0.2em] text-ivory shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 font-display text-sm text-charcoal/50">
            <Navigation size={15} className="text-gold-600" />
            Directions open in Google Maps — tap &amp; travel with one touch.
          </p>
        </div>
      </Modal>

      {/* ── Poruwa modal ──────────────────────────────────── */}
      <Modal open={modal === 'poruwa'} onClose={() => setModal(null)} wide>
        <div className="relative px-6 py-10 sm:px-10">
          <CornerOrnament className="absolute left-4 top-4 h-9 w-9 opacity-60" />
          <CornerOrnament className="absolute bottom-4 right-4 h-9 w-9 -rotate-180 opacity-60" />

          <div className="text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-ivory shadow-lg shadow-gold-500/40">
              <Flower2 size={28} strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-heading text-2xl text-charcoal sm:text-3xl">{poruwa.title}</h3>
            <p className="mt-1 font-script text-2xl text-gold-600">{poruwa.tagline}</p>

            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-6 py-3">
              <Sun size={17} className="text-gold-600" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold-700">
                Auspicious hour
              </span>
              <span className="font-display text-2xl text-gold-700">{poruwa.time}</span>
            </div>

            <p className="mt-5 font-display text-lg leading-relaxed text-charcoal/70">
              {poruwa.description}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gold-300 bg-[linear-gradient(135deg,rgba(230,203,133,0.18),rgba(201,162,74,0.08))] p-6 text-center">
            <Sparkles size={22} className="mx-auto text-gold-600" />
            <p className="mt-2 font-heading text-lg text-charcoal">{poruwa.idea.title}</p>
            <p className="mt-2 font-display text-base leading-relaxed text-charcoal/65">
              {poruwa.idea.description}
            </p>
          </div>
        </div>
      </Modal>
    </section>
  )
}