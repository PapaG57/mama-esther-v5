import React from "react";
import "../styles/header.css";
import BibleVerse from "../components/BibleVerse";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-main">
          <div className="header-overlay"></div>

          <div className="header-container">
            <div className="header-text-block">
              <h2 className="header-subtitle">
                Soyez les bienvenus dans notre association
              </h2>

              <h1 className="header-title">
                Aidez-nous à donner une chance aux orphelins
              </h1>

              <p className="header-text">
                Nous avons beaucoup de projets pour l’avenir des enfants et des
                personnes en difficulté.
              </p>
            </div>

            <div className="bible-card">
              <BibleVerse
                text="... Je vous le dis en vérité, toutes les fois que vous avez fait ces choses à l’un de ces plus petits de mes frères, c’est à moi que vous les avez faites."
                reference="Matthieu 25 v. 40 (Bible Segond 1910)"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
