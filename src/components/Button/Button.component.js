import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './Button.module.scss'

const Button = ({ onClick, label }) => {
  return (
    <div
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}
Button.defaultProps = {
  onClick: noop
}

export default Button
