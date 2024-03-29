import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light custom-white-bg-color-black-border d-none d-lg-block mb-5">
        <div class="container">
            <a class="navbar-brand" href="/"><h4 class="logo">Graphixcentral.</h4></a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Solutions">Solutions</a>
              </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Contact">Contact us</a>
                </li>
            </ul>
        </div>
      </nav>

  );
}

export default Navbar
