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
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #ffffff;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #f3f3f3;
  }

  ul {
    margin-left: 0px;
    margin-bottom: 15px;
    list-style: none;
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

  .indent-1 {
    margin-left: 20px;
  }

  .indent-2 {
    margin-left: 40px;
  }

  .indent-3 {
    margin-left: 60px;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>POLITYKA PRYWATNOŚCI</Title>

      <Section>
        <h2>I. Postanowienia ogólne</h2>
        <p>
          1. Niniejsza Polityka Prywatności określa zasady przetwarzania i
          ochrony danych osobowych użytkowników strony internetowej
          https://cofo.pl/
        </p>
        <p>
          2. Administratorem danych osobowych jest COFO Spółka z ograniczoną
          odpowiedzialnością z siedzibą w Katowicach (kod pocztowy 40-750), ul.
          Zdzisława Hierowskiego 40D, Polska, wpisaną do Rejestru
          Przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS:
          0001132171, NIP: 5862410684, REGON: 52990364600000, o kapitale
          zakładowym w wysokości 40.000,00 PLN
        </p>
        <p>
          3. Administrator nie powołał IOD. W sprawach dotyczących przetwarzania
          danych, kontakt możliwy jest za pośrednictwem:
        </p>
        <ul>
          <li className="indent-1">
            o poczty elektronicznej:{" "}
            <a href="mailto:kontakt@cofo.pl">kontakt@cofo.pl</a>
          </li>
          <li className="indent-1">
            o listownie: na adres siedziby Administratora opisany powyżej.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>II. Definicje</h2>
        <p>1. Ilekroć w Polityce Prywatności użyto określenia:</p>
        <ul>
          <li>
            1) Administrator – rozumie się przez to podmiot, który samodzielnie
            lub wspólnie z innymi ustala cele i sposoby przetwarzania danych
            osobowych;
          </li>
          <li>
            2) dane osobowe – rozumie się przez to wszelkie informacje o
            zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej
            („osobie, której dane dotyczą"); możliwa do zidentyfikowania osoba
            fizyczna to osoba, którą można bezpośrednio lub pośrednio
            zidentyfikować, w szczególności na podstawie identyfikatora takiego
            jak imię i nazwisko, numer identyfikacyjny, dane o lokalizacji,
            identyfikator internetowy lub jeden bądź kilka szczególnych
            czynników określających fizyczną, fizjologiczną, genetyczną,
            psychiczną, ekonomiczną, kulturową lub społeczną tożsamość osoby
            fizycznej;
          </li>
          <li>
            3) hasło – rozumie się przez to ciąg znaków literowych, cyfrowych
            lub innych, znany jedynie osobie uprawnionej do pracy w systemie
            informatycznym;
          </li>
          <li>
            4) Klient – rozumie się przez to osobę fizyczną, osobę prawną lub
            jednostkę organizacyjną nieposiadającą osobowości prawnej, która
            dokonuje rejestracji w systemie lub zostawia dane w formularzu
            kontaktowym, celem nawiązania;
          </li>
          <li>
            5) odbiorca danych – rozumie się przez to osobę fizyczną lub prawną,
            organ publiczny, jednostkę lub inny podmiot, któremu ujawnia się
            dane osobowe, niezależnie od tego, czy jest stroną trzecią. Organy
            publiczne, które mogą otrzymywać dane osobowe w ramach konkretnego
            postępowania zgodnie z prawem Unii lub prawem państwa
            członkowskiego, nie są jednak uznawane za odbiorców; przetwarzanie
            tych danych przez te organy publiczne musi być zgodne z przepisami o
            ochronie danych mającymi zastosowanie stosownie do celów
            przetwarzania;
          </li>
          <li>
            6) organ nadzorczy – rozumie się przez to niezależny organ publiczny
            ustanowiony przez państwo członkowskie zgodnie z art. 51 RODO. W
            Polsce: Prezes Urzędu Ochrony Danych Osobowych (PUODO);
          </li>
          <li>
            7) osoba upoważniona do przetwarzania danych osobowych – rozumie się
            przez to osobę, która została upoważniona do przetwarzania danych
            osobowych przez Administratora;
          </li>
          <li>
            8) podmiot przetwarzający – rozumie się przez to za osobę fizyczną
            lub prawną, organ publiczny, jednostkę lub inny podmiot, który
            przetwarza dane osobowe w imieniu Administratora;
          </li>
          <li>
            9) polityka Prywatności – rozumie się przez niniejszą Politykę
            Prywatności, dostępną na Stronie internetowej, opisujący w
            szczególności zasady przetwarzania przez Administratora danych
            osobowych Klientów i użytkowników, w związku z korzystaniem przez
            nich z Usług Elektronicznych oraz zawarciem i realizacją Umowy;
          </li>
          <li>
            10) poufność danych – rozumie się jako właściwość zapewniającą, że
            dane osobowe nie są udostępniane nieupoważnionym osobom i podmiotom;
          </li>
          <li>
            11) profilowanie – rozumie się przez to dowolną formę
            zautomatyzowanego przetwarzania danych osobowych, która polega na
            wykorzystaniu danych osobowych do oceny niektórych czynników
            osobowych osoby fizycznej, w szczególności do analizy lub prognozy
            aspektów dotyczących efektów pracy tej osoby fizycznej, jej sytuacji
            ekonomicznej, zdrowia, osobistych preferencji, zainteresowań,
            wiarygodności, zachowania, lokalizacji lub przemieszczania się;
          </li>
          <li>
            12) przetwarzanie – rozumie się przez to operację lub zestaw
            operacji wykonywanych na danych osobowych lub zestawach danych
            osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką jak
            zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie,
            adaptowanie lub modyfikowanie, pobieranie, przeglądanie,
            wykorzystywanie, ujawnianie poprzez przesłanie, rozpowszechnianie
            lub innego rodzaju udostępnianie, dopasowywanie lub łączenie,
            ograniczanie, usuwanie lub niszczenie;
          </li>
          <li>
            13) RODO – rozumie się przez to Rozporządzenia Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
            sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (Dz. Urz. UE L 119 z 04.05.2016);
          </li>
          <li>
            14) strona internetowa - rozumie się przez to stronę internetową pod
            adresem: https://cofo.pl/;
          </li>
          <li>
            15) Subskrybent - rozumie się przez to użytkownika, który wyraził
            chęć oraz zgodę na korzystanie z usługi Newslettera, tj.
            otrzymywania wiadomości o aktualnościach, usługach, wydarzeniach,
            promocjach, a także innych treściach marketingowych i informacyjnych
            związanych z działalnością Administratora na podany przez siebie
            adres e-mail;
          </li>
          <li>
            16) Użytkownik – rozumie się przez to każdą osobę odwiedzającą
            Stronę internetową i/lub korzystającą z jej usług/funkcjonalności;
          </li>
          <li>
            17) zgoda – rozumie się przez to dobrowolne, konkretne, świadome i
            jednoznaczne okazanie woli, którym osoba, której dane dotyczą, w
            formie oświadczenia lub wyraźnego działania potwierdzającego,
            przyzwala na przetwarzanie dotyczących jej danych osobowych.
          </li>
        </ul>
        <p>
          2. Wszystkie definicje mają tożsame znaczenie, bez względu na to, czy
          zostały użyte w liczbie pojedynczej czy liczbie mnogiej.
        </p>
        <p>
          3. Jeśli Regulamin nie stanowi inaczej, terminy o zbliżonym znaczeniu
          językowym należy rozumieć w znaczeniu nadanym im w Regulaminie,
          niezależnie od sposobu pisowni.
        </p>
      </Section>

      <Section>
        <h2>III. Przetwarzanie Danych Osobowych</h2>
        <p>1. Dane osobowe przetwarzane są zgodnie z przepisami:</p>
        <ul>
          <li>
            1) Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
            dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
            z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (Dz. Urz. UE L 119 z
            04.05.2016);
          </li>
          <li>
            2) ustawy z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U.
            z 2019 r. poz. 1781 z późn. zm.);
          </li>
          <li>
            3) ustawy z dnia 12 lipca 2024 r. – Prawo komunikacji elektronicznej
            (Dz.U. z 2024 r. poz. 1221 z późn. zm.);
          </li>
          <li>
            4) ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą
            elektroniczną (Dz.U. z 2024 poz. 1513 z późn. zm.);
          </li>
          <li>
            5) innymi aktami prawnymi regulującymi kwestie ochrony danych
            osobowych.
          </li>
        </ul>
        <p>2. Dane osobowe przetwarzane są:</p>
        <ul>
          <li>1) zgodnie z prawem;</li>
          <li>
            2) poprzez ich zbierane dla oznaczonych, zgodnych z prawem celów i
            niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi celami;
          </li>
          <li>
            3) w sposób merytorycznie poprawny i adekwatny w stosunku do celu, w
            jakim są przetwarzane oraz przechowywane w postaci umożliwiającej
            identyfikację osób, których dotyczą, nie dłużej niż jest to
            niezbędne do osiągnięcia celu przetwarzania.
          </li>
        </ul>
        <p>
          3. Podanie danych osobowych jest dobrowolne, jednak ich niepodanie
          będzie skutkowało brakiem możliwości zawarcia Umowy o świadczenie
          usług Elektronicznych lub Umowy sprzedaży.
        </p>
        <p>4. Podstawa przetwarzania Danych Osobowych:</p>
        <ul>
          <li>
            1) na podstawie art. 6 ust. 1 lit. a) RODO, w szczególności w celu:
          </li>
          <li className="indent-1">a) prowadzenie działań marketingowych;</li>
          <li className="indent-1">
            b) marketingu bezpośredniego usług i produktów;
          </li>
          <li className="indent-1">
            c) marketingu bezpośredniego produktów lub usług podmiotów
            współpracujących z Administratorem, przy czym dane osobowe Klienta
            nie będą udostępniane podmiotom trzecim, a informacja będzie
            przekazywana przez Administratora.
          </li>
          <li>
            2) na podstawie art. 6 ust. 1 lit. b) RODO, w szczególności w celu:
          </li>
          <li className="indent-1">
            a) podjęcia działań przed zawarciem umowy na żądanie osoby, której
            dane dotyczą;
          </li>
          <li className="indent-1">
            b) obsługą Klienta na Stronie internetowej;
          </li>
          <li className="indent-1">
            c) zapewnienia bezpiecznego połączenia ze Stroną internetową;
          </li>
          <li className="indent-1">d) skontaktowania się z Klientem;</li>
          <li className="indent-1">
            e) przekazywania informacji o zmianach: Polityki Prywatności, o
            nazwy Administratora, adresu lub siedziby, potwierdzenia przyjęcia
            reklamacji i udzielenia na nią odpowiedzi na wskazany adres.
          </li>
          <li>
            3) na podstawie art. 6 ust. 1 lit. c) RODO, w szczególności w celu:
          </li>
          <li className="indent-1">a) obsługa reklamacji;</li>
          <li className="indent-1">
            b) realizacja obowiązków podatkowych i rachunkowych, które nakładają
            na Administratora przepisy prawa;
          </li>
          <li className="indent-1">
            c) dochodzenia lub zabezpieczenia roszczeń.
          </li>
          <li>
            4) na podstawie art. 6 ust. 1 lit. f) RODO, w szczególności w celu:
          </li>
          <li className="indent-1">
            a) dokonanie analizy statystycznej, monitorowanie ruchu na Stronie
            internetowej i poprawa jej funkcjonalności;
          </li>
          <li className="indent-1">
            b) prowadzenia analiz jakości świadczonych usług i sprzętu.
          </li>
        </ul>
        <p>
          5. Przetwarzanie danych ma na celu przede wszystkim zapewnienie
          prawidłowej funkcjonalności Strony internetowej oraz obsługę zapytań
          formularza kontaktowego.
        </p>
        <p>
          6. Dane udostępnione przez Klienta, o ile wyraził uprzednio zgodę na
          otrzymywanie korespondencji promocyjnej i/lub wysyłania informacji
          handlowych drogą elektroniczną, mogą być wykorzystywane do prowadzenia
          działań marketingowych lub promocyjnych, między innymi marketingu
          bezpośredniego.
        </p>
        <p>
          7. Marketing bezpośredni może być realizowany przez Administratora za
          pomocą środków komunikacji elektronicznej (np. SMS, MMS, e-mail),
          telekomunikacyjnych urządzeń końcowych (np. telefon, tablet) oraz
          automatycznych systemów wywołujących (np. urządzeń służących do
          automatycznego inicjowania połączeń telefonicznych).
        </p>
        <p>
          8. Administrator nie udostępnia osobom ani podmiotom trzecim danych
          osobowych użytkowników, za wyjątkiem sytuacji, w których jest to
          niezbędne dla prawidłowego wykonania Umowy, a równocześnie takie
          udostępnienie pozostaje w zgodzie z przepisami prawa, bądź następuje
          za wyraźną zgodą Klienta lub na żądanie organów uprawnionych w
          przypadkach wynikających z powszechnie obowiązujących przepisów prawa.
        </p>
      </Section>

      <Section>
        <h2>IV. Kategorie przetwarzanych danych</h2>
        <p>
          Administrator może przetwarzać następujące kategorie danych osobowych:
        </p>
        <ul>
          <li>
            1) adres IP oraz dane techniczne urządzenia (w celach analitycznych
            i bezpieczeństwa)
          </li>
          <li>
            2) dane gromadzone w ramach plików cookies i narzędzi śledzących;
          </li>
          <li>3) dane osobowe (imię, nazwisko, adres zamieszkania);</li>
          <li>4) dane kontaktowe (adres e-mail, numer telefonu);</li>
          <li>5) dane rozliczeniowe.</li>
        </ul>
      </Section>

      <Section>
        <h2>V. Formularz kontaktowy</h2>
        <p>1. Na Stronie internetowej znajduje się Formularz kontaktowy.</p>
        <p>2. Dane zbierane w formularzu kontaktowym to:</p>
        <ul>
          <li>1) imię i nazwisko,</li>
          <li>2) numer telefonu,</li>
          <li>3) adres e-mail,</li>
          <li>
            4) dane, które użytkownik postanowi podać dodatkowo w okienku
            wiadomości.
          </li>
        </ul>
        <p>
          3. Twoje dane osobowe podawane w formularzu kontaktowym będą
          przetwarzane, wyłącznie do podjęcia określonych działań na Twoje
          żądanie, np. w celu udzielenia odpowiedzi na Twoje pytanie wysłane
          drogą elektroniczną lub telefoniczną.
        </p>
        <p>
          4. Podanie danych osobowych jest dobrowolne, ale niezbędne do
          przesłania odpowiedzi na Twoją wiadomość.
        </p>
        <p>
          5. Twoje dane osobowe będą przetwarzane wyłącznie przez okres
          niezbędny do udzielania odpowiedzi, a następnie zostaną usunięte,
          chyba że zdecydujesz się korzystać z naszych usług i pozostawisz je na
          innej podstawie i we wskazanym Ci celu.
        </p>
      </Section>

      <Section>
        <h2>VI. Newsletter</h2>
        <p>
          1. Newsletter jest usługą bezpłatną i świadczoną drogą elektroniczną
          na rzecz użytkowników, którzy wyrazili zgodę na jego otrzymywanie.
        </p>
        <p>
          2. Administrator świadczy usługę newsletteru, na zasadach określonych
          w Polityce prywatności wyłącznie po uzyskaniu zgody użytkownika.
        </p>
        <p>
          3. Subskrypcja newslettera oznacza akceptację niniejszej Polityki.
        </p>
        <p>
          4. Newsletter służy do przesyłania informacji o aktualnościach,
          usługach, wydarzeniach, promocjach, a także innych treściach
          marketingowych i informacyjnych związanych z działalnością
          Administratora.
        </p>
        <p>
          5. Newsletter wysyłany jest cyklicznie lub okazjonalnie – w zależności
          od potrzeb Administratora.
        </p>
        <p>
          6. Korzystanie z usługi newslettera wymaga podania adresu e-mail,
          korzystając z formularza zapisu dostępnego na Stronie internetowej, a
          następnie potwierdzenia subskrypcji, poprzez kliknięcie w aktywny link
          zawarty w wiadomości e-mail.
        </p>
        <p>
          7. W przypadku, gdyby użytkownik zmienił zdanie lub gdyby zapytanie o
          newsletter było zadane omyłkowo – wiadomość należy usunąć.
        </p>
        <p>
          8. Potwierdzenie zapisu oznacza wyrażenie zgody na wysyłanie
          informacji handlowych za pomocą środków komunikacji elektronicznej.
        </p>
        <p>
          9. Informacje podane na Stronie Internetowej na temat usługi
          newsletter nie stanowią formalnej oferty. Publikowane na tej stronie
          informacje są jedynie zaproszeniem do zawarcia umowy.
        </p>
        <p>
          10. Dopiero wyrażenie zgody przy potwierdzeniu oznacza zawarcie umowy
          o dostarczanie treści cyfrowych w zamian za płatność danymi osobowymi.
        </p>
        <p>
          11. Podanie danych jest dobrowolne, jednak konieczne w celu wysyłki
          newslettera.
        </p>
        <p>
          12. Subskrybent może w każdej chwili zrezygnować z otrzymywania
          newslettera, zawiadamiając o tym fakcie mailowo na adres e-mail:{" "}
          <a href="mailto:kontakt@cofo.pl">kontakt@cofo.pl</a>
        </p>
        <p>
          13. Subskrybent zobowiązuje się do podania prawdziwych danych oraz
          korzystania z usługi zgodnie z przepisami prawa i Polityką
          prywatności.
        </p>
        <p>
          14. Newsletter jest objęty prawami autorskimi i innymi prawami
          majątkowymi.
        </p>
        <p>
          15. Reklamacje związane z funkcjonowaniem usługi newslettera można
          zgłaszać na adres e-mail:{" "}
          <a href="mailto:kontakt@cofo.pl">kontakt@cofo.pl</a>
        </p>
        <p>16. Reklamacja powinna zawierać:</p>
        <ul>
          <li>1) imię i nazwisko oraz adres zamieszkania;</li>
          <li>
            2) określenie przedmiotu reklamacji (wskazanie, dlaczego składasz
            reklamację i czego się domagasz) oraz reklamowanego okresu;
          </li>
          <li>3) przedstawienie okoliczności uzasadniających reklamację;</li>
        </ul>
        <p>
          17. Jeżeli reklamacja ma braki, które uniemożliwiają jej rozpoznanie,
          zostaniesz poproszony o jej uzupełnienie w określonym terminie. Jeżeli
          nie uzupełnisz w terminie reklamacji, nie zostanie ona rozpoznana.
        </p>
        <p>
          18. Administrator rozpatrzy reklamację w terminie 14 dni od jej
          otrzymania i poinformuje użytkownika o wyniku drogą mailową.
        </p>
      </Section>

      <Section>
        <h2>VII. Odbiorcy Danych Osobowych</h2>
        <p>
          1. Dane osobowe Klientów będą przekazywane następującym kategoriom
          podmiotów:
        </p>
        <ul>
          <li>1) firmom hostingowym i IT obsługującym Stronę internetową;</li>
          <li>
            2) zewnętrznym ekspertom i konsultantom współpracującym z
            Administratorem – w celu świadczenia usług doradczych i realizacji
            projektów;
          </li>
          <li>
            3) Dostawcy narzędzi analitycznych i marketingowych – tacy jak:
          </li>
          <li className="indent-1">a) Google (Analytics, Ads),</li>
          <li className="indent-1">b) Meta (Facebook Pixel),</li>
          <li className="indent-1">c) Microsoft (Clarity);</li>
          <li>
            4) dostawcy narzędzi e-mail marketingu – np. GetResponse,
            wykorzystywany do wysyłki newslettera;
          </li>
          <li>
            5) organom państwowym na podstawie obowiązujących przepisów prawa.
          </li>
        </ul>
        <p>
          2. W celu zapewnienia prawidłowego świadczenia usług i funkcjonowania
          Strony internetowej, Administrator korzysta z usług partnerów, którzy
          wykonują określone zadania w ramach współpracy, tj.: partnerzy
          handlowi, przedsiębiorcy telekomunikacyjni, biuro księgowe, kancelarii
          prawnej, firmy windykacyjne, banki, firmy archiwizujące dokumenty,
          firmy świadczące usługi techniczne (np. rozwijanie i utrzymywanie
          systemów informatycznych i serwisów internetowych).
        </p>
        <p>
          3. Dane mogą być przekazywane poza Europejski Obszar Gospodarczy
          (EOG), w związku z korzystaniem z narzędzi takich jak:
        </p>
        <ul>
          <li>1) Google Analytics / Google Ads – Stany Zjednoczone</li>
          <li>2) Meta (Facebook, Instagram) – Stany Zjednoczone</li>
        </ul>
        <p>
          Więcej informacji dotyczących przekazywania danych poza EOG dostępnych
          jest:
        </p>
        <p>
          <a
            href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=pl
          </a>
        </p>
      </Section>

      <Section>
        <h2>VIII. Okres Przetwarzania Danych Osobowych</h2>
        <p>
          Dane osobowe przechowywane są przez okres niezbędny do realizacji
          celów, dla których zostały zebrane, w tym:
        </p>
        <ul>
          <li>
            1) dane osobowe przetwarzane w związku z obsługą formularza
            kontaktowego - przez okres niezbędny do obsługi zapytania;
          </li>
          <li>
            2) dane osobowe przetwarzane w związku z newsletterem - przez okres
            funkcjonowania newslettera lub do czasu cofnięcia zgody;
          </li>
          <li>
            3) dane osobowe przetwarzane w związku z marketingiem - do momentu
            cofnięcia zgody przez użytkownika;
          </li>
          <li>
            4) dane osobowe przetwarzane w związku z wykorzystaniem platform
            społecznościowych (FB, Ig, LinkedIn, YouTube) i umożliwieniem
            komentarzy - przez okres istnienia stron firmowych/ kont na danym
            portalu społecznościowym;
          </li>
          <li>
            5) przez okres wskazany w przepisach podatkowych i rachunkowych;
          </li>
          <li>
            6) w przypadku dochodzenia roszczeń - przez okres przedawnienia
            roszczeń wynikający z obowiązujących przepisów prawa.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>IX. Uprawnienia w związku z przetwarzaniem</h2>
        <p>
          1. Osoba, której dane są przetwarzane przez Administratora ma prawo
          do:
        </p>
        <ul>
          <li>1) dostępu do treści danych oraz ich sprostowania;</li>
          <li>2) usunięcia danych;</li>
          <li>3) ograniczenia przetwarzania danych;</li>
          <li>
            4) prawo sprzeciwu wobec przetwarzania danych na podstawie
            uzasadnionego interesu Administratora;
          </li>
          <li>5) żądania zaprzestania przetwarzania;</li>
          <li>6) przenoszenia danych do innego administratora;</li>
          <li>
            7) prawo do cofnięcia zgody (jeśli nie sprzeciwiają się temu
            przepisy prawa) w dowolnym momencie.
          </li>
          <li>
            8) wniesienia skargi do organu nadzorczego tj. Prezesa Urzędu
            Ochrony Danych Osobowych.
          </li>
        </ul>
        <p>
          4. W przypadku wniesienia sprzeciwu lub cofnięcia zgody –
          Administrator przestanie przetwarzać dane osobowe, chyba, że będą
          istniały ważne, prawnie uzasadnione podstawy, które są nadrzędne wobec
          praw, wolności i interesów Klienta / Subskrbenta.
        </p>
        <p>
          5. W celu realizacji praw należy skontaktować się z Administratorem na
          adres e-mail wskazany powyżej.
        </p>
      </Section>

      <Section>
        <h2>X. Pliki cookies i narzędzia śledzące</h2>
        <p>
          1. Strona internetowa wykorzystuje pliki cookies w celu zapewnienia
          prawidłowego funkcjonowania oraz w celach analitycznych i
          marketingowych.
        </p>
        <p>
          2. Przez pliki cookies (tzw. ciasteczka) rozumie się małe pliki
          (informacje) tekstowe, które są przechowywane na urządzeniu Klienta
          lub użytkownika przez przeglądarkę internetową.
        </p>
        <p>
          3. Pliki cookies używane na Stronie internetowej zostały podzielone na
          następujące kategorie:
        </p>
        <ul>
          <li>
            1) Niezbędne - służą m.in. do zapewnienia stabilności funkcjonowania
            Strony internetowej (mierzą ruch i informują i zabezpieczają przed
            przeciążeniem). Są absolutnie niezbędne, aby Administrator mógł
            świadczyć usługi, i/lub wyłącznie w celu transmisji usług i/lub
            Strony internetowej;
          </li>
          <li>
            2) Funkcjonalne – służą m.in. do zapamiętywania wybranych
            preferencji dotyczących prywatności, wypełniania formularza on-line,
            czy zapamiętywania ustawień Strony internetowej;
          </li>
          <li>
            3) Analityczne – to pozostałe pliki cookies, które są wykorzystywane
            wyłącznie po uzyskaniu zgody przez użytkownika. służą m.in. do
            kontroli i ulepszenia wydajności Strony internetowej, poprzez
            zbieranie i raportowanie informacji o sposobie korzystania przez
            użytkownika.
          </li>
        </ul>
        <p>
          4. Dodatkowo pliki cookies są używane do zapamiętywania różnych
          informacji, do celów:
        </p>
        <ul>
          <li>
            1) Statystyki – do celów zbierania danych za pomocą Google Analytics
            4 w celu analizy ruchu i zachowań użytkowników i Klientów na
            stronie;
          </li>
          <li>
            2) Remarketingu – za pośrednictwem Google Ads oraz Meta Ads
            (Facebook/Instagram), w celu wyświetlania dopasowanych reklam,
          </li>
          <li>
            3) Zapamiętywania danych formularza – w celu ułatwienia wypełniania
            formularza kontaktowego;
          </li>
          <li>
            4) Zapamiętywania preferencji użytkownika – np. dotyczących języka
            strony lub akceptacji ciasteczek;
          </li>
          <li>
            5) Śledzenia ruchu na stronie – przy użyciu narzędzi takich jak
            Hotjar lub Microsoft Clarity (analiza map cieplnych, kliknięć i
            nagrań sesji).
          </li>
        </ul>
        <p>
          5. Podczas wizyty na Stronie internetowej wyświetli się komunikat
          informujący o wykorzystaniu plików cookies.
        </p>
        <p>
          6. Użytkownik może zarządzać ustawieniami plików cookies w swojej
          przeglądarce, poprzez blokowanie lub usuwanie plików cookies,
          bezpośrednio w ustawieniach wybranej przez siebie przeglądarki.
        </p>
        <p>
          7. Klient lub użytkownik może korzystać z trybu incognito, w celu
          ograniczenia zapisywania plików cookies.
        </p>
        <p>
          8. W związku z korzystaniem przez Administratora z plików cookies,
          dane użytkowników i Klientów podlegają profilowaniu – w oparciu o
          analizę częstotliwości odwiedzania przez użytkownika Strony i
          wyszukiwania interesujących go produktów, Administrator uzyskuje
          informacje dotyczące preferencji użytkowników. Pozwala to na
          remarketing dynamiczny, segmentację użytkowników według ich zachowań
          czy automatyczne dopasowanie prezentowanej treści i oferty do
          zainteresowania użytkowników.
        </p>
        <p>
          9. Usunięcie lub zablokowanie plików cookies wyłącza możliwość
          wyświetlania dopasowanej oferty.
        </p>
        <p>
          10. Strona może korzystać z narzędzi analitycznych i marketingowych,
          które wskazane są w załączniku do niniejszej Polityki Prywatności.
        </p>
      </Section>

      <Section>
        <h2>XI. Bezpieczeństwo</h2>
        <p>
          1. Administrator podejmuje wszelkie uzasadnione działania mające na
          celu ochronę danych osobowych Klientów i Strony internetowej. W tym
          celu Administrator wprowadza odpowiednie zasady i procedury, których
          zadaniem jest ograniczenie ryzyka nieuprawnionego dostępu do Danych
          przetwarzanych przez Administratora.
        </p>
        <p>
          2. Informacje przekazywane przez użytkowników i Klientów są
          przetwarzane i przechowywane z zastosowaniem odpowiednich środków
          bezpieczeństwa, wymaganych obecnymi przepisami prawa.
        </p>
        <p>
          3. Administrator wskazuje jednak, że żadne zabezpieczenia, nie
          gwarantują całkowitego wykluczenia ryzyka nieuprawnionego
          wykorzystania danych osobowych przez osoby nieupoważnione. Wszelkie
          hasła do kont należy przechowywać w bezpiecznym miejscu i nie powinno
          się ich ujawniać osobom trzecim.
        </p>
        <p>
          4. Jeśli hasło zostanie wykorzystane w nieuprawniony sposób lub
          dojdzie do innego zagrożenia bezpieczeństwa, należy natychmiast
          powiadomić Administratora o takiej sytuacji.
        </p>
      </Section>

      <Section>
        <h2>XII. Zmiany</h2>
        <p>
          1. Administrator może dokonywać zmian w niniejszej Polityce
          Prywatności.
        </p>
        <p>
          2. Nowa wersja Polityki Prywatności będzie publikowana na stronie
          internetowej.
        </p>
        <p>3. Istotne zmiany mogą wymagać ponownej zgody Użytkowników.</p>
        <p>
          4. Administrator zastrzega sobie prawo do zmiany regulacji dotyczących
          subskrypcji newslettera. Subskrybenci zostaną poinformowani o zmianach
          za pośrednictwem newslettera.
        </p>
      </Section>

      <Section>
        <h2>Załącznik nr 1</h2>
        <h2>do Polityki Prywatności</h2>

        <h3>System zarządzania treścią:</h3>
        <p>WordPress</p>

        <h3>Narzędzia analityczne</h3>
        <p>
          GA4 - służąca do śledzenia i analizowania ruchu na stronach
          internetowych oraz w aplikacjach mobilnych
        </p>
        <p>
          Meta Pixel – pozwala śledzić i analizować działania użytkowników na
          ich stronach internetowych, w celu mierzenia skuteczności reklam na
          Facebooku i Instagramie
        </p>
        <p>
          Hotjar - pomaga zrozumieć zachowania użytkowników na stronach
          internetowych. Umożliwia zbieranie danych o interakcjach użytkowników,
          takich jak ruchy kursora, kliknięcia, przewijanie i nagrania sesji, a
          także zbieranie opinii za pomocą ankiet i ankiet. Hotjar pozwala na
          analizę tych danych w celu optymalizacji UX (doświadczenia
          użytkownika) i zwiększenia konwersji
        </p>
        <p>
          LinkedIn Insight Tag - narzędzie analityczne, które pozwala śledzić
          aktywność użytkowników na stronie internetowej po kliknięciu w reklamę
          na LinkedIn. Umożliwia zbieranie danych o odwiedzających, takich jak
          adres URL, strona odsyłająca, IP, dane przeglądarki i znacznik czasu.
          Pozwala optymalizować kampanie reklamowe, targetować reklamy i
          analizować zachowania użytkowników na stronie
        </p>

        <h3>Narzędzia reklamowe</h3>
        <p>
          Google Ads – platforma reklamowa Google, która pozwala firmom
          wyświetlać reklamy w wynikach wyszukiwania Google, na stronach
          internetowych, w YouTube i aplikacjach mobilnych
        </p>
        <p>
          Facebook Ads – system reklamowy, który umożliwia tworzenie i
          precyzyjne kierowanie płatnych kampanii umiejscowionych na Facebooku,
          Instagramie, Messengerze oraz Audience Network
        </p>
        <p>
          LinkedIn Ads – narzędzie marketingowe, które umożliwia dostęp do sieci
          społecznościowej LinkedIn za pośrednictwem sponsorowanych postów i
          innych metod
        </p>

        <h3>Newsletter</h3>
        <p>GetResponse</p>

        <h3>Wtyczki na stronie</h3>
        <p>Filmy osadzone na YouTube</p>

        <h3>Zewnętrzne firmy badania zadowolenia klientów:</h3>
        <p>&nbsp;</p>

        <h3>Zewnętrzna firma fakturująca</h3>
        <p>&nbsp;</p>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
