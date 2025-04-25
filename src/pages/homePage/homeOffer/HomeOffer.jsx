import {
  StyledHomeOffer,
  OfferContainer,
  GridLayout,
  VideoColumn,
  CardsColumn,
  VideoCard,
  InfoCard,
  SubTitle,
  Title,
  Description,
  Button,
  IconLink,
} from "./StyledHomeOffer";

const HomeOffer = () => {
  return (
    <StyledHomeOffer>
      <OfferContainer>
        <GridLayout>
          <VideoColumn>
            <VideoCard>
              <IconLink href="#">
                <i className="mdi mdi-call-made"></i>
              </IconLink>
              <SubTitle>W CO WIERZYMY</SubTitle>
              <Title>SPRZEDAŻ. INNOWACJA. STRATEGIA.</Title>
              <Description>
                Wierzymy, że sukces rodzi się na styku strategii, sprzedaży i
                innowacji. Działamy w oparciu o dane, kreujemy przyszłość dzięki
                nowoczesnym technologiom i pomagamy firmom osiągać więcej. Twoje
                cele są dla nas fundamentem, na którym budujemy inteligentne
                rozwiązania. Razem tworzymy przewagę, która trwa.
              </Description>
              <Button href="#kontakt-cta">ZACZNIJ WSPÓŁPRACĘ</Button>
            </VideoCard>
          </VideoColumn>

          <CardsColumn>
            <InfoCard animationType="down">
              <IconLink href="#">
                <i className="mdi mdi-call-made"></i>
              </IconLink>
              <SubTitle>CZEGO POTRZEBUJESZ</SubTitle>
              <Title size="1.8rem">
                Co pomoże Twojej firmie osiągnąć więcej?
              </Title>
              <Description>
                Efektywność to klucz do sukcesu. Automatyzacja procesów, lepsza
                strategia, narzędzia oparte na AI - wybierz to, co przybliży Cię
                do celu.
              </Description>
            </InfoCard>

            <InfoCard animationType="up">
              <IconLink href="#">
                <i className="mdi mdi-call-made"></i>
              </IconLink>
              <SubTitle>CO OFERUJEMY</SubTitle>
              <Title size="1.8rem">
                Rozwiązania skrojone na miarę Twojego biznesu.
              </Title>
              <Description>
                Każda firma jest inna, dlatego tworzymy rozwiązania dopasowane
                do Twoich potrzeb. Dostarczamy narzędzia, które zwiększają
                efektywność i odpowiadają na wyzwania Twojej branży.
              </Description>
            </InfoCard>
          </CardsColumn>
        </GridLayout>
      </OfferContainer>
    </StyledHomeOffer>
  );
};

export default HomeOffer;
