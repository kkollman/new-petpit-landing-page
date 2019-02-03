import React from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'

import styles from './Feature.module.scss'

const Feature = ({ leftPanel, rightPanel, padded, centerContent }) => {
  return (
    <article className={cls(styles.feature, padded && styles.padded)}>
      {leftPanel && (
        <section
          className={cls(
            styles.leftPanel,
            styles.panel,
            centerContent && styles.centered
          )}
        >
          {leftPanel}
        </section>
      )}
      {rightPanel && (
        <section
          className={cls(
            styles.rightPanel,
            styles.panel,
            centerContent && styles.centered
          )}
        >
          {rightPanel}
        </section>
      )}
    </article>
  )
}

Feature.propTypes = {
  leftPanel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightPanel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  centerContent: PropTypes.bool,
  padded: PropTypes.bool
}
Feature.defaultProps = {
  centerContent: true
}

export default Feature
