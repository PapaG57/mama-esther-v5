import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

export default function Registration({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', 'duplicate'
  const [closing, setClosing] = useState(false); // ← animation fade-out

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/subscribe", {
        email,
      });

      if (res.status === 201) {
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose(); // déclenche la fermeture réelle
      setClosing(false);
    }, 300); // durée identique à l’animation fadeOut
  };

  return (
    <div
      className={`registration-overlay ${
        status === "success" ? "blur-bg" : ""
      }`}
    >
      <div
        className={`registration-content ${closing ? "fade-out" : "fade-in"}`}
      >
        <button className="registration-close" onClick={handleClose}>
          &times;
        </button>
        <h2>Inscription à la newsletter</h2>
        <p>Recevez nos actus par email :</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">S’inscrire</button>
        </form>

        {/* Message de retour */}
        {status === "success" && (
          <p className="form-feedback success">✅ Inscription réussie !</p>
        )}
        {status === "duplicate" && (
          <p className="form-feedback info">⚠️ Vous êtes déjà inscrit.</p>
        )}
        {status === "error" && (
          <p className="form-feedback error">❌ Une erreur est survenue.</p>
        )}

        {/* Nouveau bouton Fermer centré */}
        <button className="btn-fermer" onClick={handleClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
