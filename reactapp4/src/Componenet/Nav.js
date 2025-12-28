import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
       <div className="container-fluid sticky-top bg-white shadow-sm">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        < Link  to="/" className="navbar-brand">
          <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Medinova</h1>
        </Link >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink   to="/" className={({ isActive }) => isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink >
            < NavLink  to="/about" className={({ isActive }) => isActive ? "active nav-item nav-link" : "nav-item nav-link"}>About</NavLink >
            <NavLink NavLink  to="/service" className={({ isActive }) => isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Service</NavLink >
            < NavLink  to="/pricing" className={({ isActive }) => isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Pricing</NavLink >
            < NavLink  to="/Blog" className={({ isActive }) => isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Blog</NavLink >
            {/* < NavLink  to="/BlogEntry1" className={({ isActive }) => isActive ? "active nav-item nav-link" : "nav-item nav-link"}>BlogEntry</NavLink > */}
            <div className="nav-item dropdown">
              < Link  to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link >
              <div className="dropdown-menu m-0">
                < Link  to="blog.html" className="dropdown-item">Blog Grid</Link >
                < Link  to="detail.html" className="dropdown-item">Blog Detail</Link >
              
              </div>
              
            </div>


        


            < Link  to="/contact" className="nav-item nav-link">Contact</Link >
          </div>
        </div>
      </nav>
    </div>
  </div>
    </div>
  )
}

export default Nav
