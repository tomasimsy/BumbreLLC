// -----------------------------
// src/components/WhoIHelp.jsx
// -----------------------------
import React from 'react';

export default function WhoIHelp(){
  const clients = [

    'Nail Salon Owners',
    'Nail Technicians',
    'Truck Drivers',
    'Tree Services Businesses',
    'Uber Drivers',
    'Manufacturing Workers',
    // 'MTD Communities',
    'Churches',
  ];

  const services = [
    
    'Build Websites for Businesses',
    'Google Business',
    'Apply for a business license',
    'Business EIN application with IRS',
    'Business Registratin with IRS',
    'Business Secretary of State application',
    'Excel (Automation) if you already using Excel and want to save time, I can build an application to help speed up your work.'
    // 'Financial planning for small business',
    // 'Tax planning and strategy',
    // 'Guidance on side hustles and freelance work'
  ];

  return (
<section id="whoIHelp" className="pb-5" style={{backgroundColor: '#ffffffff'}}>
  <div className="container pb-5">
    {/* <h2 className="fw-bold text-center mb-4 text-dark">Who I Help</h2>
    <p className="text-center text-dark mb-5">I work with a variety of individuals and small businesses to help them succeed. Especially in the MTD Communities.</p> */}
    <div className="row g-4">
      <div className="col-md-6">
        <h5 className="fw-bold mb-3 text-dark">Clients & Communities</h5>
        <ul className="list-group list-group-flush">
          {clients.map((c,i) => <li className="list-group-item" key={i}>✔ {c}</li>)}
        </ul>
      </div>
      <div className="col-md-6">
        <h5 className="fw-bold mb-3 text-dark">Other Services I Provide</h5>
        <ul className="list-group list-group-flush">
          {services.map((s,i) => <li className="list-group-item" key={i}>✔ {s}</li>)}
        </ul>
      </div>                
    </div>
  </div>
</section>

  );
}
