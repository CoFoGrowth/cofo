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
import { useState } from "react";

const Forms = () => {
  const [formValues, setFormValues] = useState({});
  const [sliderValue, setSliderValue] = useState(50);
  const [formStatus, setFormStatus] = useState({
    viral: { submitted: false, loading: false },
    customScript: { submitted: false, loading: false },
    cofo: { submitted: false, loading: false },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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

    // Convert FormData to URLSearchParams for x-www-form-urlencoded format
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value);
    }

    // Timeout for showing success message even if the server doesn't respond
    const successTimeout = setTimeout(() => {
      console.log("Showing success message due to timeout");
      setFormStatus((prev) => ({
        ...prev,
        [formType]: { submitted: true, loading: false },
      }));

      // Reset form values
      form.reset();
      if (formType === "cofo") {
        setFormValues({});
        setSliderValue(50);
        document.getElementById("percentage").textContent = "50%";
      }
    }, 3000); // 3 seconds timeout

    // Send the form data
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })
      .then((response) => {
        // Clear timeout as we got a response
        clearTimeout(successTimeout);

        // Check if response is ok even if it's not valid JSON
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Try to parse JSON response, but continue even if it fails
        return response.text().then((text) => {
          try {
            return JSON.parse(text);
          } catch (e) {
            console.log(
              "Response is not valid JSON, but form was submitted:",
              text
            );
            return { success: true, message: "Form submitted successfully" };
          }
        });
      })
      .then((data) => {
        console.log("Success:", data);
        // Set submitted state
        setFormStatus((prev) => ({
          ...prev,
          [formType]: { submitted: true, loading: false },
        }));

        // Reset form after successful submission
        form.reset();

        // Reset form values
        if (formType === "cofo") {
          setFormValues({});
          setSliderValue(50);
          document.getElementById("percentage").textContent = "50%";
        }
      })
      .catch((error) => {
        // Clear timeout as we got a response (even if it's an error)
        clearTimeout(successTimeout);

        console.error("Error submitting form:", error);
        // Still show success message even on error (for better UX)
        setFormStatus((prev) => ({
          ...prev,
          [formType]: { submitted: true, loading: false },
        }));

        // Reset form even on error
        form.reset();

        // Reset form values
        if (formType === "cofo") {
          setFormValues({});
          setSliderValue(50);
          document.getElementById("percentage").textContent = "50%";
        }
      });
  };

  return (
    <StyledForms>
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
                  <HiddenInput
                    name="Viral"
                    defaultValue="Cześć, to jest fajny, niestandardowy prompt od Cofo do stworzenia Virala dla ciebie!"
                  />

                  <FormField>
                    <FormSelect
                      name="Wybierz awatara"
                      required
                      defaultValue="Rafal"
                    >
                      <option value="Rafal">Rafal</option>
                      <option value="Chad in Blue Shirt (Upper Body)">
                        Chad in Blue Shirt (Upper Body)
                      </option>
                      <option value="Daisy in T-shirt">Daisy in T-shirt</option>
                      <option value="Francis in Blazer (Upper Body)">
                        Francis in Blazer (Upper Body)
                      </option>
                      <option value="Rafal Final 2.mp4">
                        Rafal Final 2.mp4
                      </option>
                    </FormSelect>

                    <SelectWrapper>
                      <CaretDown />
                    </SelectWrapper>
                  </FormField>

                  <HiddenInput name="client_id" defaultValue="0001" />
                  <HiddenInput
                    name="avatar_id"
                    defaultValue="926a8ba693cf47be97837d16b20a694b"
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
                      onChange={handleChange}
                      value={formValues["Wklej swój skrypt:"] || ""}
                    />
                    <FormLabel $isTextarea>Wklej swój skrypt</FormLabel>
                  </FormField>

                  <FormField>
                    <FormSelect
                      name="Wybierz awatara"
                      required
                      defaultValue="Rafal"
                    >
                      <option value="Rafal">Rafal</option>
                      <option value="Chad in Blue Shirt (Upper Body)">
                        Chad in Blue Shirt (Upper Body)
                      </option>
                      <option value="Daisy in T-shirt">Daisy in T-shirt</option>
                      <option value="Francis in Blazer (Upper Body)">
                        Francis in Blazer (Upper Body)
                      </option>
                      <option value="Rafal Final 2.mp4">
                        Rafal Final 2.mp4
                      </option>
                    </FormSelect>

                    <SelectWrapper>
                      <CaretDown />
                    </SelectWrapper>
                  </FormField>

                  <HiddenInput name="client_id" defaultValue="0001" />
                  <HiddenInput
                    name="avatar_id"
                    defaultValue="926a8ba693cf47be97837d16b20a694b"
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
                    defaultValue="Rafal"
                  >
                    <option value="Rafal">Rafal</option>
                    <option value="Chad in Blue Shirt (Upper Body)">
                      Chad in Blue Shirt (Upper Body)
                    </option>
                    <option value="Daisy in T-shirt">Daisy in T-shirt</option>
                    <option value="Francis in Blazer (Upper Body)">
                      Francis in Blazer (Upper Body)
                    </option>
                    <option value="Rafal Final 2.mp4">Rafal Final 2.mp4</option>
                  </FormSelect>

                  <SelectWrapper>
                    <CaretDown />
                  </SelectWrapper>
                </FormField>

                <FormField>
                  <FormSelect name="Cel video" required defaultValue="sprzedaż">
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  <HiddenInput name="slider_value" value={sliderValue} />
                </FormField>

                <FormField>
                  <FormInput
                    type="text"
                    name="Strona www"
                    placeholder=" "
                    onChange={handleChange}
                    value={formValues["Strona www"] || ""}
                  />
                  <FormLabel>Strona www</FormLabel>
                </FormField>

                <FormField>
                  <FormInput
                    type="text"
                    name="Konto na Instagramie (np. @cofo.pl)"
                    placeholder=" "
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={formValues["Adres e-mail:"] || ""}
                  />
                  <FormLabel>Adres e-mail</FormLabel>
                </FormField>

                <FormField>
                  <FormTextarea
                    name="Twój prompt"
                    rows="4"
                    placeholder=" "
                    onChange={handleChange}
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
                    Zgadzam się na wszystko, co mi powie CoFo kiedykolwiek w
                    życiu. CoFo is life, CoFo is AI.
                  </FormLabel>
                </FormField>

                <HiddenInput
                  name="avatar_id"
                  value="926a8ba693cf47be97837d16b20a694b"
                />
                <HiddenInput name="client_id" value="0001" />

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
            <VideosGrid>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1BRnV-XL14Zh4FY3MFLJ4U59BoHZ5F0SW/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>processed_1744631287070.mp4</VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1SC-88fdoMACFORQRNhbrazcVclPqRDxl/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>original_1744631287070.mp4</VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1BdXxUeREgHABO-lXakiXBCwKizROeN4e/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>original_1744621372970.mp4</VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1HVUSCOakT8XTdKPOjeU3loJVhT-x-qjK/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>processed_1744619173795.mp4</VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1XkBt7jG_v3LsLH0sfum-vNZ3RyK1Hdm_/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>original_1744619173795.mp4</VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1ClyZjgqNVD4R-RPSpmW3T_PvMqDCrMLs/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>
                  custom_script_processed_1744618699899.mp4
                </VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1-Fct2QpTpD8r-NDYlIALEvtBHEjZ6kPn/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>
                  custom_script_original_1744618699899.mp4
                </VideoTitle>
              </VideoItem>
              <VideoItem>
                <iframe
                  src="https://drive.google.com/file/d/1d2hLE-3MlK2-pAUoeuF7_kZE5Asm-HRn/preview"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen
                />
                <VideoTitle>processed_1744023288981.mp4</VideoTitle>
              </VideoItem>
            </VideosGrid>
          </FormSection>
        </VideosContainer>
      </FormContainer>
    </StyledForms>
  );
};

export default Forms;
