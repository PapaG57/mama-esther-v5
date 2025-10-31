import express from "express";
import { creerDon } from "../Controllers/donationController.js";
import Donation from "../models/Donation.js";

const router = express.Router();

// Route pour créer un don via formulaire
router.post("/", creerDon);

// ✅ Route pour ajouter un don manuel (virement, espèces, etc.)
router.post("/manual", async (req, res) => {
  const { nomDonateur, montant, message, campagne } = req.body;

  if (!nomDonateur || !montant) {
    return res.status(400).json({ message: "Nom et montant requis." });
  }

  try {
    const don = new Donation({
      nomDonateur,
      montant,
      message: message || "Don manuel (virement, espèces, etc.)",
      campagne: campagne || null,
    });

    await don.save();
    res.status(201).json({ message: "Don manuel enregistré ✅", don });
  } catch (error) {
    console.error("Erreur ajout don manuel :", error);
    res.status(500).json({
      message: "Erreur serveur lors de l’ajout du don manuel",
      erreur: error.message,
    });
  }
});

// Nouvelle route pour compter les dons (total cumulé)
router.get("/count", async (req, res) => {
  try {
    const result = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$montant" },
        },
      },
    ]);

    const total = result[0]?.total || 0;
    res.json({ total });
  } catch (error) {
    console.error("Erreur lors du calcul du montant total :", error);
    res.status(500).json({
      message: "Erreur serveur lors du calcul du montant total",
      erreur: error.message,
    });
  }
});

// ✅ Route pour calculer le total d’une campagne spécifique
router.get("/campagne/:nom", async (req, res) => {
  const nomCampagne = req.params.nom;

  try {
    const result = await Donation.aggregate([
      { $match: { campagne: nomCampagne } },
      {
        $group: {
          _id: null,
          total: { $sum: "$montant" },
        },
      },
    ]);

    const total = result[0]?.total || 0;
    res.json({ campagne: nomCampagne, total });
  } catch (error) {
    console.error("Erreur calcul campagne :", error);
    res.status(500).json({
      message: "Erreur serveur lors du calcul de la campagne",
      erreur: error.message,
    });
  }
});

// Liste complète des dons
router.get("/", async (req, res) => {
  try {
    const dons = await Donation.find().sort({ date: -1 }); // tri du plus récent au plus ancien
    res.json(dons);
  } catch (error) {
    console.error("Erreur récupération dons :", error);
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des dons",
      erreur: error.message,
    });
  }
});

export default router;