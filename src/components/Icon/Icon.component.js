import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icon.module.scss'

//TODO: Find out a way to quickly import all files within icons folder
//perhaps with svg-sprite module: generate all svgs into single svg places in /static folder and then import output file here
import Blog from './Icons/blog.svg'

const Icon = ({ name, color, size }) => {
  return (
    <svg
      className={styles.icon}
      height={size}
      fill={color}
    >
      <use xlinkHref={`#${name}`}
      />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string
}
Icon.defaultProps = {
  name: 'blog',
  size: 24,
  color: '#000'
}

export default Icon
