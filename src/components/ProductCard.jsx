import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div style={{ position: 'relative' }}>
        <img className="card__img" src={product.image} alt={product.title} />
        <div className="badge">In stock</div>
      </div>
      <div className="card__body">
        <h4 className="card__title">{product.title}</h4>
        <div className="card__price">₹{product.price.toLocaleString('en-IN')}</div>
        <div className="card__row">
          <button className="btn--buy">Add to Cart</button>
          <div className="rating" aria-label="rating">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} aria-hidden="true">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}