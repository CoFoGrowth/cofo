import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  StyledNavLink,
  NavigationContainer,
  BurgerMenu,
} from "./components/navigation/StyledNavLink";
import Auth from "./pages/authPage/Auth";
import Hero from "./pages/contentPage/hero/Hero";
import Forms from "./pages/contentPage/forms/Forms";
import HomeContact from "./pages/homePage/homeContact/HomeContact";
import HomeWhy from "./pages/homePage/homeWhy/HomeWhy";
import HomeOffer from "./pages/homePage/homeOffer/HomeOffer";
import HomeStats from "./pages/homePage/homeStats/HomeStats";
import HomeTeam from "./pages/homePage/homeTeam/HomeTeam";
import HomeCta from "./pages/homePage/homeCta/HomeCta";
import HomeCta2 from "./pages/homePage/homeCta2/HomeCta2";

// Import komponentów z common
import { Solutions } from "./common";

// Import obrazów na potrzeby przykładu
import automationImage from "./assets/images/automatyzacja-scaled.webp";
import cofoLogo from "./assets/images/cofologominimalistic-954x1024.webp";

const MainContent = styled.main`
  margin-top: 100px; /* offset for fixed header */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Komponent zawierający Hero, Forms i Solutions (Automation) przeniesiony do strefy contentu
const ContentZone = () => {
  return (
    <ContentWrapper>
      <Hero
        variant="content"
        subtitle="TWOJA STREFA CONTENTU"
        title="Cześć, Jakub Bodys"
        socialLinks={true}
        buttons={true}
      />
      <Forms />
      <Solutions
        title="Automatyzacje dostępne w Twoim pakiecie:"
        variant="automation"
        solutionItems={[
          {
            title: "TWÓJ CRM",
            description:
              "Twój pakiet: 50000 rekordów\nNielimitowane bazy danych\n2500 automatyzacji / msc",
            buttonText: "WEJŚCIE",
            buttonLink: "#",
            imageSrc: automationImage,
            variant: "primary",
          },
          {
            title: "AI DM SETTING",
            description:
              "Twój pakiet: 500 leadów\nAutomatyzacje z Airtable\n250 głosówek / msc",
            buttonText: "WEJŚCIE",
            buttonLink: "#",
            variant: "secondary",
          },
          {
            title: "AI DM SETTING",
            description:
              "Twój pakiet: 1 rolka + 1 story dziennie\nTokeny: 45671 / 100000\nWykorzystane video: 12\nWykorzystane rolki bez avatara: 10\nŁącznie wygenerowałeś równowartość 6 dni zdjęciowych.",
            buttonText: "WEJŚCIE",
            buttonLink: "#",
            variant: "gradient",
          },
        ]}
        stats={{
          value: "27",
          title: "GODZIN W TYGODNIU",
          description:
            "Właśnie tyle czasu zaoszczędziłeś na podstawie naszych obliczeń. Dobra robota, trzymaj tak dalej!",
        }}
        webinar={{
          title: "NADCHODZĄCY WEBINAR",
          description:
            "Dołącz do fascynującego webinaru, podczas którego Agnieszka Pala przeprowadzi Cię przez świat najnowszych technologii generatywnej sztucznej inteligencji. Poznasz praktyczne zastosowania narzędzi AI, takich jak ChatGPT, Midjourney czy DALL-E, oraz dowiesz się, jak mogą one wspierać Twoją pracę i kreatywność.",
          buttonText: "ZAREZERWUJ MIEJSCE JAKO PIERWSZY",
          buttonLink: "#kontakt",
        }}
        consultation={{
          title: "CHCESZ SIĘGNĄĆ PO WIĘCEJ?",
          text: "Pamiętaj, że w dowolnej chwili możesz zapytać nas o indywidualne konsultacje. Jesteśmy tu, żeby pomóc Twojemu biznesowi się rozwijać.",
          buttonText: "UMÓW SIĘ NA SPOTKANIE",
          buttonLink: "#kontakt",
        }}
      />
    </ContentWrapper>
  );
};

// Nowy komponent strony głównej z nowymi komponentami
const HomePage = () => {
  return (
    <>
      <Hero
        variant="home"
        subtitle="ZOPTYMALIZUJ SWÓJ BIZNES"
        title="AI TO PRZYSZŁOŚĆ TWOJEGO BIZNESU"
        description="Zautomatyzuj procesy, podejmuj lepsze decyzje i rozwijaj się szybciej dzięki inteligentnym rozwiązaniom. Przekształć swoją firmę, oszczędzając czas, zasoby i zdobywając przewagę, która liczy się w biznesie."
        imageSrc={cofoLogo}
        imageAlt="AI to technologia jutra, dostępna już dziś dla Twojego binezsu."
      />
      <HomeContact />
      <HomeWhy />
      <HomeOffer />
      <HomeStats />
      <HomeTeam />
      <HomeCta />
      <Solutions
        title="Wybierz rozwiązanie skrojone na miarę Twoich potrzeb"
        variant="home"
        solutionItems={[
          {
            title: "ZAUTOMATYZOWANE SYSTEMY CRM",
            description:
              "Cała Twoja sprzedaż w jednym miejscu. Klienci, leady, KPI, case study. Wykorzystaj 100% potencjału danych Twojego biznesu.",
            imageSrc: automationImage,
            variant: "primary",
          },
          {
            title: "AI DM SETTING",
            description:
              "Jakościowe leady bez konieczności monitorowania przez DM setterów. Zwiększ swój closign rate do nawet 35%.",
            variant: "secondary",
          },
        ]}
        stats={{
          value: "40",
          title: "GODZIN W TYGODNIU",
          description:
            "Właśnie tyle czasu zaoszczędzisz dzięki optymalizacji Twojego binezsu z pomocą narzędzi AI.",
          variant: "time",
        }}
        socialMedia={{
          title: "AI SOCIAL MEDIA CONTENT GENERATOR",
          description:
            "Media społecznościowe to kanał sprzedaży z największym potencjałem. Co, gdyby wygenerowanie 1000 rolek zajęło Ci tylko 15 minut? Z AI Social Media Content Generatorem zautomatyzujesz najbardziej czasochłonny element Twojego biznesu.",
          videoSrc:
            "https://cofo.pl/wp-content/uploads/2025/01/Lukasz_cofo.mp4",
        }}
        webinar={{
          title: "NADCHODZĄCY WEBINAR",
          description:
            "Dołącz do fascynującego webinaru, podczas którego Agnieszka Pala przeprowadzi Cię przez świat najnowszych technologii generatywnej sztucznej inteligencji.",
          buttonText: "ZAREZERWUJ MIEJSCE",
          buttonLink: "#kontakt",
        }}
        consultation={{
          title: "CHCESZ SIĘGNĄĆ PO WIĘCEJ?",
          text: "Pamiętaj, że w dowolnej chwili możesz zapytać nas o indywidualne konsultacje. Jesteśmy tu, żeby pomóc Twojemu biznesowi się rozwijać.",
          buttonText: "UMÓW SIĘ NA SPOTKANIE",
          buttonLink: "#kontakt",
        }}
        audit={{
          title: "PEŁNY AUDYT TWOJEJ FIRMY",
          description:
            "Zdecyduj się na pełną automatyzację. Umów się na spotkanie z naszym zespołem i dowiedz się, w jak wielu płaszczyznach może pomóc Ci sztuczna inteligencja. Razem przyjrzymy się Twoim procesom by znaleźć te, które zaoszczędzą Ci najwięcej czasu.",
          buttonText: "UMÓW SIĘ NA SPOTKANIE",
          buttonLink: "#kontakt",
          showIcon: true,
        }}
      />
      <HomeCta2 />
    </>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app">
        <Header>
          <NavigationContainer className={isMenuOpen ? "open" : ""}>
            <StyledNavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Strona główna
            </StyledNavLink>
            <StyledNavLink to="/content" onClick={() => setIsMenuOpen(false)}>
              Strefa contentu
            </StyledNavLink>
            <StyledNavLink to="/auth" onClick={() => setIsMenuOpen(false)}>
              Logowanie
            </StyledNavLink>
          </NavigationContainer>
          <BurgerMenu open={isMenuOpen} onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </BurgerMenu>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/content" element={<ContentZone />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
