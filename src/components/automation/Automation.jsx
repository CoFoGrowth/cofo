import {
  StyledAutomation,
  AutomationHeader,
  HeaderTitle,
  AutomationGrid,
  AutomationCard,
  CardTitle,
  CardDescription,
  CardButton,
  AutomationCardImage,
  StatsCard,
  StatsTitle,
  StatsValue,
  StatsDescription,
  ConsultationCard,
  ConsultationTitle,
  ConsultationText,
  ConsultationButton,
  WebinarCard,
  WebinarTitle,
  WebinarDescription,
  WebinarButton,
} from "./StyledAutomation";
import automationImage from "/src/assets/images/automatyzacja-scaled.webp";

const Automation = () => {
  return (
    <StyledAutomation className="container">
      <AutomationHeader>
        <HeaderTitle>Automatyzacje dostępne w Twoim pakiecie:</HeaderTitle>
      </AutomationHeader>

      <AutomationGrid>
        <AutomationCard $variant="primary">
          <CardTitle>TWÓJ CRM</CardTitle>
          <CardDescription>
            Twój pakiet: 50000 rekordów
            <br />
            Nielimitowane bazy danych
            <br />
            2500 automatyzacji / msc
          </CardDescription>
          <CardButton href="#">WEJŚCIE</CardButton>
          <AutomationCardImage src={automationImage} alt="CRM Automation" />
        </AutomationCard>

        <AutomationCard $variant="secondary">
          <CardTitle>AI DM SETTING</CardTitle>
          <CardDescription>
            Twój pakiet: 500 leadów
            <br />
            Automatyzacje z Airtable
            <br />
            250 głosówek / msc
          </CardDescription>
          <CardButton href="#">WEJŚCIE</CardButton>
        </AutomationCard>

        <StatsCard>
          <StatsValue>27</StatsValue>
          <StatsTitle>GODZIN W TYGODNIU</StatsTitle>
          <StatsDescription>
            Właśnie tyle czasu zaoszczędziłeś na podstawie naszych obliczeń.
            Dobra robota, trzymaj tak dalej!
          </StatsDescription>
        </StatsCard>

        <WebinarCard>
          <WebinarTitle>NADCHODZĄCY WEBINAR</WebinarTitle>
          <WebinarDescription>
            Dołącz do fascynującego webinaru, podczas którego Agnieszka Pala
            przeprowadzi Cię przez świat najnowszych technologii generatywnej
            sztucznej inteligencji. Poznasz praktyczne zastosowania narzędzi AI,
            takich jak ChatGPT, Midjourney czy DALL-E, oraz dowiesz się, jak
            mogą one wspierać Twoją pracę i kreatywność.
          </WebinarDescription>
          <WebinarButton href="#kontakt">
            ZAREZERWUJ MIEJSCE JAKO PIERWSZY
          </WebinarButton>
        </WebinarCard>

        <AutomationCard $variant="gradient">
          <CardTitle>AI DM SETTING</CardTitle>
          <CardDescription>
            Twój pakiet: 1 rolka + 1 story dziennie
            <br />
            Tokeny: 45671 / 100000
            <br />
            Wykorzystane video: 12
            <br />
            Wykorzystane rolki bez avatara: 10
            <br />
            Łącznie wygenerowałeś równowartość 6 dni zdjęciowych.
          </CardDescription>
          <CardButton href="#">WEJŚCIE</CardButton>
        </AutomationCard>

        <ConsultationCard>
          <ConsultationTitle>CHCESZ SIĘGNĄĆ PO WIĘCEJ?</ConsultationTitle>
          <ConsultationText>
            Pamiętaj, że w dowolnej chwili możesz zapytać nas o indywidualne
            konsultacje. Jesteśmy tu, żeby pomóc Twojemu biznesowi się rozwijać.
          </ConsultationText>
          <ConsultationButton href="#kontakt">
            UMÓW SIĘ NA SPOTKANIE
          </ConsultationButton>
        </ConsultationCard>
      </AutomationGrid>
    </StyledAutomation>
  );
};

export default Automation;
