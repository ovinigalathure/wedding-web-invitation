import React from 'react'
import { Heart, ArrowUp, Mail, Phone, CalendarHeart } from 'lucide-react'
import weddingData from '../data/weddingData'

const navLinks = [
  { href: '#story', label: 'Our Story' },
  { href: '#details', label: 'Wedding Details' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#rsvp', label: 'RSVP' },
]

export default function Footer() {
  const year = new Date(weddingData.weddingDateISO).getFullYear()

  return (
    <footer className="relative overflow-hidden bg-charcoal text-cream">
      {/* ── giant watermark monogram ── */}
      <span className="pointer-events-none absolute -top-20 left-1/2 w-full -translate-x-1/2 select-none text-center font-script text-[38vw] leading-none text-white/[0.03] sm:text-[24rem]">
        {weddingData.monogram}
      </span>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-20">
        {/* ── brand ── */}
        <div className="text-center">
          <p className="font-script text-5xl text-gold-300 sm:text-6xl">{weddingData.monogram}</p>
          <p className="mx-auto mt-5 max-w-lg font-display text-lg text-cream/70">
            Two hearts, one beautiful new chapter — {weddingData.bride} &amp; {weddingData.groom}.
            We can’t wait to share it with you.
          </p>
          <p className="mt-4 font-script text-2xl text-gold-400/90">{weddingData.hashtag}</p>
          <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/60" />
            <Heart className="heart-beat h-4 w-4 text-gold-400" fill="currentColor" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
        </div>

        {/* ── link columns ── */}
        <div className="mt-14 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-gold-300">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 font-display text-lg text-cream/80 transition hover:text-gold-200"
                  >
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-gold-300">
              Save the Date
            </h4>
            <p className="mt-5 font-heading text-2xl tracking-[0.18em] text-ivory">
              {weddingData.weddingDateDisplay}
            </p>
            <p className="mt-1.5 font-display text-sm uppercase tracking-[0.3em] text-gold-200/80">
              {weddingData.weddingDayLabel}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-2 font-display text-sm text-gold-200">
              <CalendarHeart size={15} /> RSVP by {weddingData.rsvpDeadline}
            </span>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-gold-300">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${weddingData.contact.email}`}
                  className="group inline-flex items-center gap-3 font-display text-lg text-cream/80 transition hover:text-gold-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/40 bg-white/5 text-gold-300 transition group-hover:border-gold-300 group-hover:bg-gold-500 group-hover:text-white">
                    <Mail size={15} />
                  </span>
                  {weddingData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${weddingData.contact.phone.replace(/\s/g, '')}`}
                  className="group inline-flex items-center gap-3 font-display text-lg text-cream/80 transition hover:text-gold-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/40 bg-white/5 text-gold-300 transition group-hover:border-gold-300 group-hover:bg-gold-500 group-hover:text-white">
                    <Phone size={15} />
                  </span>
                  {weddingData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── bottom bar ── */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-display text-sm text-cream/50">
            © {year} {weddingData.bride} &amp; {weddingData.groom} · An elegant wedding invitation
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2.5 font-heading text-[11px] uppercase tracking-[0.25em] text-gold-200 transition hover:border-gold-300 hover:bg-gold-500 hover:text-white"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}