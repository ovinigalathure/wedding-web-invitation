// src/components/final-cta-animation/FloatingHearts.jsx
import './FloatingHearts.css'

export default function FloatingHearts({ count = 5, fullScreen = false }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`floating-heart ${fullScreen ? 'floating-heart--full' : ''}`}
          style={
            fullScreen
              ? {
                  left: `${5 + i * (90 / count)}%`,
                  animationDelay: `${i * 0.9}s`,
                  animationDuration: `${7 + (i % 4)}s`,
                  fontSize: `${0.9 + (i % 3) * 0.4}rem`,
                }
              : {
                  left: `${8 + i * (84 / count)}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${5 + (i % 3)}s`,
                }
          }
        >
          ♥
        </span>
      ))}
    </>
  )
}