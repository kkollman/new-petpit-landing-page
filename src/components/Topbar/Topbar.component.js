import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './Topbar.module.scss'

const Topbar = ({ onClick, children }) => {
  return (
    <div
      className={styles.topbar}
      onClick={onClick}
    >
      {children}
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
