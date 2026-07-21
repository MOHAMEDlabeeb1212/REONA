import React from 'react'
import './Hero.css'
import mopImg from '../assets/mop.jpg'

function Hero() {

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">

      {/* ✅ BACKGROUND IMAGE (ONLY THIS CONTROLS IMAGE) */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${mopImg})` }}
      />

      {/* overlay */}
      <div className="hero__overlay" />

      {/* content */}
      <div className="hero__content">
        <p className="hero__eyebrow">
          ISO 9001 : 2015 Certified · Since 1999
        </p>

        <h1 className="hero__title">
          The Standard<br />
          <em>of Clean.</em>
        </h1>

        <p className="hero__subtitle">
          Premium cleaning products crafted in India,<br />
          engineered to Italian design standards.
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => scrollTo('products')}>
  Explore Collection
  
</button>
        </div>
      </div>

    </section>
  )
}

export default Hero