import React, { useState } from 'react'
import './Contact.css'

/* ─── Form validation rules ───────────────────────────────
   To add a new field: add it to initialForm, validate(),
   and the JSX below. Same pattern for all fields.
   ─────────────────────────────────────────────────────── */

const initialForm = { name: '', company: '', email: '', phone: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim())    errors.name    = 'Name is required.'
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
                             errors.email   = 'A valid email is required.'
  if (!form.message.trim()) errors.message = 'Please enter your message.'
  return errors
}

function Contact() {
  const [form,      setForm]      = useState(initialForm)
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        {/* Left: heading and contact details */}
        <div className="contact__left">
          <p className="contact__eyebrow">Get in Touch</p>
          <h2 className="contact__title">
            Let's Build<br />
            <em>Something Clean.</em>
          </h2>
          <p className="contact__desc">
            For product enquiries, bulk orders, or export partnerships —
            our team is ready to assist.
          </p>

          {/* Contact details — no emojis */}
          <div className="contact__details">
            <div className="contact__detail-row">
              <span className="contact__detail-label">Head Office</span>
              <span className="contact__detail-value">
                12/469/A &amp; B, Kottakkal, Kerala — 676 503
              </span>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Corporate</span>
              <span className="contact__detail-value">
                No. 8, Jaya Plaza, Annanur, Chennai — 109
              </span>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Phone</span>
              <span className="contact__detail-value">+91 98958 45343</span>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-label">Email</span>
              <span className="contact__detail-value">reonainternational@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact__right">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">&#10003;</div>
              <h3>Message Received</h3>
              <p>Thank you for reaching out. We will respond within one business day.</p>
              <button
                className="contact__success-btn"
                onClick={() => { setSubmitted(false); setForm(initialForm) }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form" noValidate>
              <div className="contact__row">
                <div className="contact__field">
                  <label>Name *</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className="contact__field">
                  <label>Company</label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                  />
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__field">
                  <label>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
                <div className="contact__field">
                  <label>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
              <div className="contact__field">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Product enquiry, bulk order, export partnership..."
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>
              <button type="submit" className="contact__submit">
                Send Enquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default Contact
