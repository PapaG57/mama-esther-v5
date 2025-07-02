import dotenv from "dotenv";
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import Subscriber, { findOne } from "./models/Subscriber";

// Polyfill for process in case it's undefined (for non-Node environments)
if (typeof process === "undefined") {
  (typeof globalThis !== "undefined" ? globalThis : window).process = {
    env: {},
  };
}

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const PORT = process.env.PORT || 5000;

// Connexion MongoDB
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connexion MongoDB OK"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Route POST /subscribe
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email manquant" });
  }

  try {
    const alreadyExists = await findOne({ email });
    if (alreadyExists) {
      return res.status(409).json({ message: "Déjà inscrit" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
