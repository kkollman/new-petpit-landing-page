import React from 'react'
import PropTypes from 'prop-types'

const PetpitLogo = ({ colored, size }) => {
  if (colored) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox="0 0 433 500"
        role="img"
        aria-labelledby="petpitlogotitle"
      >
        <title id={'petpitlogotitle'}>Petpit logo</title>
        <path d="M85.4 410.2c0 23.9-14.9 37.8-40.8 37.8H26.5v28.1H0V374.6h44.6c25.9 0 40.8 13.1 40.8 35.6zm-25.2.9c0-10-6.2-15.3-16.9-15.3H26.5v31.1h16.8c10.7 0 16.9-5.5 16.9-15.8zM155.8 448l14.5 13c-9.1 10.7-21.1 15.9-35.9 15.9-25.3 0-42.3-15.8-42.3-39.7 0-24 15.8-40.2 40.8-40.4 23.5-.1 38.9 14.2 39.5 37.3L120 446.9c2.9 6.8 8.7 10.7 16.2 10.7 7 0 13.8-3.4 19.6-9.6zM118 432.7l29.1-7.2c-1.9-6.9-6.7-10.3-13-10.3-9.3 0-15.3 6.2-16.1 17.5zM230.3 472c-5.6 3.3-13.5 5.2-20.8 5.2-15.5 0-26.3-9.6-26.3-26.2v-71.2h25.5v21.7H229v17.1h-20.4V447c0 6.4 2.9 9.4 7.7 9.4 2.8 0 5.8-.9 9.1-2.6l4.9 18.2zM328.7 437.3c0 23.9-14.2 39.7-35.9 39.7-10 0-18.1-3.9-23.6-11v38.2h-25.8V397.8h25.8v10.1c5.5-7.1 13.3-11 23-11 21.9 0 36.5 16.1 36.5 40.4zm-25.9-.6c0-11.6-6.8-19.5-16.9-19.5-9.8 0-16.6 8-16.6 19.5 0 11.6 6.8 19.4 16.6 19.4 10.1 0 16.9-7.8 16.9-19.4zM367.7 397.8v78.3h-25.6v-78.3h25.6zm-1-22c0 6.8-4.9 11.7-11.7 11.7-6.8 0-11.7-4.9-11.7-11.7 0-6.9 4.9-11.9 11.7-11.9 6.8 0 11.7 4.9 11.7 11.9zM433 472c-5.6 3.3-13.5 5.2-20.8 5.2-15.5 0-26.3-9.6-26.3-26.2v-71.2h25.5v21.7h20.4v17.1h-20.4V447c0 6.4 2.9 9.4 7.7 9.4 2.8 0 5.8-.9 9.1-2.6L433 472z" />
        <g>
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            y1="180.614"
            x2="432.973"
            y2="180.614"
          >
            <stop offset="0" stopColor="#f39323" />
            <stop offset="1" stopColor="#e7267a" />
          </linearGradient>
          <path
            d="M397.5 100.2c-20.3-28.9-47.6-51.6-80.9-67.5C253.9 3 179.1 3 116.4 32.8c-33.4 15.8-60.6 38.5-81 67.5C.9 149.4-4.2 202.1 2.6 235.1c4.6 22.5 14.9 39.7 29.1 48.5 12.9 8 23.8 10.5 32.6 10.5 8.7 0 15.3-2.5 19.5-4.9 4.5-2.5 8-5.9 10.5-10 6.4 11.5 14.8 23 25.5 34.3 23.5 24.8 56.1 37.3 96.8 37.3s73.3-12.6 96.8-37.3c10.5-11 18.6-22.3 25-33.5 2.5 3.7 5.8 6.8 10 9.1 14.8 8.2 34.1 6.2 53-5.5 14.1-8.7 24.4-26 29.1-48.5 6.7-33 1.5-85.7-33-134.9zm14.2 131c-3.5 17-10.9 30.2-20.4 36.1-12.9 8-25.1 9.8-33.7 5-6.3-3.5-7.3-10.3-7.4-18.8 11.2-32.2 10.3-62.3 9.2-83.4l-.2-5.1c-.2-5.3-4.7-9.2-10-9.1-5.3.2-9.3 4.7-9.1 10l.3 5.2c1 19.8 1.8 47.2-8.3 76.2-.3.6-.6 1.3-.7 2-6.2 17-16.1 34.4-31.9 51-19.8 20.8-47.7 31.4-83 31.4s-63.2-10.6-83-31.4c-43.6-45.8-42.6-97.3-41-129.2l.3-5.2c.2-5.3-3.8-9.7-9.1-10-5.3-.1-9.7 3.8-10 9.1l-.2 5.1c-1 20.4-1.9 49.2 8.2 80.2 0 .4-.1.7-.1 1.1 0 9.7-.5 17.4-7.1 21.1-8.1 4.5-20.1 2.6-32.7-5.2-9.5-5.9-16.9-19-20.4-36.1-5.9-29-1.2-75.8 29.8-120C69.5 85 94.2 64.4 124.6 50c57.5-27.3 126.2-27.3 183.8 0 30.4 14.4 55.1 35 73.5 61.2 31 44.2 35.7 91 29.8 120z"
            fill="url(#a)"
          />
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="142.344"
            y1="218.989"
            x2="289.374"
            y2="218.989"
          >
            <stop offset="0" stopColor="#f39323" />
            <stop offset="1" stopColor="#e7267a" />
          </linearGradient>
          <path
            d="M280.1 239.6c-2.4 0-4.7.9-6.4 2.6-7.2 6.9-14.7 10.4-22.2 10.4-2.7 0-5.4-.5-8-1.4-4.7-1.7-8.9-4.8-12.2-8.8 33.6-21.1 34.4-41.6 31.6-52.3-3.6-13.7-16.4-23.2-31.2-23.2-5.5 0-10.8 1.3-15.5 3.8-4.7-2.4-9.9-3.7-15.4-3.7-14.6 0-27.3 9.5-30.9 23.1-2.8 10.7-2.2 31.1 30.7 52.1-3.4 4.2-7.7 7.4-12.4 9.1-2.6 1-5.3 1.4-8.1 1.4-7.5 0-14.9-3.5-22.1-10.4-1.7-1.7-4-2.6-6.4-2.6-2.6 0-4.9 1-6.7 2.9-3.5 3.7-3.4 9.6.3 13.1 10.5 10 22.4 15.4 34.4 15.6h.5c5 0 9.8-.9 14.5-2.6 7-2.5 13.6-7 19-13l2.2-3.2 2.6 3.2c5.3 5.9 11.9 10.3 18.9 12.9 4.6 1.7 9.4 2.6 14.3 2.6h.7c12-.2 23.9-5.6 34.3-15.6 3.7-3.5 3.8-9.4.3-13.1-1.8-1.9-4.2-2.9-6.8-2.9zm-63-8c-.3.2-.6.2-.9.2-.3 0-.6-.1-.9-.2-44.2-25.1-30.6-48.2-14.4-48.2 4.9 0 10.1 2.2 13.9 7.1.4.5.9.7 1.4.7.5 0 1.1-.2 1.4-.7 3.8-5 9.1-7.1 14.1-7.1 16.3 0 30.4 22.9-14.6 48.2z"
            fill="url(#b)"
          />
        </g>
      </svg>
    )
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 433 493"
      width={size}
      height={size}
      role="img"
      aria-labelledby="blackandwhitelogotitle"
    >
      <title id={'blackandwhitelogotitle'}>
        Petpit logo in black and white
      </title>
      <path d="M280.1 229.8c-2.4 0-4.7.9-6.4 2.6-7.2 6.9-14.7 10.4-22.1 10.4-2.7 0-5.4-.5-8-1.4-6.3-2.3-11.9-7.2-15.4-13.5 36.8-21.7 37.6-43.1 34.7-54.2-3.6-13.6-16.4-23.2-31.2-23.2-5.5 0-10.8 1.3-15.5 3.8-4.7-2.4-9.9-3.7-15.3-3.7-14.6 0-27.3 9.5-30.9 23-2.9 11-2.2 32.3 33.8 54-3.5 6.4-9.2 11.5-15.5 13.8-2.6 1-5.3 1.4-8.1 1.4-7.4 0-14.9-3.5-22.1-10.4-1.7-1.7-4-2.6-6.4-2.6-2.5 0-4.9 1-6.7 2.9-3.5 3.7-3.4 9.6.3 13.1 10.5 10 22.3 15.4 34.3 15.6h.5c5 0 9.8-.9 14.5-2.6 7-2.5 13.6-7 18.9-13l2.2-3.2 2.6 3.2c5.3 5.9 11.8 10.3 18.9 12.9 4.6 1.7 9.4 2.6 14.3 2.6h.7c12-.2 23.9-5.6 34.3-15.5 3.7-3.5 3.8-9.4.3-13.1-1.8-1.9-4.2-2.9-6.7-2.9zm-79.2-62.7c4.9 0 10.1 2.2 13.9 7.1.4.5.9.7 1.4.7s1.1-.2 1.4-.7c3.8-5 9.1-7.1 14.1-7.1 16.3 0 30.3 22.9-14.6 48.2-.3.2-.6.2-.9.2-.3 0-.6-.1-.9-.2-44.2-25.2-30.5-48.2-14.4-48.2z" />
      <path d="M397.3 90.6C377 61.7 349.8 39 316.5 23.2c-62.6-29.7-137.3-29.7-199.9 0C83.2 39.1 56 61.8 35.7 90.6 1.2 139.8-3.8 192.4 2.9 225.3c4.6 22.5 14.9 39.7 29 48.4 12.8 8 23.8 10.5 32.5 10.5s15.3-2.5 19.5-4.9c4.5-2.5 7.9-5.9 10.5-10 6.4 11.5 14.7 23 25.4 34.3 23.5 24.7 56 37.3 96.7 37.3s73.2-12.5 96.7-37.3c10.5-11 18.6-22.3 25-33.5 2.5 3.7 5.8 6.8 10 9.1 14.8 8.2 34.1 6.2 53-5.5 14.1-8.7 24.4-25.9 29-48.4 6.7-32.9 1.6-85.5-32.9-134.7zm14.2 130.9c-3.5 17-10.9 30.1-20.4 36-12.8 7.9-25.1 9.8-33.6 5-6.3-3.5-7.2-10.3-7.4-18.7 11.2-32.1 10.3-62.2 9.2-83.3l-.2-5.1c-.2-5.3-4.7-9.1-10-9.1-5.3.2-9.3 4.7-9.1 10l.3 5.2c1 19.8 1.8 47.2-8.3 76.1-.3.6-.6 1.3-.7 2-6.2 16.9-16.1 34.3-31.9 51-19.8 20.8-47.6 31.3-82.9 31.3-35.2 0-63.1-10.5-82.9-31.3-43.5-45.8-42.5-97.2-40.9-129l.3-5.2c.2-5.3-3.8-9.7-9.1-10-5.3-.1-9.7 3.8-10 9.1l-.2 5.1c-1 20.4-1.9 49.2 8.1 80.1 0 .4-.1.7-.1 1.1 0 9.7-.5 17.4-7.1 21.1-8.1 4.5-20 2.6-32.7-5.2-9.5-5.9-16.9-19-20.4-36-5.9-29-1.2-75.7 29.8-119.9 18.4-26.2 43.1-46.7 73.4-61.1 57.5-27.3 126.1-27.3 183.5 0 30.3 14.4 55 35 73.4 61.1 31.1 44 35.8 90.7 29.9 119.7zM88.7 399.1c0 23.5-14.7 37.1-40.1 37.1H30.7v27.6h-26V364h43.8c25.5.1 40.2 12.9 40.2 35.1zm-24.8.9c0-9.8-6.1-15.1-16.7-15.1H30.7v30.6h16.5c10.6 0 16.7-5.4 16.7-15.5zm93.9 36.3l14.2 12.8c-9 10.5-20.8 15.7-35.3 15.7-24.9 0-41.6-15.5-41.6-39 0-23.6 15.5-39.6 40.1-39.7 23.1-.1 38.3 13.9 38.9 36.7l-51.5 12.4c2.8 6.7 8.5 10.5 15.9 10.5 7 0 13.6-3.3 19.3-9.4zm-37.1-15.1l28.6-7.1c-1.9-6.8-6.5-10.1-12.8-10.1-9.1-.1-15 6.1-15.8 17.2zm110.4 38.7c-5.6 3.3-13.2 5.1-20.5 5.1-15.2 0-25.9-9.4-25.9-25.8v-70h25.1v21.4h20.1v16.8h-20.1v27.9c0 6.3 2.8 9.3 7.5 9.3 2.7 0 5.7-.9 9-2.6l4.8 17.9zm96.8-34.2c0 23.5-13.9 39-35.3 39-9.8 0-17.8-3.8-23.2-10.8v37.6h-25.3V386.9h25.3v10c5.4-7 13.1-10.8 22.6-10.8 21.6-.1 35.9 15.7 35.9 39.6zm-25.5-.5c0-11.4-6.7-19.2-16.7-19.2-9.7 0-16.4 7.8-16.4 19.2s6.7 19.1 16.4 19.1c10.1-.1 16.7-7.8 16.7-19.1zm63.8-38.3v77H341v-77h25.2zm-1-21.7c0 6.7-4.8 11.5-11.5 11.5s-11.5-4.8-11.5-11.5c0-6.8 4.8-11.7 11.5-11.7 6.7.1 11.5 4.9 11.5 11.7zm65.2 94.7c-5.6 3.3-13.2 5.1-20.5 5.1-15.2 0-25.9-9.4-25.9-25.8v-70h25.1v21.4h20.1v16.8h-20.1v27.9c0 6.3 2.8 9.3 7.5 9.3 2.7 0 5.7-.9 9-2.6l4.8 17.9z" />
    </svg>
  )
}

PetpitLogo.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colored: PropTypes.bool
}
PetpitLogo.defaultProps = {
  size: '52'
}

export default PetpitLogo
