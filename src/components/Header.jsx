import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/header.css";
import useScrollNavbar from "../utils/navbar";

function Header() {
  // Créez un ref que nous passerons à useScrollNavbar
  const navbarRef = useRef(null);

  // Passez la référence au hook
  useScrollNavbar(navbarRef);

  return (
    <header id="header">
      <div className="header-wrapper">
        {/* Top-Bar */}
        <div className="top-bar py-2">
          <div className="top-bar-container">
            <div className="contact-info">
              <span>📞 +33 6 12 34 56 78</span>
              <span>✉️ contact@mamaesther.org</span>
            </div>
            <div className="social-icons">
              <img
                src="/assets/flags/GB.svg"
                alt="Drapeau anglais"
                title="English version"
                className="flag-icon me-2"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                className="social-icon me-2"
              />
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon me-2" />
              <FontAwesomeIcon icon={faLinkedin} className="social-icon me-2" />
              <FontAwesomeIcon
                icon={faInstagram}
                className="social-icon me-2"
              />
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </div>
          </div>
        </div>

        {/* Navbar – on ajoute le ref ici */}
        <nav className="custom-navbar" ref={navbarRef}>
          <div className="custom-navbar-container">
            {/* Logo à gauche */}
            <a className="custom-navbar-logo" href="/">
              <img src="/assets/logo-long.png" alt="Logo Association" />
            </a>
            {/* Bouton de menu pour mobile (si besoin) */}
            <button className="custom-navbar-toggle" type="button">
              <span className="custom-navbar-icon"></span>
            </button>
            {/* Liens de navigation */}
            <div className="custom-navbar-links">
              <ul className="custom-nav-list">
                <li className="custom-nav-item">
                  <a className="custom-nav-link" href="/">
                    Accueil
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a className="custom-nav-link" href="/pages">
                    Pages
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a className="custom-nav-link" href="/à-propos">
                    À propos
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a className="custom-nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Bouton "Don" */}
            <button className="don-button text-uppercase">Faire un Don</button>
            {/* Drapeaux à droite */}
            <div className="flag-icons">
              <img
                src="/assets/flags/CM.svg"
                alt="Drapeau Cameroun"
                className="flag-icon me-2"
                title="Cameroun"
              />
              <img
                src="/assets/flags/FR.svg"
                alt="Drapeau France"
                className="flag-icon me-2"
                title="France"
              />
              <img
                src="/assets/flags/LU.svg"
                alt="Drapeau Luxembourg"
                className="flag-icon me-2"
                title="Luxembourg"
              />
              <img
                src="/assets/flags/BE.svg"
                alt="Drapeau Belgique"
                className="flag-icon me-2"
                title="Belgique"
              />
              <img
                src="/assets/flags/DE.svg"
                alt="Drapeau Allemagne"
                className="flag-icon"
                title="Allemagne"
              />
            </div>
          </div>
        </nav>

        {/* Zone principale du header */}
        <div className="header-main position-relative">
          <div className="header-overlay"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 header-text-block">
                <h2 className="header-subtitle">
                  Soyez les bienvenus à notre association
                </h2>
                <h1 className="header-title">
                  Aidez-nous à donner une chance aux orphelins
                </h1>
                <p className="header-text">
                  Nous avons beaucoup de projets pour l’avenir des enfants et
                  des personnes en difficulté. Soutenez-nous dès maintenant pour
                  aider à les réaliser.
                </p>
              </div>
              <div className="col-md-5 bible-card">
                <p className="bible-verse">
                  "... Je vous le dis en vérité, toutes les fois que vous avez
                  fait ces choses à l’un de ces plus petits de mes frères, c’est
                  à moi que vous l’avez faites. Matthieu 25 v. 40 (Bible Segond
                  1910)."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
