import React from 'react'
import PropTypes from 'prop-types'

import styles from './PhoneMock.module.scss'

const PhoneMock = ({ children }) => {
  return (
    <div
      className={styles.phonemock}
    >
      <div className={styles.content}>
        { children }
      </div>
    </div>
  )
}

PhoneMock.propTypes = {
  children: PropTypes.node
}
PhoneMock.defaultProps = {}

export default PhoneMock
