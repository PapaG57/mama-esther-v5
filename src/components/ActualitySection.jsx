import React, { useState } from "react";
import "../styles/actualitySection.css";
import Divider from "./Divider";
import CamerounButton from "./CamerounButton";

const newsData = [
  {
    id: 1,
    title: "Lassociation est née !",
    img: "../assets/actualities/actuality1.png",
    link: "/actualite/1",
  },
  {
    id: 2,
    title: "Le terrain est acquis !",
    img: "../assets/actualities/actuality2.png",
    link: "/actualite/2",
  },
  {
    id: 3,
    title: "Les newsletter sont ici !",
    img: "../assets/actualities/pdf.png",
    link: "/actualite/3",
  },
];

function ActualitySection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="actualitySection" className="news-carousel acutality-section">
      <Divider /> {/* ligne de séparation */}
      <h2>📰 Nos dernières actualités</h2>
      <p>
        🌍 Découvrez les événements et projets qui font avancer notre mission !
      </p>
      <div
        className={`news-carousel-track ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...newsData, ...newsData].map((news, index) => (
          <a key={index} href={news.link} className="news-item">
            <div className="news-visual">
              <img src={news.img} alt={news.title} />
            </div>
            <h3 className="news-title">{news.title}</h3>
          </a>
        ))}
      </div>
      <div className="btn-wrapper">
        <div className="actuality-button-wrapper">
          <CamerounButton to="/actualites">
            Voir toutes les actualités
          </CamerounButton>
        </div>
      </div>
      <Divider /> {/* ligne de séparation */}
    </section>
  );
}

export default ActualitySection;
