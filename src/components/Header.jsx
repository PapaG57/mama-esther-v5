import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/header.css";

function Header() {
  return (
    <div>
      {/* Barre supérieure (Top-bar indépendante) */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <span>📞 +33 6 12 34 56 78</span>
            <span>✉️ contact@mamaesther.org</span>
          </div>
          <div className="social-icons">
            <img
              src="/assets/uk-flag.png"
              alt="Version anglaise"
              className="lang-icon"
            />
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </div>
        </div>
      </div>

      {/* Carte de navigation (Nav-bar indépendante) */}
      <nav className="navbar">
        <div className="navbar-card">
          <div className="navbar-container">
            <img src="/assets/logo-long.png" alt="Logo Association" />
            <ul className="nav-list">
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flag-icons">
            <img
              src="/assets/flags/CM.svg"
              alt="Drapeau Cameroun"
              className="flag-icon"
            />
            <img
              src="/assets/flags/FR.svg"
              alt="Drapeau France"
              className="flag-icon"
            />
            <img
              src="/assets/flags/LU.svg"
              alt="Drapeau Luxembourg"
              className="flag-icon"
            />
            <img
              src="/assets/flags/BE.svg"
              alt="Drapeau Belgique"
              className="flag-icon"
            />
            <img
              src="/assets/flags/DE.svg"
              alt="Drapeau Allemagne"
              className="flag-icon"
            />
          </div>
        </div>
      </nav>

      {/* Le header proncipal (Le contenu sous la navbar) */}
      <header className="header">
        <div className="header-overlay">
          <h2 className="header-subtitle">Commencez dès aujourd'hui</h2>
          <h1 className="header-title">
            Aidez-nous à donner une chance aux orphelins
          </h1>
          <p className="header-text">
            Nous avons beaucoup de projets pour l'avenir des enfants et des
            personnes en difficulté. Soutenez-nous pour aider à les réaliser.
          </p>
          <div className="bible-card">
            <p className="bible-verse">
              "... Je vous le dis en vérité, toutes les fois que vous avez fait
              ces choses à l’un de ces plus petits de mes frères, c’est à moi
              que vous l’avez faites. Matthieu 25 v. 40 (Bible Segond 1910)."
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
