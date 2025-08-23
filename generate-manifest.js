const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");
const files = fs.readdirSync(distPath);

const jsFiles = files.filter(f => f.endsWith(".js"));

// Находим main.js с возможным contenthash
const mainFile = jsFiles.find(f => /^main(\.[a-f0-9]{8})?\.js$/.test(f));

if (!mainFile) {
  console.error("main.js not found in dist!");
  process.exit(1);
}

// Генерируем манифест только для main.js
const manifest = { "main.js": mainFile };

fs.writeFileSync(
  path.join(distPath, "manifest.json"),
  JSON.stringify(manifest, null, 2)
);

console.log("Manifest generated:", manifest);
