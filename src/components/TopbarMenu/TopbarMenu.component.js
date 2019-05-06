import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import { Link as Scroll } from 'react-scroll'

import Icon from 'components/Icon'
import Button from 'components/Button'

import styles from './TopbarMenu.module.scss'

const TopbarMenu = () => {
  return (
    <div className={styles.topbarMenuWrapper}>
      <div className={styles.topbarmenu}>
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
      </div>
      <Scroll smooth to="apps">
        <div className={styles.topbarButtonWrapper}>
          <Button label={'Pobierz aplikację'} />
        </div>
      </Scroll>
    </div>
  )
}

export default TopbarMenu
