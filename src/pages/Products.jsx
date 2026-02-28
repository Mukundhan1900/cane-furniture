import React, { useMemo } from 'react'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const products = useMemo(() => [
    { id: 1, title: 'Rattan Lounge Chair', price: 12999, image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80' },
    { id: 2, title: 'Cane Weave Sofa (2-Seater)', price: 34999, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80' },
    { id: 3, title: 'Classic Rattan Armchair', price: 15999, image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80' },
    { id: 4, title: 'Cane Bistro Set (3 Pc)', price: 27999, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80' },
    { id: 5, title: 'Wicker Coffee Table', price: 8999, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80' },
    { id: 6, title: 'Rattan Accent Chair', price: 13999, image: 'https://images.unsplash.com/photo-1555041469-1b09de1cc7b2?auto=format&fit=crop&w=1200&q=80' },
  ], [])

  return (
    <section>
      <div className="section__header">
        <h1 className="section__title">Products</h1>
        <div className="section__meta">Explore our collection of handcrafted cane furniture</div>
      </div>
      <div className="grid grid--2 grid--3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}