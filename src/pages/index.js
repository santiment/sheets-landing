import React from "react"
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
import { tr } from "../utils/translate"
import styles from "./index.module.scss"

function onGetAccessClick() {
  window.gtag("event", "open-sheets-docs", {
    location: "Main section",
    text: "Get started",
  })
}

function onDocumentationClick() {
  window.gtag("event", "documentation_clicked")
}

const IndexPage = () => (
  <Layout classes={{ container: styles.container }}>
    <SEO title="Spreadsheet Crypto: Explore Google Spreadsheet Crypto Templates" />
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>{tr("main.title")}</h1>
        <h2 className={styles.desc}>{tr("main.desc")}</h2>
        <Button
          as={"a"}
          href="https://academy.santiment.net/sansheets/setting-up/"
          className={styles.access}
          variant="fill"
          accent="sheets"
          onClick={onGetAccessClick}
        >
          {tr("main.btn")}
        </Button>
        <a
          href="https://academy.santiment.net/sansheets/functions/"
          className={styles.doc}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onDocumentationClick}
        >
          {tr("main.documentation")}
          <Icon type="arrow-right" className={styles.doc__icon} />
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
