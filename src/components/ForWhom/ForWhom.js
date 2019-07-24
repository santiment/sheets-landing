import React from "react"
import styles from './ForWhom.module.scss'

const ForWhom = () => {
  return (
    <section>
      <article className={styles.wrapper}>
        <h2 className={styles.title}>For traders & investors</h2>
        <p className={styles.description}>
          Build models and backtest your strategies with the most comprehensive
          source of crypto data on the market. No data aggregation, no
          intermediaries.
        </p>
      </article>
      <article className={styles.wrapper}>
        <h2 className={styles.title}>For researches & journalists</h2>
        <p className={styles.description}>
          Investigate network activity, discover market patterns, and analyze
          stakeholder behavior with our clean, reliable data streams for 100s of
          digital assets.
        </p>
      </article>
    </section>
  )
}

export default ForWhom
