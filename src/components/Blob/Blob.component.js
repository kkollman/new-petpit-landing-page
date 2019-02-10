import React from 'react'
import PropTypes from 'prop-types'

import styles from './Blob.module.scss'

const Blob = ({ classname, outline, height }) => {
  return outline ? (
    <svg
      id="graphics"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66 78"
      fill="none"
      stroke="url(#blob-linear-gradient)"
      strokeWidth="0.05"
      height={height || '400px'}
      className={classname}
    >
      <defs>
        <linearGradient
          id="blob-linear-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0.047"
          y1="37.807"
          x2="63.934"
          y2="37.807"
        >
          <stop offset="0" stopColor="#fd1857" />
          <stop offset="1" stopColor="#ff6000" />
        </linearGradient>
      </defs>
      <path
        transform="translate(1, 1)"
        className="st0"
        d="M29.5,3.7C14.3,17.8,2.7,26.2,0.6,45.2c-3.7,33.2,12.8,0.6,22.4,10c2.3,2.3,7.5,14.5,8.4,17.1 c5,11.6,32.4-12.1,32.5-31.8C64,20.3,44.3-10,29.5,3.7z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71.9 61"
      height={height || '400px'}
      className={classname}
    >
      <linearGradient
        id="blob-full-gradient"
        gradientUnits="userSpaceOnUse"
        x1="1.081"
        y1="46.418"
        x2="65.982"
        y2="8.948"
      >
        <stop offset="0" stopColor="#fd1857" />
        <stop offset="1" stopColor="#ff6000" />
      </linearGradient>
      <path
        d="M63.3 10.4c-19.4-7.2-32.2-13.7-50-7.1C-18 15 18.6 15 14.5 27.8 13.5 30.9 4.9 41 2.9 43c-8.1 9.7 25.4 23.5 43 14.7 18.2-9 36.4-40.3 17.4-47.3z"
        fill="url(#blob-full-gradient)"
      />
    </svg>
  )
}

Blob.propTypes = {}
Blob.defaultProps = {}

export default Blob
