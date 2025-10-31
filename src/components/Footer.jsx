import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Logo & Slogan */}
          <div className="footer-logo">
            <img
              src="/assets/logos/footer_logoME.png"
              alt="Association Mama-Esther"
              className="logo"
            />
            <p className="slogan">
              "L'amour d'une mère au service des enfants et de tous ceux qui ont
              besoin d'aide et d'assistance."
            </p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </div>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h3>Services</h3>
            <ul className="footer-list">
              <li>
                <Link to="/don">Dons</Link>
              </li>
              <li>
                <Link to="/travaux">Sponsor</Link>
              </li>
              <li>
                <Link to="/travaux">Collecte de fonds</Link>
              </li>
              <li>
                <Link to="/travaux">Volontariat</Link>
              </li>
              <li>
                <Link to="/travaux">Emploi</Link>
              </li>
              <li>
                <Link to="/travaux">Partenaires</Link>
              </li>
              <li>
                <Link to="/mentions-legales">Mentions Légales</Link>
              </li>
              <li>
                <Link to="/lien-mort">lien mort ou problème sur le site ?</Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-contact">
            <h3>Contacts</h3>

            <div className="footer-card">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="footer-icon"
              />
              <div className="footer-text">
                <strong>Association Mama-Esther</strong>
                <br />
                1, Rue des Troènes
                <br />
                57700 HAYANGE St-NICOLAS EN FORÊT
                <br />
                🇫🇷 FRANCE
              </div>
            </div>

            <div className="footer-card">
              <FontAwesomeIcon icon={faMobileAlt} className="footer-icon" />
              <div className="footer-text">
                +33 6 86 74 29 11 - mobile de la Présidente
                <br />
                +33 6 45 65 65 17 - mobile du vice-président
              </div>
            </div>

            <div className="footer-card">
              <FontAwesomeIcon icon={faAt} className="footer-icon" />
              <div className="footer-text">
                <Link to="/contact#contact-form" className="footer-link">
                  👉 Cliquez ici pour nous écrire
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Flags */}
        <div className="flag-container">
          <p>Nous agissons dans ces pays :</p>
          <div className="flag-icons">
            <img
              className="flag-icon"
              src="/assets/flags/FR.svg"
              alt="Drapeau de la France"
              title="France"
            />
            <img
              className="flag-icon"
              src="/assets/flags/CM.svg"
              alt="Drapeau du Cameroun"
              title="Cameroun"
            />
            <img
              className="flag-icon"
              src="/assets/flags/RCA.svg"
              alt="Drapeau de la République Centrafricaine"
              title="Centrafrique"
            />
            <img
              className="flag-icon"
              src="/assets/flags/LU.svg"
              alt="Drapeau du Luxembourg"
              title="Luxembourg"
            />
            <img
              className="flag-icon flag-blur"
              src="/assets/flags/BE.svg"
              alt="Drapeau de la Belgique"
              title="Bientôt en Belgique"
            />
            <img
              className="flag-icon flag-blur"
              src="/assets/flags/DE.svg"
              alt="Drapeau de l'Allemagne"
              title="Bientôt en Allemagne"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mama Esther. Tous droits réservés |
            Créé par FG Développement
            <a
              href="https://www.fgdeveloppement.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/logos/footer-logoFGDEV.png"
                alt="logo de la société FG Développement"
                title="Cliquez pour visiter le site"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
