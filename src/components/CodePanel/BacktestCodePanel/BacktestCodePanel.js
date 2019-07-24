import React from "react"
import CodePanel from "../CodePanel"
import styles from "./BacktestCodePanel.module.scss"

const lines = [433, 197, 366, 473, 315, 447, 536, 238]

const BacktestCodePanel = () => (
  <CodePanel className={styles.code}>
    <ul className={styles.lines}>
        {lines.map((width, i) => (
          <li className={styles.item} key={i} style={{ width: width }} />
        ))}
    </ul>
  </CodePanel>
)

export default BacktestCodePanel
