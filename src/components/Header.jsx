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
              src="/assets/flags/GB.svg"
              alt="Drapeau anglais"
              title="English version"
              className="flag-icon"
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
                <a href="/">accueil</a>
              </li>
              <li>
                <a href="/pages">pages</a>
              </li>
              <li>
                <a href="/à propos">à propos</a>
              </li>
              <li>
                <a href="/contact">contact</a>
              </li>
            </ul>
          </div>
          <button className="don-button">Faire un Don</button>{" "}
          {/* bouton don */}
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

      {/* Le header principal (Le contenu sous la navbar) */}
      <header className="header">
        <div className="header-overlay"></div> {/* Overlay en fond */}
        {/* Conteneur principal divisé en deux colonnes */}
        <div className="header-content">
          {/* Bloc texte à gauche */}
          <div className="header-text-block">
            <h2 className="header-subtitle">
              Soyez les bienvenus à notre association
            </h2>
            <h1 className="header-title">
              Aidez-nous à donner une chance aux orphelins
            </h1>
            <p className="header-text">
              Nous avons beaucoup de projets pour l'avenir des enfants et des
              personnes en difficulté. Soutenez-nous dès maintenant pour aider à
              les réaliser.
            </p>
          </div>

          {/* Bible-card à droite */}
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
