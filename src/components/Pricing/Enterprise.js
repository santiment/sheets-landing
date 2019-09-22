import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import list from './prices'
import { tr } from '../../utils/translate'
import styles from './Enterprise.module.scss'

const features = [
  'Access to all signal types',
  'Unlimited active signals',
  'Sanbase metrics - 3 years of historical data',
  'Sanbase metrics - including present-day data',
  'Exclusive market reports',
  'Full access in Google plugin for sheets',
]

const { Component: Btn } = list.ENTERPRISE

const Enterprise = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>{tr('plan.custom.title')}</div>
        <div className={styles.description}>{tr('plan.custom.desc')}</div>
        <Btn label={tr('cta.contact')} />
      </div>
      <div className={styles.right}>
        {features.map(feature => (
          <div key={feature} className={styles.feature}>
            <Icon type='checkmark' className={styles.check} />
            {feature}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Enterprise
