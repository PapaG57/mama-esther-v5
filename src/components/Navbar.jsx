// src/components/Navbar.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useScrollNavbar from "../utils/navbar";
import "../styles/navbar.css";

export default function Navbar() {
  const navbarRef = useRef(null);
  useScrollNavbar(navbarRef);

  // smooth scroll intégré directement
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="custom-navbar" ref={navbarRef}>
      <div className="custom-navbar-container">
        {/* Logo (scroll vers #header) */}
        <img
          className="custom-navbar-logo"
          src="/assets/logo-long.png"
          alt="Logo Association"
        />

        {/* Liens de navigation */}
        <ul className="custom-nav-list">
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
            <a
              className="custom-nav-link"
              href="#contact"
              onClick={(e) => scrollToSection(e, "#about")}
            >
              contact
            </a>
          </li>
        </ul>

        {/* Bouton Don (scroll vers #donate) */}
        <button
          className="don-button"
          onClick={(e) => scrollToSection(e, "#donate")}
        >
          Faire un Don
        </button>
      </div>
    </nav>
  );
}
