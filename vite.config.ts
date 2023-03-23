// import react from '@vitejs/plugin-react';
// import tsconfigPaths from "vite-tsconfig-paths";
// import { defineConfig } from "vitest/config";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: ["./setupTest.ts"],
//   },
// });

import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

interface VitestConfigExport extends UserConfig {
  test: {
    globals: true;
    environment: "jsdom";
    setupFiles: "./setupTests.js";
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
} as VitestConfigExport);
