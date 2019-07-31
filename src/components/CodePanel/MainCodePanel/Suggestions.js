import React from "react"
import styles from './Suggestions.module.scss'

const functions = [
  "SAN_NETWORK_GROWTH",
  "SAN_PRICES",
  "SAN_PRICE_PERCENT_CHANGE",
  "SAN_PRICE_ABSOLUTE_CHANGE",
  "SAN_ALL_PROJECTS",
  "SAN_ERC20_PROJECTS",
  "SAN_ACTIVE_ADDRESSES",
  "SAN_TRANSACTION_VOLUME",
  "SAN_OHLC",
  "SAN_PRICE_VOLUME_DIFF",
  "SAN_SOCIAL_VOLUME",
  "SAN_SOCIAL_VOLUME_PROJECTS",
  "SAN_GITHUB_ACTIVITY",
  "SAN_DEV_ACTIVITY",
  "SAN_EXCHANGE_FUNDS_FLOW",
  "SAN_TOKEN_CIRCULATION",
  "SAN_TRENDING_WORDS",
  "SAN_PROJECT_FUNDAMENTALS",
  "SAN_PROJECT_SOCIAL_DATA",
  "SAN_TOKEN_AGE_CONSUMED",
  "SAN_MVRV_RATIO",
  "SAN_NVT_RATIO",
  "SAN_ACTIVE_DEPOSITS",
  "SAN_REALIZED_VALUE",
  "SAN_GAS_USED",
  "SAN_MINING_POOLS_DISTRIBUTION",
  "SAN_MINERS_BALANCE",
  "SAN_NEWS",
  "SAN_LATEST_PRICE",
  "SAN_DAILY_CLOSING_PRICE",
  "SAN_HISTORICAL_BALANCE",
  "SAN_HISTORY_TWITTER_DATA",
  "SAN_SOCIAL_DOMINANCE",
]

const Suggestions = ({ currentValue }) => {
  const filteredSuggestions = functions.filter(name => name.includes('SAN_' + currentValue))
  return (
    <div className={styles.suggestions}>
      {(currentValue ? filteredSuggestions : functions)
        .map((suggest,i) => (
          <div
            key={i}
            className={styles.suggestion}
            >
          <a
                target='_blank'
                rel='noopener noreferrer'
                children={suggest}
                href={`https://github.com/santiment/google-spreadsheet-addon/blob/master/doc/sheet_functions.md#${suggest}`}
             />
          </div>
          ))}
        {currentValue && filteredSuggestions.length === 0 && <div className={styles.empty}>No results found</div>}
    </div>
  )
}

export default Suggestions
