import {
  StyledHero,
  ImageContainer,
  ContentContainer,
  SubTitle,
  Title,
  SocialLinks,
  ButtonsContainer,
  ButtonRow,
  StyledButton,
  ProfileImage,
} from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <ImageContainer>
        <ProfileImage
          src="https://cofo.pl/wp-content/uploads/2025/01/Jakub-Bodys-CoFo-Email-footer-1024x1024.png"
          alt="Jakub Bodys"
        />
      </ImageContainer>

      <ContentContainer>
        <SubTitle>Twoja strefa contentu</SubTitle>
        <Title>Cześć, Jakub Bodys</Title>
        <SocialLinks>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/jakubodys"
            target="_blank"
            rel="noopener"
          >
            @jakubodys
          </a>
          , TikTok:{" "}
          <a
            href="https://www.tiktok.com/@jakubodys"
            target="_blank"
            rel="noopener"
          >
            @jakubodys
          </a>
        </SocialLinks>

        <ButtonsContainer>
          <ButtonRow>
            <StyledButton href="#kontakt">Stwórz viral</StyledButton>
            <StyledButton href="#kontakt">Wygeneruj nowe wideo</StyledButton>
          </ButtonRow>

          <ButtonRow>
            <StyledButton href="#kontakt">Narzędzia sprzedaży</StyledButton>
            <StyledButton href="#kontakt">Twoje automatyzacje</StyledButton>
          </ButtonRow>

          <ButtonRow>
            <StyledButton href="#kontakt">
              Dodaj nowy wygląd avatara
            </StyledButton>
            <StyledButton href="#kontakt">Zgłoś problemy</StyledButton>
          </ButtonRow>
        </ButtonsContainer>
      </ContentContainer>
    </StyledHero>
  );
};

export default Hero;
