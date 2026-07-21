import React from 'react'
import './Stats.css'

/* ─── How to edit stats ────────────────────────────────────
   Change "value" or "label" for any of the 4 items below.
   ─────────────────────────────────────────────────────────── */
const stats = [
  { value: '1999', label: 'Established' },
  { value: 'ISO',  label: '9001 : 2015 Certified' },
  { value: '100%', label: 'Export Quality' },
  { value: '25+',  label: 'Years of Excellence' },
]

function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="stats__inner">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
