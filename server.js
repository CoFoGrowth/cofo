const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, "dist")));

// API proxy endpoint for HeyGen avatars
app.get("/api/avatars", async (req, res) => {
  try {
    console.log("🔄 Proxy request to HeyGen API...");

    const fetch = (await import("node-fetch")).default;

    const response = await fetch("https://api.heygen.com/v2/avatars", {
      method: "GET",
      headers: {
        "X-Api-Key":
          "N2Y4M2Y3NWViNmJiNDQ4ZDg5MjY0YWI1ZTQ3YzU5NjYtMTczOTE3OTE4NQ==",
        "Content-Type": "application/json",
        "User-Agent": "CoFo-App/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HeyGen API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Successfully proxied HeyGen API response");

    res.json(data);
  } catch (error) {
    console.error("❌ Error proxying HeyGen API:", error);

    // Return fallback avatars on error
    res.json({
      data: {
        avatars: [
          {
            avatar_id: "14bb685a7fe54b59a395a4653e300da9",
            avatar_name: "Biała Koszula_mieszkanie_0001",
            preview_image_url:
              "https://files2.heygen.ai/avatar/v3/14bb685a7fe54b59a395a4653e300da9/full/2.2/preview_target.webp",
          },
          {
            avatar_id: "d19813e5217547fcaf5293181b0c39b5",
            avatar_name: "Czarna_koszula_mieszkanie_0001",
            preview_image_url:
              "https://files2.heygen.ai/avatar/v3/d19813e5217547fcaf5293181b0c39b5/full/2.2/preview_target.webp",
          },
          {
            avatar_id: "3cafa5d8091843b3936f4a1592a39b84",
            avatar_name: "Czerwona_sukienka_hipnozy_0001",
            preview_image_url:
              "https://files2.heygen.ai/avatar/v3/f91cb72e3456475386b6f1a53e63a24c/full/2.2/preview_target.webp",
          },
          {
            avatar_id: "117048e935de41deb14f39a0aa27661e",
            avatar_name: "Dom_pionowy_0001",
            preview_image_url:
              "https://files2.heygen.ai/avatar/v3/117048e935de41deb14f39a0aa27661e/full/2.2/preview_target.webp",
          },
        ],
        talking_photos: [],
      },
    });
  }
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Frontend: http://localhost:${PORT}`);
  console.log(`🔗 API Proxy: http://localhost:${PORT}/api/avatars`);
});
