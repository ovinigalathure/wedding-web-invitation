// src/components/final-cta-animation/FloatingHearts.jsx
import './FloatingHearts.css'

export default function FloatingHearts({ count = 5 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${8 + i * (84 / count)}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${5 + (i % 3)}s`,
          }}
        >
          ♥
        </span>
      ))}
    </>
  )
}