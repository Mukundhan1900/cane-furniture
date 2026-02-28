import React from 'react'
import ReviewCarousel from '../components/ReviewCarousel.jsx'
import ServicesBanner from '../components/ServicesBanner.jsx'
import ProductCard from '../components/ProductCard.jsx'

const bestSellers = [
  {
    id: 101,
    title: 'Heritage Cane Lounge',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 102,
    title: 'Rattan Accent Chair',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1555041469-1b09de1cc7b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 103,
    title: 'Wicker Coffee Table',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Home({ onShopNow }) {
  return (
    <>
      {/* Highlight Banner */}
      <section className="hero">
        <img
          className="hero__img"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=80"
          alt="Elegant cane furniture in a sunlit room"
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">Handcrafted Cane Furniture for Serene Living</h1>
          <p className="hero__subtitle">
            Sustainably made pieces that blend comfort, craft, and timeless design.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={onShopNow}>Shop Best Sellers</button>
            <button className="btn btn--ghost" onClick={onShopNow}>Explore Products</button>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section>
        <div className="section__header">
          <h2 className="section__title">Best Sellers</h2>
          <div className="section__meta">Top-rated by our customers</div>
        </div>
        <div className="grid grid--3">
          {bestSellers.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>

      {/* Services After Purchase */}
      <section>
        <ServicesBanner />
      </section>

      {/* Reviews */}
      <section>
        <h3 className="section__title">What Our Customers Say</h3>
        <ReviewCarousel />
      </section>
    </>
  )
}