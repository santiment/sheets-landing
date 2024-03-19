import React from "react"
import cx from "classnames"
import CodePanel from "../CodePanel"
import styles from "./TopHoldersCodePanel.module.scss"
import graph from "./images/graph.svg"
import { tr } from "../../../utils/translate"
import eth from "../FloatingPanel/eth.png"

const TopHoldersCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <div className={cx(styles.circle, styles.whale2)}>🐋</div>

    <div className={styles.balance}>
      <h3 className={styles.balanceTitle}>
        {tr("usecases.top_holders.balance")}
      </h3>
      <h2 className={styles.balanceValue}>+ 15%</h2>
      <div className={cx(styles.circle, styles.whale1)}>🐋</div>
    </div>

    <div className={styles.ethereum}>
      <div className={styles.title}>
        <img src={eth} alt="eth logo" />
        <h3 className={styles.titleText}>{tr("usecases.top_holders.eth")}</h3>
      </div>
      <h4 className={styles.description}>
        {tr("usecases.top_holders.eth.description")}
        <b className={styles.bold}>1.1862%</b>
      </h4>
    </div>
  </CodePanel>
)

export default TopHoldersCodePanel
