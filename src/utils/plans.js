import { client } from '../apollo/client'
import { USER_PAYMENTS } from '../gql/user'

export const formatPrice = (price, name, billing) => {
  if (name === 'FREE') return ['$0']
  if (!price) return ['Custom']

  const devider = 100 * (billing === 'year' ? 12 : 1)

  return [`$${parseInt(price / devider, 10)}`, '/mo']
}

export const sheetsProductId = "3"
export const findSheetsPlan = ({ id }) => id === sheetsProductId

export const getCurrentSheetsSubscription = user => {
  if (!user) return
  const { subscriptions: subs } = user

  return subs.find(
    ({
      plan: {
        product: { id },
      },
    }) => id === sheetsProductId,
  )
}

export const getBilling = () =>
  client.query({ query: USER_PAYMENTS, fetchPolicy: 'network-only' })

export const getAlternativeBillingPlan = (
  plans,
  currentPlan,
  currentInterval,
) =>
  plans.find(
    ({ name, interval }) =>
      name === currentPlan && interval !== currentInterval,
  )
