// Back to top button
// Niche scroll korle ekhane button ashe. Button er chardike ring ta
// page er koto ta scroll hoyeche seta dekhay.

import { useEffect, useRef, useState } from 'react'

function BackToTop() {
  const buttonRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0

      if (buttonRef.current) {
        buttonRef.current.style.setProperty('--p', (progress * 100).toFixed(1))
      }
      setShow(window.scrollY > 600)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`back-to-top ${show ? 'is-shown' : ''}`}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default BackToTop
