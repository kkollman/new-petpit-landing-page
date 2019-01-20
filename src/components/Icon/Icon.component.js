import React from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'

// import below is to import a svg file gatsby-way
import icons from './icons.svg' // eslint-disable-line no-unused-vars

const Icon = ({ name, color, size, label, className }) => {
  return (
    <svg
      className={className}
      height={size}
      width={size}
      color={color}
      role={label ? 'img' : null}
      aria-labelledby={label ? `${name}-title` : null}
    >
      {label && <title id={`${name}-title`}>{label || name}</title>}
      <use xlinkHref={`#icons_icon-${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
}
Icon.defaultProps = {
  size: 24,
  color: '#000'
}

export default Icon
