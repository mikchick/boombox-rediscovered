import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/boombox-rediscovered/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
