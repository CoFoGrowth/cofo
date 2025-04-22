import {
  StyledHomeHero,
  ImageContainer,
  ContentContainer,
  SubTitle,
  Title,
  Description,
  HeroImage,
} from "./StyledHomeHero";

const HomeHero = ({ subtitle, title, description, imageSrc, imageAlt }) => {
  return (
    <StyledHomeHero className="container">
      <ContentContainer>
        <SubTitle>{subtitle}</SubTitle>
        <Title
          dangerouslySetInnerHTML={{
            __html: title.replace(/\<br\>/g, "<br/>"),
          }}
        />
        <Description>{description}</Description>
      </ContentContainer>
      <ImageContainer>
        <HeroImage src={imageSrc} alt={imageAlt} />
      </ImageContainer>
    </StyledHomeHero>
  );
};

export default HomeHero;
