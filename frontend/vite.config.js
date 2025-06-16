import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isDev = process.env.NODE_ENV === "development";
const backendTarget = isDev
  ? "http://localhost:3001"
  : "https://threads-backend-voxz.onrender.com";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: backendTarget,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
