import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelopeOpenText, faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const handleCloseAdminModal = () => {
  setShowAdminModal(false);
  setIdentifiant("");
  setMotDePasse("");
  setMotDePasseVisible(false);
};
  const [motDePasseVisible, setMotDePasseVisible] = useState(false);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifiant, motDePasse }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("adminToken", data.token);
          window.location.href = "/admin/dons";
        } else {
          alert("Identifiants incorrects");
        }
      })
      .catch((err) => console.error("Erreur de connexion admin", err));
  };

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
              <li><Link to="/don">Dons</Link></li>
              <li><Link to="/travaux">Sponsor - Partenaires</Link></li>
              <li><Link to="/travaux">Collecte de fonds - matériels</Link></li>
              <li><Link to="/travaux">Volontariat - Emploi</Link></li>
              <li><Link to="/mentions-legales">Mentions Légales</Link></li>
              <li><Link to="/lien-mort">lien mort ou problème sur le site ?</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-contact">
            <h3>Contacts</h3>

            <div className="footer-card">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="footer-icon" />
              <div className="footer-text">
                <strong>Association Mama-Esther</strong><br />
                1, Rue des Troènes<br />
                57700 HAYANGE St-NICOLAS EN FORÊT<br />
                🇫🇷 FRANCE
              </div>
            </div>

            <div className="footer-card">
              <FontAwesomeIcon icon={faMobileAlt} className="footer-icon" />
              <div className="footer-text">
                +33 6 86 74 29 11 - mobile de la Présidente<br />
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
            <img className="flag-icon" src="/assets/flags/FR.svg" alt="France" title="France" />
            <img className="flag-icon" src="/assets/flags/CM.svg" alt="Cameroun" title="Cameroun" />
            <img className="flag-icon" src="/assets/flags/RCA.svg" alt="Centrafrique" title="Centrafrique" />
            <img className="flag-icon" src="/assets/flags/LU.svg" alt="Luxembourg" title="Luxembourg" />
            <img className="flag-icon flag-blur" src="/assets/flags/BE.svg" alt="Belgique" title="Bientôt en Belgique" />
            <img className="flag-icon flag-blur" src="/assets/flags/DE.svg" alt="Allemagne" title="Bientôt en Allemagne" />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mama Esther. Tous droits réservés |
            Créé par FG Développement
            <a href="https://www.fgdeveloppement.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/logos/footer-logoFGDEV.png"
                alt="logo de la société FG Développement"
                title="Cliquez pour visiter le site"
              />
            </a>
          </p>
        </div>

        {/* Accès administrateur */}
        <div className="footer-admin">
          <button
            className="admin-access-button"
            onClick={() => setShowAdminModal(true)}
          >
            🔐 Réservé aux administrateurs
          </button>
        </div>

        {/* Modale d'authentification */}
        {showAdminModal && (
          <div className="admin-modal-overlay" onClick={handleCloseAdminModal}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <h2>Connexion administrateur</h2>
              <form onSubmit={handleAdminLogin}>
                <input
                  type="text"
                  placeholder="Identifiant"
                  value={identifiant}
                  onChange={(e) => setIdentifiant(e.target.value)}
                  required
                />

                <div className="password-field">
                  <input
                    type={motDePasseVisible ? "text" : "password"}
                    placeholder="Mot de passe"
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setMotDePasseVisible((prev) => !prev)}
                    aria-label="Afficher ou masquer le mot de passe"
                  >
                    <FontAwesomeIcon icon={motDePasseVisible ? faEyeSlash : faEye} />
                  </button>
                </div>

                <div className="admin-modal-buttons">
                  <button type="submit">Se connecter</button>
                  <button type="button" onClick={handleCloseAdminModal}>Annuler</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;