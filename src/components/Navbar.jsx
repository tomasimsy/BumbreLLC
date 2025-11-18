// -----------------------------
// src/components/Navbar.jsx
// -----------------------------
import React from 'react';

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <span className="brand-dot me-2" />
          Bumbre LLC
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item"><a className="nav-link" href="#services">Services</a></li> */}
            <li className="nav-item"><a className="nav-link" href="#whoIHelpTwo">Who I Help</a></li>
            <li className="nav-item"><a className="nav-link" href="#whoIHelp">What I Do</a></li>
            <li className="nav-item"><a className="nav-link" href="#aboutme">About Me</a></li>
            <li className="nav-item"><a className="nav-link" href="#Testimonials">Testimonials</a></li>

            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
            <li className="nav-item ms-2"><a className="btn btn-warning text-dark" href="#contact">Get Started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}