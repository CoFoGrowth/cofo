import {
  StyledHomeSolutions,
  SolutionsContainer,
  SolutionsHeader,
  SolutionsTitle,
  SolutionsGrid,
  CrmCard,
  CrmInfo,
  CrmImage,
  LeadGenCard,
  TimeCard,
  SocialMediaCard,
  SocialMediaInfo,
  SocialMediaVideo,
  AuditCard,
  CardTitle,
  CardText,
  IconBox,
  IconTitle,
  IconText,
  IconCircle,
  Button,
} from "./StyledHomeSolutions";

// Import obrazów
import crmImage from "../../../assets/images/automatyzacja-scaled.webp";

const HomeSolutions = () => {
  return (
    <StyledHomeSolutions>
      <SolutionsContainer>
        <SolutionsHeader>
          <SolutionsTitle>
            Wybierz rozwiązanie skrojone na miarę Twoich potrzeb
          </SolutionsTitle>
        </SolutionsHeader>

        <SolutionsGrid>
          {/* CRM System Card */}
          <CrmCard>
            <CrmInfo>
              <CardTitle>ZAUTOMATYZOWANE SYSTEMY CRM</CardTitle>
              <CardText>
                Cała Twoja sprzedaż w jednym miejscu. Klienci, leady, KPI, case
                study. Wykorzystaj 100% potencjału danych Twojego biznesu.
              </CardText>
            </CrmInfo>
            <CrmImage>
              <img src={crmImage} alt="Zautomatyzowane Systemy CRM" />
            </CrmImage>
          </CrmCard>

          {/* Lead Generation Card */}
          <LeadGenCard>
            <CardTitle>AI DM SETTING</CardTitle>
            <CardText>
              Jakościowe leady bez konieczności monitorowania przez DM setterów.
              Zwiększ swój closign rate do nawet 35%.
            </CardText>
          </LeadGenCard>

          {/* Social Media Card */}
          <SocialMediaCard>
            <SocialMediaInfo>
              <CardTitle>AI SOCIAL MEDIA CONTENT GENERATOR</CardTitle>
              <CardText>
                Media społecznościowe to kanał sprzedaży z największym
                potencjałem. Co, gdyby wygenerowanie 1000 rolek zajęło Ci tylko
                15 minut? Z AI Social Media Content Generatorem zautomatyzujesz
                najbardziej czasochłonny element Twojego biznesu.
              </CardText>
            </SocialMediaInfo>
            <SocialMediaVideo>
              <video
                autoPlay
                muted
                playsInline
                loop
                src="http://cofo.pl/wp-content/uploads/2025/01/Lukasz_cofo.mp4"
              />
            </SocialMediaVideo>
          </SocialMediaCard>

          {/* Time Savings Card */}
          <TimeCard>
            <IconBox>
              <IconTitle>40</IconTitle>
              <IconText>GODZIN W TYGODNIU</IconText>
            </IconBox>
            <CardText>
              Właśnie tyle czasu zaoszczędzisz dzięki optymalizacji Twojego
              binezsu z pomocą narzędzi AI.
            </CardText>
          </TimeCard>

          {/* Business Audit Card */}
          <AuditCard>
            <IconCircle>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
              </svg>
            </IconCircle>
            <CardTitle>PEŁNY AUDYT TWOJEJ FIRMY</CardTitle>
            <CardText>
              Zdecyduj się na pełną automatyzację. Umów się na spotkanie z
              naszym zespołem i dowiedz się, w jak wielu płaszczyznach może
              pomóc Ci sztuczna inteligencja. Razem przyjrzymy się Twoim
              procesom by znaleźć te, które zaoszczędzą Ci najwięcej czasu.
            </CardText>
            <Button href="#kontakt">UMÓW SIĘ NA SPOTKANIE</Button>
          </AuditCard>
        </SolutionsGrid>
      </SolutionsContainer>
    </StyledHomeSolutions>
  );
};

export default HomeSolutions;
