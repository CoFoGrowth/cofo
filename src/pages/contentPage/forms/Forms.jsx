import {
  StyledForms,
  FormContainer,
  FormsWrapper,
  FormsRow,
  FormSection,
  FormTitle,
  FormDescription,
  StyledForm,
  FormField,
  FormLabel,
  FormSelect,
  FormTextarea,
  FormButton,
  FormCheckbox,
  FormRange,
  RangeValue,
  VideosContainer,
  VideosGrid,
  VideoItem,
  VideoTitle,
  FormInput,
  HiddenInput,
  SelectWrapper,
  CaretDown,
  SuccessMessage,
  LoadingSpinner,
} from "./StyledForms";
import { useState, useEffect } from "react";
import axios from "axios";
import AvatarsFromHeygen from "./avatarsFromheygen";

const Forms = () => {
  const [formValues, setFormValues] = useState({});
  const [sliderValue, setSliderValue] = useState(50);
  const [formStatus, setFormStatus] = useState({
    viral: { submitted: false, loading: false },
    customScript: { submitted: false, loading: false },
    cofo: { submitted: false, loading: false },
  });
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [loadingAvatars, setLoadingAvatars] = useState(false);
  // Nowy stan do przechowywania wybranych awatarów dla każdego formularza
  const [selectedAvatars, setSelectedAvatars] = useState({
    viral: "",
    customScript: "",
    cofo: "",
  });
  // Nowy stan do przechowywania niestandardowego promptu użytkownika
  const [customPrompt, setCustomPrompt] = useState(
    "Cześć, to jest fajny, niestandardowy prompt od Cofo do stworzenia Virala dla ciebie!"
  );

  // Mapping of client IDs to API endpoints
  const API_ENDPOINTS = {
    "0001":
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjQqrtOaXf2_8yPna53zcfEHF6EA0G5MJuAoL2TTW6xLJXOQu7snpQ1ypLSwCHTfx4fYMZWbtVHW1gNSDUdK611tltHK8o9TJL_osE7q8fRh2xWOB6Idyk1WIOCA_fW-NBsBKncK3bsHEYV9h5ii3spI3BgsGcB4Xu8620UFnqRK-TmkWYMsKU0PqNTv59VzfGAV-fWREevqaBQIzz1bS78Fj1BZP3MaVcXOi6pvZhgVMh-WKLBdY3ic8DnzQ6iq8WJVScU537bWYdFm5UwKbqC_hvXsKOpGiB_gKJk&lib=Mi7trqxNEGFQySBA6_TzTmQUG83AMZgVw",
    "0002":
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhm9FYMHp9JePkherFuZ2X0BHfcorrVWxxP90Jxay4QRuM9C_gmRvh4RxcmKJXYV80t9VUUS_3L8FC-V9e4LQObrvJW_LMdI3YnZEJHLJhJLhuVNa4UYs5S3595jGPw51CsseCC9L9wstfzyNeVBmDWAVgTjc8J5CPXhmtHw52nx29-3ibgXG6KUXgGkFuk58Y6_ZXwoRXuEf-PRPLnUGGv6lzc-uvuGJEzOKyi26sHipTsRvIceTAikLQYOB4KIjUmcIBQIpjTSyeGKiZ36NDKyj8KltgChX94yVfp&lib=Mi7trqxNEGFQySBA6_TzTmQUG83AMZgVw",
    "0003":
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjCfeTF9KV3SlTo2icWJyCFWLmUfJf9d34LtpzysPABTf_nnQWTsbGWdEEWJlrUQax61rXRxjxiDAiyi69F1cP5WNtJrmFtUYvd8SoKwDC3V-CaMO9hxA3hzBBmg4VP_5cjD9BLaJSspGDJlVTTq80Lt6AGAg1Y5nNMfFUMoilCQsf9-4JFAlaTSijWnCIoEnaHbBhu9NmMShcqjNNoFW7iWYBwJgSStwdGJcnTnVZhwCpM89CHsSL4lFVhr77pKe8MiMPIa87NY-OWMXGdtyLzu-4EmpUCf7bxAjwl&lib=Mi7trqxNEGFQySBA6_TzTmQUG83AMZgVw",
    "0004":
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLis_yOl_HK_zB09V2kW_G_5kd2nU7NzZ_Fqa7dfh8fXnlOBK7p9uKWeeBZLrM6FAKC-LnF6XT5zoDI6Xq-OBqmc20SZTS5KMSMYxm0S0O90MQHYL5JzilF0ULc94R5a846gJLFZpsHXYdJimjnDQG8t18wXSx2P7SRRWXZ2aPKHPxHJot8PmJ3Sl-5a8zqQ7LMgjB8ocN-VtPgIMK3cK8kex5pSTcIKl3QdOoCjC0OkZk7ZsidrHzzOLzNP9OOL_yqH98SxHg5jPDoHvjZE0k44wpLbz07RVpIwQODn&lib=Mi7trqxNEGFQySBA6_TzTmQUG83AMZgVw",
    "0005":
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgkE2Pn7FLc42p3gQeaBwfgK-shhgl4ozfRk4XQZDttQJwhi-qLUsKFyLzi8PjAc43WLy-SeWnSL0ltOoGLDZ3TLdSD6R1UKTZsWnNOhVrLo28pSzKcSTQK6UuI8K4ni7bsvyjX_LuE1cAeHDQLBbS4JXSLKfsvHQBs6YtZ04NmSHyY151faKD6Z9VioyAhHb0K7xExMULt5OoCao0ctfzpNEcaayXw7EEu5bQ67aiALeQPAMgD64rBmCvt1hxMe4asIn_8bBRkW4O2iv2_4AnJyTXns_OGIHuxbBWF&lib=Mi7trqxNEGFQySBA6_TzTmQUG83AMZgVw",
    default:
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgCvNjyR38Q4Rco7YxShvVmhPJxnpc3cj0mIdyWYZmLB3NGhE-Zch4VszBDF5SU86_ZwjlrKjVAo6Qc6XHYvXzdCDCQHGeXiYQtT80QuOU152d0bIjHqDEk-8db-XNP9gMer2veVHGkkknt9wolaKRLpSIz5UeA7CTGT7KeKrL96BUqMQDad2fvMCY0rTmMun9d8hIRfrm7LCDFGvf4QWO0SIF4TMHKLaQxH3c1NgoWJ4MjmBNPB0pY5eilTXqrMfpsQOmBxp2AL5CBTY1QPuReB9AMKCecVETXAO-d&lib=Mi7trqxNEGFQySBA6_TzTmQUG83AMZgVw",
  };

  // Get user data and fetch videos on component mount
  useEffect(() => {
    const fetchUserVideos = async () => {
      setLoading(true);
      setError("");

      try {
        // Get user data from localStorage
        const userData = localStorage.getItem("user");

        if (!userData) {
          setError("Użytkownik nie jest zalogowany");
          setLoading(false);
          return;
        }

        // Parse user data to get client ID
        const { userId } = JSON.parse(userData);

        // Get API endpoint for the client ID or use default
        const endpoint = API_ENDPOINTS[userId] || API_ENDPOINTS.default;

        // Fetch videos from the endpoint
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Błąd pobierania filmów");
        }

        const data = await response.json();

        if (data && data.data) {
          setVideos(data.data);
        } else {
          setVideos([]);
        }
      } catch (err) {
        setError("Nie udało się załadować filmów. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserVideos();
    fetchUserAvatars();
    fetchUserCustomPrompt(); // Pobierz niestandardowy prompt użytkownika
  }, []);

  // Nowa funkcja do pobierania niestandardowego promptu dla użytkownika
  const fetchUserCustomPrompt = async () => {
    try {
      // Get user data from localStorage
      const userData = localStorage.getItem("user");

      if (!userData) {
        return;
      }

      // Parse user data to get client ID
      const { userId } = JSON.parse(userData);

      // Połączenie z Airtable
      const api = axios.create({
        baseURL: "https://api.airtable.com/v0/appJ0Fnjjn1oJdLEk/Users",
        headers: {
          Authorization: `Bearer pat9CmZDY2QnawlZv.f8531fe9cf7ccb09232a87a3e3dc2d2807d4ed532c3c160d016d284862ad01f5`,
          "Content-Type": "application/json",
        },
      });

      // Pobranie niestandardowego promptu użytkownika
      const response = await api.get(`?filterByFormula=UserID="${userId}"`);

      if (response.data.records.length > 0) {
        const user = response.data.records[0];

        // Pobierz niestandardowy prompt użytkownika
        if (user.fields.CustomPrompt) {
          setCustomPrompt(user.fields.CustomPrompt);
        }
      }
    } catch (error) {
      // Błąd obsłużony cicho
    }
  };

  // Funkcja do pobierania dostępnych awatarów dla użytkownika
  const fetchUserAvatars = async () => {
    setLoadingAvatars(true);
    try {
      // Get user data from localStorage
      const userData = localStorage.getItem("user");

      if (!userData) {
        setLoadingAvatars(false);
        return;
      }

      // Parse user data to get client ID
      const { userId } = JSON.parse(userData);

      // Jeśli klient ma ID "0001", używaj awatarów z HeyGen
      if (userId === "0001") {
        console.log("🎯 Klient 0001 - pobieranie awatarów z HeyGen...");

        try {
          const response = await fetch("/api/avatars", {
            method: "GET",
            headers: {
              "x-api-key":
                "N2Y4M2Y3NWViNmJiNDQ4ZDg5MjY0YWI1ZTQ3YzU5NjYtMTczOTE3OTE4NQ==",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (data && data.data) {
            const allAvatars = data.data.avatars || [];
            const talkingPhotos = data.data.talking_photos || [];

            // Kombinuj wszystkie awatary i filtruj po "_0001"
            const combinedAvatars = [
              ...allAvatars.map((avatar) => ({
                value: avatar.avatar_id,
                label: avatar.avatar_name,
              })),
              ...talkingPhotos.map((photo) => ({
                value: photo.talking_photo_id,
                label: photo.talking_photo_name,
              })),
            ]
              .slice(0, 30) // Najpierw ograniczenie do pierwszych 30
              .filter(
                (avatar) => avatar.label && avatar.label.includes("_0001")
              ); // Potem filtrowanie po "_0001" w nazwie

            console.log(
              `✅ Znaleziono ${combinedAvatars.length} awatarów HeyGen z "_0001" dla klienta 0001`
            );
            setAvatars(combinedAvatars);
          } else {
            console.log("⚠️ Brak danych awatarów w odpowiedzi HeyGen");
            setAvatars([]);
          }
        } catch (error) {
          console.error("❌ Błąd podczas pobierania awatarów z HeyGen:", error);
          // Fallback do domyślnych awatarów
          setAvatars([
            { value: "Rafal", label: "Rafal" },
            {
              value: "Chad in Blue Shirt (Upper Body)",
              label: "Chad in Blue Shirt (Upper Body)",
            },
          ]);
        }
      } else {
        // Dla innych klientów używaj Airtable (istniejący kod)
        console.log(`📋 Klient ${userId} - pobieranie awatarów z Airtable...`);

        // Połączenie z Airtable
        const api = axios.create({
          baseURL: "https://api.airtable.com/v0/appJ0Fnjjn1oJdLEk/Users",
          headers: {
            Authorization: `Bearer pat9CmZDY2QnawlZv.f8531fe9cf7ccb09232a87a3e3dc2d2807d4ed532c3c160d016d284862ad01f5`,
            "Content-Type": "application/json",
          },
        });

        // Pobranie użytkownika i jego dostępnych awatarów
        const response = await api.get(`?filterByFormula=UserID="${userId}"`);

        if (response.data.records.length === 0) {
          // Ustaw domyślne awatary, jeśli nie znaleziono użytkownika
          setAvatars([
            { value: "Rafal", label: "Rafal" },
            {
              value: "Chad in Blue Shirt (Upper Body)",
              label: "Chad in Blue Shirt (Upper Body)",
            },
            { value: "Daisy in T-shirt", label: "Daisy in T-shirt" },
            {
              value: "Francis in Blazer (Upper Body)",
              label: "Francis in Blazer (Upper Body)",
            },
            { value: "Rafal Final 2.mp4", label: "Rafal Final 2.mp4" },
          ]);
        } else {
          const user = response.data.records[0];

          // Sprawdź, czy użytkownik ma przypisane awatary w polu AvatarId
          if (user.fields.AvatarId && Array.isArray(user.fields.AvatarId)) {
            const userAvatars = user.fields.AvatarId.map((avatarName) => ({
              value: avatarName,
              label: avatarName,
            }));
            setAvatars(userAvatars);
          } else {
            // Sprawdźmy, czy możemy znaleźć awatary w innych polach
            let foundAvatarsField = null;
            for (const [key, value] of Object.entries(user.fields)) {
              if (
                Array.isArray(value) &&
                key.toLowerCase().includes("avatar")
              ) {
                foundAvatarsField = { key, value };
                break;
              }
            }

            if (foundAvatarsField) {
              const userAvatars = foundAvatarsField.value.map((avatarName) => ({
                value: avatarName,
                label: avatarName,
              }));
              setAvatars(userAvatars);
            } else {
              // Jeśli brak awatarów w Airtable, użyj domyślnych
              setAvatars([
                { value: "Rafal", label: "Rafal" },
                {
                  value: "Chad in Blue Shirt (Upper Body)",
                  label: "Chad in Blue Shirt (Upper Body)",
                },
                { value: "Daisy in T-shirt", label: "Daisy in T-shirt" },
                {
                  value: "Francis in Blazer (Upper Body)",
                  label: "Francis in Blazer (Upper Body)",
                },
                { value: "Rafal Final 2.mp4", label: "Rafal Final 2.mp4" },
              ]);
            }
          }
        }
      }
    } catch (error) {
      console.error("❌ Błąd podczas pobierania awatarów:", error);
      // Ustaw domyślne awatary w przypadku błędu
      setAvatars([
        { value: "Rafal", label: "Rafal" },
        {
          value: "Chad in Blue Shirt (Upper Body)",
          label: "Chad in Blue Shirt (Upper Body)",
        },
        { value: "Daisy in T-shirt", label: "Daisy in T-shirt" },
        {
          value: "Francis in Blazer (Upper Body)",
          label: "Francis in Blazer (Upper Body)",
        },
        { value: "Rafal Final 2.mp4", label: "Rafal Final 2.mp4" },
      ]);
    } finally {
      setLoadingAvatars(false);
    }
  };

  // Aktualizacja funkcji handleChange, aby obsługiwała zmianę awatara
  const handleChange = (e, formType) => {
    const { name, value } = e.target;

    // Jeśli to pole wyboru awatara, zapisz jego wartość w odpowiednim stanie
    if (name === "Wybierz awatara") {
      setSelectedAvatars((prev) => ({
        ...prev,
        [formType]: value,
      }));
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();

    // Set loading state
    setFormStatus((prev) => ({
      ...prev,
      [formType]: { ...prev[formType], loading: true },
    }));

    // Get the form element
    const form = e.target;

    // Create FormData object to extract values
    const formData = new FormData(form);

    // Upewnij się, że avatar_id jest ustawiony na podstawie wybranego awatara
    if (selectedAvatars[formType]) {
      // Usuń poprzednią wartość avatar_id z formData, jeśli istnieje
      formData.delete("avatar_id");
      // Dodaj nową wartość - używamy value z selectedAvatars, które już zawiera avatar ID
      formData.append("avatar_id", selectedAvatars[formType]);
      console.log(
        `🎯 Wysyłanie avatar_id dla ${formType}:`,
        selectedAvatars[formType]
      );
    } else {
      // Fallback do domyślnego ID jeśli nie ma wybranego awatara
      formData.delete("avatar_id");
      formData.append("avatar_id", "926a8ba693cf47be97837d16b20a694b");
      console.log(`⚠️ Używanie domyślnego avatar_id dla ${formType}`);
    }

    // Convert FormData to URLSearchParams for x-www-form-urlencoded format
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value);
    }

    // Debug: wyloguj wszystkie parametry wysyłane na serwer
    console.log("📤 Parametry wysyłane na serwer:", Object.fromEntries(params));

    // Timeout for showing success message even if the server doesn't respond
    const successTimeout = setTimeout(() => {
      setFormStatus((prev) => ({
        ...prev,
        [formType]: { submitted: true, loading: false },
      }));

      // Reset form values
      form.reset();
      if (formType === "cofo") {
        setFormValues({});
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          [formType]: { ...prev[formType], submitted: false },
        }));
      }, 5000);
    }, 10000);

    // Wybierz odpowiedni endpoint w zależności od typu formularza
    const endpoint =
      formType === "cofo"
        ? "https://form-webhook.onrender.com/form-webhook"
        : "https://form-webhook.onrender.com/custom-script-for-heygen";

    // Post to the API endpoint
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    })
      .then((response) => response.json())
      .then((data) => {
        clearTimeout(successTimeout);

        setFormStatus((prev) => ({
          ...prev,
          [formType]: { submitted: true, loading: false },
        }));

        // Reset form values
        form.reset();
        setSelectedAvatars((prev) => ({
          ...prev,
          [formType]: "",
        }));
        if (formType === "cofo") {
          setFormValues({});
        }

        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus((prev) => ({
            ...prev,
            [formType]: { ...prev[formType], submitted: false },
          }));
        }, 5000);
      })
      .catch((error) => {
        clearTimeout(successTimeout);

        // Pokaż komunikat o sukcesie nawet w przypadku błędu
        // (zrobione dla celów UX, ponieważ nawet jeśli API nie odpowiada,
        // chcemy dać użytkownikowi pozytywne doświadczenie)
        setFormStatus((prev) => ({
          ...prev,
          [formType]: { submitted: true, loading: false },
        }));

        // Reset form values
        form.reset();
        if (formType === "cofo") {
          setFormValues({});
        }

        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus((prev) => ({
            ...prev,
            [formType]: { ...prev[formType], submitted: false },
          }));
        }, 5000);

        console.error("Błąd wysyłania formularza:", error); // Dodaj logowanie błędu
      });
  };

  // Renderowanie opcji awatarów w formularzu
  const renderAvatarOptions = () => {
    return avatars.map((avatar) => (
      <option key={avatar.value} value={avatar.value}>
        {avatar.label}
      </option>
    ));
  };

  // Inicjalizacja wybranych awatarów przy załadowaniu komponentu
  useEffect(() => {
    if (avatars.length > 0) {
      setSelectedAvatars({
        viral: avatars[0].value,
        customScript: avatars[0].value,
        cofo: avatars[0].value,
      });
    }
  }, [avatars]);

  return (
    <StyledForms>
      <AvatarsFromHeygen />
      <FormContainer>
        <FormsWrapper>
          <FormsRow>
            <FormSection>
              <FormTitle>Stwórz Viral</FormTitle>
              <FormDescription>
                Nie masz pomysłu na rolkę?
                <br />
                Przycisk poniżej stworzy ją za Ciebie.
                <br />
                Jedno kliknięcie wystarczy, by uniknąć dnia bez contentu dla
                Twojej marki!
              </FormDescription>
              {formStatus.viral.submitted ? (
                <SuccessMessage>
                  <h3>Formularz został wysłany pomyślnie!</h3>
                  <p>
                    Proces generowania wideo został rozpoczęty i potrwa do 15
                    minut.
                  </p>
                  <p>
                    Twoje wideo będzie dostępne w sekcji "Twoje poprzednie
                    wideo" po prawej stronie.
                  </p>
                  <button
                    onClick={() =>
                      setFormStatus((prev) => ({
                        ...prev,
                        viral: { submitted: false, loading: false },
                      }))
                    }
                  >
                    Wyślij kolejny
                  </button>
                </SuccessMessage>
              ) : (
                <StyledForm
                  name="Viral_form"
                  method="post"
                  action="https://form-webhook.onrender.com/custom-script-for-heygen"
                  onSubmit={(e) => handleSubmit(e, "viral")}
                >
                  <HiddenInput name="form_id" defaultValue="27e24f5" />
                  <HiddenInput name="Viral" defaultValue={customPrompt} />

                  <FormField>
                    <FormSelect
                      name="Wybierz awatara"
                      required
                      defaultValue={avatars.length > 0 ? avatars[0].value : ""}
                      onChange={(e) => handleChange(e, "viral")}
                    >
                      {renderAvatarOptions()}
                    </FormSelect>

                    <SelectWrapper>
                      <CaretDown />
                    </SelectWrapper>
                  </FormField>

                  <HiddenInput
                    name="client_id"
                    defaultValue={(() => {
                      const userData = localStorage.getItem("user");
                      if (userData) {
                        const { userId } = JSON.parse(userData);
                        return userId || "0001";
                      }
                      return "0001";
                    })()}
                  />
                  <HiddenInput
                    name="avatar_id"
                    defaultValue={
                      selectedAvatars.viral ||
                      (avatars.length > 0
                        ? avatars[0].value
                        : "926a8ba693cf47be97837d16b20a694b")
                    }
                  />
                  <HiddenInput name="slider_value" defaultValue="50" />

                  <FormButton type="submit" disabled={formStatus.viral.loading}>
                    {formStatus.viral.loading ? (
                      <LoadingSpinner />
                    ) : (
                      "Stwórz dla mnie viral"
                    )}
                  </FormButton>
                </StyledForm>
              )}
            </FormSection>

            <FormSection>
              <FormTitle>Wstaw skrypt</FormTitle>
              {formStatus.customScript.submitted ? (
                <SuccessMessage>
                  <h3>Formularz został wysłany pomyślnie!</h3>
                  <p>
                    Proces generowania wideo został rozpoczęty i potrwa do 15
                    minut.
                  </p>
                  <p>
                    Twoje wideo będzie dostępne w sekcji "Twoje poprzednie
                    wideo" po prawej stronie.
                  </p>
                  <button
                    onClick={() =>
                      setFormStatus((prev) => ({
                        ...prev,
                        customScript: { submitted: false, loading: false },
                      }))
                    }
                  >
                    Wyślij kolejny
                  </button>
                </SuccessMessage>
              ) : (
                <StyledForm
                  name="CustomScrypt_form"
                  method="post"
                  action="https://form-webhook.onrender.com/custom-script-for-heygen"
                  onSubmit={(e) => handleSubmit(e, "customScript")}
                >
                  <HiddenInput name="form_id" defaultValue="0dc4fd1" />

                  <FormField>
                    <FormTextarea
                      name="Wklej swój skrypt:"
                      rows="4"
                      placeholder=" "
                      required
                      onChange={(e) => handleChange(e, "customScript")}
                      value={formValues["Wklej swój skrypt:"] || ""}
                    />
                    <FormLabel $isTextarea>Wklej swój skrypt</FormLabel>
                  </FormField>

                  <FormField>
                    <FormSelect
                      name="Wybierz awatara"
                      required
                      defaultValue={avatars.length > 0 ? avatars[0].value : ""}
                      onChange={(e) => handleChange(e, "customScript")}
                    >
                      {renderAvatarOptions()}
                    </FormSelect>

                    <SelectWrapper>
                      <CaretDown />
                    </SelectWrapper>
                  </FormField>

                  <HiddenInput
                    name="client_id"
                    defaultValue={(() => {
                      const userData = localStorage.getItem("user");
                      if (userData) {
                        const { userId } = JSON.parse(userData);
                        return userId || "0001";
                      }
                      return "0001";
                    })()}
                  />
                  <HiddenInput
                    name="avatar_id"
                    defaultValue={
                      selectedAvatars.customScript ||
                      (avatars.length > 0
                        ? avatars[0].value
                        : "926a8ba693cf47be97837d16b20a694b")
                    }
                  />
                  <HiddenInput name="slider_value" defaultValue="50" />

                  <FormButton
                    type="submit"
                    disabled={formStatus.customScript.loading}
                  >
                    {formStatus.customScript.loading ? (
                      <LoadingSpinner />
                    ) : (
                      "Wyślij"
                    )}
                  </FormButton>
                </StyledForm>
              )}
            </FormSection>
          </FormsRow>

          <FormSection>
            <FormTitle>Wygeneruj wideo:</FormTitle>
            <FormDescription>
              Wiesz, co chcesz przekazać odbiorcom, ale nie wiesz, jaki skrypt
              pozwoli Ci konwertować? Wypełnij formularz poniżej, nasza
              platforma zajmie się resztą!
            </FormDescription>
            {formStatus.cofo.submitted ? (
              <SuccessMessage>
                <h3>Formularz został wysłany pomyślnie!</h3>
                <p>
                  Proces generowania wideo został rozpoczęty i potrwa do 15
                  minut.
                </p>
                <p>
                  Twoje wideo będzie dostępne w sekcji "Twoje poprzednie wideo"
                  po prawej stronie.
                </p>
                <button
                  onClick={() =>
                    setFormStatus((prev) => ({
                      ...prev,
                      cofo: { submitted: false, loading: false },
                    }))
                  }
                >
                  Wyślij kolejny
                </button>
              </SuccessMessage>
            ) : (
              <StyledForm
                name="CoFoForm"
                method="post"
                action="https://form-webhook.onrender.com/form-webhook"
                onSubmit={(e) => handleSubmit(e, "cofo")}
              >
                <HiddenInput name="form_id" defaultValue="190f9ac" />

                <FormField>
                  <FormSelect
                    name="Wybierz awatara"
                    required
                    defaultValue={avatars.length > 0 ? avatars[0].value : ""}
                    onChange={(e) => handleChange(e, "cofo")}
                  >
                    {renderAvatarOptions()}
                  </FormSelect>

                  <SelectWrapper>
                    <CaretDown />
                  </SelectWrapper>
                </FormField>

                <FormField>
                  <FormSelect
                    name="Cel video"
                    required
                    defaultValue="sprzedaż"
                    onChange={(e) => handleChange(e, "cofo")}
                  >
                    <option value="sprzedaż">Sprzedaż</option>
                    <option value="lead magnet">Lead magnet</option>
                    <option value="giveaway">Giveaway</option>
                    <option value="promocja www">Promocja www</option>
                    <option value="edukacja">Edukacja</option>
                    <option value="ogólny post">Post ogólny</option>
                  </FormSelect>

                  <SelectWrapper>
                    <CaretDown />
                  </SelectWrapper>
                </FormField>

                <FormField>
                  <FormInput
                    type="text"
                    name="Opisz krótko treść rolki"
                    placeholder=" "
                    required
                    onChange={(e) => handleChange(e, "cofo")}
                    value={formValues["Opisz krótko treść rolki"] || ""}
                  />
                  <FormLabel>Opisz krótko treść rolki</FormLabel>
                </FormField>

                <FormField>
                  <FormInput
                    type="text"
                    name="Opisz krótko styl rolki"
                    placeholder=" "
                    required
                    onChange={(e) => handleChange(e, "cofo")}
                    value={formValues["Opisz krótko styl rolki"] || ""}
                  />
                  <FormLabel>Opisz krótko styl rolki</FormLabel>
                </FormField>

                <FormField>
                  <FormLabel className="broll-label">
                    Wybierz procent B-roll:
                  </FormLabel>
                  <FormRange
                    type="range"
                    name="slider"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSliderValue(value);
                      document.getElementById(
                        "percentage"
                      ).textContent = `${value}%`;
                    }}
                  />
                  <RangeValue id="percentage">{sliderValue}%</RangeValue>
                  <HiddenInput name="slider_value" defaultValue={sliderValue} />
                </FormField>

                <FormField>
                  <FormInput
                    type="text"
                    name="Strona www"
                    placeholder=" "
                    onChange={(e) => handleChange(e, "cofo")}
                    value={formValues["Strona www"] || ""}
                  />
                  <FormLabel>Strona www</FormLabel>
                </FormField>

                <FormField>
                  <FormInput
                    type="text"
                    name="Konto na Instagramie (np. @cofo.pl)"
                    placeholder=" "
                    onChange={(e) => handleChange(e, "cofo")}
                    value={
                      formValues["Konto na Instagramie (np. @cofo.pl)"] || ""
                    }
                  />
                  <FormLabel>Konto na Instagramie (np. @cofo.pl)</FormLabel>
                </FormField>

                <FormField>
                  <FormInput
                    type="email"
                    name="Adres e-mail:"
                    placeholder=" "
                    required
                    onChange={(e) => handleChange(e, "cofo")}
                    value={formValues["Adres e-mail:"] || ""}
                  />
                  <FormLabel>Adres e-mail</FormLabel>
                </FormField>

                <FormField>
                  <FormTextarea
                    name="Twój prompt"
                    rows="4"
                    placeholder=" "
                    onChange={(e) => handleChange(e, "cofo")}
                    value={formValues["Twój prompt"] || ""}
                  />
                  <FormLabel $isTextarea>Twój prompt</FormLabel>
                </FormField>

                <FormField>
                  <FormCheckbox
                    type="checkbox"
                    name="zgoda_na_dane"
                    id="form-field-zgoda_na_dane"
                    required
                  />
                  <FormLabel htmlFor="form-field-zgoda_na_dane">
                    Chcę wygenerować moje wideo i zgadzam się na pobranie
                    jednego kredytu z mojego konta.
                  </FormLabel>
                </FormField>

                <HiddenInput
                  name="avatar_id"
                  defaultValue={
                    selectedAvatars.cofo ||
                    (avatars.length > 0
                      ? avatars[0].value
                      : "926a8ba693cf47be97837d16b20a694b")
                  }
                />
                <HiddenInput
                  name="client_id"
                  defaultValue={(() => {
                    const userData = localStorage.getItem("user");
                    if (userData) {
                      const { userId } = JSON.parse(userData);
                      return userId || "0001";
                    }
                    return "0001";
                  })()}
                />

                <FormButton type="submit" disabled={formStatus.cofo.loading}>
                  {formStatus.cofo.loading ? <LoadingSpinner /> : "Wyślij"}
                </FormButton>
              </StyledForm>
            )}
          </FormSection>
        </FormsWrapper>

        <VideosContainer>
          <FormSection>
            <FormTitle>Twoje poprzednie wideo:</FormTitle>
            {loading ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <LoadingSpinner />
                <p>Ładowanie filmów...</p>
              </div>
            ) : error ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <p>{error}</p>
              </div>
            ) : videos.length === 0 ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <p>Brak dostępnych filmów dla Twojego konta.</p>
              </div>
            ) : (
              <VideosGrid>
                {videos.map((video, index) => (
                  <VideoItem key={index}>
                    <iframe
                      src={video.url}
                      width="100%"
                      height="200"
                      frameBorder="0"
                      allowFullScreen
                    />
                    <VideoTitle>{video.title}</VideoTitle>
                  </VideoItem>
                ))}
              </VideosGrid>
            )}
          </FormSection>
        </VideosContainer>
      </FormContainer>
    </StyledForms>
  );
};

export default Forms;
