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
        // Nowe awatary dodane przez użytkownika
        {
          id: "3c3ddaa1a99844c682d810290539fda8",
          name: "Balkon - biała koszula_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/3c3ddaa1a99844c682d810290539fda8/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "72119bafb4674537af105164001cf734",
          name: "Dom - czarna koszulka_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/72119bafb4674537af105164001cf734/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "bcd3a34820fa4aa9a417e3686e43acff",
          name: "Selfie - na zewnątrz_0001",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/bcd3a34820fa4aa9a417e3686e43acff/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        // Nowe awatary Zuzanny z nowymi głosami
        {
          id: "8682655562b3432d84bfe2189b492319",
          name: "Zuzanna_nowyNowy_1",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/8682655562b3432d84bfe2189b492319/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "d394a04b1c2548238d3b4953f739efe5",
          name: "Zuzanna_nowyNowy_2",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/d394a04b1c2548238d3b4953f739efe5/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "4d155442543b49d2b41590a4133e0444",
          name: "Zuzanna_nowyNowy_3",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/4d155442543b49d2b41590a4133e0444/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "9092040beff14d598eb8fc7a19050981",
          name: "Zuzanna_nowyNowy_4",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/9092040beff14d598eb8fc7a19050981/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "aad991539a724bd1a5ee733bc4c2e0dc",
          name: "Zuzanna_nowyNowy_5",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/aad991539a724bd1a5ee733bc4c2e0dc/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "9307c5ee4c124e6e9ab73c24aaeb7c49",
          name: "Zuzanna_nowyNowy_6",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/9307c5ee4c124e6e9ab73c24aaeb7c49/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "d0454740b1854f1e8ae4ed4d323e664d",
          name: "Zuzanna_nowyNowy_7",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/d0454740b1854f1e8ae4ed4d323e664d/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "73fcb4393f144904a39f2707443cb285",
          name: "Zuzanna_nowyNowy_8",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/73fcb4393f144904a39f2707443cb285/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        {
          id: "77746b1abab54cd4b7314bbe4ea35853",
          name: "Zuzanna_nowyNowy_9",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/77746b1abab54cd4b7314bbe4ea35853/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0001",
        },
        // Klient 0002
        {
          id: "ef912416d4dc4ed1b492a09ed7c6846a",
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
        // Klient 0003
        {
          id: "65d13e86b4294c749e3af7dbcd94a349",
          name: "Przemek Biała Koszula MAC v1",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/65d13e86b4294c749e3af7dbcd94a349/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0003",
        },
        {
          id: "a43bd672e8884c24a15cf9d4814d0270",
          name: "Przemek Biała Koszula MAC v2",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/a43bd672e8884c24a15cf9d4814d0270/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0003",
        },
        {
          id: "e673b8786d8e425eb8a1e35632c3893f",
          name: "Przemek Biała Koszula",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e673b8786d8e425eb8a1e35632c3893f/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0003",
        },
        {
          id: "ff3c90b413474336a876468b569ebe79",
          name: "Przemek Czarna Koszula",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/ff3c90b413474336a876468b569ebe79/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0003",
        },
        {
          id: "e55bd14a83b44605a32cd3a78aa26212",
          name: "Przemek Czarny Sweter Bok",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/e55bd14a83b44605a32cd3a78aa26212/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0003",
        },
        {
          id: "861d0719630446f5aeff671c1e4303b2",
          name: "Przemek Czarny Sweter Prosto",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/861d0719630446f5aeff671c1e4303b2/half/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0003",
        },
        // Klient 0004
        {
          id: "680c8f7675c7438481930d2346e338a7",
          name: "Lukasz",
          preview:
            "https://dynamic.heygen.ai/tr:h-720,c-at_max/avatar/v3/680c8f7675c7438481930d2346e338a7/full/2.2/preview_target.webp",
          type: "avatar",
          fullData: {},
          clientId: "0004",
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
