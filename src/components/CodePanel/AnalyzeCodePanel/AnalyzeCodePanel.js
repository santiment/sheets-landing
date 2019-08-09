import React from "react"
import CodePanel from "../CodePanel"
import FloatingPanel from "../FloatingPanel/FloatingPanel"
import social from "../FloatingPanel/social.svg"
import devact from "../FloatingPanel/devact.svg"
import financial from "../FloatingPanel/financial.svg"
import onchain from "../FloatingPanel/onchain.svg"
import eth from "../FloatingPanel/eth.png"
import styles from "./AnalyzeCodePanel.module.scss"

const AnalyzeCodePanel = () => (
  <CodePanel className={styles.code}>
    <div className={styles.content}>
      <FloatingPanel
        className={styles.financial}
        title='Financial'
        icon={financial}
      />
        <FloatingPanel
          className={styles.onchain}
          title='On-chain'
          icon={onchain}
        />
        <FloatingPanel className={styles.social} title='Social' icon={social} />
        <FloatingPanel
          className={styles.devact}
          title='Dev. activity'
          icon={devact}
        />
        <div className={styles.ethereum}>
          <div className={styles.title}>
            <img src={eth} alt='eth logo' />
            <h3 className={styles.titleText}>Ethereum</h3>
          </div>
          <h4 className={styles.description}>
            Ethereum price was decreased by
            <b className={styles.bold}>$ 70.51</b>
            in 24 hours
          </h4>
        </div>
    </div>
  </CodePanel>
)

export default AnalyzeCodePanel
