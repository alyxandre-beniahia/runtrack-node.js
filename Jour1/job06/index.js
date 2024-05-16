const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");

try {
  const data = fs.readFileSync(filePath, "utf8");
  console.log("Contenu du fichier data.txt :");
  console.log(data);
} catch (err) {
  console.error("Erreur lors de la lecture du fichier :", err);
}
