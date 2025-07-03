import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Subscriber from "./models/Subscriber.js";

dotenv.config();
console.log("🔍 MONGO_URI =", process.env.MONGO_URI);
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connexion MongoDB OK"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Route POST /subscribe
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email manquant" });
  }

  try {
    const alreadyExists = await Subscriber.findOne({ email });
    if (alreadyExists) {
      return res.status(409).json({ message: "Déjà inscrit" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
