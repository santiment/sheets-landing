import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialog from '../PaymentDialog/PaymentDialog'
import ChangePlanDialog from '../ChangePlanDialog/ChangePlanDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import styles from './index.module.scss'

const PlanActionDialog = props =>
  props.subscription ? (
    <ChangePlanDialog {...props} />
  ) : (
    <PaymentDialog {...props} />
  )

export default {
  FREE: {
    title: 'Free',
    desc: 'For individuals just getting started with crypto',
    discount: 'Free forever',
    link: 'Upgrade now',
    Component: () => (
      <Button accent='sheets' border fluid className={styles.link} disabled>
        Default plan
      </Button>
    ),
    features: [
      'Access to basic signals',
      'Up to 10 active signals at a time',
      'Sanbase metrics - 2 years of historical data',
      'Sanbase metrics - up to last 30 days of data',
      'Limited access in Google plugin for sheets',
    ],
  },
  BASIC: {
    title: 'Basic',
    desc: 'Great for short-term analysis and prototyping',
    link: 'Upgrade now',
    Component: PlanActionDialog,
    features: [
      'Access to all signal types',
      'Up to 10 active signals at a time',
      'Sanbase metrics - 2 years of historical data',
      'Sanbase metrics - up to last 7 days of data',
      'Exclusive market reports',
      'Limited access in Google plugin for sheets'
    ],
  },
  PRO: {
    title: 'Pro',
    // isPopular: true,
    desc: 'Advanced metrics & serious backtesting potential',
    Component: PlanActionDialog,
    link: 'Upgrade now',
    features: [
      'Access to all signal types',
      'Unlimited active signals',
      'Sanbase metrics - 3 years of historical data',
      'Sanbase metrics - including present-day data',
      'Exclusive market reports',
      'Full access in Google plugin for sheets'
    ],
  },
  ENTERPRISE: {
    title: 'Custom',
    desc: 'For organizations that need advanced data and support',
    discount: 'Based on your needs',
    link: 'Contact us',
    Component: props => (
      <PipedriveDialogBtn
        {...props}
        title='Enterprise plan Pipedrive form'
        src='https://pipedrivewebforms.com/form/0527db4d781f7c4c0760b7bc7a58549c4144829'
      />
    ),
    features: [
      'Full access in Google plugin for sheets',
      'Access to all signal types',
      'Unlimited active signals',
      'Sanbase metrics - 3 years of historical data',
      'Sanbase metrics - including present-day data',
      'Exclusive market reports'
    ],
  },
}
