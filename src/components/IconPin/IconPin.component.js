import React from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'

// import below is to import a svg file gatsby-way
import icons from './pin.svg' // eslint-disable-line no-unused-vars

const PinIcon = ({ name, size, label, className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={1.25 * size}
      role={label ? 'img' : null}
      aria-labelledby={label ? `${name}-title` : null}
    >
      {label && <title id={`${name}-title`}>{label || name}</title>}
      <use xlinkHref={`#pin_icon-${name}`}  width={size} />
    </svg>
  )
}

PinIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  className: PropTypes.string
}
PinIcon.defaultProps = {
  size: 24
}

export default PinIcon
