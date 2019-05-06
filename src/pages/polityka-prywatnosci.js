import React from 'react'
import cls from 'classnames'

import Layout from 'components/Layout/Layout.component'
import PrivacyHeader from 'components/PrivacyHeader/PrivacyHeader.component'
import Blob from 'components/Blob'

import styles from './styles/polityka-prywatnosci.module.scss'

const PolicyPage = () => {
  return (
    <Layout>
      <section className={styles.top}>
        <div className={styles.rightBlob}>
          <Blob size={200} />
        </div>
        <div className={styles.blob}>
          <Blob size={200} />
        </div>
        <div className={styles.loop}>
          <Blob outline/>
        </div>
      </section>
      <div className={styles.container}>
        <h1 className={styles.header}>Polityka prywatności i cookies</h1>
        <PrivacyHeader>
          <strong>Spis treści:</strong>
          <br />
          <br />
          1. Cel polityki<br />
          2. Słowniczek<br />
          3. Administrator danych osobowych<br />
          4. Ochrona danych osobowych<br />
          5. Cele i podstawy prawne przetwarzania danych osobowych<br />
          6. Prawa użytkownika związane z przetwarzaniem danych osobowych<br />
          7. Zgoda: udzielenie, cofnięcie zgody<br />
          8. Kontakt z administratorem<br />
          9. Zmiana polityki prywatności<br />
        </PrivacyHeader>
        <PrivacyHeader number={'§ 1.'} title={'Cel polityki'}>
          Mając na uwadze zaufanie, którym obdarzają nas Użytkownicy aplikacji i
          doniosłość ochrony danych osobowych Administrator dokłada wszelkiej
          staranności by dane przekazywane przez Użytkowników były w należyty
          sposób chronione a każdy użytkownik naszej Aplikacji był świadomy
          jakimi zasadami się kierujemy. Naszym celem jest także poinformowanie
          Użytkownika o treści przepisów prawnych regulujących procesy związane
          z danymi osobowymi, w szczególności o Rozporządzeniu Parlamentu
          Europejskiego i Rady Unii Europejskiej 2016/679 z dnia 27 kwietnia
          2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
          danych osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (RODO).
          <br />
          <strong>Czym są dane osobowe?</strong>
          <br />
          Dane osobowe to informacje o zidentyfikowanej lub możliwej do
          zidentyfikowania osobie fizycznej. Możliwa do zidentyfikowania osoba
          fizyczna to osoba, którą można bezpośrednio lub pośrednio
          zidentyfikować, w szczególności na podstawie takich identyfikatorów
          jak: imię, nazwisko, numer identyfikacyjny, dane o lokalizacji,
          identyfikator internetowy bądź jeden lub kilka czynników określających
          fizyczną, fizjologiczną, genetyczną, społeczną tożsamość osoby
          fizycznej.
          <br />
          <strong>Co oznacza przetwarzanie danych osobowych?</strong>
          <br />
          Przetwarzanie danych osobowych to w zasadzie każda czynność wykonywana
          na danych osobowych. Przetwarzanie to operacja bądź zestaw operacji
          wykonywanych na danych osobowych lub zestawach danych w sposób
          zautomatyzowany lub niezautomatyzowany taka jak: zbieranie,
          modyfikowanie, przeglądanie, porządkowanie w zbiory, udostępnianie
          podmiotom trzecim, usuwanie, niszczenie.
          <br />
          <strong>Czym są pliki Cookies ( ciasteczka)?</strong>
          <br />
          Cookies to małe pliki tekstowe zapisywane na urządzeniu Użytkownika, w
          czasie korzystania przez niego z serwisów internetowych. Pliki te
          pozwalają na: korzystanie z różnych funkcji przewidzianych na stronie
          internetowej bądź aplikacji.
          <br />
          <strong>W jakim celu używamy Cookies?</strong>
          <br />
          Posługiwanie się plikami cookies ma przede wszystkim na celu
          ułatwienie Użytkownikowi korzystania z Serwisu, przykładowo poprzez
          zapamiętanie uprzednio podanych informacji w celu rekomendacji treści
          w Serwisie, rozpoznania urządzenia Użytkownika Serwisu oraz jego
          lokalizowania oraz dostosowania zawartości Serwisu do preferencji
          Użytkowników, co wpłynie na optymalizację treści prezentowanych w
          Serwisie.
        </PrivacyHeader>
        <PrivacyHeader number={'§ 2.'} title={'Słowniczek'}>
          <strong>Ilekroć jest mowa o:</strong>
          <br />
          <strong>Administratorze:</strong> oznacza to Małgorzatę Bekas
          prowadząca działalność gospodarczą pod firmą SO – So Solutions, ul.
          Podgórna 4/9C, 61-829 Poznań, Nip: 785 177 05 75, wpisaną do CEiDG,
          Regon: 362 591 963, która świadczy usługi drogą elektroniczną za
          pośrednictwem serwisu.<br />
          <strong>Serwis:</strong> oznacza to stronę internetową www.petpit.co
          lub aplikację pod którą Administrator prowadzi serwis internetowy
          działający w domenie www.petpit.co<br />
          <strong>Użytkownik:</strong> podmiot, na rzecz którego świadczone są
          usługi świadczone drogą elektroniczna wynikające z zawartej umowy
          związane z działalnością Serwisu<br />
          <strong>Urządzenie:</strong> oznacza to elektroniczne urządzenie przy
          pomocy którego Użytkownik uzyskuje dostęp do Serwisu;<br />
          <strong>Rozporządzeniu:</strong> oznacza to Rozporządzenie Parlamentu
          Europejskiego i Rady Unii Europejskiej 2016/679 z dnia 27 kwietnia
          2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
          danych osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (RODO).
        </PrivacyHeader>
        <PrivacyHeader number={'§ 3.'} title={'Administrator danych osobowych'}>
          Administratorem przekazywanych danych osobowych jest{' '}
          <strong>
            Małgorzata Bekas prowadząca działalność gospodarczą pod firmą So –
            So Solutions, zarejestrowaną w Poznaniu (61 – 829), ul. Podgórna
            4/9C, NIP: 785 177 05 75, REGON: 362 591 963.
          </strong>{' '}
          W przypadku wyrażenia przez Użytkownika dodatkowej zgody na
          przetwarzanie danych osobowych uzyskanych na podstawie aktywności w
          Serwisie administratorem danych będą także partnerzy: <br />
          Facebook;<br />
          Google AdWords,<br />
          Google Maps,<br />
          Google Analytics,<br />
          Sentry,<br />
          Expo.io<br />
        </PrivacyHeader>
        <PrivacyHeader number={'§ 4.'} title={'Ochrona danych osobowych'}>
          Sposób zabezpieczenia danych przez Administratora. Biorąc pod uwagę
          stan wiedzy technicznej, koszt wdrażania oraz charakter, zakres i
          kontekst, ryzyko i cele przetwarzania oraz ryzyko naruszenia praw lub
          wolności osób fizycznych o różnym prawdopodobieństwie wystąpienia i
          wadze zagrożenia stosuje odpowiednie środki techniczne i
          organizacyjne, które mają za zadanie zapewnić ochronę przetwarzanych
          danych osobowych, w szczególności przeciwdziałać udostepnieniu tych
          danych osobom nieupoważnionym, przetwarzaniem z naruszeniem
          obowiązujących regulacji prawnych, utrata, uszkodzeniem. Administrator
          nie wskazuje konkretnych środków ochrony, które są stosowane z uwagi
          na fakt, iż upublicznienie takich informacji mogłoby osłabić poziom
          ochrony przekazanych danych osobowych.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 5.'}
          title={'Cele i podstawy prawne przetwarzania danych osobowych'}
        >
          Dane osobowe Użytkownika przetwarzane są w związku z wykonywaniem
          umowy , której jest stroną to jest uzyskanie dostępu do pełnej
          funkcjonalności Serwisu, w szczególności ma to zastosowanie podczas
          pierwszej rejestracji do serwisu. W tym zakresie niezbędne jest
          podanie przez Użytkownika: adresu e-mail oraz nazwy Użytkownika.
          Założenie i obsługa konta Użytkownika powoduje przetwarzanie danych
          osobowych w następujących celach:
          <br />
          <br />W celu obsługi i prowadzenia konta Użytkownika w Serwisie -w
          związku z utworzeniem konta niezbędne jest podanie danych
          obejmujących: nazwę Użytkownika i adres e-mail - (art. 6 ust. 1 lit.
          b) RODO), , natomiast podanie innych danych jest fakultatywne, do
          przetwarzania tychże danych osobowych niezbędne jest wyrażenie zgody
          Użytkownika na ich przetwarzanie;
          <br />
          <br />W celach statystycznych – postawą prawna przetwarzania danych w
          tym zakresie jest uzasadniony interes, co ma na celu prowadzenie
          analiz aktywności Użytkowników Serwisu, sposobu użytkowania konta,
          poprawę funkcjonalności Serwisu - art. 6 ust. 1 lit. f RODO;
          <br />
          <br />We własnych celach marketingowych i naszych partnerów – reklama
          standardowa (niezależna od preferencji Użytkownika, reklama
          behawioralna – dopasowana do Użytkownika, newsletter – powiadomienia)
          – w tym przypadku konieczne jest wyrażenie zgody na przetwarzanie
          danych osobowych – art. 6 ust. 1 lit. A RODO<br />
          <br />
          Nadto informujemy, iż podanie danych osobowych celem wypełnienia
          formularza kontaktowego i newsletter jest dobrowolne, jednakże
          niezbędne do prawidłowego wykonania usługi tj. przesłanie informacji
          marketingowej i udzielenia odpowiedzi zwrotnej Użytkownicy, którzy nie
          ukończyli 16 roku życia celem skorzystania z aplikacji zobowiązani są
          uzyskać zgodę opiekuna prawnego na przetwarzanie ich danych osobowych.
          Administrator zobowiązuje się podjąć rozsądne działania mające na celu
          weryfikację czy zgoda na przetwarzanie danych osobowych Użytkownika
          poniżej 16 roku życia podjęta została przez opiekuna prawnego bądź
          została ona przez niego zatwierdzona.
          <br />
          <br />Administrator oświadcza, iż przedmiotowa polityka prywatności ma
          charakter uzupełniający w stosunku do polityki prywatności Google Play
          Store oraz Apple Appstore. Administrator nie ponosi odpowiedzialności
          za politykę prywatności w/w podmiotów.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 6.'}
          title={'Prawa użytkownika związane z przetwarzaniem danych osobowych'}
        >
          Użytkownik korzystający z Serwisu ma prawo do informacji o:
          <br />
          <br />Pełnej informacji o tożsamości administratora, jego danych
          kontaktowych;
          <br />
          <br />Celach przetwarzania danych osobowych;
          <br />
          <br />Odbiorcach danych osobowych;
          <br />
          <br />Okresie przez który dane osobowe Użytkownika będą przechowywane;
          <br />
          <br />Prawie żądania dostępu do danych osobowych przetwarzanych przez
          Administratora, w szczególności: sprostowania, usunięcia, ograniczeniu
          przetwarzania, prawie do przeniesienia danych;
          <br />
          <br />Prawie do cofnięcia zgody na przetwarzanie danych osobowych;
          <br />
          <br />Organie nadzorczym;
          <br />
          <br />Podstawie podania danych osobowych oraz konsekwencjach
          niepodania danych osobowych.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 7.'}
          title={'Zgoda: udzielenie, cofnięcie zgody'}
        >
          Administrator informuje, ze udzielenie zgody na przetwarzanie danych
          osobowych przez Użytkownika jest dobrowolne. Administrator zastrzega,
          że brak zgody na przetwarzane danych osobowych uniemożliwi korzystanie
          z pełnej funkcjonalności Serwisu.
          <br />
          <br />Administrator informuje, że Użytkownik ma prawo do wycofania
          zgody na przetwarzanie danych osobowych w każdym czasie. Administrator
          informuje, że wycofanie zgody nie wpływa na zgodność z prawem
          przetwarzania danych osobowych w okresie, w którym przetwarzanie było
          wykonywane na podstawie udzielonej zgody.
          <br />
          <br />Celem wycofania zgody na przetwarzanie danych osobowych
          niezbędne jest poinformowanie Administratora za pomocą poczty
          elektronicznej na adres: welovepets@petpit.co bądź tradycyjnej: ul.
          Podgórna 4/9C, 61-829 Poznań.
          <br />
          <br /> Administrator zastrzega, że mimo cofnięcia zgody na
          przetwarzanie danych osobowych będą one przetwarzane w dalszym ciągu w
          niezbędnym zakresie, jeśli:
          <br />Przepisy podatkowe bądź administracyjne będą zobowiązywały
          Administratora do ich przechowywania;
          <br />Na wypadek roszczeń Użytkownika wobec Administratora bądź
          Administratora wobec Użytkownika celem obrony bądź dochodzenia
          roszczeń.
        </PrivacyHeader>
        <PrivacyHeader number={'§ 8.'} title={'Kontakt z administratorem'}>
          Wszelkie pytania, wątpliwości, skargi powinny być kierowane przez
          Użytkownika na adres e-mail: welovepets@petpit.co bądź na adres:
          Podgórna 4/ 9C, 61-829 Poznań.<br />
          <br />
          <strong>
            Administrator wskazuje, że organem właściwym w zakresie ochrony
            danych osobowych na terytorium Rzeczypospolitej Polskiej jest:
            Prezes Urzędu Ochrony Danych Osobowych, adres: ul. Stawki 2 , 00-193
            Warszawa, strona internetowa: https://www.giodo.gov.pl/
          </strong>
        </PrivacyHeader>
        <PrivacyHeader number={'§ 9.'} title={'Zmiana polityki prywatności'}>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
          Polityce prywatności i cookie, które będą wynikiem zmian prawnych,
          rozwoju technologii internetowych bądź innych czynników. Administrator
          jest zobowiązany poinformować Użytkowników o każdej zmianie polityki
          prywatności i cookies.
          <br />
          <br />
          <br />
          <strong>Sporządzono dnia 25 maja 2018 r. </strong>
        </PrivacyHeader>
      </div>
    </Layout>
  )
}

export default PolicyPage
