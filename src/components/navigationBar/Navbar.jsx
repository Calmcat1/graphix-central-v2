import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light custom-white-bg-color-black-border d-none d-lg-block mb-5">
        <div class="container">
            <a class="navbar-brand" href="/home"><h4 class="logo">Graphixcentral.</h4></a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="Solutions.html">Solutions</a>
              </li>
                <li class="nav-item">
                    <a class="nav-link" href="Contact.html">Contact us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
            </ul>
        </div>
      </nav>

  );
}

export default Navbar
