import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/impulso-d31294ea/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "fix-css-urls",
      generateBundle(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type === "asset" && file.fileName.endsWith(".css")) {
            file.source = (file.source as string).replace(
              /url\(['"]?assets\//g,
              `url('/tu-repo/assets/`,
            );
          }
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
