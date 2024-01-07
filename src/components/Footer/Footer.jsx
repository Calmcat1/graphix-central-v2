import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer class="white-top-border text-light mt-4 py-3">
        <div class="container text-center">
          <p class="text-dark">&copy; 2024 </p>
          <h4 class="logo">Graphixcentral.</h4>
          <nav class="nav justify-content-center">
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/Solutions">Solutions</a>
            <a class="nav-link" href="/Contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer
