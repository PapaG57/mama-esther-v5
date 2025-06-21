import React from "react";
import "../styles/about-section.css";
import CamerounButton from "./CamerounButton";
import Divider from "./Divider";

export default function AboutSection() {
  return (
    <section id="aboutSection" className="about-container">
      <Divider /> {/* ligne de séparation */}
      <h2 className="about-title green-box">Qui sommes-nous ?</h2>
      {/* Bloc principal */}
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            L’Association Mama Esther œuvre pour le bien-être des orphelins et
            des personnes en difficulté. Notre mission est de venir en aide aux
            plus vulnérables : enfants sans soutien, personnes âgées isolées,
            individus en situation de handicap, familles démunies.
          </p>

          <p className="about-description">
            Grâce à l’engagement de nos membres et bénévoles, nous mettons en
            place des actions solidaires, des accompagnements personnalisés et
            des projets de soutien humain et matériel. Ensemble, nous
            travaillons pour un monde plus juste et bienveillant.
          </p>
          <br />
          <br />

          {/* Lien vers la page de présentation */}
          <CamerounButton to="/about">En savoir plus</CamerounButton>
        </div>
        <div className="about-image">
          <img
            src="/assets/Solidarity-and-unity.png"
            alt="Solidarité et engagement"
          />
        </div>
      </div>
    </section>
  );
}
