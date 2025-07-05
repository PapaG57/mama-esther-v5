import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import confetti from "canvas-confetti"; // 🎊 Ajout confetti

export default function Registration({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', 'duplicate'
  const [closing, setClosing] = useState(false);
  const [isHuman, setIsHuman] = useState(false); // checkbox
  const [showEmojiAlert, setShowEmojiAlert] = useState(false); // alerte emoji
  const [showDuplicateAlert, setShowDuplicateAlert] = useState(false); // alerte duplication

  const clearEmail = () => {
    setEmail("");
    setShowDuplicateAlert(false);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setStatus(null);
      setIsHuman(false);
      setShowEmojiAlert(false);
      setShowDuplicateAlert(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isHuman) {
      setShowEmojiAlert(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/subscribe", {
        email,
      });

      if (res.status === 201) {
        setStatus("success");
        setEmail("");
        setIsHuman(false);
        setShowEmojiAlert(false);
        setShowDuplicateAlert(false);
        confetti({
          // 🎉 Lancement de l'effet feu d'artifice
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setStatus("duplicate");
        setShowDuplicateAlert(true);
      } else {
        setStatus("error");
      }
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  return (
    <div className="registration-overlay">
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
            onChange={(e) => {
              setEmail(e.target.value);
              setShowDuplicateAlert(false); // cache l’alerte si on modifie
            }}
            required
          />

          {/* Champ honeypot anti-bot (invisible pour les humains) */}
          <input
            type="text"
            name="extraField"
            style={{ display: "none" }}
            autoComplete="off"
          />

          {/* Ajout de la checkbox sécurité */}
          <div>
            <div className="checkbox-wrapper">
              <label>
                <input
                  type="checkbox"
                  checked={isHuman}
                  onChange={(e) => {
                    setIsHuman(e.target.checked);
                    if (e.target.checked) {
                      setShowEmojiAlert(false); // Masque l’alerte si la case est cochée
                    }
                  }}
                  className={showEmojiAlert ? "shake-checkbox" : ""}
                />
                <span>Je suis un humain (veuillez cocher cette case)</span>
              </label>
            </div>
          </div>

          {/* 🙈 Animation d’alerte si la case n'est pas cochée */}
          {showEmojiAlert && (
            <div className="emoji-alert">
              🙈{" "}
              <span>Non non non... vous avez oublié de cocher la case !</span>
            </div>
          )}

          {/* 📨 Alerte duplication d’adresse avec bouton "Effacer" */}
          {showDuplicateAlert && (
            <div className="emoji-alert">
              📨{" "}
              <span>
                Cette adresse est déjà inscrite. Merci d’en utiliser une autre
                🙏
              </span>
              <button className="btn-clear-email" onClick={clearEmail}>
                <FontAwesomeIcon icon={faEraser} /> Effacer le formulaire
              </button>
            </div>
          )}

          <button type="submit">S’inscrire</button>
        </form>

        {status === "success" && (
          <>
            {/* Animation de feux d'artifice */}
            <div id="confetti-target"></div>
            <p className="form-feedback success">✅ Inscription réussie !</p>
          </>
        )}
        {status === "error" && (
          <p className="form-feedback error">❌ Une erreur est survenue.</p>
        )}

        <button className="btn-fermer" onClick={handleClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
