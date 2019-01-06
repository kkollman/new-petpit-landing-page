import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './Topbar.module.scss'

const Topbar = ({ onClick }) => {
  return (
    <div
      className={styles.topbar}
      onClick={onClick}
    >
    </div>
  )
}

Topbar.propTypes = {
  onClick: PropTypes.func
}
Topbar.defaultProps = {
  onClick: noop
}

export default Topbar
