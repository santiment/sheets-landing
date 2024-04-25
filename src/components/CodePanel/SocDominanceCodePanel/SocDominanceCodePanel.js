import React from "react"
import CodePanel from "../CodePanel"
import styles from "./SocDominanceCodePanel.module.scss"
import graph from "./images/graph.svg"
import FloatingPanel from "../FloatingPanel/FloatingPanel"
import Change from "./Change"

const SocDominanceCodePanel = () => (
  <CodePanel className={styles.code}>
    <img className={styles.graph} src={graph}></img>

    <FloatingPanel title="$FTT" className={styles.ftt}>
      <Change value={7.26} />
    </FloatingPanel>

    <FloatingPanel title="$IOTA" className={styles.iota}>
      <Change value={9.82} />
    </FloatingPanel>

    <FloatingPanel title="$DOGE" className={styles.doge}>
      <Change value={3.54} />
    </FloatingPanel>
  </CodePanel>
)

export default SocDominanceCodePanel
