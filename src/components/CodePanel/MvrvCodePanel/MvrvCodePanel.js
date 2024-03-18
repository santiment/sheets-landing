import React from "react"
import CodePanel from "../CodePanel"
import styles from "./MvrvCodePanel.module.scss"
import graph from "./graph.svg"

const MvrvCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>
  </CodePanel>
)

export default MvrvCodePanel
