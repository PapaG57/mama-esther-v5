import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import CamerounButton from "../components/CamerounButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
  faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";
import HandSpinner from "../components/HandSpinner.jsx"; // Import du spinner
import "../styles/contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false); // Ajout loading spinner
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [isHuman, setIsHuman] = useState(false); // checkbox
  const [showEmojiAlert, setShowEmojiAlert] = useState(false); // alerte emoji

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact-form") {
      // Attendre que le DOM soit bien monté
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          const yOffset = -80; // Décalage pour compenser barre fixe ou marges
          const y =
            target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 600); // petit délai de sécurité
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isHuman) {
      setShowEmojiAlert(true);
      return;
    }

    setSending(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mnnzavpg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 1500)); // laisser le loader visible

      if (response.ok) {
        setShowModal(true);
      } else {
        alert(t("contact.form.submitError"));
      }
    } catch {
      alert(t("contact.form.networkError"));
    } finally {
      setSending(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    formRef.current?.reset();
    setIsHuman(false);
    setShowEmojiAlert(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">{t("contact.title")}</h2>

        <div className="floating-contact fixed-bottom-right">
          <CamerounButton onClick={() => navigate(-1)} className="about-button">
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ marginRight: "8px" }}
            />
            {t("contact.back")}
          </CamerounButton>
        </div>

        <div className="contact-content">
          {/* certe Google Maps */}
          <div className="map-container">
            <iframe
              title="adresse Mama Esther"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.026902889191!2d6.077277476714843!3d49.31377416855163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47952f13a3cca2f9%3A0x4c0e129a27414697!2s1%20Rue%20des%20Troenes%2C%2057700%20Hayange!5e0!3m2!1sfr!2sfr!4v1722151511491!5m2!1sfr!2sfr"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* bloc coordonnées centré */}
          <div className="contact-details-wrapper">
            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-header">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="info-icon"
                  />
                  <h3>{t("contact.addressTitle")}</h3>
                </div>
                <p>📍 1, Rue des Trôenes</p>
                <p>🌳 HAYANGE St-NICOLAS EN FORÊT 57700</p>
                <p>🇫🇷 FRANCE</p>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <FontAwesomeIcon icon={faMobileAlt} className="info-icon" />
                  <h3>{t("contact.phoneTitle")}</h3>
                </div>
                <p>
                  📞 +33 6 86 74 29 11 — <strong>{t("contact.president")}</strong>
                </p>
                <p>
                  📞 +33 6 45 65 65 17 — <strong>{t("contact.vicePresident")}</strong>
                </p>
                <p>
                  <em>📅 {t("contact.availability")}</em>
                </p>
                <p>
                  <em>📨 {t("contact.urgency")}</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-block contact-form" id="contact-form">
          <h3>
            <FontAwesomeIcon icon={faEnvelope} /> {t("contact.writeUs")}
          </h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* Honeypot anti-spam */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div className="form-group">
              <label htmlFor="name">{t("contact.form.name")}</label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("contact.form.email")}</label>
              <input type="email" name="_replyto" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t("contact.form.subject")}</label>
              <input type="text" name="subject" id="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("contact.form.message")}</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Checkbox de vérification humaine */}
            <div className="checkbox-wrapper">
              <label>
                <input
                  type="checkbox"
                  checked={isHuman}
                  onChange={(e) => {
                    setIsHuman(e.target.checked);
                    if (e.target.checked) setShowEmojiAlert(false);
                  }}
                  className={showEmojiAlert ? "shake-checkbox" : ""}
                />
                <span>{t("contact.form.humanCheck")}</span>
              </label>
            </div>

            {/* Animation d’alerte si la case n'est pas cochée */}
            {showEmojiAlert && (
              <div className="emoji-alert">
                🙈{" "}
                <span>{t("contact.form.errorCheck")}</span>
              </div>
            )}

            {/* Bouton d’envoi + main impatiente */}
            <div className="loading-wrapper">
              <button
                type="submit"
                className="contact-send-button"
                disabled={sending}
              >
                {sending ? (
                  <span className="sending-content">
                    {t("contact.form.sending")}
                    <HandSpinner />
                  </span>
                ) : (
                  t("contact.form.send")
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="contact-button-wrapper">
          <CamerounButton to="/don">{t("contact.form.donate")}</CamerounButton>
        </div>
      </div>

      {/* Modale de confirmation */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <div className="modal-header">
              <img
                src="/assets/team/esther.png"
                alt="Mama Esther"
                className="modal-esther-photo"
              />
              <h3>{t("contact.form.successTitle")}</h3>
            </div>

            <p>
              {t("contact.form.successText")}
            </p>

            <div className="modal-signatures">
              <img
                src="/assets/signatures/signature-EG.gif"
                alt="Signature EG"
                className="modal-signature"
              />
              <img
                src="/assets/signatures/signature-FG.gif"
                alt="Signature FG"
                className="modal-signature"
              />
            </div>

            <button onClick={handleCloseModal} className="modal-close-button">
              {t("contact.form.close")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
