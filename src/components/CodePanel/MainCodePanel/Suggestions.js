import React from "react"
import styles from './Suggestions.module.scss'

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

const Suggestions = ({ currentValue }) => {
  const filteredSuggestions = functions.filter(name => name.includes(currentValue))
  return (
    <div className={styles.suggestions}>
      {(currentValue ? filteredSuggestions : functions)
        .map(suggest => (
          <div key={suggest} className={styles.suggestion}>{suggest}</div>
          ))}
    </div>
  )
}

export default Suggestions
