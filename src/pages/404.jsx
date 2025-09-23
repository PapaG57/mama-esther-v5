import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import CamerounButton from "../components/CamerounButton";
import "../styles/404.css";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <main className="page404">
      <section className="page404-hero">
        <img
          src="/assets/404-illustration.png"
          alt="Illustration Mama Esther"
          className="page404-banner"
        />
        <h1 className="page404-title">404 - Page introuvable</h1>
        <p className="page404-subtitle">
          Même quand on se perd, on peut toujours revenir là où l’amour nous
          attend 💛
        </p>
        <div className="page404-button-group">
          <CamerounButton onClick={() => navigate(-1)} className="about-button">
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ marginRight: "8px" }}
            />
            Retour
          </CamerounButton>

          <CamerounButton to="/contact#contact-form" className="about-button">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            Contactez-nous
          </CamerounButton>
        </div>
      </section>
    </main>
  );
}
