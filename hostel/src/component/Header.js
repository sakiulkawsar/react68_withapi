import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header_area">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Logo */}
          {/* <NavLink className="navbar-brand logo_h" to="/"> */}
            {/* <img src="/image/Logo.png" alt="Logo" /> */}
          {/* </NavLink> */}
          {/* <h2> Royal Hostelar</h2> */}

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
        <div
  className="collapse navbar-collapse offset"
  id="navbarSupportedContent"
  style={{ textAlign: "center" }}
>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  <li className="nav-item">
                <NavLink className="nav-link" to="/">
                 <h2> Royal Hostelar</h2>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/accomodation">
                  Accomodation
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>

              {/* Dropdown */}
            <li className="nav-item submenu dropdown">
  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
  <ul className="dropdown-menu">
    <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
    <li className="nav-item"><a className="nav-link" href="/blog_single">Blog Details</a></li>
  </ul>
</li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/elements">
                  Elements
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
