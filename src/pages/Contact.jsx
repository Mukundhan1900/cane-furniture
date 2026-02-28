import React from 'react'

export default function Contact() {
  return (
    <section>
      <h1 className="section__title">Contact Us</h1>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-sm)',
        padding: '1.2rem'
      }}>
        <div style={{ display:'grid', gap:'1rem', gridTemplateColumns:'1fr', }}>
          <div style={{ display:'flex', gap:'.6rem' }}>
            <div>✉️</div>
            <div>
              <div style={{ fontWeight:700 }}>Email</div>
              <a href="mailto:hello@canefurniture.example" style={{ color:'var(--brand)', textDecoration:'none' }}>
                hello@canefurniture.example
              </a>
            </div>
          </div>

          <div style={{ display:'flex', gap:'.6rem' }}>
            <div>📞</div>
            <div>
              <div style={{ fontWeight:700 }}>Phone</div>
              <a href="tel:+910000000000" style={{ color:'var(--brand)', textDecoration:'none' }}>
                +91 00000 00000
              </a>
            </div>
          </div>

          <div style={{ display:'flex', gap:'.6rem' }}>
            <div>📍</div>
            <div>
              <div style={{ fontWeight:700 }}>Address</div>
              <p style={{ margin: '.2rem 0 0 0', color:'var(--muted)' }}>
                123, Heritage Lane, Arts & Crafts District,<br/>
                Your City, Your State 000000
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1rem', color:'var(--muted)', fontSize:'.95rem' }}>
          Prefer WhatsApp or Instagram DMs? Reach us on our social channels via the icons in the footer.
        </div>
      </div>
    </section>
  )
}