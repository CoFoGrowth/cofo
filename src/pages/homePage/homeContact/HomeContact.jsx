import { useState } from "react";
import {
  StyledHomeContact,
  ContactContainer,
  ContactTitle,
  StyledForm,
  FormRow,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  Hidden,
} from "./StyledHomeContact";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(
        "https://form-webhook.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            to: "cofogrowth@gmail.com",
            subject: "Nowa wiadomość z formularza kontaktowego",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Błąd HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Odpowiedź serwera:", data);

      // Sukces
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);

      // Po 5 sekundach ukryj komunikat o sukcesie
      if (submitSuccess) {
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    }
  };

  return (
    <StyledHomeContact>
      <ContactContainer>
        <ContactTitle>Wyślij wiadomość, my zajmiemy się resztą.</ContactTitle>

        {submitSuccess && (
          <div
            style={{
              backgroundColor: "rgba(46, 204, 113, 0.2)",
              border: "1px solid #2ecc71",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "20px",
              color: "#2ecc71",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się
            wkrótce.
          </div>
        )}

        {submitError && (
          <div
            style={{
              backgroundColor: "rgba(231, 76, 60, 0.2)",
              border: "1px solid #e74c3c",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "20px",
              color: "#e74c3c",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie
            później.
          </div>
        )}

        <StyledForm onSubmit={handleSubmit}>
          <FormGroup full>
            <Label htmlFor="name">Imię i Nazwisko</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Imię i Nazwisko"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Label htmlFor="phone">
                Numer telefonu<span style={{ color: "#ff7fc2" }}>*</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Numer telefonu"
                pattern="[0-9()#&+*-=.]+"
                title="Akceptowane są jedynie cyfry i znaki telefoniczne (#,-,*)"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                Adres email<span style={{ color: "#ff7fc2" }}>*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Adres email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>

          <FormGroup full>
            <Label htmlFor="message">Wiadomość</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Wiadomość"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            <i className="icons icon-envelope"></i>
            <span>{isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}</span>
          </SubmitButton>

          <Hidden>
            <label htmlFor="alt_s">Alternative:</label>
            <input type="text" id="alt_s" name="alt_s" />
          </Hidden>
        </StyledForm>
      </ContactContainer>
    </StyledHomeContact>
  );
};

export default HomeContact;
