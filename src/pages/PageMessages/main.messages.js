import React from 'react'

import pageLayoutStyles from 'components/PageLayout/PageLayout.module.scss'

const Messages = {
  intro: {
    header: 'Aplikacja dla fanów psów i kotów!',
    copy:
      'Tak jak Ty, kochamy zwierzęta. Ta aplikacja jest dla Was – dla Ciebie i Twojego futrzaka – żeby Wasze życie razem było jeszcze lepsze <3'
  },
  imageAlts: {
    appStoreLogo: 'Przejdź do Apple App Store',
    googlePlayLogo: 'Przejdź do Google Play store'
  },
  friendlyPlaces: {
    header: 'Spacer? Gdzie dzisiaj idziemy?',
    copy:
      'Park, restauracja, a może wypad za miasto? Pokażemy Wam sprawdzone miejsca, gdzie Ty i Twój pies lub kot będziecie mile widziani'
  },
  detailsView: {
    header: 'Daj głos! Szukam',
    copy:
      'Prowadzisz miejsce dog / cat friendly – pozwól się znaleźć :) Stworzenie profilu w naszej aplikacji jest naprawdę proste, a dzięki niemu futrzaki i ich człowieki łatwo do Ciebie dotrą'
  },
  filters: {
    header: (
      <p className={pageLayoutStyles.filtersHeader}>
        Jestem na tropie, <span>filtruj!</span>
      </p>
    ),
    copy: (
      <p className={pageLayoutStyles.filtersCopy}>
        Twój pies bezbłędnie potrafi odnaleźć rzucony przez Ciebie kijek. Pokaż
        mu, że na tropieniu znasz się równie dobrze! Szukając usługi dla Twojego
        pupila zaznacz kategorie, które Cię interesują. To co, aport? :)
      </p>
    )
  },
  pinnedMap: {
    header: 'Znasz mojego nowego człowieka?',
    copy:
      'Koty i psy ze schronisk, fundacji i domów tymczasowych czekają na swój dom. Dołączając do naszej społeczności możesz pomóc w adopcji bezdomnych zwierząt'
  }
}

export default Messages
