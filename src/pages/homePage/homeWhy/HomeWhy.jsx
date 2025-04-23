import {
  StyledHomeWhy,
  Container,
  ImageColumn,
  ContentColumn,
  ImageWrapper,
  CircleText,
  SubTitle,
  Title,
  Description,
} from "./StyledHomeWhy";
import teamImage from "../../../assets/images/LukaszRafalCoFo.webp";

const HomeWhy = () => {
  return (
    <StyledHomeWhy>
      <Container>
        <ImageColumn>
          <CircleText>
            <svg
              viewBox="0 0 180 180"
              height="150"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30,90a60,60 0 1,0 120,0a60,60 0 1,0 -120,0"
                id="circle-path"
                fill="none"
              />
              <text>
                <textPath href="#circle-path" startOffset="5%">
                  REWOLUCYJNE ROZWIĄZANIA AI
                </textPath>
              </text>
            </svg>
          </CircleText>
          <ImageWrapper>
            <img src={teamImage} alt="Rewolucyjne rozwiązania AI" />
          </ImageWrapper>
        </ImageColumn>

        <ContentColumn>
          <SubTitle>dlaczego ai?</SubTitle>
          <Title>
            Rozwiązania AI to przyszłość, która dzieje się na naszych oczach.
          </Title>
          <Description>
            Automatyzacja procesów, zwiększona efektywność i nowe horyzonty
            biznesowe – sztuczna inteligencja zmienia zasady gry w każdej
            branży. W świecie, gdzie każda sekunda ma znaczenie, AI daje Ci
            przewagę, nad całym rynkiem. W CoFo dostarczamy rozwiązania skrojone
            na miarę Twoich potrzeb. Inwestycja w AI niedługo i tak będzie
            częścią Twojego biznesu. Zrób to teraz, zrób to lepiej.
          </Description>
        </ContentColumn>
      </Container>
    </StyledHomeWhy>
  );
};

export default HomeWhy;
