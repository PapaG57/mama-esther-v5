import React, { useEffect, useState } from "react";
import "./DonationCounter.css";
import logoMama from "/assets/logos/logoMama.png";

const DonationCounter = () => {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/donations/count") // ✅ URL backend
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Données reçues du backend :", data);
        setTotal(data.total);
      })

      .catch((err) => console.error("Erreur chargement compteur", err));
  }, []);

  return (
    <section className="donation-counter">
      <div className="counter-content">
        <img src={logoMama} alt="Logo Mama Esther" className="logo" />
        <h2 className="counter-title">
          <span
            className={`counter-number ${
              typeof total === "number" && total === 0 ? "zero" : "positive"
            }`}
          >
            {Number.isFinite(total) ? total.toLocaleString() : "0"}
          </span>{" "}
          € de dons reçus 🙏
        </h2>
        <p className="counter-text">Merci pour votre générosité 💚</p>
      </div>
    </section>
  );
};

export default DonationCounter;
