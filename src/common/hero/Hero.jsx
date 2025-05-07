import {
  StyledHero,
  HeroWrapper,
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
import GalaxyBackground from "./GalaxyBackground";
import profileImage from "/src/assets/images/placeHolder.webp";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [userImage, setUserImage] = useState(imageSrc);
  const [userName, setUserName] = useState(title);
  const [instagramLink, setInstagramLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const loggedInUser = localStorage.getItem("user");

      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);

        if (userData.userId) {
          try {
            const response = await axios.get(
              `https://api.airtable.com/v0/appJ0Fnjjn1oJdLEk/Users?filterByFormula=UserID="${userData.userId}"`,
              {
                headers: {
                  Authorization: `Bearer pat9CmZDY2QnawlZv.f8531fe9cf7ccb09232a87a3e3dc2d2807d4ed532c3c160d016d284862ad01f5`,
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.data.records.length > 0) {
              const user = response.data.records[0];

              // Pobierz nazwę użytkownika
              if (user.fields.Username) {
                setUserName(`Cześć, ${user.fields.Username}`);
              }

              // Pobierz zdjęcie użytkownika
              if (user.fields.UserImg && user.fields.UserImg.length > 0) {
                setUserImage(user.fields.UserImg[0].url);
              }

              // Pobierz linki społecznościowe
              if (user.fields.Instagram) {
                setInstagramLink(user.fields.Instagram);
              }

              if (user.fields.TikTok) {
                setTiktokLink(user.fields.TikTok);
              }
            }
          } catch (error) {
            console.error("Błąd podczas pobierania danych użytkownika:", error);
          }
        }
      }
    };

    if (variant === "content") {
      fetchUserData();
    }
  }, [variant]);

  return (
    <>
      {variant === "home" && <GalaxyBackground />}
      <StyledHero className="container" $variant={variant}>
        <HeroWrapper $variant={variant}>
          <ContentContainer $variant={variant}>
            <SubTitle $variant={variant}>{subtitle}</SubTitle>
            {variant === "home" ? (
              <Title
                $variant={variant}
                dangerouslySetInnerHTML={{
                  __html: title.replace(/\<br\>/g, "<br/>"),
                }}
              />
            ) : (
              <Title $variant={variant}>{userName}</Title>
            )}

            {description && (
              <Description $variant={variant}>{description}</Description>
            )}

            {socialLinks && variant === "content" && (
              <SocialLinks>
                {instagramLink && (
                  <>
                    <a href={instagramLink} target="_blank" rel="noopener">
                      @Twój Instagram
                    </a>
                  </>
                )}
                {instagramLink && tiktokLink && <>, </>}
                {tiktokLink && (
                  <>
                    <a href={tiktokLink} target="_blank" rel="noopener">
                      @Twój TikTok
                    </a>
                  </>
                )}
              </SocialLinks>
            )}

            {buttons && variant === "content" && (
              <ButtonsContainer>
                <ButtonRow>
                  <StyledButton href="#kontakt">Stwórz viral</StyledButton>
                  <StyledButton href="#kontakt">
                    Wygeneruj nowe wideo
                  </StyledButton>
                </ButtonRow>

                <ButtonRow>
                  <StyledButton href="#kontakt">
                    Narzędzia sprzedaży
                  </StyledButton>
                  <StyledButton href="#kontakt">
                    Twoje automatyzacje
                  </StyledButton>
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
          <ImageContainer $variant={variant}>
            <ProfileImage src={userImage} alt={imageAlt} $variant={variant} />
          </ImageContainer>
        </HeroWrapper>
      </StyledHero>
    </>
  );
};

export default Hero;
