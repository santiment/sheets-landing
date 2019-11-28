	import React from 'react'
import cx from 'classnames'
import Panel from '@santiment-network/ui/Panel/PanelWithHeader'
import styles from './Settings.module.scss'

const Settings = ({ classes = {}, ...props }) => (
  <Panel
    {...props}
    className={cx(styles.settings, classes.wrapper)}
    headerClassName={cx(styles.settings__header, classes.header)}
    contentClassName={styles.settings__content}
  />
)

Settings.Row = ({ className, ...props }) => (
  <div className={cx(styles.setting, className)} {...props} />
)

export default Settings
