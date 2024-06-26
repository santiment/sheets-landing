import gql from "graphql-tag"

export const PLANS_QUERY = gql`
  query productsWithPlans {
    productsWithPlans {
      id
      name
      plans {
        id
        name
        amount
        interval
        isDeprecated
      }
    }
  }
`

export const SUBSCRIBE_MUTATION = gql`
  mutation subscribe($cardToken: String!, $planId: Int!, $coupon: String) {
    subscribe(cardToken: $cardToken, planId: $planId, coupon: $coupon) {
      id
      cancelAtPeriodEnd
      currentPeriodEnd
      plan {
        id
        name
        amount
        interval
        product {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_SUBSCRIPTION_MUTATION = gql`
  mutation updateSubscription($subscriptionId: Int!, $planId: Int!) {
    updateSubscription(subscriptionId: $subscriptionId, planId: $planId) {
      id
      cancelAtPeriodEnd
      currentPeriodEnd
      plan {
        id
        name
        amount
        interval
        product {
          id
          name
        }
      }
    }
  }
`

export const CANCEL_SUBSCRIPTION_MUTATION = gql`
  mutation cancelSubscription($subscriptionId: Int!) {
    cancelSubscription(subscriptionId: $subscriptionId) {
      isScheduledForCancellation
      scheduledForCancellationAt
    }
  }
`

export const RENEW_SUBSCRIPTION_MUTATION = gql`
  mutation renewCancelledSubscription($id: Int!) {
    renewCancelledSubscription(subscriptionId: $id) {
      id
      cancelAtPeriodEnd
      currentPeriodEnd
    }
  }
`
