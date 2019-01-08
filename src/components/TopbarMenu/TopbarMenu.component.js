import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './TopbarMenu.module.scss'

import Button from 'components/Button'

const TopbarMenu = ({ onClick }) => {
  return (
    <div
      className={styles.topbarmenu}
      onClick={onClick}
    >
      <Button label={'Pobierz aplikację'} />
    </div>
  )
}

TopbarMenu.propTypes = {
  onClick: PropTypes.func
}
TopbarMenu.defaultProps = {
  onClick: noop
}

export default TopbarMenu
