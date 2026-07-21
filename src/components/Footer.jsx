import React from 'react'
import './Footer.css'

/* ─── Footer nav columns ────────────────────────────────────
   To add a link: add an object { label, target } to any column.
   "target" must match the id of the section in App.jsx.
   ─────────────────────────────────────────────────────────── */
const navColumns = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Home',     target: 'hero'     },
      { label: 'Products', target: 'products' },
      { label: 'About',    target: 'about'    },
      { label: 'Contact',  target: 'contact'  },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'Mops',    target: 'products' },
      { label: 'Wipers',  target: 'products' },
      { label: 'Brushes', target: 'products' },
      { label: 'Brooms',  target: 'products' },
      { label: 'Towels',  target: 'products' },
    ],
  },
]

function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Top row */}
        <div className="footer__top">

          {/* Brand block */}
          <div className="footer__brand">
            <button className="footer__logo" onClick={() => scrollTo('hero')}>
              <span className="footer__logo-main">REONA</span>
              <span className="footer__logo-sub">MADE FOR YOU</span>
            </button>
            <p className="footer__desc">
              Premium quality cleaning products since 1999.<br />
              ISO 9001 : 2015 Certified.<br />
              Made in India — Designed in Italy.
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading} className="footer__col">
              <p className="footer__col-heading">{col.heading}</p>
              <ul className="footer__col-list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button onClick={() => scrollTo(l.target)}>{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact block */}
          <div className="footer__col">
            <p className="footer__col-heading">Contact</p>
            <ul className="footer__contact-list">
              <li>Kottakkal, Kerala — 676 503</li>
              <li>+91 98958 45343</li>
              <li>reonainternational@gmail.com</li>
              <li>www.reona.in</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Reona International. All rights reserved.
          </p>
          <p className="footer__cert">
            ISO 9001 : 2015 &nbsp;·&nbsp; Made in India &nbsp;·&nbsp; Designed in Italy
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
