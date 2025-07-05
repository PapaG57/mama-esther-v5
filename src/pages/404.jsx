import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CamerounButton from "../components/CamerounButton";
import "../styles/page404.css";

export default function Page404() {
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
          <CamerounButton to="/" className="about-button">
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: "8px" }} />
            Accueil
          </CamerounButton>

          <CamerounButton to="/contact" className="about-button">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            Contactez-nous
          </CamerounButton>
        </div>
      </section>
    </main>
  );
}
