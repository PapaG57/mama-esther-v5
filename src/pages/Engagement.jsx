import React from "react";
import "../styles/engagement.css";
import Divider from "../components/Divider";
import { useTranslation } from "react-i18next";

function Engagement() {
  const { t } = useTranslation();

  return (
    <section id="engagement" className="home-container">
      <Divider /> {/* ligne de séparation */}
      {/* Engagement Area Section */}
      <section id="EngagementSection" className="engagement-area">
        {/* Titre centré */}
        <div className="section-title">
          <h3>{t("engagement.title")}</h3>
        </div>

        {/* Liste des engagements */}
        <div className="engagement-list">
          {/* Engagement 1 */}
          <article className="engagement-item">
            <div className="thumbnail">
              <img
                src="/assets/comptabilite.png"
                alt="Pièces de monnaie empilées"
              />
            </div>
            <div className="desc">
              <h4>{t("engagement.transparency.title")}</h4>
              <p className="home-card-text">
                {t("engagement.transparency.text")}
              </p>
              <a href="/contact" className="home-link">
                {t("engagement.questions")}
              </a>
            </div>
          </article>

          {/* Engagement 2 */}
          <article className="engagement-item">
            <div className="thumbnail">
              <img
                src="/assets/soutien.png"
                alt="Portrait de cinq jeunes enfants Africains"
              />
            </div>
            <div className="desc">
              <h4>{t("engagement.support.title")}</h4>
              <p className="home-card-text">
                {t("engagement.support.text")}
              </p>
              <a href="/contact" className="home-link">
                {t("engagement.questions")}
              </a>
            </div>
          </article>

          {/* Engagement 3 */}
          <article className="engagement-item">
            <div className="thumbnail">
              <img
                src="/assets/volontariat.png"
                alt="Rassemblement de mains et de pieds en cercle"
              />
            </div>
            <div className="desc">
              <h4>{t("engagement.dedication.title")}</h4>
              <p className="home-card-text">
                {t("engagement.dedication.text")}
              </p>
              <a href="/contact" className="home-link">
                {t("engagement.questions")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Engagement;

export default Engagement;
