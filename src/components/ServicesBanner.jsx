import React from 'react'

const services = [
  { title: 'Free Delivery', desc: 'Complimentary delivery for orders over ₹10,000', icon: '🚚' },
  { title: 'Assembly Support', desc: 'Expert setup on request in select cities', icon: '🛠️' },
  { title: '1-Year Warranty', desc: 'Coverage for manufacturing defects', icon: '🛡️' },
  { title: 'Easy Returns', desc: 'Hassle-free returns within 7 days', icon: '↩️' },
]

export default function ServicesBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, var(--surface-2), #fff8ea)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '1.2rem',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display:'grid', gap:'1rem', gridTemplateColumns:'1fr', }}>
        <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'1fr', }}
        >
          <div style={{
            display:'grid',
            gap:'1rem',
            gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'
          }}>
            {services.map((s, i) => (
              <div key={i} style={{ display:'flex', gap:'.6rem', alignItems:'flex-start' }}>
                <div style={{
                  background:'#fff',
                  border:'1px solid var(--border)',
                  borderRadius:'12px',
                  boxShadow:'var(--shadow-sm)',
                  width:36, height:36, display:'grid', placeItems:'center'
                }}>{s.icon}</div>
                <div>
                  <div style={{ fontWeight:700, color:'var(--text)' }}>{s.title}</div>
                  <div style={{ color:'var(--muted)', fontSize:'.95rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}