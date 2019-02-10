import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import cls from 'classnames'

import styles from './Story.module.scss'

const Story = ({ header, copy, children, classname }) => {
  return (
    <section className={cls(styles.story, classname)}>
      <header className={styles.title}>{header}</header>
      <article className={styles.copy}>{copy}</article>
      {children && <div className={styles.other}>{children}</div>}
    </section>
  )
}

Story.propTypes = {
  header: PropTypes.string,
  copy: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  classname: PropTypes.string
}
Story.defaultProps = {
  onClick: noop
}

export default Story
