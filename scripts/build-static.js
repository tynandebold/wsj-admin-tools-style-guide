const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const views = path.join(root, "server", "views");
const output = path.join(root, "dist");

function renderTemplate(filename) {
  const template = fs.readFileSync(path.join(views, filename), "utf8");

  return template.replace(/\{%\s*include\s+"([^"]+)"\s*%\}/g, (_, include) => {
    return renderTemplate(include);
  });
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.cpSync(path.join(root, "public"), output, { recursive: true });
fs.writeFileSync(path.join(output, "index.html"), renderTemplate("index.html"));
fs.writeFileSync(path.join(output, ".nojekyll"), "");

console.log("Built static site in dist/");
