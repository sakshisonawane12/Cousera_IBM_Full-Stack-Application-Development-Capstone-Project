import React from 'react';
import Header from '../Header/Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>About Dealerships Review Portal</h2>
            <p>
              Welcome to India's premier car dealership review platform. We connect customers 
              with trusted car dealerships across all Indian states, helping you make informed 
              decisions about your next vehicle purchase.
            </p>
            <h4>Our Mission</h4>
            <p>
              To provide transparent, authentic reviews of car dealerships across India, 
              empowering customers with the information they need to choose the right dealership 
              for their automotive needs.
            </p>
            <h4>Features</h4>
            <ul>
              <li>Browse dealerships by state</li>
              <li>Read authentic customer reviews</li>
              <li>AI-powered sentiment analysis</li>
              <li>User-friendly interface</li>
              <li>Secure authentication system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;