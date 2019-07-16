import React from 'react'
import { Mutation } from 'react-apollo'
import Label from '@santiment-network/ui/Label'
import Button from '@santiment-network/ui/Button'
import Panel from '@santiment-network/ui/Panel/Panel'
import Settings from './Settings'
import PlansTableDialog from '../PlansTableDialog'
import CancelSubscriptionDialog from '../CancelSubscriptionDialog/CancelSubscriptionDialog'
import ChangeBillingDialog from '../ChangeBillingDialog/ChangeBillingDialog'
import { formatPrice } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import PLANS from '../Pricing/prices'
import { RENEW_SUBSCRIPTION_MUTATION } from '../../gql/plans'
import styles from './SettingsSubscription.module.scss'

const PERIOD_END_ACTION = {
  false: 'renew',
  true: 'cancel',
}

const PlanText = ({ subscription }) => {
  if (subscription) {
    const {
      currentPeriodEnd,
      cancelAtPeriodEnd,
      plan: { amount, name, interval },
    } = subscription

    const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
    const [price] = formatPrice(amount, name)
    const notCanceled = !cancelAtPeriodEnd

    return (
      <>
        <div className={styles.title}>{PLANS[name].title} Plan</div>
        <div className={styles.desc}>
          {price} per {interval}.{' '}
          {notCanceled && <ChangeBillingDialog subscription={subscription} />}
        </div>
        <div className={styles.desc}>
          Will automatically {PERIOD_END_ACTION[cancelAtPeriodEnd]} on {MMMM}{' '}
          {DD}, {YYYY}
        </div>
      </>
    )
  }

  return (
    <>
      <div className={styles.title}>Free Plan</div>
      <div className={styles.desc}>
        You can see data{' '}
        <Button accent='blue' className={styles.btn}>
          generated 24h ago.
        </Button>
      </div>
      <div className={styles.desc}>Upgrade your plan to get more abilities</div>
    </>
  )
}

const SubscriptionRenewButton = ({ subscription: { id } }) => {
  return (
    <Mutation mutation={RENEW_SUBSCRIPTION_MUTATION}>
      {(renew, { loading }) => (
        <Button
          variant='fill'
          accent='blue'
          isLoading={loading}
          onClick={() => renew({ variables: { id: +id } })}
        >
          Renew Subscription
        </Button>
      )}
    </Mutation>
  )
}

const SettingsSubscription = ({ subscription }) => {
  const notCanceled = subscription && !subscription.cancelAtPeriodEnd

  const PlanBtn = notCanceled ? PlansTableDialog : SubscriptionRenewButton
  return (
    <Settings id='subscription' header='Subscription'>
      <Settings.Row>
        <Panel className={styles.plan}>
          <div>
            <PlanText subscription={subscription} />
          </div>
          <PlanBtn subscription={subscription} />
        </Panel>
      </Settings.Row>
      {notCanceled && (
        <Settings.Row>
          <div>
            <div>Cancel subscription</div>

            <Label accent='waterloo'>
              If you cancel your subscription, you will not be able to see the
              most recent data
            </Label>
          </div>
          <CancelSubscriptionDialog subscription={subscription} />
        </Settings.Row>
      )}
    </Settings>
  )
}

export default SettingsSubscription
