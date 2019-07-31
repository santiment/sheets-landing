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
import MainCodePanel from "../components/CodePanel/MainCodePanel/MainCodePanel"
import styles from "./index.module.scss"

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: 'Main section',
    text: 'Get access',
  })
}

 function onDocumentationClick() {
  window.gtag('event', 'documentation_clicked')
}


const IndexPage = () => (
  <Layout>
    <SEO title="Santiment's Sheets - Crypto asset data for Google Sheets" />
    <section className={styles.wrapper}>
      <div className={styles.main}>
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
          accent='sheets'
          onClick={onGetAccessClick}
        >
          Get started
        </Button>
        <a
          href='https://help.santiment.net/en/articles/3001303-full-list-of-available-sansheets-functions'
          className={styles.doc}
          target='_blank'
          rel='noopener noreferrer'
          onClick={onDocumentationClick}
        >
          Documentation <Icon type='arrow-right' className={styles.doc__icon} />
        </a>
      </div>
      <MainCodePanel />

    </section>
    <ForWhom />
    <Advantages />
    <UseCases />
    <Pricing />
    <FAQ />
    <Testimonials />
    <ReadyToStart />
  </Layout>
)

export default IndexPage
