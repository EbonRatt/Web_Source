import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://web-source-6cju7ubfv-ebonratts-projects.vercel.app",
    },
    // host: "localhost",
    // port: 8081,
  },
  plugins: [react()],
});
