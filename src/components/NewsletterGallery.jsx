import React from "react";
import { newsletters } from "../data/newsletters";
import "./NewsletterGallery.css";

function NewsletterGallery() {
  return (
    <section className="newsletter-gallery">
      <h2>📰 Nos newsletters</h2>
      <p>Retrouvez les publications de l'association Mama Esther :</p>
      <ul className="newsletter-list">
        {newsletters.map((nl) => (
          <li key={nl.id} className="newsletter-item">
            <h3>{nl.title}</h3>
            <div className="newsletter-links">
              <a href={nl.htmlPath} target="_blank" rel="noopener noreferrer">
                🌐 Version web
              </a>
              <a href={nl.pdfPath} target="_blank" rel="noopener noreferrer">
                📄 Télécharger PDF
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewsletterGallery;
