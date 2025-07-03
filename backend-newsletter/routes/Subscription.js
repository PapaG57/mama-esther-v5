import { Router } from "express";
const router = Router();
import Subscriber from "../models/Subscriber"; // adapte le chemin si besoin

// POST /subscribe
router.post("/subscribe", async (req, res) => {
  try {
    const { email, extraField } = req.body;

    // Anti-bot invisible
    if (extraField && extraField.trim() !== "") {
      return res.status(400).json({ message: "Bot détecté" });
    }

    // Validation de l’email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Email invalide" });
    }

    // Vérifie si déjà inscrit
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      res.status(409).json({ message: "Email déjà inscrit" });
    }

    // Enregistrement
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Inscription réussie" });
  } catch (err) {
    console.error("Erreur d'inscription :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;
