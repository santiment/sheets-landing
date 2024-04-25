import React from "react"
import cx from "classnames"
import CodePanel from "../CodePanel"
import FloatingPanel from "../FloatingPanel/FloatingPanel"
import styles from "./MvrvCodePanel.module.scss"
import graph from "./graph.svg"
import { tr } from "../../../utils/translate"

const MvrvCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <FloatingPanel
      title={tr("usecases.mvrv.danger_zone")}
      className={styles.danger_zone}
      before={<div className={cx(styles.circle, styles.red)} />}
    />

    <FloatingPanel
      title={tr("usecases.mvrv.opportunity_zone")}
      className={styles.opportunity_zone}
      before={<div className={cx(styles.circle, styles.green)} />}
    />
  </CodePanel>
)

export default MvrvCodePanel
