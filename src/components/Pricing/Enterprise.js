import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import list from './prices'
import styles from './Enterprise.module.scss'

const features = [
  'Timeseries metrics - 3 years of historical data',
  'Full access in Google plugin for sheets',
  'Timeseries metrics- including present-day data',
  <span>
        Bonus: Full access{' '}
        <a
          className={styles.featureLink}
          target='_blank'
          rel='noopener noreferrer'
          href='https://app.santiment.net/'
        >
          Sanbase app
        </a>
  </span>,
]

const { Component: Btn } = list.ENTERPRISE

const Enterprise = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>Custom</div>
        <div className={styles.description}>
          For organizations that need advanced data and support
        </div>
        <Btn label='Contact sales' />
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
