import React from 'react'

export default function Header({ current, onNavigate }) {
  const nav = [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'Products' },
    { key: 'about', label: 'About Us' },
    { key: 'contact', label: 'Contact Us' },
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__logo">CF</div>
          <div>Cane Furniture</div>
        </div>

        <nav className="nav">
          {nav.map(item => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              aria-current={current === item.key ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
          <button className="nav cart-btn" title="Cart">🛒 Cart</button>
        </nav>
      </div>
    </header>
  )
}