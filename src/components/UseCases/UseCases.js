import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"
import { tr } from "../../utils/translate"
import styles from "./UseCases.module.scss"
import { getCases } from "./cases"

const UseCases = ({ intl }) => {
  return (
    <section id="use-cases">
      <ul className={styles.cases}>
        {getCases(intl.locale).map(({ icon, type, code }) => {
          const id = `usecases.${type}.`
          return (
            <li key={type} className={styles.wrapper}>
              <div className={styles.case}>
                {icon}
                <Title small className={styles.case__title}>
                  {tr(id + "title")}
                </Title>
                <Subtitle className={styles.case__desc}>
                  {tr(id + "desc")}
                </Subtitle>
              </div>
              {code}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default injectIntl(UseCases)
