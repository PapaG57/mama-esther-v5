// src/components/Navbar.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollNavbar from "../utils/navbar";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollNavbar(navbarRef);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // ferme le menu après clic
    }
  };

  return (
    <nav className="custom-navbar" ref={navbarRef}>
      <div className="custom-navbar-container">

        {/* Logo */}
        <img
          className="custom-navbar-logo"
          src="/assets/logos/logo-long.png"
          alt="Logo Association"
        />

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Liens */}
        <ul className={`custom-nav-list ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              className="custom-nav-link"
              href="#root"
              onClick={(e) => scrollToSection(e, "#root")}
            >
              accueil
            </a>
          </li>
          <li>
            <a
              className="custom-nav-link"
              href="#aboutSection"
              onClick={(e) => scrollToSection(e, "#aboutSection")}
            >
              à propos
            </a>
          </li>
          <li>
            <a
              className="custom-nav-link"
              href="#engagement"
              onClick={(e) => scrollToSection(e, "#engagement")}
            >
              engagement
            </a>
          </li>
          <li>
            <a
              className="custom-nav-link"
              href="#actualitySection"
              onClick={(e) => scrollToSection(e, "#actualitySection")}
            >
              actualités
            </a>
          </li>
          <li>
            <Link className="custom-nav-link" to="/contact" onClick={() => setMenuOpen(false)}>
              contact
            </Link>
          </li>

          {/* Bouton Don dans le menu mobile */}
          <li className="mobile-don">
            <button className="don-button" onClick={() => { setMenuOpen(false); navigate("/don"); }}>
              Faire un Don
            </button>
          </li>
        </ul>

        {/* Bouton Don desktop */}
        <button className="don-button desktop-don" onClick={() => navigate("/don")}>
          Faire un Don
        </button>
      </div>
    </nav>
  );
}