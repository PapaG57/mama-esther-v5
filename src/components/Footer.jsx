import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css"; // Assure-toi d'importer ton fichier CSS

function Footer() {
  return (
    <footer className="footer">
      {" "}
      {/* Utilisation de className au lieu de styles.footer */}
      <div className="footer-container">
        {/* Section Logo + Slogan */}
        <div className="footer-logo">
          <img
            src="/assets/footer_logoME.png"
            alt="Association Mama-Esther"
            className="logo"
          />
          <p className="slogan">
            L'amour d'une mère au service des enfants et de tous ceux qui sont
            dans le besoin.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </div>
        </div>

        {/* Section Services */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul className="footer-list">
            <li>
              <a href="#">Dons</a>
            </li>
            <li>
              <a href="#">Sponsor</a>
            </li>
            <li>
              <a href="#">Collecte de fonds</a>
            </li>
            <li>
              <a href="#">Volontariat</a>
            </li>
            <li>
              <a href="#">Emploi</a>
            </li>
            <li>
              <a href="#">Partenaires</a>
            </li>
            <li>
              <a href="#">Mentions Légales</a>
            </li>
          </ul>
        </div>

        {/* Section Contacts */}
        <div className="footer-contact">
          <h3>Contacts</h3>
          <p>Association Mama-Esther</p>
          <p>1, Rue des Troènes</p>
          <p>57700 HAYANGE St-NICOLAS EN FORÊT</p>
          <p>FRANCE</p>
          <p>📞 +33 6 86 74 29 11</p>
          <p>📞 +33 6 45 65 65 17</p>
          <p>
            ✉️{" "}
            <a href="mailto:association@mamaesther.org">
              association@mamaesther.org
            </a>
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mama Esther. Tous droits réservés |
          Adapté par FG Développement
          <a href="https://www.fgdeveloppement.com/" target="_blank">
            <img
              src="/assets/footer-logoFGDEV.png"
              alt="logo de la société FG Développement"
              title="Cliquez pour visiter le site"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
