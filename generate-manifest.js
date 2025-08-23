const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");
const files = fs.readdirSync(distPath);

const jsFiles = files.filter(f => f.endsWith(".js"));

const manifest = {};
jsFiles.forEach(f => {
  manifest[f.replace(/\.[a-f0-9]{8}\.js$/, ".js")] = f;
});

fs.writeFileSync(
  path.join(distPath, "manifest.json"),
  JSON.stringify(manifest, null, 2)
);
console.log("Manifest generated:", manifest);
