import React from "react"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import Button from "@santiment-network/ui/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from "../components/Pricing"
import ForWhom from "../components/ForWhom/ForWhom"
import Advantages from "../components/Advantages/Advantages"
import UseCases from "../components/UseCases/UseCases"
import FAQ from "../components/FAQ"
import Testimonials from "../components/Testimonials/Testimonials"
import ReadyToStart from "../components/ReadyToStart/ReadyToStart"
import img from "../components/FunctionsTemplate/image.png"
import styles from "./index.module.scss"

const lines = [
  [128, 92, 69],
  [137, 177],
  [137, 99, 150],
  [204, 129],
  [182, 117, 161],
]

const topLines = [60, 42, 54, 62]

const functions = [
  'SAN_ALL_PROJECTS',
  'SAN_ERC20_PROJECTS',
  'SAN_PROJECT_FUNDAMENTALS',
  'SAN_OHLC',
  'SAN_LATEST_PRICE',
  'SAN_PRICES',
  'SAN_DAILY_CLOSING_PRICE',
  'SAN_PRICE_PERCENT_CHANGE',
  'SAN_SOCIAL_VOLUME',
  'SAN_ACTIVE_ADDRESSES',
  'SAN_ACTIVE_DEPOSITS',
  'SAN_PRICE_VOLUME_DIFF',
  'SAN_TRANSACTION_VOLUME',
  'SAN_NETWORK_GROWTH',
  'SAN_DEV_ACTIVITY',
  'SAN_REALIZED_VALUE',
  'SAN_MVRV_RATIO',
  'SAN_TOKEN_AGE_CONSUMED',
  'SAN_EXCHANGE_FUNDS_FLOW',
  'SAN_TOKEN_CIRCULATION',
  'SAN_NVT_RATIO',
  'SAN_MINING_POOLS_DISTRIBUTION',
  'SAN_GAS_USED'
]

const IndexPage = () => (
  <Layout>
    <SEO title="Santiment's Sheets - Crypto asset data for Google Sheets" />
    <section className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Crypto asset data for Google Sheets</h1>
        <h2 className={styles.desc}>
          Get relevant access for on-chain, social development activity, prices
          and volume data
        </h2>
        <Button
          as={Link}
          to='/account'
          className={styles.access}
          variant='fill'
          accent='positive'
        >
          Get started
        </Button>
        <a
          href='https://help.santiment.net/en/articles/3001303-full-list-of-available-sansheets-functions'
          className={styles.doc}
          target='_blank'
          rel='noopener noreferrer'
        >
          Documentation <Icon type='arrow-right' className={styles.doc__icon} />
        </a>
      </div>

      <div className={styles.code}>
        <div className={styles.code__header}>
          <div className={styles.code__btn} />
          <div className={styles.code__btn} />
          <div className={styles.code__btn} />
        </div>
        <div className={styles.source__top}>
          <ul className={styles.top__lines}>
            <li className={styles.top__line} />
            <li className={styles.top__line}>
              {topLines.map((width, i) => <span className={styles.item} key={i} style={{ width: width }} />)}
            </li>
          </ul>
          <div className={styles.function}>

          </div>
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
        <div className={styles.favorites}>
          <div className={styles.title}>
          <img src={img} alt="preview" />
          <h3 className={styles.titleText}>Favorites</h3>
          </div>
          <h4 className={styles.description}>
            The price of your list was increased by
            <bold className={styles.bold}>$ 532.73</bold>
            today
          </h4>
        </div>
      </div>
    </section>
    <ForWhom />
    <Advantages />
    <UseCases />
    <Pricing />
    <Testimonials />
    <FAQ />
    <ReadyToStart />
  </Layout>
)

export default IndexPage
