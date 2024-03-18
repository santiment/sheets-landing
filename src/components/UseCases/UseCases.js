import React from "react"
import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"
import { tr } from "../../utils/translate"
import styles from "./UseCases.module.scss"
import { cases } from "./cases"

export default () => (
  <section id="use-cases">
    <ul className={styles.cases}>
      {cases.map(({ icon, type, code }) => {
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
