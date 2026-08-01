import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/lexi/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
