import { useState, useEffect } from "react";
import "../styles/admin.css";

export default function Admin() {
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [message, setMessage] = useState("");

  const [nomDonateur, setNomDonateur] = useState("");
  const [montant, setMontant] = useState("");
  const [messageDon, setMessageDon] = useState("");
  const [source, setSource] = useState("");
  const [donFeedback, setDonFeedback] = useState("");

  const [dons, setDons] = useState([]);

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ identifiant, motDePasse }),
      });

      const result = await res.json();
      setMessage(result.message || result.error);
    } catch (err) {
      setMessage("Erreur réseau");
    }
  };

  const handleDonSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("/api/admin/manual-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nomDonateur,
          montant: parseFloat(montant),
          message: messageDon,
          source,
        }),
      });

      const result = await res.json();
      setDonFeedback(result.message || result.error);
      fetchDons();
    } catch (err) {
      setDonFeedback("Erreur réseau");
    }
  };

  const fetchDons = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch("/api/admin/dons", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setDons(data);
    } catch (err) {
      console.error("Erreur récupération dons :", err);
    }
  };

  useEffect(() => {
    fetchDons();
  }, []);

  return (
    <div className="admin-container">
      <h1>🔐 Espace Administrateur</h1>

      <form onSubmit={handleAdminSubmit}>
        <h2>👥 Créer un nouvel administrateur</h2>
        <input
          type="text"
          placeholder="Identifiant"
          value={identifiant}
          onChange={(e) => setIdentifiant(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />
        <button type="submit">Créer</button>
        {message && <p>{message}</p>}
      </form>

      <form onSubmit={handleDonSubmit}>
        <h2>💰 Ajouter un don manuel</h2>
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
          placeholder="Source du don (chèque, espèce, virement...)"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <textarea
          placeholder="Message (facultatif)"
          value={messageDon}
          onChange={(e) => setMessageDon(e.target.value)}
        />
        <button type="submit">Ajouter le don</button>
        {donFeedback && <p>{donFeedback}</p>}
      </form>

      <h2>📋 Liste des dons</h2>
      {dons.length === 0 ? (
        <p>Aucun don enregistré pour le moment.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom du donateur</th>
              <th>Montant (€)</th>
              <th>Source</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {dons.map((don) => (
              <tr key={don._id}>
                <td>{don.nomDonateur}</td>
                <td>{don.montant}</td>
                <td>{don.source}</td>
                <td>{don.message || "-"}</td>
                <td>{new Date(don.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
