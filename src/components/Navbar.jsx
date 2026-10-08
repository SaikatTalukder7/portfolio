// Navbar section
// Menu te theme toggle, sob section er link and mobile hamburger menu ache.

import { useEffect, useState } from 'react'
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

  // Current theme rakhe
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  // Theme apply kore and browser e save kore
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const closeMenu = () => setOpen(false)

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="navbar">
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
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
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
    </header>
  )
}

export default Navbar