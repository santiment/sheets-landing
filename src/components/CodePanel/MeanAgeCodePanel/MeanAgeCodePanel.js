import React from "react"
import cx from "classnames"
import CodePanel from "../CodePanel"
import FloatingPanel from "../FloatingPanel/FloatingPanel"
import styles from "./MeanAgeCodePanel.module.scss"
import graph from "./images/graph.svg"

const MeanAgeCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <FloatingPanel
      title="❄️"
      className={styles.snow1}
      before={<div className={cx(styles.triangle, styles.bottomRight)} />}
    />

    <FloatingPanel
      title="❄️"
      className={styles.snow2}
      before={<div className={cx(styles.triangle, styles.bottomLeft)} />}
    />

    <FloatingPanel
      title="🔥"
      className={styles.fire1}
      before={<div className={cx(styles.triangle, styles.topRight)} />}
    />

    <FloatingPanel
      title="🔥"
      className={styles.fire2}
      before={<div className={cx(styles.triangle, styles.topRight)} />}
    />

    <FloatingPanel
      title="🔥"
      className={styles.fire3}
      before={<div className={cx(styles.triangle, styles.topLeft)} />}
    />
  </CodePanel>
)

export default MeanAgeCodePanel
