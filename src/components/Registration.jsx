import React from "react";
import "./Registration.css";

export default function Registration({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="registration-overlay">
      <div className="registration-content">
        <button className="registration-close" onClick={onClose}>
          &times;
        </button>
        <h2>Inscription à la newsletter</h2>
        <p>Recevez nos actus par email en vous inscrivant ci-dessous :</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Tu peux ajouter ici une logique d'envoi email ou validation
            onClose();
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            required
          />
          <button type="submit">S’inscrire</button>
        </form>
      </div>
    </div>
  );
}
