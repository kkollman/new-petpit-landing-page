import React from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'
import { Link } from 'gatsby'

import Topbar from 'components/Topbar/index'
import TopbarMenu from 'components/TopbarMenu/index'
import PetpitLogo from 'components/PetpitLogo/index'

import styles from './PageLayout.module.scss'

const PageLayout = ({ children, className }) => {
  return (
    <div className={cls(styles.pageLayout, className)}>
      <Topbar>
        <Link to="/">
          <PetpitLogo size={52} colored />
        </Link>
        {// Gatsby sometimes crashes when trying to reach global variables during build, therefore I need to check if window is defined first
        typeof window !== `undefined` &&
          (window.location.pathname === '/' && <TopbarMenu />)}
      </Topbar>
      {children}
    </div>
  )
}

PageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

PageLayout.defaultProps = {}

export default PageLayout
