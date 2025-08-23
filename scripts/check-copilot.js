#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

console.log("🔍 Checking for Copilot dependency...");

// adjust this path if your package.json is inside client/
const packageJsonPath = path.resolve(__dirname, "..", "package.json");

if (!fs.existsSync(packageJsonPath)) {
  console.error("❌ package.json not found. Are you running this in the right place?");
  process.exit(1);
}

const pkg = require(packageJsonPath);

if (
  (pkg.dependencies && pkg.dependencies["@github/copilot"]) ||
  (pkg.devDependencies && pkg.devDependencies["@github/copilot"])
) {
  console.log("✅ Copilot dependency found. Safe to push.");
  process.exit(0);
} else {
  console.error("❌ Copilot dependency not installed! Run: npm install @github/copilot --save-dev");
  process.exit(1);
}
