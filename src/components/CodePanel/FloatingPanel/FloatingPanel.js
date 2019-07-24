import React from 'react';
import cx from 'classnames'
import styles from './FloatingPanel.module.scss'

const FloatingPanel = ({children, className, title, icon}) => (
    <div className={cx(styles.wrapper, className)}>
 		<img src={icon} alt="icon" />
 		<span className={styles.title}>{title}</span>
    </div>
  )

export default FloatingPanel;
