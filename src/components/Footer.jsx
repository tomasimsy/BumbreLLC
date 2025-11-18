// -----------------------------
// src/components/Footer.jsx
// -----------------------------
import React from 'react';

export default function Footer() {
  return (
    <>
        <footer className="bg-black text-light py-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
            
            {/* LEFT SECTION: Business info + buttons */}
            <div>
            <p className="mb-2 fw-bold">Bumbre LLC</p>
            <p className="text-muted mb-3">Serving: Charlotte, Greensboro, Raleigh & Online</p>
            <div className="d-flex flex-wrap gap-2">
                <a href="tel:+17043034112" className="btn btn-warning btn-sm">Call Now</a>
                <a href="https://wa.me/17043034112" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-sm">WhatsApp</a>
            </div>
            </div>

            {/* RIGHT SECTION: Copyright */}
            <div className="mt-3 mt-md-0">
            <small className="text-muted">© {new Date().getFullYear()} Bumbre LLC. All rights reserved.</small>
            </div>
            
        </div>
        </footer>

      {/* Floating CTA button for mobile, fixed while scrolling */}
      <div className="d-md-none" style={{ position: 'fixed', bottom: '10px', right: '40px', zIndex: 999 }}>
        <a href="tel:+17043034112" className="btn btn-warning btn-md shadow">Call/Text Me</a>
      </div>
    </>
  )
}