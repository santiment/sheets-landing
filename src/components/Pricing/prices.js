import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialog from '../PaymentDialog/PaymentDialog'
import ChangePlanDialog from '../ChangePlanDialog/ChangePlanDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const PlanActionDialog = props =>
  props.subscription ? (
    <ChangePlanDialog {...props} />
  ) : (
    <PaymentDialog {...props} />
  )

export default {
  FREE: {
    discount: 'price.bill_discount.free',
    link: 'Upgrade now',
    Component: () => (
      <Button accent='sheets' border fluid className={styles.link} disabled>
        {tr('cta.default_plan')}
      </Button>
    ),
    features: [
      "Limited access in Google plugin for sheets",
      "Timeseries metrics - 2 years of historical data",
      "Timeseries metrics - up to last 30 days of data",
    ],
  },
  BASIC: {
    title: "Basic",
    desc: "Great for short-term analysis and prototyping",
    link: "Upgrade now",
    Component: PlanActionDialog,
    features: [
    ],
  },
  PRO: {
    title: "Pro",
    // isPopular: true,
    desc: "Advanced metrics & serious backtesting potential",
    Component: PlanActionDialog,
    link: "Upgrade now",
    features: [
    ],
  },
  ENTERPRISE: {
    discount: 'price.bill_discount.custom',
    link: 'cta.contact',
    Component: props => (
      <PipedriveDialogBtn
        {...props}
        title='Enterprise plan Pipedrive form'
        src='https://pipedrivewebforms.com/form/0527db4d781f7c4c0760b7bc7a58549c4144829'
      />
    ),
    features: [
      "Timeseries metrics - 3 years of historical data",
      "Timeseries metrics - including present-day data",
      "Full access in Google plugin for sheets",
    ],
  },
}
