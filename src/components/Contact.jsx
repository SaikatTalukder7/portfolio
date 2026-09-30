// Contact section
// Ekhane amar contact info, social links and message form ache.

import { useState } from 'react'
import './Contact.css'

// Amar contact info gula
const infoItems = [
  {
    label: 'Email',
    value: 'saikat60mu@gmail.com',
    href: 'mailto:saikat60mu@gmail.com',
  },
  {
    label: 'WhatsApp',
    value: '+880 1932283514',
    href: 'https://wa.me/8801932283514',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/saikattalukder7',
    href: 'https://linkedin.com/in/saikattalukder7',
  },
  {
    label: 'GitHub',
    value: 'github.com/SaikatTalukder7',
    href: 'https://github.com/SaikatTalukder7',
  },
  {
    label: 'Location',
    value: 'Subidbajar, Sylhet, Bangladesh',
    href: null,
  },
]

// Amar social media link gula
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/SaikatTalukder7',
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/saikattalukder7',
    icon: (
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.94 1.94 0 1 0 0 3.88 1.94 1.94 0 0 0 0-3.88ZM20.5 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.72V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.07 2.26 4.07 5.2V20Z" />
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801932283514',
    icon: (
      <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.77.46 3.45 1.35 4.94L2 22l5.2-1.36A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm0 18.06c-1.6 0-3.15-.43-4.5-1.24l-.32-.19-3.09.81.82-3-.21-.31a8.06 8.06 0 1 1 7.3 3.93Zm4.4-6.02c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02s-.42.06-.64.3c-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    ),
  },
  {
    label: 'Email',
    href: 'mailto:saikat60mu@gmail.com',
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.1 5.6L18.6 7H4.4ZM4 8.4V18h16V8.4l-8 6.3-8-6.3Z" />
    ),
  },
]

function Contact() {
  // Form er input gula ekhane rakha hoy
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Input e kichu likhle form update kore
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Backend nai, tai mail app diye message pathay
  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name || 'a visitor'}`
    )

    const body = encodeURIComponent(
      `${form.message}\n\n- ${form.name} (${form.email})`
    )

    window.location.href = `mailto:saikat60mu@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <h2>Contact</h2>
          <p>
            Reach out for internships, research, software collaborations, and
            competitive programming initiatives. Feel free to reach out to me
            directly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {/* Amar contact info gula show kore */}
            <ul className="info-list">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <span className="info-label">{item.label}</span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel="noreferrer"
                      className="info-value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="social-block">
              <span className="social-label">Connect on Social Networks</span>

              {/* Amar social icon gula */}
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="social-icon"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Amar message form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
