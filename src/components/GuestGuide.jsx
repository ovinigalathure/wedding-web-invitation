import React from 'react'
import {
  CheckCircle2,
  Clock3,
  Shirt,
  Gift,
  Camera,
  Baby,
} from 'lucide-react'
import weddingData from '../data/weddingData'
import Reveal from './Reveal'
import { Flourish } from './Ornament'

const icons = [CheckCircle2, Clock3, Shirt, Gift, Camera, Baby]

export default function GuestGuide() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600">
            Good To Know
          </p>
          <div className="my-4">
            <Flourish />
          </div>
          <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">Guest Guide</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
          {weddingData.guestGuide.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full gap-4 rounded-2xl border border-gold-200 bg-ivory p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold-400 text-gold-600">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-charcoal">{item.title}</h3>
                    <p className="mt-1 font-display text-charcoal/70">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={400}>
          <p className="mt-12 font-script text-2xl text-gold-600">{weddingData.hashtag}</p>
        </Reveal>
      </div>
    </section>
  )
}
