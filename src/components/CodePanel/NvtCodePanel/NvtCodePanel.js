import React from "react"
import cx from "classnames"
import CodePanel from "../CodePanel"
import styles from "./NvtCodePanel.module.scss"
import graph from "./images/graph.svg"
import { tr } from "../../../utils/translate"
import FloatingPanel from "../FloatingPanel/FloatingPanel"

const NvtCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <FloatingPanel
      title={tr("usecases.nvt.bearish")}
      className={styles.bearish}
      before={<div className={cx(styles.circle)} />}
    />

    <FloatingPanel
      title={tr("usecases.nvt.bullish")}
      className={styles.bullish}
      before={<div className={cx(styles.circle)} />}
    />

    <FloatingPanel
      title={tr("usecases.nvt.neutral")}
      className={styles.neutral}
      before={<div className={cx(styles.circle)} />}
    />
  </CodePanel>
)

export default NvtCodePanel
