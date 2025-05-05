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
    color: #ffffff;
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

const CookiesInfo = () => {
  return (
    <Container>
      <Title>Informacje o plikach Cookies</Title>

      <Section>
        <p>
          Poprzez pliki "cookies" należy rozumieć dane informatyczne
          przechowywane w urządzeniach końcowych użytkowników, przeznaczone do
          korzystania ze stron internetowych. W szczególności są to pliki
          tekstowe, zawierające nazwę strony internetowej, z której pochodzą,
          czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
        </p>
      </Section>

      <Section>
        <p>
          Serwis nie zbiera w sposób automatyczny żadnych informacji, z
          wyjątkiem informacji zawartych w plikach cookies.
        </p>
      </Section>

      <Section>
        <h2>Wykorzystanie plików cookies</h2>
        <p>
          Pliki cookies przeznaczone są do korzystania ze stron serwisu.
          Operator wykorzystuje te pliki do:
        </p>
        <ul>
          <li>
            możliwości logowania i utrzymywania sesji użytkownika na każdej
            kolejnej stronie serwisu
          </li>
          <li>
            dopasowania zawartości strony internetowej do indywidualnych
            preferencji użytkownika, przede wszystkim pliki te rozpoznają jego
            urządzenie, aby zgodnie z jego preferencjami wyświetlić stronę
          </li>
          <li>
            do tworzenia anonimowych statystyk z wyłączeniem możliwości
            identyfikacji użytkownika
          </li>
          <li>
            w przypadku podpisania umowy, wykonania czynności w ramach zadań
            wyszczególnionych w umowie
          </li>
        </ul>
      </Section>

      <Section>
        <p>
          Pliki cookies wykorzystywane przez partnerów operatora strony
          internetowej, w tym w szczególności użytkowników strony internetowej,
          podlegają ich własnej polityce prywatności.
        </p>
      </Section>

      <Section>
        <h2>Bezpieczeństwo</h2>
        <p>
          W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy
          wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu
          danych osobom nieupoważnionym. Kontrolujemy ich wykonywanie i stale
          sprawdzamy ich zgodność z odpowiednimi aktami prawnymi – ustawą o
          ochronie danych osobowych, ustawą o świadczeniu usług drogą
          elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i aktach
          prawa wspólnotowego.
        </p>
      </Section>

      <Section>
        <h2>Kontrola plików cookies</h2>
        <p>
          Standardowo oprogramowanie służące do przeglądania stron internetowych
          domyślnie dopuszcza umieszczanie plików cookies na urządzeniu końcowym
          Użytkownika. Ustawienia te mogą zostać zmienione przez Użytkownika w
          taki sposób, aby blokować automatyczną obsługę "cookies" w
          ustawieniach przeglądarki internetowej bądź informować o ich
          każdorazowym przesłaniu na urządzenia użytkownika.
        </p>
      </Section>

      <Section>
        <p>
          Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
          dotyczących plików cookies. Szczegółowe informacje o możliwości i
          sposobach obsługi plików cookies dostępne są w ustawieniach
          oprogramowania (przeglądarki internetowej).
        </p>
      </Section>

      <Section>
        <p>
          Operator Serwisu informuje, że zmiany ustawień w przeglądarce
          internetowej użytkownika mogą uniemożliwić poprawne działanie Stron
          Internetowych.
        </p>
      </Section>
    </Container>
  );
};

export default CookiesInfo;
