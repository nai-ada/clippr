import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/clippr-database/",
  build: {
    outDir: "clippr-database",
  },
  plugins: [react()],
});
