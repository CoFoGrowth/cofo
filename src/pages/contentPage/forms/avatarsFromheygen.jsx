import React, { useState, useEffect } from "react";
import {
  AvatarsContainer,
  AvatarsTitle,
  LoadingInfo,
  ErrorMessage,
  AvatarsScrollContainer,
  AvatarsGrid,
  AvatarItem,
  AvatarImage,
  AvatarInfo,
  AvatarName,
  AvatarId,
  AvatarType,
  AvatarsCount,
  LoadingSpinner,
} from "./AvatarsStyles";

const AvatarsFromHeygen = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dane do HeyGen API
  const API_TOKEN =
    "N2Y4M2Y3NWViNmJiNDQ4ZDg5MjY0YWI1ZTQ3YzU5NjYtMTczOTE3OTE4NQ==";
  const AVATARS_URL = "/api/avatars";

  // Funkcja do pobierania awatarów
  const fetchAvatars = async () => {
    try {
      console.log(
        "🚀 Rozpoczynam pobieranie awatarów z HeyGen API przez CORS proxy..."
      );
      setLoading(true);
      setError("");

      let response;
      let data;

      try {
        // Pierwsza próba - corsproxy.io (obsługuje niestandardowe nagłówki)
        console.log("🔄 Próba 1: corsproxy.io z nagłówkami autoryzacji...");
        const corsProxyUrl1 = `https://corsproxy.io/?${encodeURIComponent(
          "https://api.heygen.com/v2/avatars"
        )}`;

        response = await fetch(corsProxyUrl1, {
          method: "GET",
          headers: {
            "X-Api-Key": API_TOKEN,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          data = await response.json();
          console.log("✅ Sukces z corsproxy.io!");
        } else {
          throw new Error(`corsproxy.io error: ${response.status}`);
        }
      } catch (error1) {
        console.warn("⚠️ corsproxy.io failed:", error1.message);

        try {
          // Druga próba - thingproxy
          console.log("🔄 Próba 2: thingproxy z nagłówkami...");
          const corsProxyUrl2 = `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(
            "https://api.heygen.com/v2/avatars"
          )}`;

          response = await fetch(corsProxyUrl2, {
            method: "GET",
            headers: {
              "X-Api-Key": API_TOKEN,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            data = await response.json();
            console.log("✅ Sukces z thingproxy!");
          } else {
            throw new Error(`thingproxy error: ${response.status}`);
          }
        } catch (error2) {
          console.warn("⚠️ thingproxy failed:", error2.message);

          try {
            // Trzecia próba - whateverorigin
            console.log("🔄 Próba 3: whateverorigin z nagłówkami...");
            const corsProxyUrl3 = `https://whatever-origin.herokuapp.com/get?url=${encodeURIComponent(
              "https://api.heygen.com/v2/avatars"
            )}&callback=?`;

            response = await fetch(corsProxyUrl3, {
              method: "GET",
              headers: {
                "X-Api-Key": API_TOKEN,
                "Content-Type": "application/json",
              },
            });

            if (response.ok) {
              const jsonpData = await response.text();
              // Parsuj JSONP response
              const jsonMatch = jsonpData.match(/\?\((.*)\)$/);
              if (jsonMatch) {
                const parsedData = JSON.parse(jsonMatch[1]);
                data = JSON.parse(parsedData.contents);
                console.log("✅ Sukces z whateverorigin!");
              } else {
                throw new Error("Invalid JSONP response");
              }
            } else {
              throw new Error(`whateverorigin error: ${response.status}`);
            }
          } catch (error3) {
            console.warn("⚠️ whateverorigin failed:", error3.message);

            // Czwarta próba - allorigins bez nagłówków autoryzacji (może API jest publiczne?)
            console.log("🔄 Próba 4: allorigins bez nagłówków autoryzacji...");
            const corsProxyUrl4 = `https://api.allorigins.win/raw?url=${encodeURIComponent(
              "https://api.heygen.com/v2/avatars"
            )}`;

            response = await fetch(corsProxyUrl4, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (!response.ok) {
              throw new Error(
                `All CORS proxies failed. Last error: ${response.status}`
              );
            }

            data = await response.json();
            console.log("✅ Sukces z allorigins (bez autoryzacji)!");
          }
        }
      }

      console.log("✅ Pełna odpowiedź z API awatarów:", data);

      // HeyGen API zwraca obiekt z polami 'avatars' i 'talking_photos'
      if (data && data.data) {
        const allAvatars = data.data.avatars || [];
        const talkingPhotos = data.data.talking_photos || [];

        console.log(
          `📊 Znaleziono ${allAvatars.length} awatarów i ${talkingPhotos.length} talking photos`
        );

        // Kombinuj wszystkie awatary
        const combinedAvatars = [
          ...allAvatars.map((avatar) => ({
            id: avatar.avatar_id,
            name: avatar.avatar_name,
            preview: avatar.preview_image_url,
            type: "avatar",
            fullData: avatar,
          })),
          ...talkingPhotos.map((photo) => ({
            id: photo.talking_photo_id,
            name: photo.talking_photo_name,
            preview: photo.preview_image_url,
            type: "talking_photo",
            fullData: photo,
          })),
        ]
          .filter((avatar) => avatar.name && avatar.name.includes("_0001")) // Filtruj tylko awatary z "_0001" w nazwie
          .slice(0, 30); // Ograniczenie do pierwszych 30 awatarów

        setAvatars(combinedAvatars);

        // Wyświetl każdy awatar w konsoli
        combinedAvatars.forEach((avatar, index) => {
          console.log(`👤 Avatar ${index + 1}:`, {
            id: avatar.id,
            name: avatar.name,
            type: avatar.type,
            preview: avatar.preview,
            fullData: avatar.fullData,
          });
        });

        console.log(
          `🎯 Wyświetlam ${
            combinedAvatars.length
          } awatarów z "_0001" w nazwie (z ${
            allAvatars.length + talkingPhotos.length
          } dostępnych)`
        );
      } else {
        console.log("⚠️ Brak danych awatarów w odpowiedzi");
        setAvatars([]);
      }
    } catch (err) {
      console.error("❌ Błąd podczas pobierania awatarów:", err);
      setError(`Błąd: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Pobierz awatary przy załadowaniu komponentu
  useEffect(() => {
    console.log(
      "AvatarsFromHeygen component mounted - rozpoczynam pobieranie awatarów"
    );
    fetchAvatars();
  }, []);

  return (
    <AvatarsContainer>
      <AvatarsTitle>Awatary z HeyGen</AvatarsTitle>

      {loading && (
        <LoadingInfo>
          <LoadingSpinner />
          Ładowanie awatarów z HeyGen...
        </LoadingInfo>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && avatars.length === 0 && (
        <LoadingInfo>Brak dostępnych awatarów</LoadingInfo>
      )}

      {avatars.length > 0 && (
        <>
          <AvatarsCount>Znaleziono {avatars.length} awatarów</AvatarsCount>
          <AvatarsScrollContainer>
            <AvatarsGrid>
              {avatars.map((avatar, index) => (
                <AvatarItem key={`${avatar.type}-${avatar.id}-${index}`}>
                  {avatar.preview && (
                    <AvatarImage
                      src={avatar.preview}
                      alt={avatar.name || "Avatar"}
                    />
                  )}
                  <AvatarInfo>
                    <AvatarName>{avatar.name || "Brak nazwy"}</AvatarName>
                    <AvatarId>ID: {avatar.id}</AvatarId>
                    <AvatarType>
                      {avatar.type === "avatar" ? "Awatar" : "Talking Photo"}
                    </AvatarType>
                  </AvatarInfo>
                </AvatarItem>
              ))}
            </AvatarsGrid>
          </AvatarsScrollContainer>
        </>
      )}
    </AvatarsContainer>
  );
};

export default AvatarsFromHeygen;
