import React from "react"
import cx from "classnames"
import styles from "./FloatingPanel.module.scss"

const FloatingPanel = ({ children, className, title, icon }) => (
  <div className={cx(styles.wrapper, className)}>
    {icon && <img src={icon} alt="icon" />}
    <span className={styles.title}>{title}</span>
    {children}
  </div>
)

export default FloatingPanel
