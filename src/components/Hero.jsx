// Hero section
// Ekhane amar photo, intro, role, availability and buttons ache.

import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData.js'
import './Hero.css'

function Hero() {
  // Page load hole fade-in animation control kore
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // User reduced motion prefer korle animation skip kore
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setVisible(true)
      return
    }

    // Short delay er por animation start kore
    const timer = setTimeout(() => setVisible(true), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className={`hero-content ${visible ? 'is-visible' : ''}`}>
          {/* Amar profile photo */}
          <div className="hero-photo">
            <img src={profile.photo} alt={profile.name} />
          </div>

          {/* Amar name show kore */}
          <h1 className="hero-heading">
            Hi, I&rsquo;m {profile.name.split(' ')[0]}
          </h1>

          <p className="hero-sub">{profile.role}</p>

          {/* Amar current availability show kore */}
          <div className="hero-status">
            <span className="hero-status-dot" />
            {profile.availability}
          </div>

          {/* Main action buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>

            <a
              href={profile.resumeUrl}
              className="btn btn-ghost"
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