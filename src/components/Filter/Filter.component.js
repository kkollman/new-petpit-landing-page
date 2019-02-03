import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'

import styles from './Filter.module.scss'

const Filter = ({ icon, title }) => {
  return (
    <figure className={styles.filter}>
      <Icon name={icon} size={37} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>
  )
}

Filter.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.title
}

Filter.defaultProps = {
  icon: 'paw',
  title: 'Filter'
}

export default Filter
