import React from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Stats     from './components/Stats'
import Products  from './components/Products'
import About     from './components/About'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import mop from './assets/mop.jpg'

/* ─── How to add / remove a section ────────────────────────────
   1. Create a new component file in src/components/
   2. Import it here (e.g. import NewSection from './components/NewSection')
   3. Add <NewSection /> below in the correct position
   ────────────────────────────────────────────────────────────── */

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <About />
      <Contact />
      <Footer />
      <mop />
    </>
  )
}

export default App
