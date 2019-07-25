import React from "react"
import Parallax from "react-rellax"
import CodePanel from "../CodePanel"
import img from "../../FunctionsTemplate/image.png"
import styles from "./MainCodePanel.module.scss"

const lines = [
  [128, 92, 69],
  [137, 177],
  [137, 99, 150],
  [204, 129],
  [182, 117, 161],
]

const topLines = [60, 42, 54, 62]

const functions = [
  "SAN_ALL_PROJECTS",
  "SAN_ERC20_PROJECTS",
  "SAN_PROJECT_FUNDAMENTALS",
  "SAN_OHLC",
  "SAN_LATEST_PRICE",
  "SAN_PRICES",
  "SAN_DAILY_CLOSING_PRICE",
  "SAN_PRICE_PERCENT_CHANGE",
  "SAN_SOCIAL_VOLUME",
  "SAN_ACTIVE_ADDRESSES",
  "SAN_ACTIVE_DEPOSITS",
  "SAN_PRICE_VOLUME_DIFF",
  "SAN_TRANSACTION_VOLUME",
  "SAN_NETWORK_GROWTH",
  "SAN_DEV_ACTIVITY",
  "SAN_REALIZED_VALUE",
  "SAN_MVRV_RATIO",
  "SAN_TOKEN_AGE_CONSUMED",
  "SAN_EXCHANGE_FUNDS_FLOW",
  "SAN_TOKEN_CIRCULATION",
  "SAN_NVT_RATIO",
  "SAN_MINING_POOLS_DISTRIBUTION",
  "SAN_GAS_USED",
]

const MainCodePanel = () => (
  <CodePanel className={styles.codePanel}>
    <div className={styles.source__top}>
      <ul className={styles.top__lines}>
        <li className={styles.top__line} />
        <li className={styles.top__line}>
          {topLines.map((width, i) => (
            <span className={styles.item} key={i} style={{ width: width }} />
          ))}
        </li>
      </ul>
      <div className={styles.function} />
    </div>
    <ul className={styles.source}>
      {lines.map((blocks, i) => (
        <li className={styles.source__line} key={i}>
          {blocks.map((width, j) => (
            <span className={styles.item} key={j} style={{ width: width }} />
          ))}
        </li>
      ))}
    </ul>
    <Parallax speed={0.5}>
      <div className={styles.favorites}>
        <div className={styles.title}>
          <img src={img} alt='preview' />
          <h3 className={styles.titleText}>Favorites</h3>
        </div>
        <h4 className={styles.description}>
          The price of your list was increased by
          <bold className={styles.bold}>$ 532.73</bold>
          today
        </h4>
      </div>
    </Parallax>
  </CodePanel>
)

export default MainCodePanel
