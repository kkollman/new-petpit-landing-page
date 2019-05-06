import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import cls from 'classnames'

import styles from './Button.module.scss'

const Button = ({ onClick, label, className }) => {
  return (
    <div className={cls(styles.button, className)} onClick={onClick}>
      {label}
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string
}
Button.defaultProps = {
  onClick: noop
}

export default Button
