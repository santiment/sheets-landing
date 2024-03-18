import React from "react"
import CodePanel from "../CodePanel"
import FloatingPanel from "../FloatingPanel/FloatingPanel"
import { tr } from "../../../utils/translate"
import styles from "./MatrixCodePanel.module.scss"

const MatrixCodePanel = () => (
  <CodePanel className={styles.code}>
    <div className={styles.content}>
      <FloatingPanel
        className={styles.fantom}
        title={tr("usecases.matrix.fantom")}
      >
        <div className={styles.emoji}>🔥</div>
      </FloatingPanel>
      <FloatingPanel
        className={styles.merit_circle}
        title={tr("usecases.matrix.merit_circle")}
      >
        <div className={styles.emoji}>❄️</div>
      </FloatingPanel>
      <FloatingPanel
        className={styles.decentraland}
        title={tr("usecases.matrix.decentraland")}
      >
        <div className={styles.emoji}>🔥</div>
      </FloatingPanel>
    </div>
  </CodePanel>
)

export default MatrixCodePanel
