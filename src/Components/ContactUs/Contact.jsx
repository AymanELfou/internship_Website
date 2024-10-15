import React from 'react';

export default function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Contact form</h2>
                <p className="text-center small mb-4">Below is a map showing the location and a form for you to fill in your details</p>
                
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">First name/last name <span className="text-danger">*Required</span></label>
                      <input type="text" className="form-control bg-secondary text-white" id="name" required />
                    </div>
                    <div className="col-md-6 ">
                      <label htmlFor="email" className="form-label">Email address <span className="text-danger">*Required</span></label>
                      <input type="email" className="form-control bg-secondary text-white" id="email" required />
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone number</label>
                      <input type="tel" className="form-control bg-secondary text-white" id="phone" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label">Company name</label>
                      <input type="text" className="form-control bg-secondary text-white" id="company" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message/Note <span className="text-danger">*Required</span></label>
                    <textarea className="form-control bg-secondary text-white" id="message" rows="4" required></textarea>
                  </div>
                  
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
