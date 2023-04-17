import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

interface VitestConfigExport extends UserConfig {
  test: {
    globals: true;
    environment: "jsdom";
    setupFiles: "./setupTest.js";
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js",
  },
} as VitestConfigExport);
