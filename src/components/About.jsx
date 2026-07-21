import React from 'react'
import './About.css'

/* ─── Certification data from brochure ──────────────────────
   To edit: change "title" or "detail" for any item below.
   ─────────────────────────────────────────────────────────── */
const certifications = [
  { title: 'ISO 9001 : 2015',  detail: 'Quality Management System Certified' },
  { title: 'Made in India',    detail: 'Designed in Italy' },
  { title: '100% Export',      detail: 'Export Quality — Globally Certified' },
  { title: 'Since 1999',       detail: 'Over 25 Years of Manufacturing Excellence' },
]

function About() {
  return (
    <section id="about" className="about">

      {/* Top: full-width background image panel */}
      <div className="about__visual">
        {/* ─── ABOUT SECTION IMAGE ────────────────────────────────
            REPLACE: swap this URL with a photo of your
            factory floor, production line, or a lifestyle
            image of Reona products in a clean home setting.
            Recommended size: 1600x700px, landscape.
            ────────────────────────────────────────────────────── */}
        <img
          src="images/lastpic.jpeg"
          alt="Reona International — manufacturing excellence"
          className="about__visual-img"
        />
        <div className="about__visual-overlay" />
        <div className="about__visual-text">
          <p className="about__visual-quote">
            "Quality is not an act — it is a habit."
          </p>
        </div>
      </div>

      {/* Bottom: two-column content */}
      <div className="about__inner">

        {/* Left column: company text */}
        <div className="about__left">
          <p className="about__eyebrow">About Reona</p>
          <h2 className="about__title">
            A Legacy of Clean,<br />
            <em>Built Over Decades.</em>
          </h2>
          <p className="about__body">
            Reona International is an ISO 9001:2015 certified manufacturer
            and exporter of premium cleaning products, established in 1999
            and headquartered in Kottakkal, Kerala, India.
          </p>
          <p className="about__body">
            Our products are conceived in Italy and manufactured in India —
            a combination of European design sensibility and Indian
            craftsmanship. Every product we make is built to 100% export
            quality standards, trusted across homes, hotels, hospitals,
            and commercial institutions worldwide.
          </p>

          {/* Contact details — no emojis, clean list layout */}
          <div className="about__contact">
            <div className="about__contact-item">
              <span className="about__contact-label">Head Office</span>
              <span className="about__contact-value">
                12/469/A & 12/469/B, Kottakkal, Kerala — 676 503
              </span>
            </div>
            <div className="about__contact-item">
              <span className="about__contact-label">Corporate Office</span>
              <span className="about__contact-value">
                No. 8, Jaya Plaza, 60 Feet Road, Annanur, Chennai — 109
              </span>
            </div>
            <div className="about__contact-item">
              <span className="about__contact-label">Phone</span>
              <span className="about__contact-value">+91 98958 45343</span>
            </div>
            <div className="about__contact-item">
              <span className="about__contact-label">Email</span>
              <span className="about__contact-value">reonainternational@gmail.com</span>
            </div>
            <div className="about__contact-item">
              <span className="about__contact-label">Web</span>
              <span className="about__contact-value">www.reona.in</span>
            </div>
          </div>
        </div>

        {/* Right column: certifications */}
        <div className="about__right">
          <p className="about__cert-heading">Certifications &amp; Standards</p>
          <div className="about__certs">
            {certifications.map((c, i) => (
              <div key={i} className="about__cert-card">
                <span className="about__cert-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="about__cert-title">{c.title}</p>
                  <p className="about__cert-detail">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
