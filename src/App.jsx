import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Professional Painting Services</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <h3>Professional Painting Services for Every Part of Your Home</h3>
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
          alt="Scenic painting scene of a beautiful home exterior"
          className="services-image"
        />
        <div className="services-grid">
          <div className="service-card">
            <h4>Interior Painting</h4>
            <p>Transform your indoor spaces with our expert interior painting services.</p>
          </div>
          <div className="service-card">
            <h4>Exterior Painting</h4>
            <p>Enhance your home's curb appeal with our durable exterior painting.</p>
          </div>
          <div className="service-card">
            <h4>Cabinet Refinishing</h4>
            <p>Give your cabinets a fresh new look with our professional refinishing.</p>
          </div>
        </div>
      </section>

      <section id="before-after" className="before-after-section">
        <h2>Before & After</h2>
        <div className="comparison-container">
          <div className="comparison-image">
            <img 
              src="https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg"
              alt="Before transformation"
              className="before-image"
            />
            <p>Before</p>
          </div>
          <div className="comparison-image">
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
              alt="After transformation"
              className="after-image"
            />
            <p>After</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The team did an amazing job with our living room. The attention to detail was impressive!"</p>
            <h4>- Sarah Johnson</h4>
          </div>
          <div className="testimonial-card">
            <p>"Professional, punctual, and perfect results. Couldn't be happier with our exterior paint job."</p>
            <h4>- Michael Brown</h4>
          </div>
          <div className="testimonial-card">
            <p>"They transformed our kitchen cabinets completely. The quality of work exceeded our expectations."</p>
            <h4>- Emily Davis</h4>
          </div>
          <div className="testimonial-card">
            <p>"Outstanding service from start to finish. They treated our home with respect and delivered excellent results."</p>
            <h4>- James Wilson</h4>
          </div>
          <div className="testimonial-card">
            <p>"The best painting service in the area! Their expertise shows in every brush stroke."</p>
            <h4>- Lisa Anderson</h4>
          </div>
          <div className="testimonial-card">
            <p>"Incredible attention to detail and fantastic customer service. Highly recommended!"</p>
            <h4>- Robert Martinez</h4>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Contact us today for a free quote!</p>
        <button className="cta-button">Get Started</button>
      </footer>
    </div>
  );
}

export default App;