import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Subscriber from "./models/Subscriber.js";
import nodemailer from "nodemailer";
import path from "path";

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

    if (!alreadyExists) {
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
      await sendConfirmationEmail(email); // ici c’est bon
      return res.status(201).json({ message: "Inscription réussie" });
    } else {
      console.log("🔁 Email déjà inscrit – envoi annulé");
      return res.status(409).json({ message: "Email déjà inscrit" });
    }
  } catch (error) {
    console.error("❌ Erreur complète :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
async function sendConfirmationEmail(email) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT), // 465
    secure: true, // ← obligatoire pour le port SSL 465
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
    <div style="font-family: Bahnschrift, Arial, sans-serif; background-color: #ffffff; padding-bottom: 20px;">
      <div style="text-align: center; background-color: #007A5E; padding: 10px;">
        <img src="cid:banniereHeader" alt="Bannière Mama Esther" style="max-width: 50%; height: auto;" />
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <img src="cid:photoIntro" alt="Photo Mama Esther" style="max-width: 10%; height: auto; border-radius: 8px; margin: 0 auto;" />
      </div>
      <div style="max-width: 600px; margin: 30px auto; background-color: white; padding: 20px; border-radius: 8px;">
        <h2 style="color: #007A5E;">Merci pour votre inscription 💚.</h2>
        <p style="color: #333;">Toute l’équipe de Mama Esther vous remercie chaleureusement pour l'intérêt que vous nous portez.</p>
        <p style="color: #333;">Vous recevrez bientôt nos actualités et nos projets engagés.</p>
      </div>
      <div style="background-color: #CE1126; color: white; padding: 15px 20px 20px 20px; text-align: center;">
        <img src="cid:logoFooter" alt="Logo" style="height: 60px; margin-top: 10px; margin-bottom: 10px;" />
        <p style="font-size: 0.9rem;">© Association Mama Esther 2025</p>
        <div style="margin-top: 15px;">
          <a href="https://site-mama-esther.fr/desinscription" style="background:#007A5E; color:#fff; padding:10px 16px; border-radius:6px; text-decoration:none; margin:6px; display:inline-block;">Se désinscrire</a>
          <a href="https://site-mama-esther.fr/mentions-legales" style="background:#007A5E; color:#fff; padding:10px 16px; border-radius:6px; text-decoration:none; margin:6px; display:inline-block;">Mentions légales</a>
          <a href="mailto:contact@mama-esther.fr" style="background:#007A5E; color:#fff; padding:10px 16px; border-radius:6px; text-decoration:none; margin:6px; display:inline-block;">Des questions ? Contactez-nous !</a>
          <a href="https://site-mama-esther.fr" style="background:#007A5E; color:#fff; padding:10px 16px; border-radius:6px; text-decoration:none; margin:6px; display:inline-block;">Visitez notre site</a>
          <a href="https://site-mama-esther.fr/rejoignez-nous" style="background:#007A5E; color:#fff; padding:10px 16px; border-radius:6px; text-decoration:none; margin:6px; display:inline-block;">Rejoignez-nous</a>
        </div>
      </div>
    </div>
  `,
    attachments: [
      {
        filename: "banniere.png",
        path: path.resolve("assets/banniere.png"),
        cid: "banniereHeader",
      },
      {
        filename: "photoMama.jpg",
        path: path.resolve("assets/photoMama.jpg"),
        cid: "photoIntro",
      },
      {
        filename: "logoMama.png",
        path: path.resolve("assets/logoMama.png"),
        cid: "logoFooter",
      },
    ],
  });
  console.log("✉️ Mail envoyé !");
}

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
