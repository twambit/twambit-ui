// scripts/check-copilot.js
const { execSync } = require("child_process");
const path = require("path");

try {
  console.log("🔍 Checking Copilot Prompts repo...");

  // Path where you expect the repo to be cloned
  const repoPath = path.resolve(__dirname, "../../copilot-prompts");

  // Run git command inside copilot-prompts
  const result = execSync("git rev-parse --is-inside-work-tree", {
    cwd: repoPath,
    stdio: "pipe"
  }).toString().trim();

  if (result !== "true") {
    console.error("❌ Copilot Prompts repo not found.");
    process.exit(1);
  }

  // Check if it's up to date
  execSync("git fetch", { cwd: repoPath, stdio: "inherit" });
  const status = execSync("git status -uno", { cwd: repoPath, stdio: "pipe" }).toString();

  if (status.includes("behind")) {
    console.error("❌ Copilot Prompts is not up to date. Please run `git pull` in copilot-prompts.");
    process.exit(1);
  }

  console.log("✅ Copilot Prompts repo found and up to date.");
  process.exit(0);

} catch (err) {
  console.error("❌ Copilot Prompts repo missing or invalid. Clone it before pushing.");
  process.exit(1);
}
