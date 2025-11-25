import React, { useState, useEffect } from "react";
import "./AdminDons.css";

const AdminDons = () => {
  const [nomDonateur, setNomDonateur] = useState("");
  const [montant, setMontant] = useState("");
  const [message, setMessage] = useState("");
  const [campagne, setCampagne] = useState("");
  const [donsManuels, setDonsManuels] = useState([]);

  // Récupération des dons manuels existants
  useEffect(() => {
    fetch("http://localhost:5000/api/donations/manual")
      .then((res) => res.json())
      .then((data) => setDonsManuels(data.dons))
      .catch((err) => console.error("Erreur chargement dons manuels", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauDon = { nomDonateur, montant, message, campagne };

    fetch("http://localhost:5000/api/donations/manual", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nouveauDon),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Don manuel ajouté !");
        setNomDonateur("");
        setMontant("");
        setMessage("");
        setCampagne("");
        setDonsManuels((prev) => [...prev, data.don]); // mise à jour locale
      })
      .catch((err) => console.error("Erreur ajout don manuel", err));
  };

  return (
    <section className="admin-dons">
      <h1>Ajout de dons manuels</h1>

      {/* Formulaire d'ajout */}
      <form className="don-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du donateur"
          value={nomDonateur}
          onChange={(e) => setNomDonateur(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Montant (€)"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Message (facultatif)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Campagne (facultatif)"
          value={campagne}
          onChange={(e) => setCampagne(e.target.value)}
        />
        <button type="submit">Ajouter le don</button>
      </form>

      {/* Tableau des dons manuels */}
      <div className="don-table">
        <h2>Dons manuels enregistrés</h2>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Montant</th>
              <th>Message</th>
              <th>Campagne</th>
              <th>Fichier</th>
            </tr>
          </thead>
          <tbody>
            {donsManuels.map((don, index) => (
              <tr key={index}>
                <td>{don.nomDonateur}</td>
                <td>{don.montant} €</td>
                <td>{don.message || "-"}</td>
                <td>{don.campagne || "-"}</td>
                <td>
                  <a
                    href={`http://localhost:5000/api/donations/manual/${don._id}/pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Voir le fichier
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminDons;