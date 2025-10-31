import express from "express";
import { creerDon } from "../Controllers/donationController.js";
import Donation from "../models/Donation.js";

const router = express.Router();

// Route pour créer un don
router.post("/", creerDon);

// Nouvelle route pour compter les dons
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
