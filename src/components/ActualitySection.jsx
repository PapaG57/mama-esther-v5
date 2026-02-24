import React, { useState } from "react";
import "./actualitySection.css";
import Divider from "./Divider";
import CamerounButton from "./CamerounButton";
import { Link } from "react-router-dom"; // Pour gérer la navigation interne proprement

// 👇 Données des actualités
const newsData = [
  {
    id: 1,
    title: "Le terrain est acquis !",
    img: "/assets/actualities/actuality1.png",
    link: "/actualities#news2",
  },
  {
    id: 2,
    title: "L'association est née !",
    img: "/assets/actualities/actuality2.png",
    link: "/actualities#news1", // Redirection vers l’ancre id="news1"
  },
  {
    id: 3,
    title: "Les newsletters sont ici !",
    img: "/assets/actualities/pdf.png",
    link: "/actualities#pdf",
  },
];

function ActualitySection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="actualitySection" className="news-carousel actuality-section">
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
          <Link
            key={index}
            to={{
              pathname: news.link.split("#")[0], // "/actualities"
              hash: `#${news.link.split("#")[1]}`, // "#news1"
            }}
            state={{ from: "actualitySection" }} // on envoie l'info d’origine
            className="news-item"
          >
            <div className="news-visual">
              <img src={news.img} alt={news.title} />
            </div>
            <h3 className="news-title">{news.title}</h3>
          </Link>
        ))}
      </div>
      <div className="btn-wrapper">
        <div className="actuality-button-wrapper">
          <CamerounButton to="/actualities">
            Voir toutes les actualités
          </CamerounButton>
        </div>
      </div>
      <Divider /> {/* ligne de séparation */}
    </section>
  );
}

export default ActualitySection;
