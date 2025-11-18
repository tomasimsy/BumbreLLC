// -----------------------------
// src/components/Contact.jsx
// -----------------------------
import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState(null);

  function update(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function submit(e){
    e.preventDefault();
    // simple client-side validation
    if(!form.name || !form.email){
      setStatus({type:'error', msg:'Please enter name and email.'});
      return;
    }
    // mock submit — replace with real API call later
    setStatus({type:'loading', msg:'Submitting...'});
    setTimeout(()=>{
      setStatus({type:'success', msg:'Thanks! We received your message.'});
      setForm({name:'', email:'', message:''});
    }, 1200);
  }

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Contact & Start Your Filing</h2>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <form onSubmit={submit} className="p-4 border rounded shadow-sm">
              {status?.msg && (
                <div className={`alert ${status.type==='error' ? 'alert-danger' : status.type==='success' ? 'alert-success' : 'alert-info'}`}>
                  {status.msg}
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input name="name" value={form.name} onChange={update} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="email" value={form.email} onChange={update} type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={update} className="form-control" rows="4"></textarea>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">We will contact you within 1 business day.</small>
                <button className="btn btn-warning text-dark">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}