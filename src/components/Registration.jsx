import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

export default function Registration({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', 'duplicate'

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

  return (
    <div className="registration-overlay">
      <div className="registration-content">
        <button className="registration-close" onClick={onClose}>
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
      </div>
    </div>
  );
}
