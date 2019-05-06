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
        <h1 className={styles.header} >
          Regulamin
        </h1>
        <PrivacyHeader>
          <strong>Spis treści:</strong>
          <br/>
          <br/>
          <ol>
            <li>Postanowienia ogólne</li>
            <li>Słowniczek pojęć użytych w regulaminie</li>
            <li>Wymagania techniczne</li>
            <li>Rejestracja Użytkowników</li>
            <li>Zasady korzystania z aplikacji</li>
            <li>Dodatkowe funkcjonalności Aplikacji</li>
            <li>Zakończenie użytkowania aplikacji</li>
            <li>Polityka prywatności i cookies</li>
            <li>Reklamacje</li>
            <li>Odpowiedzialność Operatora</li>
            <li>Newsletter</li>
            <li>Zmiany regulaminu</li>
            <li>Postanowienia końcowe</li>
            <li>Oświadczenia Użytkownika</li>
          </ol>
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 1.'}
          title={''}>
          1.1. Przedmiotowy Regulamin określa zasady ubytkowania aplikacji mobilnej Petpit, która jest przeznaczona na urządzenia mobilne wyposażone w system operacyjny IOS, Android Windows Phone. Regulamin opisany w zdaniu powyższym jest regulaminem w rozumieniu art. 8 Ustawy z dnia 18 lipca 2002 o świadczeniu usług droga elektroniczną (Dz. U. 2002 nr 144 poz. 1204 z późniejszymi zmianami). <br/><br/>
          1.2. Właścicielem i Operatorem aplikacji jest Małgorzata Bekas prowadząca działalność gospodarczą pod firmą So – So Solution, ul. Podgórna 4/9C, 61-829 Poznań, Nip: 785 177 05 75, wpisaną do CEiDG, Regon: 362 591 963.<br/><br/>
          1.3 Usługi świadczone za pośrednictwem Aplikacji polegają na:
          <ul>
            <li>Wymianie informacji między Użytkownikami w zakresie dotyczącym umiejscowienia obiektów „pets friendly”, w szczególności: sklepy zoologiczne, gabinety weterynaryjne, restauracje, ośrodki szkoleniowe;</li>
            <li>Ocena dokonywana przez Użytkowników miejsc pets friendly;</li>
            <li>Przekazywanie informacji o produktach i usługach podmiotów trzecich;</li>
            <li>udostępnianiu wydarzeń widocznych dla innych użytkowników aplikacji,</li>
          </ul>
          1.4 Aplikację można pobrać ze sklepu internetowego AppStore ( dla systemu IOS) oraz Google Play (dla systemu Android).<br/><br/>
          1.5 Pobranie aplikacji z w/w sklepów oraz korzystanie z aplikacji jest bezpłatne. Operator dopuszcza możliwość wprowadzenia dodatkowych odpłatnych funkcjonalności. Operator zobowiązuje się w wyraźny sposób oznaczyć odpłatne funkcjonalności wraz ze szczegółowym wskazaniem ceny za poszczególne funkcjonalności.<br/><br/>
          1.6 Pobranie aplikacji ze sklepów internetowych jest równoznaczne z zawarciem
          z Operatorem umowy o świadczenie usług drogą elektroniczną w związku
          z korzystaniem z Aplikacji.<br/><br/>
          1.7 Aplikacja oraz wszelkie informacje, rozwiązania techniczne, rozwiązania lokalizacyjne, logotypy, znaki graficzne i towarowe stanowią własność Operatora bądź jego partnerów handlowych.<br/><br/>
          1.8 Koszt transmisji danych niezbędne do pobrania, uruchomienia, użytkowania  aplikacji pokrywany jest przez Użytkownika w zakresie umów zawartych z dostawcą telekomunikacyjnym. Operator w żadnym zakresie nie ponosi odpowiedzialności za wysokość opłat naliczanych przez operatorów telekomunikacyjnych. Operator wskazuje Użytkownikom na zasadność korzystania z funkcji pomiaru ilości przesyłanych danych.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 2.'}
          title={''}>
          <strong>Ilekroć w regulaminie użyte jest:</strong>
          <br/>
          <strong>Operator</strong> -  oznacza to Małgorzatę Bekas prowadząca działalność gospodarczą pod firmą So – So Solution, ul. Podgórna 4/9C, 61-829 Poznań, Nip: 785 177 05 75, wpisaną do CEiDG, Regon: 362 591 963.<br/>
          <strong>Serwis</strong> - oznacza to stronę internetową www.petpit.co lub aplikację Petpit pod którą Operator  prowadzi serwis internetowy działający w domenie www.petpit.co<br/>
          <strong>Użytkownik</strong> - oznacza to podmiot, na rzecz którego świadczone są usługi świadczone drogą elektroniczna wynikające z zawartej umowy związane z działalnością Serwisu
          <br/>
          <strong>Urządzenie</strong> - oznacza to elektroniczne urządzenie przy pomocy którego Użytkownik uzyskuje dostęp do Serwisu;<br/>
          <strong>Konto</strong> – oznacza to identyfikowalna za pomocą adresu e-mail wyodrębniona część Serwisu za pomocą której Użytkownik jest uprawniony do dokonywania określonych działań w ramach Serwisu (panel administracyjny).<br/>
          <strong>Regulamin</strong> – oznacza to niniejszy regulamin.<br/>
          <strong>Ustawa</strong> – oznacza  to Ustawę z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. 2002 nr 144 poz. 1204 z późn. Zm.) <br/>
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 3.'}
          title={''}>
          3.1 Aplikacja dostępna jest dla wszystkich Użytkowników, którzy pobiorą ją ze sklepów, prawidłowo zainstalują i uruchomią na Urządzeniu spełniającym następujące wymagania techniczne:
          <ul>
            <li>Android (wersja minimum 5)</li>
            <li>OS (wersja minimum 10)</li>
          </ul><br/>
          3.2 Celem prawidłowego funkcjonowania Aplikacji niezbędne jest uruchomienie:
          <ul>
            <li>Aktywna funkcja lokalizowania Użytkownika – GPS;</li>
            <li>Aktywne połączenie internetowe</li>
          </ul>
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 4.'}
          title={''}>
          4.1. Użytkowanie Aplikacji jest możliwe po dokonaniu uprzedniej rejestracji, którego rezultatem jest utworzenie Konta Użytkownika. Celem dokonania rejestracji niezbędne jest podanie przez Użytkownika danych obejmujących:
          <ul>
            <li>Nazwa Użytkownika</li>
            <li>Adres e-mail;</li>
            <li>Hasło</li>
          </ul>
          Nadto w przypadku Użytkownika – usługodawcy niezbędne jest podanie:
          <ul>
            <li>Adresu świadczonych usług;</li>
            <li>Numeru kontaktowego;</li>
            <li>Adresu e-mail;</li>
            <li>Adresu strony internetowej</li>
          </ul>
          <strong>Warunkiem koniecznym ukończenia procesu rejestracji jest potwierdzenie zapoznania się z Regulaminem, Polityką prywatności i cookies oraz akceptacji tychże treści.</strong><br/>
          4.2 Na podany adres e-mail wysłany zostanie e-mail zawierający link aktywacyjny, którego kliknięcie bądź skopiowanie i wklejenie w pasku przeglądarki potwierdzi ukończenie procesu rejestracji Użytkownika. PO dokonaniu w/w czynności możliwe będzie zalogowanie do Aplikacji i uzyskanie dostępu do pełnej funkcjonalności.<br/><br/>
          4.3 Operator nie dokonuje weryfikacji danych podanych w toku procesu rejestracji. Operator zastrzega sobie możliwość ograniczenia funkcjonalności Konta w przypadku uzasadnionych wątpliwości co do prawdziwości podanych danych do czasu potwierdzenia przez Użytkownika prawdziwości danych. Sposób potwierdzenia danych osobowych przekazany będzie Użytkownikowi za pomocą poczty e-mail.<br/><br/>
          4.4 Użytkownik ma praw edytować dane osobowe przekazane w toku procesu rejestracji w każdym momencie. Edycja danych dokonywana jest za pomocą Aplikacji.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 5.'}
          title={''}>
          5.1. Użytkownicy są zobowiązani do korzystania z Aplikacji w sposób zgodny z przepisami powszechnie obowiązującego prawa, niniejszym Regulaminem oraz regulaminami sklepów z których Aplikacja została pobrana. Nadto Użytkownik jest zobowiązany przestrzegać zasad współżycia społecznego, w szczególności ogólnych zasad korzystania z sieci Internetu i aplikacji mobilnych.<br/><br/>
          5.2 Operator zastrzega sobie możliwość do usuwania treści zamieszczanych przez Użytkowników zawierające sformułowania wulgarne, powszechnie uznane za obraźliwe, naruszające prawa autorskie, własności intelektualnej, szkodzące dobremu  imieniu Operatora oraz jego partnerów  bez uprzedniego poinformowaniu Użytkownika.<br/><br/>
          5.2 Użytkownik przed wszystkim zobowiązany jest do:
          <ul>
            <li>Korzystania z Aplikacji w sposób niezakłócający jej prawidłowego funkcjonowania;</li>
            <li>Korzystania z Aplikacji z poszanowaniem prawnie chronionych praw osób trzecich, w szczególności dóbr osobistych;</li>
            <li>Korzystania z wszelkich treści dostępnych w Aplikacji wyłącznie w zakresie dozwolonego użytku.</li>
          </ul>
          5.4 Użytkownicy zobowiązani są powiadomić Operatora o każdorazowym naruszeniu ich praw.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 6.'}
          title={''}>
          Aplikacja umożliwia Użytkownikowi zintegrowanie z kontem na portalu społecznościowym Facebook. Operator zaznacza, że integracja taka jest dobrowolna i w żaden sposób nie wpływa na funkcjonalność Aplikacji.  Dokonanie integracji i dezaktywacji jest możliwe w każdym czasie.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 7.'}
          title={''}>
          7.1 Użytkownik ma prawo w każdym czasie zaprzestać korzystania z Aplikacji. Operator informuje, że brak akceptacji zmian Regulaminu, Polityki prywatności i cookies jest równoznaczne z zaprzestaniem użytkowania Aplikacji. Celem zaprzestania użytkowania Aplikacji konieczne jest usunięcie jej z Urządzenia. <br/><br/>
          7.2 Operator w przypadku stwierdzenia, że Użytkownik korzysta z Aplikacji, w szczególności  w sposób niezgodny z zasadami opisanymi w pkt 5 Regulaminu jest uprawniony do ograniczenia bądź zaprzestania świadczenia usług drogą elektroniczną na rzecz Użytkownika.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 8.'}
          title={''}>
          Integralna częścią Regulaminu jest Polityka prywatności i cookies z dnia 25 maja 2018 r. zamieszczona w Serwisie. Użytkownik przyjmuje do wiadomości, że akceptując przedmiotowy regulamin dokonuje także akceptacji Polityki prywatności i cookies.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 9.'}
          title={''}>
          9.1 Użytkownik ma prawo złożyć reklamację w związku z funkcjonowaniem Aplikacji. Wszelkie reklamacje powinny być kierowane na adres mailowy Operatora : welovepets@petpit.co bądź pocztą tradycyjną na adres: Małgorzata Bekas So – So Solution, ul. Podgórna 4/9C, 61-829 Poznań <br/><br/>
          9.2 Reklamacja powinna zawierać co najmniej dane umożliwiające identyfikację Użytkownika, takie jak:
          <ul>
            <li>Nazwę wraz z adresem e- mail, model i nazwę Urządzenia, wersje systemu informatycznego, opis zdarzenia stanowiącego podstawę reklamacji w przypadku reklamacji składanej drogą elektroniczną;</li>
            <li>Imię, nazwisko, adres korespondencyjny, model i nazwę Urządzenia, wersje systemu informatycznego, opis zdarzenia stanowiącego podstawę reklamacji w przypadku reklamacji składanej drogą poczty tradycyjnej.</li>
          </ul>
          9.3 Operator jest zobowiązany rozpatrzyć reklamację w terminie 14 dni od jej otrzymania. Operator jest zobowiązany poinformować Użytkownika o sposobie rozpatrzenia reklamacji w formie wybranej przez Użytkownika tj. poczta elektroniczna bądź tradycyjną. Operator jest uprawniony wezwać Użytkownika do podania brakujących danych niezbędnych bądź przedłożenia dodatkowych danych niezbędnych do prawidłowego rozpatrzenia reklamacji. Okres uzupełniania danych przez Użytkownika zawiesza bieg terminu do rozpatrzenia reklamacji.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 10.'}
          title={''}>
          10.1 Operator jest zobowiązany do bieżącego nadzoru nad technicznym funkcjonowaniem Aplikacji w sposób umożliwiający Użytkownikom dostęp do pełnej funkcjonalności. Operator mając na uwadze środki techniczne i technologiczne nie jest w stanie zagwarantować stałej funkcjonalności i bezbłędnego działania Aplikacji. <br/><br/>
          10.2 Operator nie ponosi odpowiedzialności za:
          <ul>
            <li>Szkody, utracone korzyści  będące następstwem naruszania zasad i przepisów wskazanych w punkcie 5 Regulaminu;</li>
            <li>Szkody, utracone korzyści będące następstwem zakłóceń wszystkich lub funkcjonalności Aplikacji;</li>
            <li>Usługi, serwisy, których dostawcą są podmioty trzecie.</li>
          </ul>
          10.3 Operator nie ponosi odpowiedzialności za zakłócenia związane z funkcjonowaniem : ograniczenia, problemy techniczne systemów teleinformatyczne z których korzystają Użytkownicy, a na skutek czego Użytkownicy nie mogą korzystać z Aplikacji.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 11.'}
          title={''}>
          11.1 Użytkownicy mogą skorzystać z funkcji newslettera. Zasady udostępniania danych osobowych niezbędnych do uzyskania tejże funkcjonalności opisane zostało w Polityce prywatności o cookies.<br/><br/>
          11.2 Celem skorzystania z funkcji newsletter niezbędne jest wyrażenie zgody na jego otrzymywanie i przetwarzania danych osobowych w tym zakresie przez Operatora (Administratora danych osobowych) tj. adres e-mail, co dokonuje się poprzez zaznaczenie pola wyboru opcji newsletter. Operator wskazuje, że kliknięcie opcji wyboru jest równoznaczne z zawarciem umowy o świadczenie usługi newslettera.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 12.'}
          title={''}>
          12.1 Operator zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym czasie. Zmiany Regulaminu obowiązują od momentu upublicznienia ich w Serwisie.<br/><br/>
          12.2 Operator zapewnia Użytkownikom dostęp do Regulaminu poprzez umieszczenie go w Serwisie.<br/><br/>
          12.3 Operator zobowiązany jest poinformować Użytkowników o każdorazowej zmianie Regulaminu.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 13.'}
          title={''}>
          13.1 W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie znajdują przepisy powszechnie obowiązującego prawa, w szczególności Kodeksu Cywilnego oraz Ustawy.<br/><br/>
          13.2 Prawem właściwym dla stosunków między Użytkownikiem a Operatorem jest prawo polskie. <br/><br/>
          13.3 Wszelkie spory mogące wyniknąć podczas świadczenia usług przez Operatora rozpatrywane będą przez sądy powszechne właściwe dla miejsca siedziby Operatora. <br/><br/>
          13.4 Operator informuje, że Użytkownicy będący konsumentami mają prawo skorzystać z możliwości dochodzenia roszczeń i rozpatrywania reklamacji przed Stałym Polubownym Sądem Konsumenckim działających przy Wojewódzkich Inspektoratach Inspekcji Handlowej. Wszelkie informacje dot. w/w instytucji wraz z danymi adresowymi zmieszczone są na stronie www.uokik.gov.pl w zakładce konsument. <br/><br/>
          13.5 Regulamin obowiązuje od dnia 25 maja 2018 r.
        </PrivacyHeader>
        <PrivacyHeader
          number={'§ 14.'}
          title={''}>
          14.1. Oświadczam, iż zapoznałam/em się z treścią niniejszego Regulaminu oraz jego integralną częścią tj. Polityką prywatnością i cookies, w szczególności w zakresie celu i sposobu przetwarzania danych osobowych oraz że akceptuję ich postanowienia.
          <br/><br/>
          14.2   Oświadczam, iż wyrażam zgodę na przetwarzanie moich danych osobowych przez Małgorzatę Bekas prowadzącą działalność gospodarczą pod firmę So – So Solutions z siedzibą w Poznaniu, ul. Podgórna 4/9C w celu realizacji usług mobilnych wynikających umowy  o świadczenie usług elektronicznych związanych z korzystaniem z aplikacji Petpit oraz strony www.petpit.co. Nadto oświadczam, iż dane osobowe podaję dobrowolnie, w sposób świadomy i są one zgodne ze stanem rzeczywistym.
          <br/><br/>
          14.3. Oświadczam, iż wyrażam zgodę na przetwarzanie moich danych osobowych celem wysyłania newslettera oraz że zapoznałam/em się z postanowieniami Regulaminu i Polityki prywatności i cookies.
          <br/><br/>
          14.4 Oświadczam, iż wyrażam zgodę na otrzymywanie informacji handlowej pochodzącej od partnerów Operatora w formie marketingu bezpośredniego tj. e-mail. Oświadcza, iż zgodę udzielam dobrowolnie a wcześniej zapoznałem się z przysługującymi mi prawami, w szczególności: prawo do ograniczenia przetwarzania danych osobowych, do cofnięcia zgody w każdym czasie oraz dostępu do przekazanych danych osobowych.
        </PrivacyHeader>
      </div>
    </Layout>
  )
}

export default PolicyPage
