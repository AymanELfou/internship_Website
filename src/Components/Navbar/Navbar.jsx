import React from 'react';
import './Navbar.css';
import { Link } from  'react-router-dom';

export default function Navbar() {
  return (
    <div className="mx-4">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid mx-3">
        <a className="navbar-brand me-auto" href="#">Brand</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3" style={{ height: '50px', alignItems: 'center' }}>
            <li className="nav-item">
              <Link to="/" className="nav-link active mx-lg-2" aria-current="page" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white mx-lg-2" >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-white mx-lg-2" >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white mx-lg-2" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a href="#" className='login-button'>Login</a>
      </div>
    </nav>
    </div>
  );
}  
