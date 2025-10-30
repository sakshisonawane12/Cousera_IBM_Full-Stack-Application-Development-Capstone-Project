import React from 'react';
import Header from '../Header/Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback about our dealership review platform? 
              We'd love to hear from you!
            </p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <h4>Get in Touch</h4>
                <p><strong>Email:</strong> support@dealershipsreview.in</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
              </div>
              
              <div className="col-md-6">
                <h4>Business Hours</h4>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4>Support</h4>
              <p>
                For technical support or account issues, please email us at 
                <strong> tech@dealershipsreview.in</strong> with detailed information 
                about your problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;