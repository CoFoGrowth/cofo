import {
  StyledHomeCta,
  CtaContainer,
  CtaCard,
  CtaTitle,
  CtaDescription,
  CtaButton,
} from "./StyledHomeCta";

const HomeCta = () => {
  return (
    <StyledHomeCta>
      <CtaContainer>
        <CtaCard>
          <CtaTitle>TECHNOLOGIA W ZASIĘGU RĘKI</CtaTitle>
          <CtaDescription>
            Wielu przedsiębiorców obawia się, że technologie są zbyt
            skomplikowane lub nieosiągalne. Jesteśmy tu, by przeprowadzić Cię
            przez każdy etap. Od pierwszego kontaktu po wdrożenie i wsparcie. Z
            nami technologia staje się prostym narzędziem, które działa na
            korzyść Twojego biznesu. Bez obaw – pomożemy Ci na każdym kroku.
          </CtaDescription>
          <CtaButton href="#kontakt">WSPÓŁPRACUJ Z NAMI</CtaButton>
        </CtaCard>
      </CtaContainer>
    </StyledHomeCta>
  );
};

export default HomeCta;
