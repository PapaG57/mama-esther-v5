import React, { useState, useRef } from "react";
import { newsletters } from "../data/newsletters";
import VerifiedLink from "./VerifiedLink"; // Bouton lien intelligent
import "./NewsletterCarousel.css";

// Extrait tous les tags uniques présents dans les newsletters
const allTags = [...new Set(newsletters.flatMap((nl) => nl.tags))];

// Composant principal du carrousel
function NewsletterCarousel() {
  const [selectedTag, setSelectedTag] = useState("all"); // Tag sélectionné
  const carouselRef = useRef(null); // Référence du carrousel

  // Filtrage des newsletters selon le tag sélectionné
  const filteredNewsletters =
    selectedTag === "all"
      ? newsletters
      : newsletters.filter((nl) => nl.tags.includes(selectedTag));

  // Scroll vers la gauche
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll vers la droite
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="carousel-container">
      {/* Filtres par tags */}
      <div className="tag-filter">
        <button
          onClick={() => setSelectedTag("all")}
          className={selectedTag === "all" ? "active" : ""}
        >
          Tous
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "active" : ""}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Carrousel horizontal avec flèches */}
      <div className="carousel-wrapper">
        <button className="arrow-news arrow-left" onClick={scrollLeft}>
          ⬅️
        </button>

        <div className="carousel-track-news" ref={carouselRef}>
          {filteredNewsletters.map((nl) => (
            <div className="card-news" key={nl.id}>
              <img src={nl.coverImage} alt={`Couverture ${nl.title}`} />
              <div className="card-content-news">
                <h3>{nl.title}</h3>
                <p>{nl.summary}</p>

                <div className="spacer"></div>

                <div className="card-footer-news">
                  <div className="links-footer">
                    {/* 🌐 Lien vérifié vers la version en ligne */}
                    <VerifiedLink href={nl.htmlPath}>
                      🌐 Voir en ligne
                    </VerifiedLink>{" "}
                    • {/* 📄 Lien vers le PDF */}
                    <a href={nl.pdfPath} target="_blank" rel="noreferrer">
                      📄 voir en PDF
                    </a>
                  </div>

                  {/* Tags associés */}
                  <div className="tags-footer">
                    {nl.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-news arrow-right" onClick={scrollRight}>
          ➡️
        </button>
      </div>
    </section>
  );
}

export default NewsletterCarousel;
