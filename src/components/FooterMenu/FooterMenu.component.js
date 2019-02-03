import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './FooterMenu.module.scss'

const MenuElements = [
  {
    name: 'Strona główna',
    link: '/'
  },
  {
    name: 'Polityka Prywatności',
    link: '/polityka-prywatnosci'
  },
  {
    name: 'Regulamin',
    link: '/regulamin'
  }
]

const FooterMenu = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footermenu}>
          <li className={styles.link}>© 2018 Petpit</li>
          {MenuElements.map(element => {
            if (window.location.pathname !== element.link) {
              return (
                <Link className={styles.link} to={element.link}>
                  <li>{element.name}</li>
                </Link>
              )
            }
          })}
        </ul>
      </nav>
    </footer>
  )
}

export default FooterMenu
