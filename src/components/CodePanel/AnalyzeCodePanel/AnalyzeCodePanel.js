import React from "react"
import CodePanel from "../CodePanel"
import styles from "./AnalyzeCodePanel.module.scss"

const AnalyzeCodePanel = () => (
  <CodePanel className={styles.code}>
    <div className={styles.content}>
    	<span>graph</span>
      <ul className={styles.list}>
      	<li className={styles.item}>
      		<span className={styles.title}>Total</span>
      		<span className={styles.value}>$148k</span>
      	</li>
      	<li className={styles.item}>
      		<span className={styles.title}>Profit</span>
      		<span className={styles.value}>+43%</span>
      	</li>
      	<li className={styles.item}>
      		<span className={styles.title}>Icome, 1mo</span>
      		<span className={styles.value}>$9 326</span>
      	</li>
      </ul>
    </div>
  </CodePanel>
)

export default AnalyzeCodePanel
