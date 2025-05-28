import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api/avatars": {
        target: "https://api.heygen.com/v2/avatars",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/avatars/, ""),
        configure: (proxy, options) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            proxyReq.setHeader(
              "X-Api-Key",
              "N2Y4M2Y3NWViNmJiNDQ4ZDg5MjY0YWI1ZTQ3YzU5NjYtMTczOTE3OTE4NQ=="
            );
            proxyReq.setHeader("Content-Type", "application/json");
          });
        },
      },
    },
  },
});
