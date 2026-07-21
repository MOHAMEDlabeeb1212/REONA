import React, { useState, useEffect } from 'react'
import './Navbar.css'

/* ─── How to edit the nav links ──────────────────────────────
   Add or remove objects in the `links` array below.
   "label" = what's shown in the menu.
   "target" = the id of the section to scroll to.
   ─────────────────────────────────────────────────────────── */
const links = [
  { label: 'Home',     target: 'hero'     },
  { label: 'Products', target: 'products' },
  { label: 'About',    target: 'about'    },
  { label: 'Contact',  target: 'contact'  },
]

function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">

        {/* Logo — click to go back to top */}
        <button className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="navbar__logo-main">REONA</span>
          <span className="navbar__logo-sub">MADE FOR YOU</span>
        </button>

        {/* Desktop navigation */}
        <nav className="navbar__nav">
          {links.map((l) => (
            <button key={l.target} className="navbar__link" onClick={() => scrollTo(l.target)}>
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((l) => (
          <button key={l.target} className="navbar__mobile-link" onClick={() => scrollTo(l.target)}>
            {l.label}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Navbar
