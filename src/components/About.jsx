// -----------------------------
// src/components/AboutMe.jsx
// -----------------------------
import React from 'react';
import myPhoto from '../assets/tom.jpg'; // Replace with your actual photo path

export default function About(){
  return (
    <section id="aboutme" className="py-5 " style={{backgroundColor: '#fff8e1'}}>
      <div className="container py-5 my-4">
        <h2 className="fw-bold text-center mb-4">About Me</h2>
        <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="text-center mb-4 mb-md-0" style={{flex: '0 0 33%'}}>
            <img src={myPhoto} alt="About Me" className="img-fluid rounded-circle shadow-sm" />
        </div>
        <div className="px-4 " style={{flex: '1'}}>
            {/* <h1>About Me</h1> */}
<p className="lead text-dark">
  Hi! I’m <strong>Tom</strong>, a Montagnard with a Bachelor’s degree in Computer Science from UNCC. After graduation, instead of following a traditional tech career, I chose the path of entrepreneurship. I opened a small nail salon and quickly realized how many people in our community struggle with taxes and business paperwor. Often relying on others who may not fully understand their unique needs. Witnessing this gap inspired me to step in and help, using my skills to make tax filing approachable.
</p>

<p className="text-muted">
  Running my own business gave me firsthand experience with the challenges that come with managing finances, taxes, and documentation. It was in navigating these hurdles that I discovered a passion for helping others. Whether it was guiding fellow business owners through paperwork, building websites to streamline their operations, or teaching practical tech skills that make daily work easier. Each business I helped reminded me how much of a difference clear guidance and support can make.
</p>

<p className="text-muted">
  To provide the highest level of support, I earned my tax certification from Jackson Hewitt and spent two years preparing taxes for clients, gaining deep insight into individual and small business tax needs. This combination of technical knowledge, business experience, and real world understanding of community challenges allows me to approach each client with empathy and expertise.
</p>

<p className="fw-bold text-dark">
  Today, I bring together my background in technology, entrepreneurship, and tax preparation experience to guide clients every step of the way. My goal is to empower you to focus on growing your business while I handle the details with care and precision.
</p>
        </div>
        </div>
      </div>
    </section>
  );
}
