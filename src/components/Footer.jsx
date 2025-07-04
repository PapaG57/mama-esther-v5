import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

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

          {/* Contacts */}
          <div className="footer-contact">
            <h3>Contacts</h3>
            <FontAwesomeIcon icon={faEnvelopeOpenText} title="Nous écrire" />
            <p title="Nous écrire">Association Mama-Esther</p>
            <p title="Nous écrire">1, Rue des Troènes</p>
            <p title="Nous écrire">57700 HAYANGE St-NICOLAS EN FORÊT</p>
            <p title="Nous écrire">FRANCE</p>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="phone-icon"
              title="Nous appeler"
            />
            <p className="phone-text">+33 6 86 74 29 11</p>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="phone-icon"
              title="Nous appeler"
            />
            <p className="phone-text">+33 6 45 65 65 17</p>
            <FontAwesomeIcon icon={faAt} />
            <p>
              {" "}
              <a
                href="mailto:association@mamaesther.org"
                title="Nous envoyer un email"
              >
                association@mamaesther.org
              </a>
            </p>
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
            Adapté par FG Développement
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
