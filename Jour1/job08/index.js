const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");
res = "";

try {
  const data = fs.readFileSync(filePath, "utf8");
  console.log("Contenu du fichier data.txt :");
  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      res += data[i];
    }
  }
  console.log(res);
} catch (err) {
  console.error("Erreur lors de la lecture du fichier :", err);
}
