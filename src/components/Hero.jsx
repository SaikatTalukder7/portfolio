// Hero section
// Ekhane amar photo, intro, role, availability and buttons ache.
// Page load e ekta sequence cholbe: photo -> naam -> role (type hoy) -> status -> buttons

import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData.js'
import './Hero.css'

// User reduced motion chaile animation chalabo na
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Naam er prottek akkhor alada animate korar jonno
function SplitHeading({ text }) {
  let offset = 0
  const words = text.split(' ').map((word) => {
    const start = offset
    offset += word.length + 1
    return { word, start }
  })

  return (
    <h1 className="hero-heading" aria-label={text}>
      {words.map(({ word, start }, wi) => (
        <span key={wi}>
          {wi > 0 && ' '}
          <span className="hero-word" aria-hidden="true">
            {[...word].map((char, ci) => (
              <span key={ci} className="hero-char" style={{ '--c': start + ci }}>
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  )
}

// Role line ta ek ek akkhor kore type hoy.
// Bakita invisible rakhi, tai text er jayga agei fix thake (layout lafay na)
function Typewriter({ text, start, delay = 0, speed = 32 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    if (prefersReducedMotion()) {
      setCount(text.length)
      return
    }

    let index = 0
    let interval
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        index += 1
        setCount(index)
        if (index >= text.length) clearInterval(interval)
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [start, text, delay, speed])

  const done = count >= text.length

  return (
    <span className={`typed ${done ? 'is-done' : ''}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="typed-caret" />
        <span className="typed-rest">{text.slice(count)}</span>
      </span>
    </span>
  )
}

function Hero() {
  // Page load hole animation start korar flag
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }

    // Short delay er por animation start kore
    const timer = setTimeout(() => setVisible(true), 100)

    return () => clearTimeout(timer)
  }, [])

  const firstName = profile.name.split(' ')[0]

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className={`hero-content ${visible ? 'is-visible' : ''}`}>
          {/* Amar profile photo (ghurte thaka ring soho) */}
          <div className="hero-photo-anim">
            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <img src={profile.photo} alt={profile.name} />
              </div>
            </div>
          </div>

          {/* Amar name show kore, akkhor dhore dhore */}
          <SplitHeading text={`Hi, I\u2019m ${firstName}`} />

          <p className="hero-sub">
            <Typewriter text={profile.role} start={visible} delay={900} />
          </p>

          {/* Amar current availability show kore */}
          <div className="hero-status hero-anim" style={{ '--d': 1900 }}>
            <span className="hero-status-dot" />
            {profile.availability}
          </div>

          {/* Main action buttons */}
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary hero-anim"
              style={{ '--d': 2050 }}
            >
              View projects
            </a>

            <a
              href="#contact"
              className="btn btn-secondary hero-anim"
              style={{ '--d': 2150 }}
            >
              Get in touch
            </a>

            <a
              href={profile.resumeUrl}
              className="btn btn-ghost hero-anim"
              style={{ '--d': 2250 }}
              download
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
