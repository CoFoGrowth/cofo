import React from "react";
import {
  StyledHomeCta2,
  Container,
  ContentColumn,
  FormColumn,
  Subtitle,
  Title,
  Description,
  SocialButton,
  FormTitle,
  Form,
  FieldGroup,
  FormField,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "./StyledHomeCta2";

const HomeCta2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika obsługi formularza
  };

  return (
    <StyledHomeCta2 id="kontakt-cta">
      <Container>
        <ContentColumn>
          <Subtitle>GOTOWY NA ZMIANĘ?</Subtitle>
          <Title>ZRÓB PIERWSZY KROK.</Title>
          <Description>
            Nie czekaj na idealny moment – teraz jest najlepszy czas, by zacząć
            wprowadzać zmiany, które zrewolucjonizują Twój biznes. Jesteśmy
            tutaj, by Ci pomóc, odpowiedzieć na pytania i zaplanować działania,
            które będą prowadzić do sukcesu. Skontaktuj się z nami, a wspólnie
            ustalimy, jak technologia może wspierać Twój rozwój. Zrób pierwszy
            krok już teraz – resztą zajmiemy się my.
          </Description>
          <SocialButton
            href="https://www.instagram.com/cofo_pl/"
            target="_blank"
            rel="noopener"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
            SPRAWDŹ NASZ INSTAGRAM
          </SocialButton>
        </ContentColumn>

        <FormColumn>
          <FormTitle>ZACZNIJMY WSPÓŁPRACĘ</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">Imię i Nazwisko</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Imię i Nazwisko"
              />
            </FormField>

            <FieldGroup>
              <FormField>
                <Label htmlFor="phone">Numer telefonu*</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Numer telefonu"
                  required
                  pattern="[0-9()#&+*\-=.]+"
                />
              </FormField>

              <FormField>
                <Label htmlFor="email">Adres email*</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Adres email"
                  required
                />
              </FormField>
            </FieldGroup>

            <FormField>
              <Label htmlFor="message">Wiadomość</Label>
              <Textarea id="message" name="message" placeholder="Wiadomość" />
            </FormField>

            <SubmitButton type="submit">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
              Wyślij wiadomość
            </SubmitButton>
          </Form>
        </FormColumn>
      </Container>
    </StyledHomeCta2>
  );
};

export default HomeCta2;
