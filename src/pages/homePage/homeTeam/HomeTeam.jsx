import { useState } from "react";
import {
  StyledHomeTeam,
  TeamContainer,
  TeamHeader,
  TeamSubTitle,
  TeamTitle,
  TeamGrid,
  TeamCard,
  TeamMemberImage,
  TeamRole,
  TeamInfoOverlay,
  TeamMemberName,
  TeamMemberSpeciality,
  TeamInfoBoxes,
  TeamInfoBox,
  TeamInfoBoxTitle,
  TeamInfoBoxText,
  TeamDescription,
  TeamButton,
} from "./StyledHomeTeam";

// Import zdjęć zespołu
import rafalImage from "../../../assets/images/RafalAugustyn-scaled-1.jpg";
import lukaszImage from "../../../assets/images/LukaszStolarczyk-scaled-1.jpg";
import jakubImage from "../../../assets/images/Jakub-Bodys-scaled-1.webp";

const TeamMember = ({
  image,
  name,
  role,
  specialization,
  team,
  specialty,
  description,
  delay,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TeamCard
      delay={delay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TeamMemberImage src={image} alt={name} />
      <TeamRole>{role}</TeamRole>

      <TeamInfoOverlay isHovered={isHovered}>
        <TeamMemberName>{name}</TeamMemberName>
        <TeamMemberSpeciality>{specialization}</TeamMemberSpeciality>

        <TeamInfoBoxes>
          <TeamInfoBox>
            <TeamInfoBoxTitle>ZESPÓŁ</TeamInfoBoxTitle>
            <TeamInfoBoxText>{team}</TeamInfoBoxText>
          </TeamInfoBox>

          <TeamInfoBox>
            <TeamInfoBoxTitle>SPECJALIZACJA</TeamInfoBoxTitle>
            <TeamInfoBoxText>{specialty}</TeamInfoBoxText>
          </TeamInfoBox>
        </TeamInfoBoxes>

        <TeamDescription>{description}</TeamDescription>
        <TeamButton href="#kontakt-cta">WSPÓŁPRACUJ ZE MNĄ</TeamButton>
      </TeamInfoOverlay>
    </TeamCard>
  );
};

const HomeTeam = () => {
  return (
    <StyledHomeTeam>
      <TeamContainer>
        <TeamHeader>
          <TeamSubTitle>WYbierz swoją ściezkę</TeamSubTitle>
          <TeamTitle>ROZWIŃ SWÓJ BIZNES</TeamTitle>
        </TeamHeader>

        <TeamGrid>
          <TeamMember
            image={rafalImage}
            name="RAFAŁ AUGUSTYN"
            role="CEO, CO-FUNDER"
            specialization="USTAL JASNY KIERUNEK"
            team="STRATEGIA"
            specialty="MISJA, STRATEGIA, WIZJA"
            description="Strategia może działać na Twoją korzyść. Ile decyzji podejmujesz intuicyjnie, zamiast opierać się na danych i sprawdzonych rozwiązaniach? Pomogę Ci wyznaczyć strategię by zbudować przewagę."
            delay="0s"
          />

          <TeamMember
            image={lukaszImage}
            name="ŁUKASZ STOLARCZYK"
            role="COO, CO-FUNDER"
            specialization="ZWIĘKSZ ILOŚĆ SPRZEDAŻY"
            team="SPRZEDAŻ"
            specialty="SPRZEDAŻ, LEJKI, CLOSING"
            description="Twoja sprzedaż może działać lepiej. Zastanów się, ile czasu i energii poświęcasz na procesy, które mogłyby być szybsze, prostsze i bardziej efektywne. Zwiększ wyniki, zmniejsz koszty i skupić się na rozwijaniu Twojego biznesu."
            delay="0.2s"
          />

          <TeamMember
            image={jakubImage}
            name="JAKUB BODYS"
            role="CTO"
            specialization="AUTOMATYZACJA PROCESÓW"
            team="TECHNOLOGIA"
            specialty="INNOWACJA, PROCESY, AI"
            description="Twój biznes potrzebuje automatyzacji. Pomyśl, ile godzin wkładasz dziennie w procesy, które mogłyby działać dla Ciebie. Jestem tu, żebyś zaoszczędził swoje pieniądze, zasoby, a przede wszystkim – swój czas."
            delay="0.4s"
          />
        </TeamGrid>
      </TeamContainer>
    </StyledHomeTeam>
  );
};

export default HomeTeam;
