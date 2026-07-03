import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const configDir = path.resolve(rootDir, "config");

// The ./config folder holds all profile data. profile.json is imported
// statically by the app; other assets (e.g. future images) are referenced at
// runtime via configUrl(). In dev Vite serves files under the project root
// itself (including JSON-import transforms), so this plugin only copies the
// folder into dist/ for production builds.
function configFolder(): Plugin {
  return {
    name: "copy-config-folder",
    apply: "build",
    closeBundle() {
      fs.cpSync(configDir, path.resolve(rootDir, "dist/config"), {
        recursive: true,
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), configFolder()],
});
