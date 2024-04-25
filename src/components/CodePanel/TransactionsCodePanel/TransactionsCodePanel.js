import React from "react"
import cx from "classnames"
import CodePanel from "../CodePanel"
import styles from "./TransactionsCodePanel.module.scss"
import graph from "./images/graph.svg"
import FloatingPanel from "../FloatingPanel/FloatingPanel"

const TransactionsCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <span className={cx(styles.price, styles.price__btc)}>$82,896,365</span>
    <span className={cx(styles.price, styles.price__matic)}>$43,447,355</span>
    <span className={cx(styles.price, styles.price__sand)}>$24,221,782</span>

    <FloatingPanel title="$BTC" className={styles.btc}>
      <div className={styles.emoji}>🐋</div>
    </FloatingPanel>

    <FloatingPanel title="$MATIC" className={styles.matic}>
      <div className={styles.emoji}>🐋</div>
    </FloatingPanel>

    <FloatingPanel title="$SAND" className={styles.sand}>
      <div className={styles.emoji}>🐋</div>
    </FloatingPanel>
  </CodePanel>
)

export default TransactionsCodePanel
