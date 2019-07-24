import React from "react"
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import styles from './ForWhom.module.scss'

const ForWhom = () => {
  return (
    <section>
      <article className={styles.wrapper}>
        <Title small className={styles.title}>For traders & investors</Title>
        <Subtitle className={styles.description}>
          Build models and backtest your strategies with the most comprehensive
          source of crypto data on the market. No data aggregation, no
          intermediaries.
        </Subtitle>
      </article>
      <article className={styles.wrapper}>
        <Title small className={styles.title}>For researches & journalists</Title>
        <Subtitle className={styles.description}>
          Investigate network activity, discover market patterns, and analyze
          stakeholder behavior with our clean, reliable data streams for 100s of
          digital assets.
        </Subtitle>
      </article>
    </section>
  )
}

export default ForWhom
