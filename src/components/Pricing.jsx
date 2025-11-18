// -----------------------------
// src/components/Pricing.jsx
// -----------------------------
import React from 'react';

export default function Pricing(){
  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Pricing</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title fw-bold">Starter</h5>
                <p className="display-6 text-dark fw-bold">$49</p>
                <p className="text-muted">Simple returns, W-2 only.</p>
                <a href="#contact" className="btn btn-outline-dark">Select</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-2 shadow-sm border-warning text-center">
              <div className="card-body">
                <h5 className="card-title fw-bold">Pro</h5>
                <p className="display-6 text-dark fw-bold">$129</p>
                <p className="text-muted">Includes 1099s, itemized deductions.</p>
                <a href="#contact" className="btn btn-warning text-dark">Select</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
