// clean-newsletters.cjs
// Ce script nettoie les fichiers HTML des newsletters et corrige les chemins vers les ressources CSS et images.
// VERSION VERBEUSE — Affiche tout ce qu'il fait dossier par dossier

const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

// Dossiers de base
const newslettersPath = path.join(
  __dirname,
  "public",
  "assets",
  "newsletter-pdf"
);
const outputPath = path.join(newslettersPath, "clean");

// 🔧 Crée le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputPath)) {
  console.log("🔧 Dossier clean/ créé");
  fs.mkdirSync(outputPath);
} else {
  console.log(" Dossier clean/ déjà présent");
}

/**
 * Nettoie et restructure le contenu HTML brut
 */
function cleanHTML(content, folder) {
  const $ = cheerio.load(content);

  // Corriger les liens CSS relatifs
  $('link[rel="stylesheet"]').each((_, el) => {
    const href = $(el).attr("href");
    if (href && !href.startsWith("http") && !href.startsWith("/")) {
      const correctedHref = `/assets/newsletter-pdf/${folder}/${href}`;
      $(el).attr("href", correctedHref);
    }
  });

  // Corriger les chemins des images
  $("img").each((_, el) => {
    const src = $(el).attr("src");
    if (src && !src.startsWith("http") && !src.startsWith("/")) {
      const correctedSrc = `img/${src.split("/").pop()}`;
      $(el).attr("src", correctedSrc);
    }
  });

  // Réinjecte les styles dans le haut du fichier
  const styles = $("link[rel='stylesheet']")
    .toArray()
    .map((el) => $.html(el))
    .join("\n");

  // Récupère le contenu uniquement dans <body>
  const body = $("body").html();

  // Ajoute une signature à la fin du fichier
  const signature =
    "\n<!-- Généré avec 💚 par Florent et Copilot - https://mama-esther.org -->";

  return `${styles}\n${body}${signature}`;
}

// Parcours de tous les dossiers
console.log("\n Début du traitement des newsletters...\n");

fs.readdirSync(newslettersPath, { withFileTypes: true })
  .filter(
    (entry) => entry.isDirectory() && !["clean", "pdf"].includes(entry.name)
  )
  .forEach((folderEntry) => {
    const folder = folderEntry.name.toLowerCase();
    const folderPath = path.join(newslettersPath, folder);

    console.log(`Dossier détecté : ${folder}`);

    // Recherche d’un fichier HTML
    const htmlFiles = fs
      .readdirSync(folderPath)
      .filter((f) => f.endsWith(".html"));

    if (htmlFiles.length === 0) {
      console.warn(
        `Aucun fichier HTML trouvé dans ${folder}. Passage au dossier suivant.\n`
      );
      return;
    }

    const htmlFileName = htmlFiles[0];
    const htmlFilePath = path.join(folderPath, htmlFileName);
    const outputFileName = `${folder.toLowerCase()}.html`;
    const outputPathFinal = path.join(outputPath, outputFileName);

    console.log(`Fichier HTML trouvé : ${htmlFileName}`);
    console.log(`   🛠 Création de : ${outputFileName}`);

    const rawHTML = fs.readFileSync(htmlFilePath, "utf8");
    const cleaned = cleanHTML(rawHTML, folder);

    fs.writeFileSync(outputPathFinal, cleaned, "utf8");

    console.log(`Fichier nettoyé enregistré dans /clean : ${outputFileName}\n`);
  });

console.log(
  "🎉 Traitement terminé. Tous les fichiers disponibles ont été nettoyés.\n"
);
