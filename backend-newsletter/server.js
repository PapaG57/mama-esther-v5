import dotenv from "dotenv";
dotenv.config(); // ← déplacement en haut pour que les env soient dispo immédiatement

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Subscriber from "./models/Subscriber.js";
import nodemailer from "nodemailer";

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

    // ✉️ Envoi de l'email de confirmation après l'inscription
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // ← adapté à LWS
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true si SSL (port 465)
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Mama Esther 👩🏾‍🦱" <${process.env.EMAIL_SENDER}>`,
      to: email,
      subject: "Confirmation d'inscription",
      html: `
        <h2>Merci 🙏</h2>
        <p>Vous êtes bien inscrit à notre newsletter !</p>
        <p style="font-size: 0.9em;">Nous vous tiendrons informé(e) de nos projets et actualités.</p>
      `,
    });

    res.status(201).json({ message: "Inscription réussie" });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
