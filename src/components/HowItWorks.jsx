// -----------------------------
// src/components/HowItWorks.jsx
// -----------------------------
import React from 'react';

export default function HowItWorks(){
  return (
    <section id="how" className="py-5 bg-dark text-white">
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">How It Works</h2>
        <p className="mb-5 small text-light">
          Getting help with your taxes is simple. You reach out, I guide you.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-start gap-4">
          
          {/* Step 1 */}
          <div className="p-4 bg-secondary rounded shadow text-center" style={{flex: '1'}}>
            <div className="display-5 fw-bold mb-2">📞</div>
            <h5 className="fw-bold">Reach Out</h5>
            <p className="small text-light">
              Call and I'll answer questions and schedule your appointment.
            </p>
            <div className="mt-2 d-flex justify-content-center gap-2">
              <a href="tel:+17043034112" className="btn btn-warning text-dark">Call Now</a>
              <a href="https://wa.me/17043034112" target="_blank" rel="noopener noreferrer" className="btn btn-warning text-dark">WhatsApp</a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-secondary rounded shadow text-center" style={{flex: '1'}}>
            <div className="display-5 fw-bold mb-2">📝</div>
            <h5 className="fw-bold">I Guide You</h5>
            <p className="small text-light">
              I explain what documents are needed and help you prepare them.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 bg-secondary rounded shadow text-center" style={{flex: '1'}}>
            <div className="display-5 fw-bold mb-2">✅</div>
            <h5 className="fw-bold">Relax</h5>
            <p className="small text-light">
              I file your taxes accurately and efficiently. You get peace of mind and your refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}