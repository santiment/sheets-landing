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
      <Button accent='blue' border fluid className={styles.link} disabled>
        Default plan
      </Button>
    ),
    features: [
      'Data access to last 3 month',
      'Minus last 24 hours',
      <>
        Standard metrics <span className={styles.ast}>*</span>
      </>,
    ],
  },
  ESSENTIAL: {
    title: 'Basic',
    desc: 'Great for short-term analysis and prototyping',
    link: 'Upgrade now',
    Component: PlanActionDialog,
    features: [
      'Data access to last 6 months',
      'Real time',
      <>
        Standard metrics <span className={styles.ast}>*</span>
      </>
    ],
  },
  PRO: {
    title: 'Pro',
    isPopular: true,
    desc: 'Advanced metrics & serious backtesting potential',
    Component: PlanActionDialog,
    link: 'Upgrade now',
    features: [
      'Data access to last 12 months',
      'Real time',
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>
    ],
  },
  PREMIUM: {
    features: [
    ],
  },
  CUSTOM: {
    title: 'Corporate',
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
      'Unlimited historical data access',
      `Custom time series`,
      'Early access to new metrics',
    ],
  },
}
