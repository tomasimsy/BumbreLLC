// -----------------------------
// src/components/Hero.jsx
// -----------------------------
import React from 'react';
import tom from '../assets/tom.jpg'; // adjust path relative to the component file


export default function Hero(){
  return (
    <header className="hero d-flex align-items-center py-5" style={{backgroundColor:'#fff8e1'}}>
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-7 text-start">
            <h2 className="text-warning fw-bold mb-2">Bumbre LLC</h2>
            <h1 className="display-4 fw-bold text-dark">Fast. Friendly. Reliable Tax Filing.</h1>
            <p className="lead text-dark mt-3">...nails salon owners, Truck Driver, Tree Business Owner, W2 workers, or freelancers, I'll file your tax.</p>

            <div className="mt-4 d-flex flex-wrap gap-2">
              <a href="tel:+17043034112" className="btn btn-warning btn-lg shadow">Call or Text Me</a>
              <a href="#services" className="btn btn-outline-dark btn-lg shadow">Learn About My Services</a>
            </div>

            <ul className="list-inline text-muted mt-4 small">
              <li className="list-inline-item">✔ Simple, step-by-step guidance</li>
              <li className="list-inline-item">✔ Personal attention</li>
              <li className="list-inline-item">✔ Affordable, fair pricing</li>
            </ul>
          </div>

          <div className="col-md-5 mt-4 mt-md-0 text-center">
            <div className="card shadow-sm border-0">
                <img src={tom} alt="Tom — tax help" className="img-fluid rounded-top" />              
                {/* <div className="card-body text-start">
                <h5 className="card-title fw-bold">Get Help in 3 Simple Steps</h5>
                <p className="card-text small text-dark">Reach out via phone or WhatsApp, I’ll guide you on what you need, and then I’ll handle everything for you. No forms, no stress.</p>
                <a href="#contact" className="btn btn-sm btn-warning text-dark shadow">Start Now</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
