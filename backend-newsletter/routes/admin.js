import { Router } from "express";
const router = Router();

import { hash as _hash, compare as _compare } from "bcrypt";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import Admin from "../models/Admin.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

// 🔐 Route pour créer un compte administrateur
router.post("/register", async (req, res) => {
  try {
    const { identifiant, motDePasse } = req.body;

    const adminExistant = await Admin.findOne({ identifiant });
    if (adminExistant) {
      return res.status(400).json({ error: "Identifiant déjà utilisé" });
    }

    const hash = await _hash(motDePasse, 10);

    const nouvelAdmin = new Admin({
      identifiant,
      motDePasse: hash,
    });

    await nouvelAdmin.save();
    res.status(201).json({ message: "Administrateur créé avec succès" });
  } catch (err) {
    console.error("Erreur création admin :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// 🔑 Route de connexion administrateur
router.post("/login", async (req, res) => {
  try {
    const { identifiant, motDePasse } = req.body;

    const admin = await Admin.findOne({ identifiant });
    if (!admin) {
      return res.status(401).json({ error: "Identifiant incorrect" });
    }

    const isValid = await _compare(motDePasse, admin.motDePasse);
    if (!isValid) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = sign(
      { id: admin._id, identifiant: admin.identifiant },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Erreur de connexion admin :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// 🔒 Route protégée : accès aux dons
router.get("/dons", verifyAdmin, async (req, res) => {
  res.json({ message: "Accès autorisé aux dons", admin: req.admin });
});

export default router;
