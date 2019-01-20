import React from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'

import styles from './PageLayout.module.scss'

const PageLayout = ({ children, className }) => {
  return <div className={cls(styles.pageLayout, className)}>{children}</div>
}

PageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

PageLayout.defaultProps = {}

export default PageLayout
