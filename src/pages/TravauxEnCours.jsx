import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CamerounButton from "../components/CamerounButton";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/travaux.css";

export default function TravauxEnCours() {
  const navigate = useNavigate();
  return (
    <main className="travaux">
      <section className="travaux-hero">
        <img
          src="/assets/travaux-mama.png"
          alt="Mama Esther en chantier"
          className="travaux-banner"
        />
        <h1 className="travaux-title">Page en construction</h1>
        <p className="travaux-subtitle">
          La Présidente veille sur chaque pierre qu’on pose — même les pages pas
          encore finies 💚
        </p>
        <div className="travaux-button-group">
          <CamerounButton onClick={() => navigate(-1)} className="about-button">
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ marginRight: "8px" }}
            />
            Retour
          </CamerounButton>

          <CamerounButton to="/contact#contact-form" className="about-button">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            Nous écrire
          </CamerounButton>
        </div>
      </section>
    </main>
  );
}
