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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj będzie logika wysyłania formularza
    console.log("Form submitted:", formData);
    alert("Wiadomość została wysłana. Dziękujemy!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <StyledHomeContact>
      <ContactContainer>
        <ContactTitle>Wyślij wiadomość, my zajmiemy się resztą.</ContactTitle>
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

          <SubmitButton type="submit">
            <i className="icons icon-envelope"></i>
            <span>Wyślij wiadomość</span>
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
