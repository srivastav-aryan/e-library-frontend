import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // ↳ turns the import URL into a real file path
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
