import React from 'react'

export default function About() {
  return (
    <section>
      <h1 className="section__title">About Us</h1>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-sm)',
        padding: '1.2rem',
        lineHeight: 1.7,
        color: 'var(--muted)'
      }}>
        <h2 style={{ color:'var(--brand)', marginTop:0 }}>Cane Furniture: History & Legacy</h2>
        <p>
          Cane furniture, crafted from the outer bark of the rattan palm, has been cherished for centuries
          across tropical regions for its remarkable balance of strength, flexibility, and lightness. Its
          natural golden hue and distinctive woven patterns evoke warmth and craftsmanship, making it a
          staple in heritage homes and modern interiors alike.
        </p>
        <p>
          Artisans skillfully split, steam, and weave cane into enduring forms—chairs, loungers, cabinets,
          and intricate accents. The technique not only enhances durability but also ensures exceptional
          breathability and comfort, suited to warm climates. Today, sustainably sourced rattan and updated
          finishes preserve this legacy while aligning with contemporary aesthetics and eco-conscious living.
        </p>
        <p>
          Our workshop celebrates this lineage by pairing time-honored weaving methods with meticulous
          joinery and ergonomic design. Each piece is handcrafted, inspected, and finished to bring natural
          serenity to your spaces—made to last, to be repaired, and to be loved over generations.
        </p>
      </div>
    </section>
  )
}
