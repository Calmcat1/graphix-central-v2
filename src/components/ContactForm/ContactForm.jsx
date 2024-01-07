import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div>
      <div class="container mt-5">
        <h2 class="text-styling">CONTACT US FOR ANY QUESTIONS</h2>
        <form>
          <div class="form-group">
            <label className="text-styling" for="name">Your Name:</label>
            <input type="text" class="form-control custom-label" id="name" placeholder="Enter your name" required></input>
          </div>
      
          <div class="form-group">
            <label className="text-styling" for="email">Your Email:</label>
            <input type="email" class="form-control custom-label" id="email" placeholder="Enter your email" required></input>
          </div>
      
          <div class="form-group">
            <label className="text-styling" for="phone">Phone Number:</label>
            <input type="tel" class="form-control custom-label" id="phone" placeholder="Enter your phone number" required></input>
          </div>
      
          <div class="form-group">
            <label className="text-styling" for="subject">Subject:</label>
            <input type="text" class="form-control custom-label" id="subject" placeholder="Enter the subject" required></input>
          </div>
      
          <div class="form-group mb-3">
            <label className="text-styling" for="details">Additional Details:</label>
            <textarea class="form-control custom-label" id="details" rows="4" placeholder="Enter additional details"></textarea>
          </div>
      
          <button type="submit" class="btn btn-custom">Submit</button>
        </form>
        </div>
      </div>

  )
}

export default ContactForm
