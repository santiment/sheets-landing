import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialog from '../PaymentDialog/PaymentDialog'
import ChangePlanDialog from '../ChangePlanDialog/ChangePlanDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import { isJapanese } from '../Footer/Footer'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const PlanActionDialog = (props) =>
  props.subscription ? (
    <ChangePlanDialog {...props} />
  ) : (
    <PaymentDialog {...props} />
  )

const EN_FORM_LINK =
  'https://pipedrivewebforms.com/form/90507f6b3cfe0f8218895f8e0384945b4144829'
const JP_FORM_LINK =
  'https://pipedrivewebforms.com/form/ac4b6fd0208f80e916822b0b5ac7ebca4144829'

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
      'Limited access in Google plugin for sheets',
      'Timeseries metrics - 2 years of historical data',
      'Timeseries metrics - up to last 30 days of data',
    ],
  },
  BASIC: {
    title: 'Basic',
    desc: 'Great for short-term analysis and prototyping',
    link: 'Upgrade now',
    Component: PlanActionDialog,
    features: [
      'Limited access in Google plugin for sheets',
      'Timeseries metrics - 2 years of historical data',
      'Timeseries metrics - up to last 7 days of data',
    ],
  },
  PRO: {
    Component: PlanActionDialog,
    link: 'Upgrade now',
    features: [
      'Full access in Google plugin for sheets',
      'Timeseries metrics - 5 years of historical data',
      'Timeseries metrics - including present-day data',
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
    ],
  },
  PRO_PLUS: {
    Component: PlanActionDialog,
    title: 'Pro+',
    link: 'Start Free 14-Day Trial',
    features: [
      <b>All in PRO and:</b>,
      'Dedicated account manager',
      'Basic API 300k API calls',
      'Closed Webinars with Santiment Analytics',
      'Closed chat with Santiment market analysts',
      'Custom education & onboarding',
    ],
  },
  ENTERPRISE: {
    discount: 'price.bill_discount.custom',
    link: 'cta.contact',
    Component: (props) => {
      const isJp = isJapanese()

      return (
        <PipedriveDialogBtn
          {...props}
          title='Enterprise plan Pipedrive form'
          src={isJp ? JP_FORM_LINK : EN_FORM_LINK}
        />
      )
    },
    features: [
      'Timeseries metrics - 3 years of historical data',
      'Timeseries metrics - including present-day data',
      'Full access in Google plugin for sheets',
    ],
  },
}
