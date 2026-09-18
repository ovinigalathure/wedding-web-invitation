import React, { useMemo } from 'react'
import GoldButterfly from './GoldButterfly'
import GoldSparkle from './GoldSparkle'
import './GoldButterfly.css'

// Paths 1-2 sweep LEFT → RIGHT across the viewport, paths 3-4 sweep
// RIGHT → LEFT, so alternating through them keeps butterflies flying
// across the WHOLE screen on BOTH sides instead of clustering in one.
const FLY_VARIANTS = ['gb-fly-1', 'gb-fly-2', 'gb-fly-3', 'gb-fly-4']

// The `reference` layout: a symmetric spread across BOTH halves of
// the screen with varied sizes (the design itself is untouched).
const REFERENCE_SIZES = [62, 78, 52, 96, 88, 58, 44]

/**
 * Absolutely-positioned overlay of fluttering gold butterflies + a
 * few twinkling sparkles, matching the reference illustration's
 * style. Drop this INSIDE a `position: relative` container that
 * wraps your photo/preview — e.g. your lightbox modal's outer div —
 * and it will float on top without blocking clicks
 * (pointer-events are disabled on every element it renders).
 *
 * <div className="relative">
 *   <img src={photo} ... />
 *   <FlyingButterflies count={5} />
 * </div>
 */
export default function FlyingButterflies({ count = 5, starCount = 8, layout = 'random' }) {
  const butterflies = useMemo(() => {
    const reference = layout === 'reference'
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: reference ? REFERENCE_SIZES[i % REFERENCE_SIZES.length] : 45 + Math.random() * 45,
      // Roughly half fly left → right and half right → left so both
      // sides of the screen stay covered.
      variant: reference
        ? i % 2 === 0
          ? FLY_VARIANTS[Math.floor(Math.random() * 2)]
          : FLY_VARIANTS[2 + Math.floor(Math.random() * 2)]
        : FLY_VARIANTS[Math.floor(Math.random() * FLY_VARIANTS.length)],
      duration: `${(12 + Math.random() * 8).toFixed(2)}s`,
      delay: reference ? `${i * 0.7}s` : `${(Math.random() * 9).toFixed(2)}s`,
      flip: reference ? i % 2 === 0 : Math.random() > 0.5,
    }))
  }, [count, layout])

  const stars = useMemo(
    () =>
      Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 8 + Math.random() * 12,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
      })),
    [starCount]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {butterflies.map((b) => (
        <div
          key={b.id}
          className={`gb-fly ${b.variant} ${layout === 'reference' ? 'gb-reference-fly' : ''}`}
          style={{ animationDuration: b.duration, animationDelay: b.delay }}
        >
          <GoldButterfly
            size={b.size}
            className={layout === 'reference' ? 'gb-reference-butterfly' : ''}
            style={b.flip ? { transform: 'scaleX(-1)' } : undefined}
          />
        </div>
      ))}
      {stars.map((s) => (
        <GoldSparkle
          key={s.id}
          size={s.size}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}
    </div>
  )
}
