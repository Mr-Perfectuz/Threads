import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://threads-rho-eight.vercel.app/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
