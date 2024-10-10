import React from 'react';
import './Navbar.css';
import { Link } from  'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mx-5 navbar-dark bg-dark">
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
              <Link to="/" className="nav-link active mx-lg-2" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link mx-lg-2" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" className="nav-link mx-lg-2" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link mx-lg-2" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a href="#" className='login-button'>Login</a>
      </div>
    </nav>
  );
}  
