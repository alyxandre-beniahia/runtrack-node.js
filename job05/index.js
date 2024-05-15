const path = require("path");

// Exemple de chemin de fichier
const filePath = __filename; // Utilisation de __filename pour obtenir le chemin du fichier courant

// Récupérer le nom du fichier
const fileName = path.basename(filePath);
console.log("File name:", fileName);

// Récupérer l'extension du fichier
const fileExt = path.extname(filePath);
console.log("File extension:", fileExt);

// Récupérer le répertoire parent du fichier
const parentDir = path.dirname(filePath);
console.log("Parent directory:", parentDir);
