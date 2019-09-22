import React from 'react'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import { tr } from '../../utils/translate'
import styles from './ForWhom.module.scss'

const ForWhom = () => {
  return (
    <section>
      <article className={styles.wrapper}>
        <Title small className={styles.title}>
          {tr('for.TnI.title')}
        </Title>
        <Subtitle className={styles.description}>{tr('for.TnI.text')}</Subtitle>
      </article>
      <article className={styles.wrapper}>
        <Title small className={styles.title}>
          {tr('for.RnJ.title')}
        </Title>
        <Subtitle className={styles.description}>{tr('for.RnJ.text')}</Subtitle>
      </article>
    </section>
  )
}

export default ForWhom
