import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import Button from 'components/Button'
import Icon from 'components/Icon'

import styles from './TopbarMenu.module.scss'

const TopbarMenu = ({ onClick }) => {
  return (
    <div className={styles.topbarmenu} onClick={onClick}>
      <div className={styles.pages}>
        <a href={'https://petpit.co/blog'} className={styles.topbarIcon}>
          <Icon name={'blog'} color={'black'} size={20} />
        </a>
        <a
          href={'https://web.facebook.com/petpitco/'}
          className={styles.topbarIcon}
        >
          <Icon name={'facebook'} color={'black'} size={20} />
        </a>
        <a
          href={'https://www.instagram.com/petpitapp/'}
          className={styles.topbarIcon}
        >
          <Icon name={'instagram'} color={'black'} size={20} />
        </a>
      </div>
      <Button label={'Pobierz aplikację'} />
    </div>
  )
}

TopbarMenu.propTypes = {
  onClick: PropTypes.func
}
TopbarMenu.defaultProps = {
  onClick: noop
}

export default TopbarMenu
