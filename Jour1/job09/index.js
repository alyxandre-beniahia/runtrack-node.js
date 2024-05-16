const fs = require("fs");
const path = require("path");

// Chemin du fichier data.txt
const filePath = path.join(__dirname, "data.txt");

// Nouveau contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node !";

// Écrire le nouveau contenu dans le fichier de manière asynchrone
fs.writeFile(filePath, newContent, "utf8", (err) => {
  if (err) {
    return console.error("Erreur lors de l'écriture du fichier :", err);
  }

  console.log("Le fichier a été modifié avec succès !");
});
