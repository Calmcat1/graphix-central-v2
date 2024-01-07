import React from 'react'
import './ContentSolution.css'
import design from '../../Images/design1.jpg';
import graphix from '../../Images/graphix1.jpg';
import logo from '../../Images/logoImg1.jpg'



const ContentSolution = () => {
  return (
    <div>
      <div class="content mt-5">
       <div class="container mt-4">
        <div class="row">
        
        <div class="col-md-5">
          <img src={logo} alt="Image" class="img-fluid img-styling-1"></img>
        </div>


       
       <div class="col-md-7">
         <div class="jumbotron text-white p-5 m-4 border-style-1">
           <h1 class="display-4 text-styling">Logo Design</h1>
           <p class="lead text-styling">From pamplets to buisness logos, we can handle all your design needs</p>
             <hr class="my-4"></hr>
             <a className="btn text-styling btn-custom" href="/contact"><b>Contact Us &rarr;</b></a>
           </div>
         </div>
       </div>
      </div>

    
        <div class="container mt-4">
        <div class="row">

        <div class="col-xl-7">
         <div class="jumbotron text-white p-5 m-4 border-style-1">
           <h1 class="display-4 text-styling">Graphics</h1>
           <p class="lead text-styling">Why not just Upgrade it all.</p>
           <hr class="my-4"></hr>
           <a className="btn btn-custom" href="/contact"><b>Contact us &rarr;</b></a>
         </div>
        </div>

 
            <div class="col-md-5">
              <img src={graphix} alt="Image" class="img-fluid img-styling-1"></img>
            </div>




            <div class="col-md-5">
          <img src={design} alt="Image" class="img-fluid img-styling-1"></img>
        </div>


       
         <div class="col-md-7">
           <div class="jumbotron text-white p-5 m-4 border-style-1">
             <h1 class="display-4 text-styling">Design</h1>
             <p class="lead text-styling">Design of websites, digital media, and others</p>
               <hr class="my-4"></hr>
               <a className="btn text-styling btn-custom" href="/contact"><b>Contact us &rarr;</b></a>
             </div>
           </div>
         </div>
          </div>
          </div>
        </div>
  )
}

export default ContentSolution;
