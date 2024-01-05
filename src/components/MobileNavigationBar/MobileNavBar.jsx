import React from 'react'

const MobileNavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light d-block d-lg-none mb-5">
        <div class="container">
          <a class="navbar-brand" href="/home"><img class="w-25" src="IMGS/GraphixCentralpng2.png"></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mobileNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Solutions.html">Packages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      
    </div>
  )
}

export default MobileNavBar
