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
} from "./StyledForms";

const Forms = () => {
  return (
    <StyledForms className="container">
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
              <StyledForm name="Viral_form" method="post">
                <HiddenInput name="post_id" value="587" />
                <HiddenInput name="form_id" value="27e24f5" />
                <HiddenInput
                  name="referer_title"
                  value="AI dla Twojego biznesu | COFO technologia jutra"
                />
                <HiddenInput name="queried_id" value="587" />
                <HiddenInput
                  name="form_fields[hidden_form]"
                  value="Cześć, to jest fajny, niestandardowy prompt od Cofo do stworzenia Virala dla ciebie!"
                />

                <FormField>
                  <FormSelect name="form_fields[awatar]" required>
                    <option value="Rafal" selected>
                      Rafal
                    </option>
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

                <HiddenInput name="form_fields[client_id]" value="0001" />
                <HiddenInput
                  name="form_fields[avatar_id]"
                  value="926a8ba693cf47be97837d16b20a694b"
                />

                <FormButton type="submit">Stwórz dla mnie viral</FormButton>
              </StyledForm>
            </FormSection>

            <FormSection>
              <FormTitle>Wstaw skrypt</FormTitle>
              <StyledForm name="CustomScrypt_form" method="post">
                <HiddenInput name="post_id" value="587" />
                <HiddenInput name="form_id" value="0dc4fd1" />
                <HiddenInput
                  name="referer_title"
                  value="AI dla Twojego biznesu | COFO technologia jutra"
                />
                <HiddenInput name="queried_id" value="587" />

                <FormField>
                  <FormTextarea
                    name="form_fields[adres_email]"
                    rows="4"
                    placeholder=" "
                    required
                  />
                  <FormLabel isTextarea>Wklej swój skrypt</FormLabel>
                </FormField>

                <FormField>
                  <FormSelect name="form_fields[awatar]" required>
                    <option value="Rafal" selected>
                      Rafal
                    </option>
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

                <HiddenInput name="form_fields[client_id]" value="0001" />
                <HiddenInput
                  name="form_fields[avatar_id]"
                  value="926a8ba693cf47be97837d16b20a694b"
                />

                <FormButton type="submit">Wyślij</FormButton>
              </StyledForm>
            </FormSection>
          </FormsRow>

          <FormSection>
            <FormTitle>Wygeneruj wideo:</FormTitle>
            <FormDescription>
              Wiesz, co chcesz przekazać odbiorcom, ale nie wiesz, jaki skrypt
              pozwoli Ci konwertować? Wypełnij formularz poniżej, nasza
              platforma zajmie się resztą!
            </FormDescription>
            <StyledForm name="CoFoForm" method="post">
              <HiddenInput name="post_id" value="587" />
              <HiddenInput name="form_id" value="9950dfe" />
              <HiddenInput
                name="referer_title"
                value="AI dla Twojego biznesu | COFO technologia jutra"
              />
              <HiddenInput name="queried_id" value="587" />

              <FormField>
                <FormSelect name="form_fields[awatar]" required>
                  <option value="Rafal" selected>
                    Rafal
                  </option>
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
                <FormSelect name="form_fields[cel_video]" required>
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
                  name="form_fields[opis]"
                  placeholder=" "
                  required
                />
                <FormLabel>Opisz krótko treść rolki</FormLabel>
              </FormField>

              <FormField>
                <FormInput
                  type="text"
                  name="form_fields[koncepcja]"
                  placeholder=" "
                  required
                />
                <FormLabel>Opisz krótko styl rolki</FormLabel>
              </FormField>

              <FormField>
                <FormLabel className="broll-label">
                  Wybierz procent B-roll:
                </FormLabel>
                <FormRange
                  type="range"
                  name="form_fields[slider]"
                  min="0"
                  max="100"
                  defaultValue="50"
                  onChange={(e) => {
                    const value = e.target.value;
                    document.getElementById(
                      "percentage"
                    ).textContent = `${value}%`;
                  }}
                />
                <RangeValue id="percentage">50%</RangeValue>
                <HiddenInput
                  name="form_fields[slider_value]"
                  defaultValue="50"
                />
              </FormField>

              <FormField>
                <FormTextarea
                  name="form_fields[promt]"
                  rows="4"
                  placeholder=" "
                />
                <FormLabel isTextarea>Twój prompt</FormLabel>
              </FormField>

              <FormField>
                <FormCheckbox
                  type="checkbox"
                  name="form_fields[zgoda_na_dane]"
                  id="form-field-zgoda_na_dane"
                  required
                />
                <FormLabel htmlFor="form-field-zgoda_na_dane">
                  Zgadzam się na wszystko, co mi powie CoFo kiedykolwiek w
                  życiu. CoFo is life, CoFo is AI.
                </FormLabel>
              </FormField>

              <HiddenInput
                name="form_fields[avatar_id]"
                value="926a8ba693cf47be97837d16b20a694b"
              />
              <HiddenInput name="form_fields[client_id]" value="0001" />

              <FormButton type="submit">Wyślij</FormButton>
            </StyledForm>
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
