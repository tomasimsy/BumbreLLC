// -----------------------------
// src/components/Services.jsx
// -----------------------------
import React from 'react';

function ServiceCard({title, children, icon}){
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body text-center">
          <div className="icon mb-3">{icon}</div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services(){
  return (
<section id="services" className="py-5" style={{backgroundColor: '#fff8e1'}}>
  <div className="container py-5">
    <h2 className="fw-bold text-center mb-4 text-dark">Services</h2>
    <p className="text-center text-dark mb-5">
      Personal and business tax services tailored to your needs. I guide you through each step to save time, reduce stress, and maximize your refunds.
    </p>
    
    <div className="row g-4">
      <ServiceCard title="Individual Tax Filing" icon={<span className="fs-3">👤</span>}>
        Fast personal tax returns including W-2s, 1099s, credits, and deductions. I make sure you get every dollar you deserve.
      </ServiceCard>

      <ServiceCard title="Business Tax" icon={<span className="fs-3">🏢</span>}>
        Tax preparation for small businesses, contractors, and LLCs.  
      </ServiceCard>

      <ServiceCard title="Business Setup & Support" icon={<span className="fs-3">📈</span>}>
        Helping you start your business, apply for licenses, set up bookkeeping, and even build a website. I guide new entrepreneurs every step of the way.
      </ServiceCard>
    </div>
  </div>
</section>
  )
}