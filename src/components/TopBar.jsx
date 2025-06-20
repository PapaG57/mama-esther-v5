import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/topbar.css";

export default function TopBar() {
  return (
    <div className="top-bar py-2">
      <div className="top-bar-container">
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhoneVolume} className="phone-icon" />
          <span className="phone-text">+33 6 86 74 29 11</span>
          <FontAwesomeIcon icon={faPhoneVolume} className="phone-icon" />
          <span className="phone-text">+33 6 45 65 65 17</span>
          <span>✉️ contact@mamaesther.org</span>
        </div>
        <div className="social-icons">
          <img
            src="/assets/flags/GB.svg"
            alt="Drapeau anglais"
            title="English version"
            className="flag-icon me-2"
          />
          <FontAwesomeIcon icon={faFacebookF} className="social-icon me-2" />
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon me-2" />
          <FontAwesomeIcon icon={faLinkedin} className="social-icon me-2" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon me-2" />
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </div>
      </div>
    </div>
  );
}
