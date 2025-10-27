import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import subscriptionRouter from "./routes/Subscription.js";
import contactRouter from "./routes/Contact.js";
import unsubscribeRouter from "./routes/unsubscribe.js";
import donRouter from "./routes/Don.js";
import donationRoutes from "./routes/donations.js";

dotenv.config();
console.log("🔍 MONGO_URI =", process.env.MONGO_URI);
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Montage des routeurs
app.use("/api/subscribe", subscriptionRouter);
app.use("/api/contact", contactRouter);
app.use("/api/unsubscribe", unsubscribeRouter);
app.use("/api/don", donRouter);
app.use("/api/donations", donationRoutes);

// Route racine
app.get("/", (req, res) => {
  res.send("🟢 Serveur minimal opérationnel !");
});

// Connexion MongoDB + démarrage Express
mongoose
  .connect(process.env.MONGO_URI, { dbName: "newsletter_db" })
  .then(() => {
    console.log("✅ Connexion MongoDB OK");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Serveur en route sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur connexion MongoDB :", err);
  });
