import React from 'react'
import CodePanel from '../CodePanel'
import FloatingPanel from '../FloatingPanel/FloatingPanel'
import social from '../FloatingPanel/social.svg'
import devact from '../FloatingPanel/devact.svg'
import financial from '../FloatingPanel/financial.svg'
import onchain from '../FloatingPanel/onchain.svg'
import eth from '../FloatingPanel/eth.png'
import { tr } from '../../../utils/translate'
import styles from './AnalyzeCodePanel.module.scss'

const AnalyzeCodePanel = () => (
  <CodePanel className={styles.code}>
    <div className={styles.content}>
      <FloatingPanel
        className={styles.financial}
        title={tr('usecases.analyze.financial')}
        icon={financial}
      />
      <FloatingPanel
        className={styles.onchain}
        title={tr('usecases.analyze.onchain')}
        icon={onchain}
      />
      <FloatingPanel
        className={styles.social}
        title={tr('usecases.analyze.social')}
        icon={social}
      />
      <FloatingPanel
        className={styles.devact}
        title={tr('usecases.analyze.devact')}
        icon={devact}
      />
      <div className={styles.ethereum}>
        <div className={styles.title}>
          <img src={eth} alt='eth logo' />
          <h3 className={styles.titleText}>{tr('usecases.analyze.eth')}</h3>
        </div>
        <h4 className={styles.description}>
          {tr('usecases.analyze.eth.left')}
          <b className={styles.bold}>$ 70.51</b>
          {tr('usecases.analyze.eth.right')}
        </h4>
      </div>
    </div>
  </CodePanel>
)

export default AnalyzeCodePanel
