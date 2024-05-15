const fs = require("fs");
const path = require("path");

const currentDir = process.cwd();
const parentDir = path.dirname(currentDir);

fs.readdir(parentDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory:", err);
  }

  const folders = files
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log("Folders in current directory:", folders);
});
