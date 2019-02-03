import React from 'react'
import PropTypes from 'prop-types'

import styles from './FiltersList.module.scss'

import Filter from 'components/Filter'

const filters = [
  {
    name: 'Restauracja',
    icon: 'bowl'
  },
  {
    name: 'Hotel dla psa',
    icon: 'doghouse'
  },
  {
    name: 'Trener zwierząt',
    icon: 'collar'
  },
  {
    name: 'Hodowla',
    icon: 'paw'
  },
  {
    name: 'Weterynarz',
    icon: 'vet'
  },
  {
    name: 'Psi fryzjer',
    icon: 'groom'
  },
  {
    name: 'Hotel przyjazny zwierzętom',
    icon: 'pet-hotel'
  },
  {
    name: 'Sklep',
    icon: 'shop'
  },
  {
    name: 'Schronisko',
    icon: 'shelter'
  },
  {
    name: 'Dom tymczasowy',
    icon: 'house'
  },
  {
    name: 'Fundacja',
    icon: 'heart'
  },
  {
    name: 'Ośrodek szkoleniowy',
    icon: 'whistle'
  },
  {
    name: 'Wybieg dla psów',
    icon: 'dog-side'
  },
  {
    name: 'Handler',
    icon: 'suitcase'
  },
  {
    name: 'Inne',
    icon: 'bone'
  },
  {
    name: 'Opiekun zwierzęcia',
    icon: 'care'
  },
  {
    name: 'Behawiorysta kotów',
    icon: 'dog'
  },
  {
    name: 'Trener psów',
    icon: 'cat'
  }
]

const FiltersList = () => {
  return (
    <div
      className={styles.filterslist}
    >
      {
        filters.map(filter => {
          return <Filter icon={filter.icon} title={filter.name}/>
        })
      }
    </div>
  )
}

FiltersList.propTypes = {}
FiltersList.defaultProps = {}

export default FiltersList
