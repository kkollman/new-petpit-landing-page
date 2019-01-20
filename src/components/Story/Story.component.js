import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import styles from './Story.module.scss'

const Story = ({ header, copy, children }) => {
  return (
    <section className={styles.story}>
      <header className={styles.title}>{header}</header>
      <article className={styles.copy}>{copy}</article>
      {children && <div className={styles.other}>{children}</div>}
    </section>
  )
}

Story.propTypes = {
  header: PropTypes.string,
  copy: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}
Story.defaultProps = {
  onClick: noop
}

export default Story
