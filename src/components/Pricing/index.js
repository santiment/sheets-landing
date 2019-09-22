import React from 'react'
import Title from '../Title/Title'
import PricingTable from './PricingTable.js'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

export default () => {
  return (
    <section id='pricing'>
      <Title className={styles.title}>
        {tr('pricing.title.top')}
        <br className={styles.br} />
        {tr('pricing.title.bottom')}
      </Title>
      <PricingTable />
    </section>
  )
}
