import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/oliviatang-live/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Ensure CNAME gets copied to dist/ exactly as-is
          if (assetInfo.name === "CNAME") return "CNAME";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
