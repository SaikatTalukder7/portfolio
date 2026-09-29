// Navbar section
// Menu te sob section er link and mobile hamburger menu ache.
import { useState } from 'react'
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

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" onClick={closeMenu}>
          Saikat<span className="navbar-logo-dot">_</span>Talukder
        </a>

        {/* Sob navigation link ekhane show kore */}
        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
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
    </header>
  )
}

export default Navbar
