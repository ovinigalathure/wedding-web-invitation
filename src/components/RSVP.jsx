import React, { useState } from 'react'
import {
  Send,
  User,
  Mail,
  HeartHandshake,
  HeartCrack,
  Minus,
  Plus,
  CalendarHeart,
  CheckCircle2,
} from 'lucide-react'
import weddingData from '../data/weddingData'
import Reveal from './Reveal'
import { Flourish, CornerOrnament } from './Ornament'

const options = [
  { value: 'joyfully-accept', label: 'Joyfully Accept', icon: HeartHandshake },
  { value: 'regretfully-decline', label: 'Regretfully Decline', icon: HeartCrack },
]

const initialForm = { name: '', attending: 'joyfully-accept', guests: '1', message: '' }

export default function RSVP() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const setAttending = (attending) => setForm((f) => ({ ...f, attending }))

  const setGuests = (delta) => {
    const next = Math.min(6, Math.max(1, (parseInt(form.guests, 10) || 1) + delta))
    setForm((f) => ({ ...f, guests: String(next) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('RSVP submitted:', form)
    setSubmitted(true)
  }

  const reset = () => {
    setForm(initialForm)
    setSubmitted(false)
  }

  const accepted = form.attending === 'joyfully-accept'

  return (
    <section id="rsvp" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      {/* ── ambient ── */}
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-gold-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-gold-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-16 h-96 w-96 animate-spin-slow rounded-full border border-gold-300/30" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 animate-spin-slow rounded-full border border-dashed border-gold-300/40" style={{ animationDirection: 'reverse' }} />
      <div className="pointer-events-none absolute left-[12%] top-[14%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500/60" />
      <div className="pointer-events-none absolute right-[16%] top-[12%] h-2 w-2 animate-pulse rounded-full bg-gold-400/70" style={{ animationDelay: '0.8s' }} />
      <div className="pointer-events-none absolute bottom-[16%] left-[18%] h-2 w-2 animate-pulse rounded-full bg-gold-400/70" style={{ animationDelay: '1.3s' }} />
      <div className="pointer-events-none absolute bottom-[20%] right-[12%] h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500/50" style={{ animationDelay: '0.5s' }} />

      <CornerOrnament className="absolute left-5 top-5 h-9 w-9 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute right-5 top-5 h-9 w-9 rotate-90 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 left-5 h-9 w-9 -rotate-90 opacity-70 sm:h-11 sm:w-11" />
      <CornerOrnament className="absolute bottom-5 right-5 h-9 w-9 rotate-180 opacity-70 sm:h-11 sm:w-11" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600">
            Kindly Reply
          </p>
          <div className="my-4">
            <Flourish />
          </div>
          <h2 className="font-heading text-3xl text-charcoal sm:text-5xl">Will You Join Us?</h2>
          <p className="mx-auto mt-4 max-w-xl font-display italic text-lg text-charcoal/60">
            Your presence would mean the world — please let us know by {weddingData.rsvpDeadline}.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {/* ── invitation card ── */}
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-gold-300 bg-gradient-to-br from-gold-50 via-ivory to-cream p-10 text-center shadow-2xl">
              <span className="pointer-events-none absolute -bottom-10 -right-6 select-none font-script text-[11rem] leading-none text-gold-900/5">
                {weddingData.monogram}
              </span>
              <CornerOrnament className="absolute left-4 top-4 h-8 w-8 opacity-80" />
              <CornerOrnament className="absolute bottom-4 right-4 h-8 w-8 -rotate-180 opacity-80" />

              <p className="font-display italic text-gold-600">You are warmly invited</p>
              <p className="mt-4 font-script text-5xl text-gold-700">
                {weddingData.bride} <span className="align-middle">&amp;</span>{' '}
                {weddingData.groom}
              </p>
              <div className="my-5 flex justify-center">
                <Flourish />
              </div>
              <p className="font-heading text-xl tracking-[0.2em] text-charcoal">
                {weddingData.weddingDateDisplay}
              </p>
              <p className="mt-1.5 font-display text-xs uppercase tracking-[0.3em] text-gold-600">
                {weddingData.weddingDayLabel}
              </p>

              <span className="mt-7 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gold-300 bg-white/70 px-5 py-2.5 font-display text-sm text-gold-700">
                <CalendarHeart size={15} /> Please reply by {weddingData.rsvpDeadline}
              </span>

              <p className="mt-7 font-script text-2xl text-gold-500">{weddingData.hashtag}</p>

              <span className="mt-7 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400/70 bg-ivory font-script text-xl text-gold-700 shadow-inner">
                {weddingData.monogram}
              </span>
            </div>
          </Reveal>

          {/* ── form / success ── */}
          <Reveal delay={150} className="h-full">
            {submitted ? (
              <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-gold-300 bg-gradient-to-br from-gold-50 via-ivory to-cream p-10 text-center shadow-2xl">
                <span className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full border border-gold-200" />
                <span className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full border border-dashed border-gold-300" />

                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-400 bg-ivory text-gold-600 shadow-lg">
                  <CheckCircle2 size={38} strokeWidth={1.4} />
                </span>
                <p className="mt-6 font-script text-4xl text-gold-700">Thank you</p>
                <p className="mt-1 font-heading text-2xl text-charcoal">
                  {accepted ? 'We can’t wait to see you!' : 'You will be dearly missed.'}
                </p>
                <p className="mt-4 max-w-sm font-display text-lg text-charcoal/65">
                  {accepted
                    ? `Your seat is reserved${parseInt(form.guests, 10) > 1 ? `s for ${form.guests} guests` : '. Every response is a little more joy on our big day.'}`
                    : 'Thank you for letting us know — the celebration will carry your love with us.'}
                </p>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-300 bg-white px-6 py-2.5 font-heading text-[11px] uppercase tracking-[0.2em] text-gold-700 transition hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                >
                  Send another response
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative h-full space-y-6 rounded-[2rem] border border-gold-200 bg-cream p-8 shadow-xl sm:p-10"
              >
                <span className="shine-top absolute inset-x-0 top-0 h-1 rounded-t-[2rem]" />

                {/* name */}
                <div>
                  <label className="mb-2 block font-heading text-xs uppercase tracking-widest text-gold-700">
                    Full Name
                  </label>
                  <span className="relative block">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-500">
                      <User size={17} />
                    </span>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gold-300/80 bg-white py-3 pl-11 pr-4 font-display text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                    />
                  </span>
                </div>

                {/* attend */}
                <div>
                  <label className="mb-2 block font-heading text-xs uppercase tracking-widest text-gold-700">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {options.map((o) => (
                      <button
                        type="button"
                        key={o.value}
                        onClick={() => setAttending(o.value)}
                        className={`flex flex-col items-center gap-1.5 rounded-2xl border px-4 py-5 font-heading text-[10px] uppercase tracking-[0.15em] transition-all duration-300 sm:text-[11px] ${
                          form.attending === o.value
                            ? 'border-gold-500 bg-gold-gradient text-white shadow-lg shadow-gold-500/30'
                            : 'border-gold-300/80 bg-white text-gold-700 hover:border-gold-400'
                        }`}
                      >
                        <o.icon size={22} strokeWidth={1.6} />
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* guests */}
                <div>
                  <label className="mb-2 block font-heading text-xs uppercase tracking-widest text-gold-700">
                    Number of Guests
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-gold-300/80 bg-white p-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests(-1)}
                      aria-label="Fewer guests"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-700 transition hover:bg-gold-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-heading text-xl tabular-nums text-charcoal">{form.guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(1)}
                      aria-label="More guests"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-700 transition hover:bg-gold-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* message */}
                <div>
                  <label className="mb-2 block font-heading text-xs uppercase tracking-widest text-gold-700">
                    Message (optional)
                  </label>
                  <span className="relative block">
                    <span className="pointer-events-none absolute left-4 top-3.5 text-gold-500">
                      <Mail size={17} />
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Leave a wish for the couple…"
                      className="w-full resize-none rounded-xl border border-gold-300/80 bg-white py-3 pl-11 pr-4 font-display text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-gold-500 focus:ring-2 focus:ring-gold-200"
                    />
                  </span>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 font-heading text-sm uppercase tracking-[0.25em] text-white shadow-lg shadow-gold-500/30 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  Send RSVP <Send size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}