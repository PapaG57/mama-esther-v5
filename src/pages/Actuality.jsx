import React, { useState } from "react";
import "../styles/actuality.css";

const newsData = [
  {
    id: 1,
    title: "Événement caritatif 2025",
    img: "https://i.pravatar.cc/150?img=1",
    link: "/actualite/1",
  },
  {
    id: 2,
    title: "Projet éducatif pour les enfants",
    img: "https://i.pravatar.cc/150?img=2",
    link: "/actualite/2",
  },
  {
    id: 3,
    title: "Campagne de dons alimentaires",
    img: "https://i.pravatar.cc/150?img=3",
    link: "/actualite/3",
  },
  {
    id: 4,
    title: "Journée mondiale de la solidarité",
    img: "https://i.pravatar.cc/150?img=4",
    link: "/actualite/4",
  },
  {
    id: 5,
    title: "Programme d’aide aux familles",
    img: "https://i.pravatar.cc/150?img=5",
    link: "/actualite/5",
  },
];

function Actuality() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="actuality" className="actuality-container">
      <h2>📰 Nos dernières actualités</h2>
      <p>
        🌍 Découvrez les événements et projets qui font avancer notre mission !
      </p>

      <div
        className={`actuality-carousel ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...newsData, ...newsData].map(
          (
            news,
            index // ✅ Duplication des éléments
          ) => (
            <a key={index} href={news.link} className="actuality-item">
              <img src={news.img} alt={news.title} />
              <h3>{news.title}</h3>
            </a>
          )
        )}
      </div>
    </section>
  );
}

export default Actuality;
