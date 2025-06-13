import React from "react";
import "../styles/about.css";
import Divider from "../components/Divider";

function About() {
  return (
    <section id="about" className="about-container">
      <Divider /> {/* ligne de séparation */}
      {/* Bloc principal */}
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title green-box">Qui sommes-nous ?</h2>
          <div className="title-divider green-box"></div>
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

          {/* Lien vers la page de présentation */}
          <a href="/notre-histoire" className="about-button">
            En savoir plus
          </a>
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

export default About;
