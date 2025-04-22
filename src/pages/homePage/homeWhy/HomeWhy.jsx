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
              viewBox="0 0 250.5 250.5"
              height="250.5"
              width="250.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                id="circle-path"
              ></path>
              <text>
                <textPath href="#circle-path" startOffset="0%">
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
