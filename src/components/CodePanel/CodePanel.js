import React from "react"
import cx from 'classnames'
import styles from "./CodePanel.module.scss"

const CodePanel = ({children, className}) => (
  <div className={cx(styles.code, className)}>
    <div className={styles.code__header}>
      <div className={styles.code__btn} />
      <div className={styles.code__btn} />
      <div className={styles.code__btn} />
    </div>
    {children}
  </div>
)

export default CodePanel
