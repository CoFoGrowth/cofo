import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/send-email": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/api/avatars": {
        target: "https://api.heygen.com/v2/avatars",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => "",
        configure: (proxy, _options) => {
          proxy.on("error", (err, req, res) => {
            console.log("❌ Proxy error:", err.message);
          });
          proxy.on("proxyReq", (proxyReq, req, res) => {
            console.log(
              "🔄 Proxying request to:",
              `${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`
            );
            // Przekaż nagłówki autoryzacji
            if (req.headers["x-api-key"]) {
              proxyReq.setHeader("X-Api-Key", req.headers["x-api-key"]);
              console.log("🔑 Added X-Api-Key header");
            }
            // Usuń nagłówki które mogą powodować problemy
            proxyReq.removeHeader("origin");
            proxyReq.removeHeader("referer");
            // Dodaj User-Agent
            proxyReq.setHeader("User-Agent", "CoFo-App/1.0");
          });
          proxy.on("proxyRes", (proxyRes, req, res) => {
            console.log(
              "📥 Received response from:",
              req.url,
              "Status:",
              proxyRes.statusCode
            );
            console.log("📋 Response headers:", proxyRes.headers);
          });
        },
      },
    },
  },
});
