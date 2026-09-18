import React from 'react'
import { X } from 'lucide-react'
import FlyingButterflies from './butterflies/FlyingButterflies'

/**
 * EXAMPLE ONLY — shows the pattern for wiring FlyingButterflies into
 * a photo-preview / lightbox modal. This is the piece you swap your
 * existing butterfly code out of: find wherever your current preview
 * modal renders its butterfly SVG/animation, delete it, and render
 * <FlyingButterflies /> in the same spot instead (it needs a
 * `position: relative` ancestor, which the outer div below provides).
 *
 * Not wired into App.jsx — copy the parts you need into your real
 * lightbox component.
 */
export default function PhotoPreviewExample({ photoSrc, alt, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-white/80 hover:text-gold-300"
        aria-label="Close preview"
      >
        <X size={28} />
      </button>

      {/* This wrapper MUST be `relative` — FlyingButterflies fills it
          with `absolute inset-0` and floats butterflies inside it. */}
      <div className="relative max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
        <img src={photoSrc} alt={alt} className="block max-h-[85vh] w-full object-contain" />

        {/* Swap-in point: this replaces whatever butterfly animation
            you had before. Tune count/starCount to taste. */}
        <FlyingButterflies count={4} starCount={6} />
      </div>
    </div>
  )
}
