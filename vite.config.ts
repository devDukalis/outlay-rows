import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { checker as typeChecker } from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

export const aliases = {
  "@": resolve(__dirname, "./src"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    typeChecker({ typescript: true }),
    svgr({ include: "**/*.svg?react" }),
  ],
  resolve: {
    alias: aliases,
  },
});
