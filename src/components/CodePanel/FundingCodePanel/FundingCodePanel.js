import React from "react"
import cx from "classnames"
import CodePanel from "../CodePanel"
import styles from "./FundingCodePanel.module.scss"
import graph from "./images/graph.svg"
import { tr } from "../../../utils/translate"
import FloatingPanel from "../FloatingPanel/FloatingPanel"

const FundingCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <FloatingPanel
      title={tr("usecases.funding.fear")}
      className={styles.fear}
      before={<div className={cx(styles.circle)} />}
    />

    <FloatingPanel
      title={tr("usecases.funding.greed")}
      className={styles.greed}
      before={<div className={cx(styles.circle)} />}
    />
  </CodePanel>
)

export default FundingCodePanel
