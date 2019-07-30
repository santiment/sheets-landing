import React from "react"
import Parallax from "react-rellax"
import CodePanel from "../CodePanel"
import FloatingPanel from "../FloatingPanel/FloatingPanel"
import pocket from "./pocket.svg"
import btc from "../FloatingPanel/btc.svg"
import star from "../FloatingPanel/star.svg"
import styles from "./MonitorCodePanel.module.scss"

const items = [
  {
    title: "Total",
    value: "$148k",
  },
  {
    title: "Profit",
    value: "+43%",
  },
  {
    title: "Icome, 1mo",
    value: "$9 326",
  },
]

const MonitorCodePanel = () => (
  <CodePanel className={styles.code}>
    <div className={styles.content}>
      <Parallax speed={-1}>
        <FloatingPanel
          className={styles.bitcoin}
          icon={btc}
          title={
            <span>
              Bitcoin <span className={styles.ticker}>BTC</span>
            </span>
          }
        />
      </Parallax>
      <Parallax speed={1}>
        <FloatingPanel className={styles.risk} title='Low risk' icon={star} />
      </Parallax>
      <img src={pocket} alt='pocket' />
      <ul className={styles.list}>
        {items.map(({ title, value }) => (
          <li className={styles.item} key={title}>
            <span className={styles.title}>{title}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  </CodePanel>
)

export default MonitorCodePanel
