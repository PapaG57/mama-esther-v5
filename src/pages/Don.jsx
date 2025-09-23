// Don.jsx — page de dons Mama Esther
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import CamerounButton from "../components/CamerounButton";
import "../styles/don.css";

export default function Don() {
  const navigate = useNavigate();
  return (
    <section className="don-section">
      <div className="don-container">
        {/* Bannière visuelle */}
        <img
          src="/assets/don/banniere.png"
          alt="Bannière Mama Esther"
          className="don-banner"
        />

        {/* Formulaire HelloAsso */}
        <iframe
          src="https://www.helloasso.com/associations/association-mama-esther/formulaires/1/widget"
          frameBorder="0"
          className="don-widget"
          title="Formulaire de don"
        ></iframe>

        {/* Bloc émotionnel */}
        <div className="don-emotion">
          <blockquote>
            “C’est dans les petites attentions que nous bâtissons les plus
            grands espoirs.”
          </blockquote>
          <img
            src="/assets/don/logoMama.png"
            alt="Logo Mama Esther"
            className="don-logo"
          />
        </div>
      </div>

      <div className="floating-contact fixed-bottom-right">
        <CamerounButton onClick={() => navigate("/")} className="about-button">
          <FontAwesomeIcon
            icon={faHandPointLeft}
            style={{ marginRight: "8px" }}
          />
          Retour
        </CamerounButton>
      </div>
    </section>
  );
}
