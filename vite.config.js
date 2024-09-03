import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg"],
      manifest: {
        name: "FCT Service Engineer",
        short_name: "FCT_ServiceEngineer",
        description: "PWA app for service engineers",
        theme_color: "#ffffff",
      },
      // temp
      // devOptions: {
      //   enabled: true,
      // },
    }),
  ],
});
