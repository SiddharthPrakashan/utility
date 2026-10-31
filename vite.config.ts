import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [mkcert(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),

      // Shared resources
      "@shared": path.resolve(__dirname, "src/shared"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@ui": path.resolve(__dirname, "src/shared/components/ui"),
      "@config": path.resolve(__dirname, "src/shared/config"),
      "@hooks": path.resolve(__dirname, "src/shared/hooks"),
      "@lib": path.resolve(__dirname, "src/shared/lib"),
      "@styles": path.resolve(__dirname, "src/shared/styles"),

      // Individual applications
      "@apps": path.resolve(__dirname, "src/apps"),
      "@site": path.resolve(__dirname, "src/apps/site"),
      "@ig-followers-check": path.resolve(
        __dirname,
        "src/apps/ig-followers-check",
      ),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,

    rollupOptions: {
      input: {
        // Main website
        home: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        privacy: path.resolve(__dirname, "privacy-policy/index.html"),
        terms: path.resolve(__dirname, "terms/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        credits: path.resolve(__dirname, "credits/index.html"),
        notFound: path.resolve(__dirname, "404.html"),

        // Utility applications
        igFollowersCheck: path.resolve(
          __dirname,
          "ig-followers-check/index.html",
        ),
      },
    },
  },
});
