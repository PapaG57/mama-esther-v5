import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-container">
      {/* Bloc principal */}
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">Qui sommes-nous ?</h2>
          <p className="about-description">
            L’Association Mama Esther œuvre pour le bien-être des orphelins et
            des personnes en difficulté. Nous mettons en place des projets
            solidaires et nous engageons à apporter un soutien humain et
            matériel aux plus vulnérables.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/about-image.jpg" alt="Solidarité et engagement" />
        </div>
      </div>
    </section>
  );
}

export default About;
