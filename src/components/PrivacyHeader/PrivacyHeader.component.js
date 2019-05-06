import React from 'react'
import styles from './PrivacyHeader.module.scss'

const PrivacyHeader = ({number, children, title}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.header}>{title}</h2>
    </div>
    <p className={styles.paragraph}>
      {children}
    </p>
  </div>
)

export default PrivacyHeader