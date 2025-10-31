import express from "express";
import { creerDon } from "../Controllers/donationController.js";
import Donation from "../models/Donation.js";
import { Parser } from "json2csv";
import PDFDocument from "pdfkit";

const router = express.Router();

// Route pour créer un don via formulaire
router.post("/", creerDon);

// ✅ Route pour ajouter un don manuel (virement, espèces, etc.)
router.post("/manual", async (req, res) => {
  res.send("✅ Route POST /manual reçue !");

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

// Route pour calculer le total d’une campagne spécifique
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

// Route pour calculer le total des dons de l’année en cours
router.get("/annee", async (req, res) => {
  const anneeActuelle = new Date().getFullYear();
  const debut = new Date(`${anneeActuelle}-01-01T00:00:00.000Z`);
  const fin = new Date(`${anneeActuelle}-12-31T23:59:59.999Z`);

  try {
    const result = await Donation.aggregate([
      {
        $match: {
          date: { $gte: debut, $lte: fin },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$montant" },
        },
      },
    ]);

    const total = result[0]?.total || 0;
    res.json({ annee: anneeActuelle, total });
  } catch (error) {
    console.error("Erreur calcul dons année :", error);
    res.status(500).json({
      message: "Erreur serveur lors du calcul des dons de l’année",
      erreur: error.message,
    });
  }
});

// Route pour totaliser les dons mois par mois pour l’année en cours
router.get("/mois", async (req, res) => {
  const anneeActuelle = new Date().getFullYear();
  const debut = new Date(`${anneeActuelle}-01-01T00:00:00.000Z`);
  const fin = new Date(`${anneeActuelle}-12-31T23:59:59.999Z`);

  try {
    const result = await Donation.aggregate([
      {
        $match: {
          date: { $gte: debut, $lte: fin },
        },
      },
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$montant" },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    // Formatage du résultat pour inclure tous les mois (même ceux à 0)
    const donsParMois = Array.from({ length: 12 }, (_, i) => {
      const moisTrouvé = result.find((r) => r._id === i + 1);
      return {
        mois: i + 1,
        total: moisTrouvé ? moisTrouvé.total : 0,
      };
    });

    res.json({ annee: anneeActuelle, donsParMois });
  } catch (error) {
    console.error("Erreur calcul dons par mois :", error);
    res.status(500).json({
      message: "Erreur serveur lors du calcul des dons mensuels",
      erreur: error.message,
    });
  }
});

// Route pour exporter les dons mensuels en CSV
router.get("/mois/csv", async (req, res) => {
  const anneeActuelle = new Date().getFullYear();
  const debut = new Date(`${anneeActuelle}-01-01T00:00:00.000Z`);
  const fin = new Date(`${anneeActuelle}-12-31T23:59:59.999Z`);

  try {
    const result = await Donation.aggregate([
      { $match: { date: { $gte: debut, $lte: fin } } },
      { $group: { _id: { $month: "$date" }, total: { $sum: "$montant" } } },
      { $sort: { _id: 1 } },
    ]);

    const donsParMois = Array.from({ length: 12 }, (_, i) => {
      const moisTrouvé = result.find((r) => r._id === i + 1);
      return {
        mois: i + 1,
        total: moisTrouvé ? moisTrouvé.total : 0,
      };
    });

    const parser = new Parser({ fields: ["mois", "total"] });
    const csv = parser.parse(donsParMois);

    res.header("Content-Type", "text/csv");
    res.attachment(`dons_${anneeActuelle}.csv`);
    res.send(csv);
  } catch (error) {
    console.error("Erreur export CSV :", error);
    res.status(500).json({ message: "Erreur export CSV", erreur: error.message });
  }
});

// Route pour exporter les dons mensuels en PDF
router.get("/mois/pdf", async (req, res) => {
  const anneeActuelle = new Date().getFullYear();
  const debut = new Date(`${anneeActuelle}-01-01T00:00:00.000Z`);
  const fin = new Date(`${anneeActuelle}-12-31T23:59:59.999Z`);

  try {
    const result = await Donation.aggregate([
      { $match: { date: { $gte: debut, $lte: fin } } },
      { $group: { _id: { $month: "$date" }, total: { $sum: "$montant" } } },
      { $sort: { _id: 1 } },
    ]);

    const donsParMois = Array.from({ length: 12 }, (_, i) => {
      const moisTrouvé = result.find((r) => r._id === i + 1);
      return {
        mois: i + 1,
        total: moisTrouvé ? moisTrouvé.total : 0,
      };
    });

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=dons_${anneeActuelle}.pdf`);
    doc.pipe(res);

    doc.fontSize(18).text(`Dons mensuels - ${anneeActuelle}`, { align: "center" });
    doc.moveDown();

    donsParMois.forEach(({ mois, total }) => {
      doc.fontSize(12).text(`Mois ${mois} : ${total} €`);
    });

    doc.end();
  } catch (error) {
    console.error("Erreur export PDF :", error);
    res.status(500).json({ message: "Erreur export PDF", erreur: error.message });
  }
});


export default router;