import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <div>
      <div class="content">
       <div class="container mt-4">
        <div class="row">
        
        <div class="col-md-5">
          <img src="IMGS/valueGraph1.jpg" alt="Image" class="img-fluid"></img>
        </div>


       
       <div class="col-md-7">
         <div class="jumbotron text-white p-5 m-4 border-style-1">
           <h1 class="display-4 text-styling">Our Values</h1>
           <p class="lead text-styling">Teamwork, Resilience, responsibility, patience and perserverance</p>
           <hr class="my-4"></hr>
           <a className="btn text-styling btn-custom"><b>Our Solutions &rarr;</b></a>
         </div>
       </div>
     </div>
    </div>

    
    <div class="container mt-4">
    <div class="row">
   
    <div class="col-xl-7">
     <div class="jumbotron text-white p-5 m-4 border-style-1">
       <h1 class="display-4 text-styling">Our Mission</h1>
       <p class="lead text-styling">To provide designs that make ideas come to life.</p>
       <hr class="my-4"></hr>
       <a className="btn btn-custom"><b>Our Solutions &rarr;</b></a>
     </div>
    </div>

 
            <div class="col-md-5">
              <img src="IMGS/risingbargraph.jpg" alt="Image" class="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
