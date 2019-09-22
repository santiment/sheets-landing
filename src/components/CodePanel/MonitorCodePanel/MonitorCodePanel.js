import React from 'react'
import CodePanel from '../CodePanel'
import FloatingPanel from '../FloatingPanel/FloatingPanel'
import pocket from './pocket.svg'
import btc from '../FloatingPanel/btc.svg'
import star from '../FloatingPanel/star.svg'
import { tr } from '../../../utils/translate'
import styles from './MonitorCodePanel.module.scss'

const items = [
  {
    title: tr('usecases.monitor.total'),
    value: '$148k',
  },
  {
    title: tr('usecases.monitor.profit'),
    value: '+43%',
  },
  {
    title: tr('usecases.monitor.income'),
    value: '$9 326',
  },
]

const MonitorCodePanel = () => (
  <CodePanel className={styles.code}>
    <div className={styles.content}>
      <FloatingPanel
        className={styles.bitcoin}
        icon={btc}
        title={
          <span>
            Bitcoin <span className={styles.ticker}>BTC</span>
          </span>
        }
      />
      <FloatingPanel
        className={styles.risk}
        title={tr('usecases.monitor.risk')}
        icon={star}
      />
      <img src={pocket} alt='pocket' />
      <ul className={styles.list}>
        {items.map(({ title, value }) => (
          <li className={styles.item} key={value}>
            <span className={styles.title}>{title}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  </CodePanel>
)

export default MonitorCodePanel
