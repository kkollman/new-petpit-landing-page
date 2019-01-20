import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './Feature.module.scss'

const Feature = ({ onClick }) => {
  return (
    <div
      className={styles.feature}
      onClick={onClick}
    >
      Feature
    </div>
  )
}

Feature.propTypes = {
  onClick: PropTypes.func
}
Feature.defaultProps = {
  onClick: noop
}

export default Feature
