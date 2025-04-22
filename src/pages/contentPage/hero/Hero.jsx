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
  Description,
} from "./StyledHero";
import profileImage from "/src/assets/images/Jakub-Bodys.png";

const Hero = ({
  variant = "content",
  subtitle = "TWOJA STREFA CONTENTU",
  title = "Cześć, Jakub Bodys",
  description,
  imageSrc = profileImage,
  imageAlt = "Profile Image",
  socialLinks,
  buttons,
}) => {
  return (
    <StyledHero className="container" $variant={variant}>
      <ContentContainer>
        <SubTitle $variant={variant}>{subtitle}</SubTitle>
        {variant === "home" ? (
          <Title
            $variant={variant}
            dangerouslySetInnerHTML={{
              __html: title.replace(/\<br\>/g, "<br/>"),
            }}
          />
        ) : (
          <Title $variant={variant}>{title}</Title>
        )}

        {description && (
          <Description $variant={variant}>{description}</Description>
        )}

        {socialLinks && variant === "content" && (
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
        )}

        {buttons && variant === "content" && (
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
        )}
      </ContentContainer>
      <ImageContainer>
        <ProfileImage src={imageSrc} alt={imageAlt} $variant={variant} />
      </ImageContainer>
    </StyledHero>
  );
};

export default Hero;
