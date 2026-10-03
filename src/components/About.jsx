import React from 'react'
import './About.css'

const certifications = [
  { title: 'ISO 9001 : 2015', detail: 'Quality Management System Certified' },
  { title: 'Made in India', detail: 'Designed in Italy' },
  { title: '100% Export', detail: 'Export Quality — Globally Certified' },
  { title: 'Since 1999', detail: 'Over 25 Years of Manufacturing Excellence' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="about__visual">
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
      <div className="about__inner">
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
          <div className="about__contact">
            <div className="about__contact-item">
              <span className="about__contact-label">Head Office</span>
              <span className="about__contact-value">
                First Floor, Door No. 7/119,7/120, Opp. Ayurveda College, Kottakal, Kerala, Pin- 676 501
              </span>
            </div>
            <div className="about__contact-item">
              <span className="about__contact-label">Manufacturing</span>
              <span className="about__contact-value">
                Door No.14/182 A, Kudi Street, Thennilai, Karur, Tamil Nadu, Pin- 621 301
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
              <span className="about__contact-value"><a href="https://reonainternational.com/">reonainternational.com</a></span>
            </div>
          </div>
        </div>
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
