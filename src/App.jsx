import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [page, setPage] = useState('home') // simple SPA navigation

  return (
    <div className="app">
      <Header current={page} onNavigate={setPage} />
      <main className="container">
        {page === 'home' && <Home onShopNow={() => setPage('products')} />}
        {page === 'products' && <Products />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={setPage} />
    </div>
  )
}