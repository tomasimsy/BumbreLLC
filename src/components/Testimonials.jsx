// -----------------------------
// src/components/Testimonials.jsx
// -----------------------------
import React from 'react';

const tests = [
    {name: 'Alicia M.', text: 'Saved me so much time — highly recommend!', role: 'Freelancer'},
  {name: 'Brian L.', text: 'Professional and affordable. Great service.', role: 'Small Business Owner'},
  {name: 'Carmen S.', text: 'Very patient and helpful with all my questions.', role: 'Nail Salon Owner'},
  {name: 'David R.', text: 'Made filing taxes easy and stress-free.', role: 'Truck Driver'},
  {name: 'Elena K.', text: 'Excellent guidance on starting my business.', role: 'Entrepreneur'},
  {name: 'Frank T.', text: 'Quick, reliable, and thorough tax preparation.', role: 'Tree Service Owner'},
  {name: 'Gabriela P.', text: 'I love how clear and simple everything was explained.', role: 'Freelancer'},
  {name: 'Hector M.', text: 'Saved me money and time. Highly professional!', role: 'Uber Driver'},
  {name: 'Isabel N.', text: 'Really cares about clients and makes the process easy.', role: 'Small Business Owner'},
  {name: 'Jason W.', text: 'Friendly, knowledgeable, and very approachable.', role: 'Manufacturing Worker'},
  {name: 'Kelly B.', text: 'Helped me get all my paperwork organized perfectly.', role: 'Nail Technician'},
  {name: 'Liam O.', text: 'I trust them completely with my business taxes.', role: 'Entrepreneur'}
];

export default function Testimonials(){
  return (
        <section className="py-5 bg-light" id='Testimonials'>
        <div className="container py-5 my-5">
            <h2 className="fw-bold text-center mb-4">What Clients Say</h2>

            <div
            className="d-flex flex-row gap-3 overflow-auto"
            style={{ paddingBottom: "1rem" }}
            >
            {tests.map((t, i) => (
                <div
                key={i}
                className="flex-shrink-0 p-4 border rounded shadow-sm"
                style={{ minWidth: "300px" }}
                >
                <p className="mb-2">"{t.text}"</p>
                <p className="mb-0 fw-bold">{t.name}</p>
                <p className="small text-muted">{t.role}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
  )
}
