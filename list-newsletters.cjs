const fs = require("fs");
const path = require("path");
const open = require("open");

const dir = path.join(__dirname, "public", "assets", "newsletter-pdf", "clean");

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));

if (files.length === 0) {
  console.log("Aucune newsletter nettoyée trouvée.");
  process.exit(0);
}

console.log("Newsletters disponibles :\n");

files.forEach((file, index) => {
  const id = file.replace(/\D/g, "");
  console.log(`${index + 1}. Newsletter ${id} → /newsletter/${id}`);
});

console.log("\nOuvrir une newsletter (1-" + files.length + ") : ");

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const choice = parseInt(data.trim(), 10);
  const selected = files[choice - 1];

  if (selected) {
    const id = selected.replace(/\D/g, "");
    const url = `http://localhost:5173/newsletter/${id}`;
    console.log(`🔗 Ouverture de ${url}`);
    open(url);
    process.exit(0);
  } else {
    console.log("Choix invalide. Essaie encore : ");
  }
});
