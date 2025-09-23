import React from "react";
import "../styles/newsList.css"; // crée ce fichier si tu veux ajouter du style

export default function NewsList({ data }) {
  if (!data || data.length === 0) {
    return <p>Aucune newsletter disponible pour le moment.</p>;
  }

  return (
    <ul className="newsletter-list">
      {data.map((n) => (
        <li key={n.id} className="newsletter-line">
          <a
            href={n.htmlPath}
            target="_blank"
            rel="noopener noreferrer"
            className="newsletter-link"
          >
            {n.title}
          </a>
          <a
            href={n.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            title={`Ouvrir le PDF de ${n.title}`}
            className="pdf-icon-link"
          >
            <i className="fa-solid fa-file-pdf fa-2x pdf-icon-awesome" />
            <span className="visually-hidden">Télécharger le PDF</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
