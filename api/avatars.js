export default function handler(req, res) {
  // Ustawienie CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Api-Key"
  );

  // Obsługa preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Tylko GET requests są dozwolone dla tego endpointu
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Pobierz API key z nagłówków
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    console.error("❌ Brak API key w nagłówkach");
    res.status(401).json({ error: "API key is required" });
    return;
  }

  console.log("🔄 Proxying request to HeyGen API...");

  // Wykonaj request do HeyGen API
  fetch("https://api.heygen.com/v2/avatars", {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
      "User-Agent": "CoFo-App/1.0",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.error(
          `❌ HeyGen API error: ${response.status} ${response.statusText}`
        );
        return response.text().then((errorText) => {
          console.error("❌ Error details:", errorText);
          res.status(response.status).json({
            error: `HeyGen API error: ${response.status}`,
            details: errorText,
          });
        });
      }

      return response.json().then((data) => {
        console.log("✅ Successfully fetched avatars from HeyGen");
        res.status(200).json(data);
      });
    })
    .catch((error) => {
      console.error("❌ Server error:", error);
      res.status(500).json({
        error: "Internal server error",
        message: error.message,
      });
    });
}
