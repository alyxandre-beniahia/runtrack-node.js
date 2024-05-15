const { URL } = require("url");

const urlString = "https://www.google.com?search=nodejs";

const parsedUrl = new URL(urlString);

const protocol = parsedUrl.protocol;
console.log("Protocole :", protocol);

const host = parsedUrl.hostname;
console.log("Nom d'hôte :", host);

const searchParams = parsedUrl.searchParams;
console.log("Paramètres de l'URL :");
searchParams.forEach((value, name) => {
  console.log(`  ${name}: ${value}`);
});

parsedUrl.hostname = "www.laplateforme.io";

searchParams.append("newParam", "newValue");
const newUrl = parsedUrl.toString();

console.log("Nouvelle URL :", newUrl);
