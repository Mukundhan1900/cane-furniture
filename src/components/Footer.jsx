import React from 'react'

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.19 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22C18.34 21.19 22 17.08 22 12.06z"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5ZM18 6.4a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 18 6.4Z"/>
  </svg>
)
const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.6 4.5 12 4.5 12 4.5s-7.6 0-9.4.6A3 3 0 0 0 .5 7.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12z"/>
  </svg>
)

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><button onClick={() => onNavigate('products')}>Products</button></li>
            <li><button onClick={() => onNavigate('about')}>About Us</button></li>
            <li><button onClick={() => onNavigate('contact')}>Contact Us</button></li>
          </ul>
          <div className="footer__copy">© {new Date().getFullYear()} Cane Furniture. All rights reserved.</div>
        </div>

        <div className="socials" aria-label="Social links">
          <a className="icon-btn" href="#" aria-label="Facebook"><IconFacebook/></a>
          <a className="icon-btn" href="#" aria-label="Instagram"><IconInstagram/></a>
          <a className="icon-btn" href="#" aria-label="YouTube"><IconYouTube/></a>
        </div>
      </div>
    </footer>
  )
}