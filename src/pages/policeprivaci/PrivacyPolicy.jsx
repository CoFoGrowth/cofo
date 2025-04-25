import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffffff;
`;

const Section = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #f3f3f3;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  li {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 8px;
    color: #ffffff;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Polityka Prywatności</Title>

      <Section>
        <h2>1. Wstęp</h2>
        <p>
          Strona Internetowa COFO (www.cofo.pl) szanuje prywatność użytkowników
          strony internetowej. Niniejsza Polityka Prywatności wyjaśnia, w jaki
          sposób zbieramy, przetwarzamy i przechowujemy dane osobowe
          użytkowników oraz jakie prawa przysługują w związku z danymi
          osobowymi.
        </p>
      </Section>

      <Section>
        <h2>2. Administrator Danych</h2>
        <p>
          <strong>Administratorem danych osobowych jest:</strong>
        </p>
        <p>
          COFO
          <br />
          Email: <a href="mailto:zespol@cofo.pl">zespol@cofo.pl</a>
        </p>
      </Section>

      <Section>
        <h2>3. Zbierane dane osobowe</h2>
        <p>
          Zbieramy dane osobowe, które są niezbędne do świadczenia naszych
          usług, w tym:
        </p>
        <ul>
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>
            Informacje o aktywności na naszej stronie internetowej, w tym adres
            IP, typ urządzenia, data i godzina wizyty
          </li>
        </ul>
      </Section>

      <Section>
        <h2>4. Cel przetwarzania danych</h2>
        <p>Dane osobowe przetwarzane są w następujących celach:</p>
        <ul>
          <li>Obsługa zapytań i komunikacja z klientami</li>
          <li>
            Przesyłanie informacji marketingowych (jeśli użytkownik wyraził
            zgodę)
          </li>
          <li>
            Realizacja obowiązków prawnych (np. wystawianie faktur, rozliczenia
            podatkowe)
          </li>
          <li>
            Optymalizacja i ulepszanie naszej strony internetowej oraz usług
          </li>
        </ul>
      </Section>

      <Section>
        <h2>5. Przechowywanie danych</h2>
        <p>
          Dane osobowe będą przechowywane przez okres niezbędny do realizacji
          celu przetwarzania, w tym przez czas obowiązywania umowy oraz przez
          czas wymagany przepisami prawa (np. w celu przechowywania dokumentów
          księgowych).
        </p>
      </Section>

      <Section>
        <h2>6. Udostępnianie danych osobowych</h2>
        <p>
          Nie udostępniamy danych osobowych osobom trzecim, z wyjątkiem
          sytuacji, w których jest to niezbędne do realizacji zamówienia (np.
          firmy kurierskie, dostawcy usług płatniczych) lub gdy wynika to z
          obowiązków prawnych.
        </p>
      </Section>

      <Section>
        <h2>7. Prawa użytkowników</h2>
        <p>Każdy użytkownik ma prawo do:</p>
        <ul>
          <li>Dostępu do swoich danych osobowych</li>
          <li>Sprostowania danych osobowych</li>
          <li>Usunięcia danych osobowych („prawo do bycia zapomnianym")</li>
          <li>Ograniczenia przetwarzania danych</li>
          <li>Przenoszenia danych osobowych</li>
          <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
          <li>
            Cofnięcia zgody na przetwarzanie danych (jeśli przetwarzanie odbywa
            się na podstawie zgody)
          </li>
        </ul>
        <p>
          Aby skorzystać z powyższych praw, prosimy o kontakt pod adresem email:{" "}
          <a href="mailto:zespol@cofo.pl">zespol@cofo.pl</a>
        </p>
      </Section>

      <Section>
        <h2>8. Cookies i technologie śledzenia</h2>
        <p>
          Nasza strona internetowa może wykorzystywać pliki cookies i inne
          technologie śledzenia w celu poprawy jakości usług, analizowania ruchu
          na stronie oraz personalizacji treści. Użytkownik może kontrolować
          ustawienia cookies w swojej przeglądarce internetowej.
        </p>
      </Section>

      <Section>
        <h2>9. Bezpieczeństwo danych</h2>
        <p>
          Podejmujemy odpowiednie środki techniczne i organizacyjne, aby
          zapewnić bezpieczeństwo danych osobowych, w tym zabezpieczenie przed
          ich utratą, nieautoryzowanym dostępem czy ujawnieniem.
        </p>
      </Section>

      <Section>
        <h2>10. Zmiany w Polityce Prywatności</h2>
        <p>
          Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności. W
          przypadku istotnych zmian, użytkownicy zostaną o tym poinformowani
          poprzez aktualizację treści Polityki Prywatności na naszej stronie
          internetowej.
        </p>
      </Section>

      <Section>
        <h2>11. Kontakt</h2>
        <p>
          W przypadku pytań dotyczących Polityki Prywatności prosimy o kontakt
          pod adresem email: <a href="mailto:zespol@cofo.pl">zespol@cofo.pl</a>
        </p>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
