// Navbar section
// Menu te theme toggle, sob section er link and mobile hamburger menu ache.
// Upore scroll progress bar ache, ar je section e achi seta highlight hoy.

import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

// Navbar er sob link
const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  // Mobile menu open or close rakhe
  const [open, setOpen] = useState(false)

  // Page scroll hoyeche kina (navbar e shadow dekhate)
  const [scrolled, setScrolled] = useState(false)

  // Ekhon kon section e achi (link highlight er jonno)
  const [activeId, setActiveId] = useState('')

  // Scroll progress bar
  const progressRef = useRef(null)

  // Current theme rakhe
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  // Theme apply kore and browser e save kore
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll korle progress bar bhore and shadow ashe
  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
      setScrolled(window.scrollY > 12)
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

  // Screen er majhkhane je section ache sheta active link hobe
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const ids = ['top', ...links.map((link) => link.href.slice(1))]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hero (top) e thakle kono link active na
            setActiveId(entry.target.id === 'top' ? '' : entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setOpen(false)

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">

        <a
          href="#top"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            closeMenu()

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
        >
          <span className="navbar-logo-mark">ST</span>

          <span>
            Saikat<span className="navbar-logo-dot">_</span>Talukder
          </span>
        </a>

        <div className="navbar-actions">

          {/* Dark / Light mode button */}
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg
                key="sun"
                className="theme-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />

                <path d="M12 2v2" />
                <path d="M12 20v2" />

                <path d="M4.93 4.93l1.42 1.42" />
                <path d="M17.65 17.65l1.42 1.42" />

                <path d="M2 12h2" />
                <path d="M20 12h2" />

                <path d="M4.93 19.07l1.42-1.42" />
                <path d="M17.65 6.35l1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                key="moon"
                className="theme-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>

          {/* Sob navigation link ekhane show kore */}
          <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
            {links.map((link, i) => {
              const isActive = activeId === link.href.slice(1)

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'is-active' : ''}
                  aria-current={isActive ? 'true' : undefined}
                  style={{ '--i': i }}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile screen e hamburger menu show kore */}
          <button
            className={`navbar-toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </header>
  )
}

export default Navbar
