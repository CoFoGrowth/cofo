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

  // ZAKOMENTOWANE: Dane do HeyGen API (nie używane już)
  /*
  const API_TOKEN =
    "N2Y4M2Y3NWViNmJiNDQ4ZDg5MjY0YWI1ZTQ3YzU5NjYtMTczOTE3OTE4NQ==";
  const AVATARS_URL = "/api/avatars";
  */

  // Funkcja do pobierania awatarów
  const fetchAvatars = async () => {
    try {
      // Pobierz dane użytkownika z localStorage
      const userData = localStorage.getItem("user");
      if (!userData) {
        setError("Użytkownik nie jest zalogowany");
        setLoading(false);
        return;
      }

      const { userId } = JSON.parse(userData);
      console.log(`🚀 Używam awatarów na sztywno dla klienta ${userId}...`);
      setLoading(true);
      setError("");

      // ZAKOMENTOWANE: Logika pobierania z HeyGen API
      /*
      // Użyj lokalnego proxy endpoint (działa tylko na localhost przez Vite)
      const response = await fetch("/api/avatars", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

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
      */

      // NOWE: Awatary na sztywno dla różnych klientów
      const allAvatars = [
        // Klient 0001
        {
          id: "14bb685a7fe54b59a395a4653e300da9",
          name: "Biała Koszula_mieszkanie_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/14bb685a7fe54b59a395a4653e300da9/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "d19813e5217547fcaf5293181b0c39b5",
          name: "Czarna_koszula_mieszkanie_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/d19813e5217547fcaf5293181b0c39b5/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "3cafa5d8091843b3936f4a1592a39b84",
          name: "Czerwona_sukienka_hipnozy_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/f91cb72e3456475386b6f1a53e63a24c/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "117048e935de41deb14f39a0aa27661e",
          name: "Dom_pionowy_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/117048e935de41deb14f39a0aa27661e/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        // Nowe awatary z głosami dla klientki 0001
        {
          id: "fc0c0ebdd4da412a8325cec59911ff74",
          name: "Nowy głos_1_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e4f99e04c3a64759a8306695446a1315/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "88989364f8d34bd2b6a7aee2eef74910",
          name: "Nowy głos_2_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e4f99e04c3a64759a8306695446a1315/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "7de56ac82e184a3097f540696c1e2b1d",
          name: "Nowy głos_3_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e4f99e04c3a64759a8306695446a1315/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "74e3eac3e1d145b29b5a5ec2f06e6c2a",
          name: "Nowy głos_4_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e4f99e04c3a64759a8306695446a1315/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "d53fc781b5d54205b5b713d39906c8cd",
          name: "Nowy głos_5_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e4f99e04c3a64759a8306695446a1315/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        // Klient 0002
        {
          id: "649781898578442d936b70762071b79d",
          name: "CzerwonaKoszulka_0002",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/ef912416d4dc4ed1b492a09ed7c6846a/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0002",
        },
        {
          id: "90e61fb86ac74849ad13ba6b5ea70c8a",
          name: "RafałWSamochodzie_0002",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/90e61fb86ac74849ad13ba6b5ea70c8a/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0002",
        },
        {
          id: "61b861db8ead447fb481b621f2254273",
          name: "RafałKurtkaJeans_0002",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/61b861db8ead447fb481b621f2254273/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0002",
        },
        {
          id: "a33a613eacc547fb996f36cf6b3976d4",
          name: "RafałBlackOutfit_0002",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/a33a613eacc547fb996f36cf6b3976d4/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0002",
        },
      ];

      // Filtruj awatary dla aktualnie zalogowanego użytkownika
      const userAvatars = allAvatars.filter(
        (avatar) => avatar.clientId === userId
      );

      setAvatars(userAvatars);
      console.log(
        `✅ Załadowano ${userAvatars.length} awatarów dla klienta ${userId}`
      );
    } catch (err) {
      console.error("❌ Błąd:", err);
      // ZAKOMENTOWANE: Kod fallback nie jest już potrzebny
      /*
      console.log("🔄 Używam hardcoded awatarów jako fallback...");

      // Użyj hardcoded awatarów jako fallback
      const fallbackAvatars = [
        {
          id: "14bb685a7fe54b59a395a4653e300da9",
          name: "Biała Koszula_mieszkanie_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/14bb685a7fe54b59a395a4653e300da9/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
        },
        {
          id: "d19813e5217547fcaf5293181b0c39b5",
          name: "Czarna_koszula_mieszkanie_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/d19813e5217547fcaf5293181b0c39b5/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
        },
        {
          id: "3cafa5d8091843b3936f4a1592a39b84",
          name: "Czerwona_sukienka_hipnozy_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/f91cb72e3456475386b6f1a53e63a24c/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
        },
        {
          id: "117048e935de41deb14f39a0aa27661e",
          name: "Dom_pionowy_0001",
          preview:
            "https://files2.heygen.ai/avatar/v3/117048e935de41deb14f39a0aa27661e/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
        },
      ];

      setAvatars(fallbackAvatars);
      setError(""); // Nie pokazuj błędu, bo mamy fallback awatary
      */

      setError("Błąd ładowania awatarów");
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
