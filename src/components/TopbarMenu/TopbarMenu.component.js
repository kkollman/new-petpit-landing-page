import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './TopbarMenu.module.scss'

const TopbarMenu = ({ onClick }) => {
  return (
    <div
      className={styles.topbarmenu}
      onClick={onClick}
    >
      TopbarMenu
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
