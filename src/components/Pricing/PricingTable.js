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

export default ({ classes = {}, onDialogClose }) => {
  const [billing, setBilling] = React.useState('month')
  return (
    <>
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
                        .filter(
                          ({ name, interval }) =>
                            interval === billing &&
                            (name === 'FREE' || name === 'BASIC'),
                        )
                        .map((plan) =>
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
