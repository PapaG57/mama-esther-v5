import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CamerounButton from "../components/CamerounButton";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/travaux.css";
import { useTranslation } from "react-i18next";

export default function TravauxEnCours() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <main className="travaux">
      <section className="travaux-hero">
        <img
          src="/assets/travaux-mama.png"
          alt="Mama Esther en chantier"
          className="travaux-banner"
        />
        <h1 className="travaux-title">{t("construction.title")}</h1>
        <p className="travaux-subtitle">
          {t("construction.subtitle")}
        </p>
        <div className="travaux-button-group">
          <CamerounButton onClick={() => navigate(-1)} className="about-button">
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ marginRight: "8px" }}
            />
            {t("construction.back")}
          </CamerounButton>

          <CamerounButton to="/contact#contact-form" className="about-button">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            {t("construction.writeUs")}
          </CamerounButton>
        </div>
      </section>
    </main>
  );
}
