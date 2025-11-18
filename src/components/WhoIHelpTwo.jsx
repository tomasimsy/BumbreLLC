// -----------------------------
// src/components/WhoIHelp2.jsx
// -----------------------------
import React from 'react';
import NailSalon from '../assets/nail-salon.png';
import Truck from '../assets/truck.png';
import NailTech from '../assets/nail-tech.png';
import MTD from '../assets/MTD.png';
import Roof from '../assets/roofing.png';
import Individual from '../assets/individual.png';

export default function WhoIHelpTwo(){
  const clients = [
    {name: '', photo: MTD},
    {name: '', photo: NailSalon},
    {name: '', photo: NailTech},
    {name: '', photo: Truck},
    {name: '', photo: Roof},
    {name: '', photo: Individual},
  ];

  return (
<section id="whoIHelpTwo" className="" style={{backgroundColor: '#ffffffff'}}>
  <div className="container py-5">
    <h2 className="fw-bold text-center mb-4">Who I Help</h2>
    <p className="text-center text-muted mb-5">I work with a variety of individuals to help them succeed in their businesses.</p>
    <div className="row g-4">
      {clients.map((c, i) => (
        <div className="col-md-4" key={i}>
          <div className="position-relative">
            <img 
              src={c.photo} 
              alt={c.name} 
              className="img-fluid rounded shadow" 
              style={{height:'250px', objectFit:'cover', width:'100%'}} 
            />

            {/* Semi-transparent yellow overlay */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 rounded"
              style={{backgroundColor: 'rgba(172, 172, 172, 0.14)'}}
            ></div>

            {/* Text */}
            <div 
              className="position-absolute top-50 start-50 translate-middle text-dark fw-bold fs-3 text-center"
              style={{textShadow: '2px 2px 4px rgba(255, 255, 255, 0.96)'}}
            >
              {c.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

