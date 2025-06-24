import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Reader.css";

export default function Reader() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const htmlPath = `/assets/newsletter-pdf/clean/news${id}.html`;

    fetch(htmlPath)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de chargement");
        return res.text();
      })
      .then((html) => {
        setContent(html);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, [id]);

  if (error) {
    return <p style={{ textAlign: "center" }}>Newsletter introuvable 😢</p>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Lecture de la newsletter n°{id}
      </h1>
      {isLoading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          🌀 Chargement de la newsletter...
        </p>
      ) : (
        <section
          className="newsletter-container"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </main>
  );
}
