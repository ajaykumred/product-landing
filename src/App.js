// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <a href="/" className="logo">Your Logo</a>
          <ul className="nav-menu">
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="features" className="section">
          <div className="container">
            <h2>Features</h2>
            <div className="feature-item">
              <h3>Feature 1</h3>
              <p>Description of feature 1.</p>
            </div>
            <div className="feature-item">
              <h3>Feature 2</h3>
              <p>Description of feature 2.</p>
            </div>
            {/* Add more feature items as needed */}
          </div>
        </section>
        
        <section id="testimonials" className="section">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonial">
              <p>"Testimonial text here."</p>
              <cite>Customer Name</cite>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </section>
        
        <section id="pricing" className="section">
          <div className="container">
            <h2>Pricing</h2>
            <div className="pricing-plan">
              <h3>Basic</h3>
              <p>$1500 / month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button className="button">Choose Plan</button>
            </div>
            <div className="pricing-plan">
              <h3>Pro</h3>
              <p>$1500 / month</p>
              <ul>
                <li>All Basic features</li>
                <li>Additional feature</li>
              </ul>
              <button className="button">Choose Plan</button>
            </div>
            {/* Add more pricing plans as needed */}
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
