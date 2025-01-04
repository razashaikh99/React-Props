import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">MyWebsite</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
