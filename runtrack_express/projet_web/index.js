const express = require("express");
const path = require("path");
const app = express();

const PORT = 80;

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
