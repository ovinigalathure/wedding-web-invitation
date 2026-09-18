import React, { useEffect, useState } from 'react'
import weddingData from '../data/weddingData'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#details', label: 'Details' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#rsvp', label: 'RSVP' },
]

export default function Navbar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-500 sm:px-10 ${
        show ? 'translate-y-0 bg-ivory/90 shadow-sm backdrop-blur-sm' : '-translate-y-full'
      }`}
    >
      <a href="#top" className="font-script text-xl text-gold-700">
        {weddingData.monogram}
      </a>
      <ul className="flex gap-5 sm:gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-heading text-[11px] uppercase tracking-[0.2em] text-charcoal/70 transition hover:text-gold-600"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
