import React, { useEffect, useState } from 'react'

const reviews = [
  { name: 'Ananya R.', text: 'Beautiful craftsmanship and super comfortable. The lounge chair transformed my reading nook!', rating: 5 },
  { name: 'Karthik S.', text: 'Delivered on time; assembly team was quick. The rattan weave looks stunning in daylight.', rating: 5 },
  { name: 'Meera P.', text: 'Authentic feel with a modern finish. Eco-friendly sourcing and quality workmanship.', rating: 4 },
]

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % reviews.length), 3500)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex(i => (i - 1 + reviews.length) % reviews.length)
  const next = () => setIndex(i => (i + 1) % reviews.length)

  const r = reviews[index]

  return (
    <div className="carousel">
      <div className="carousel__top">
        <button className="icon-btn--square" onClick={prev} aria-label="Previous review">◀</button>
        <div className="rating" aria-label={`${r.rating} star rating`}>
          {Array.from({ length: r.rating }).map((_, i) => <span key={i}>★</span>)}
        </div>
        <button className="icon-btn--square" onClick={next} aria-label="Next review">▶</button>
      </div>

      <blockquote>“{r.text}”</blockquote>
      <div className="carousel__author">— {r.name}</div>

      <div className="dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? 'dot--active' : ''}`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}