import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './COMPONENT_NAME.module.scss'

const COMPONENT_NAME = ({ onClick }) => {
  return (
    <div
      className={styles.component_name}
      onClick={onClick}
    >
      COMPONENT_NAME
    </div>
  )
}

COMPONENT_NAME.propTypes = {
  onClick: PropTypes.func
}
COMPONENT_NAME.defaultProps = {
  onClick: noop
}

export default COMPONENT_NAME
