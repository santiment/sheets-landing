import React from 'react'
import { Query } from 'react-apollo'
import cx from 'classnames'
import Toggle from '@santiment-network/ui/Toggle'
import { CURRENT_USER_QUERY } from '../../gql/user'
import { PLANS_QUERY } from '../../gql/plans'
import Enterprise from './Enterprise'
import TokensTooltip from './TokensTooltip'
import Plan from './Plan'
import {
  findSheetsPlan,
  getCurrentSheetsSubscription,
  noBasicPlan,
} from '../../utils/plans'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const Billing = ({ selected, onClick }) => {
  const isYearSelected = selected === 'year'
  return (
    <>
      <span
        onClick={() => onClick('month')}
        className={cx(
          styles.billing__option,
          !isYearSelected && styles.billing__option_active,
        )}
      >
        {tr('pricing.bill.month')}
      </span>
      <Toggle
        className={styles.billing__toggle}
        isActive={isYearSelected}
        onClick={() => onClick(isYearSelected ? 'month' : 'year')}
      />
      <span
        className={cx(
          styles.billing__option,
          styles.billing__option_year,
          isYearSelected && styles.billing__option_active,
        )}
        onClick={() => onClick('year')}
      >
        {tr('pricing.bill.year')}
        <span className={styles.billing__save}>
          {tr('pricing.bill.year.save')}
        </span>
      </span>
    </>
  )
}

export default ({ classes = {}, onDialogClose }) => {
  const [billing, setBilling] = React.useState('year')
  return (
    <>
      <div className={cx(styles.billing, classes.billing)}>
        <Billing selected={billing} onClick={setBilling} />
      </div>
      <TokensTooltip />
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } }) => {
          const subscription = getCurrentSheetsSubscription(currentUser)
          const userPlan = subscription && subscription.plan.id
          const isSubscriptionCanceled =
            subscription && subscription.cancelAtPeriodEnd
          return (
            <Query query={PLANS_QUERY}>
              {({ data: { productsWithPlans = [] } }) => {
                const product = productsWithPlans.find(findSheetsPlan)
                if (!product) {
                  return null
                }

                const plans = product.plans.filter(
                  ({ isDeprecated }) => !isDeprecated,
                )

                return (
                  <>
                    <div className={cx(styles.cards, classes.cards)}>
                      {plans
                        .filter(noBasicPlan)
                        .filter(
                          ({ name, interval }) =>
                            interval === billing || name === 'FREE',
                        )
                        .map(plan =>
                          plan.name === 'ENTERPRISE' ? (
                            <Enterprise key={plan.id} />
                          ) : (
                            <Plan
                              key={plan.id}
                              {...plan}
                              isLoggedIn={currentUser}
                              billing={billing}
                              product={product}
                              userPlan={userPlan}
                              subscription={subscription}
                              isSubscriptionCanceled={isSubscriptionCanceled}
                            />
                          ),
                        )}
                    </div>
                  </>
                )
              }}
            </Query>
          )
        }}
      </Query>
    </>
  )
}
