import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/admin.css";
import CamerounButton from "../components/CamerounButton";
import PasswordField from "../components/PasswordField";
import confetti from "canvas-confetti";

function evaluatePasswordStrength(password) {
  const len = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (len < 8) return "faible";
  if (len > 10 && hasUpper && hasLower && hasDigit && hasSpecial) return "fort";
  return "moyen";
}

export default function Admin() {
  const navigate = useNavigate();

  // 🔒 Protection de la page : vérifie le token dès le montage
  const [showSecureModal, setShowSecureModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setShowSecureModal(true); // affiche la modale sécurisée
    }
  }, [navigate]);

  // États Admin
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [message, setMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // États Dons
  const [nomDonateur, setNomDonateur] = useState("");
  const [montant, setMontant] = useState("");
  const [commentaires, setCommentaires] = useState("");
  const [source, setSource] = useState("");
  const [sourcePrecise, setSourcePrecise] = useState("");
  const [donFeedback, setDonFeedback] = useState("");
  const [dons, setDons] = useState([]);
  const [donASupprimer, setDonASupprimer] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    if (motDePasse.length >= 1) {
      setPasswordStrength(evaluatePasswordStrength(motDePasse));
    } else {
      setPasswordStrength("");
    }
  }, [motDePasse]);

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (motDePasse !== confirmationMotDePasse) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    if (motDePasse.length < 8 || motDePasse.length > 30) {
      setMessage("Le mot de passe doit contenir entre 8 et 30 caractères.");
      return;
    }

    const strength = evaluatePasswordStrength(motDePasse);
    setPasswordStrength(strength);
    if (strength === "faible") {
      setMessage("Mot de passe trop faible.");
      return;
    }

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
      setMessage(result.message || result.error || "Création effectuée");

      if (res.ok) {
        localStorage.setItem("adminName", identifiant);
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
        setShowSuccessModal(true);
        setIdentifiant("");
        setMotDePasse("");
        setConfirmationMotDePasse("");
        setPasswordStrength("");
      }
    } catch {
      setMessage("Erreur réseau");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifiant, motDePasse }),
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", result.token);
        localStorage.setItem("adminName", result.identifiant);

        setMessage("Connexion réussie !");
        navigate("/admin");
      } else {
        setMessage(result.error || "Identifiant ou mot de passe incorrect");
      }
    } catch (err) {
      setMessage("Erreur réseau");
    }
  };


  const demanderConfirmationSuppression = (don) => {
    setDonASupprimer(don);
    setShowConfirmModal(true);
  };

  const annulerSuppression = () => {
    setDonASupprimer(null);
    setShowConfirmModal(false);
  };

  const confirmerSuppression = async () => {
    if (!donASupprimer) return;
    const token = localStorage.getItem("adminToken");
    const id = donASupprimer.id ?? donASupprimer._id;

    try {
      const res = await fetch(`/api/admin/dons/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      let result = {};
      if (res.status !== 204) {
        try {
          result = await res.json();
        } catch {}
      }

      if (!res.ok) {
        setDonFeedback(result.error || `Erreur serveur (${res.status})`);
      } else {
        setDonFeedback(result.message || "Don supprimé avec succès");
        fetchDons();
      }
    } catch {
      setDonFeedback("Erreur réseau");
    } finally {
      setDonASupprimer(null);
      setShowConfirmModal(false);
    }
  };

  const fetchDons = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch("/api/admin/dons", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setDons(Array.isArray(data) ? data : []);
    } catch {
      setDons([]);
    }
  };

  useEffect(() => {
    fetchDons();
  }, []);

  const strengthClass =
    passwordStrength === "fort"
      ? "msg-green-bold"
      : passwordStrength === "moyen"
      ? "msg-orange-bold"
      : passwordStrength === "faible"
      ? "msg-red-bold"
      : "";

  return (
    <div className="admin-container">
      {showSecureModal ? (
        // 🔒 Modale sécurisée uniquement
        <div className="admin-modal-overlay" onClick={() => navigate("/")}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h2>🔒 Accès sécurisé</h2>
            <p>Cette page est réservée aux administrateurs.</p>
            <div className="admin-modal-buttons">
              <button onClick={() => navigate("/")}>Retour à l’accueil</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>🔐 Espace Administrateur</h1>

          {/* Formulaire connexion admin */}
          <form onSubmit={handleAdminSubmit}>
            <h2>Ajouter un administrateur</h2>
            <input
              type="text"
              className="input-standard"
              placeholder="Prénom - nom"
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
              required
            />
            <PasswordField
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              label="Mot de passe"
              placeholder="***************"
              required
            />
            {passwordStrength && (
              <p className={strengthClass}>
                {passwordStrength === "faible"
                  ? "Mot de passe faible"
                  : passwordStrength === "moyen"
                  ? "Mot de passe moyen"
                  : "Mot de passe fort"}
              </p>
            )}
            <PasswordField
              value={confirmationMotDePasse}
              onChange={(e) => setConfirmationMotDePasse(e.target.value)}
              label="Confirmer le mot de passe"
              placeholder="***************"
              required
            />
            {message && <p className="msg-red-bold">{message}</p>}
            <p className="msg-green-bold">
              Le mot de passe doit contenir entre 8 et 30 caractères, au moins
              une majuscule, une minuscule, un chiffre et un caractère spécial.
              Il est considéré fort seulement s’il dépasse 10 caractères et
              contient au moins un de chaque type.
            </p>
            <button type="submit">Créer</button>
          </form>

          {/* 🎉 Modale succès */}
          {showSuccessModal && (
            <div
              className="admin-modal-overlay"
              onClick={() => setShowSuccessModal(false)}
            >
              <div
                className="admin-modal success-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>🎉 Nouvel administrateur créé avec succès !</h2>
                <p>Votre nouvel administrateur est maintenant actif.</p>
                <button onClick={() => setShowSuccessModal(false)}>
                  Fermer
                </button>
              </div>
            </div>
          )}

          {/* Formulaire ajout don manuel */}
          <form onSubmit={async (e) => {
              e.preventDefault();
              const token = localStorage.getItem("adminToken");
              const adminName = localStorage.getItem("adminName");

              try {
                const res = await fetch("/api/donations/manual", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                    nomDonateur,
                    montant: parseFloat(montant),
                    commentaires,
                    source: source === "autres" ? sourcePrecise : source,
                    admin: adminName,
                  }),
                });

                const result = await res.json();
                setDonFeedback(result.message || result.error || "Don ajouté");
                setNomDonateur("");
                setMontant("");
                setCommentaires("");
                setSource("");
                setSourcePrecise("");
                fetchDons();
              } catch (err) {
                setDonFeedback("Erreur réseau");
              }
            }}>
            <h2>💰 Ajouter un don manuel</h2>
            <input
              type="text"
              className="input-standard"
              placeholder="Nom du donateur"
              value={nomDonateur}
              onChange={(e) => setNomDonateur(e.target.value)}
              required
            />
            <input
              type="number"
              className="input-standard"
              placeholder="Montant (€)"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              required
            />

            <select
              className="input-standard"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            >
              <option value="">-- Sélectionner une source --</option>
              <option value="chèque">Chèque</option>
              <option value="virement">Virement</option>
              <option value="espèces">Espèces</option>
              <option value="autres">Autres (préciser)</option>
            </select>

            {source === "autres" && (
              <input
                type="text"
                className="input-standard"
                placeholder="Précisez la source"
                value={sourcePrecise}
                onChange={(e) => setSourcePrecise(e.target.value)}
                required
              />
            )}

            <textarea
              className="input-standard"
              placeholder="Commentaires (facultatif)"
              value={commentaires}
              onChange={(e) => setCommentaires(e.target.value)}
            />
            <button type="submit">Ajouter le don</button>
            {donFeedback && <p>{donFeedback}</p>}
          </form>

          {/* Liste des dons */}
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
                  <th>Date</th>
                  <th>Commentaires</th>
                  <th>Ajouté par</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dons.map((don, index) => (
                  <tr
                    key={
                      don.id ??
                      don._id ??
                      `${don.nomDonateur}-${don.montant}-${don.date}-${index}`
                    }
                  >
                    <td>{don.nomDonateur}</td>
                    <td>{don.montant}</td>
                    <td>{don.source}</td>
                    <td>{new Date(don.date).toLocaleString()}</td>
                    <td>{don.commentaires || "-"}</td>
                    <td>{don.admin || "-"}</td>
                    <td>
                      <button
                        onClick={() => demanderConfirmationSuppression(don)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Modale de confirmation de suppression */}
          {showConfirmModal && (
            <div className="admin-modal-overlay" onClick={annulerSuppression}>
              <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Confirmation de suppression</h2>
                <p>
                  Vous vous apprêtez à supprimer cette ligne de don. Confirmer
                  la suppression.
                </p>
                <div className="admin-modal-buttons">
                  <button onClick={confirmerSuppression}>Confirmer</button>
                  <button onClick={annulerSuppression}>Annuler</button>
                </div>
              </div>
            </div>
          )}

          {/* Bouton retour */}
          <div className="floating-contact fixed-bottom-right">
            <CamerounButton
              onClick={() => navigate(-1)}
              className="about-button"
            >
              <FontAwesomeIcon
                icon={faHandPointLeft}
                style={{ marginRight: "8px" }}
              />
              Retour
            </CamerounButton>
          </div>
        </>
      )}
    </div>
  );
}
