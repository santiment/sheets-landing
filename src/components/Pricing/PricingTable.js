import React from "react"
import { Query } from "react-apollo"
import cx from "classnames"
import RadioBtns from "@santiment-network/ui/RadioBtns"
import Label from "@santiment-network/ui/Label"
import Icon from "@santiment-network/ui/Icon"
import Tooltip from "@santiment-network/ui/Tooltip"
import Panel from "@santiment-network/ui/Panel/Panel"
import { CURRENT_USER_QUERY } from "../../gql/user"
import Features from "../Features/Features"
import PricingDetailsToggle from "./PricingDetailsToggle.js"
import PlanRestrictBtn from "./PlanRestrictBtn"
import { PLANS_QUERY } from "../../gql/plans"
import PLANS from "./prices"
import {
  findSheetsPlan,
  getCurrentSheetsSubscription,
  formatPrice,
  getAlternativeBillingPlan,
  noBasicPlan
} from "../../utils/plans"
import styles from "./index.module.scss"

const toggleCardDetails = ({ currentTarget }) =>
  currentTarget.classList.toggle(styles.card_opened)

const billingOptions = [
  {
    index: "year",
    content: (
      <>
        Bill yearly <Label accent='waterloo'>(save 10%)</Label>
      </>
    ),
  },
  { index: "month", content: "Bill monthly" },
]

const DiscountTooltip = () => (
  <div className={styles.sanTokens}>
<Tooltip
          trigger={
            <div className={styles.tooltipTrigger}>
              <span>
                Holding 1000 SAN tokens will result in a 20% discount on all
                plans
              </span>
              <Icon type='question-round' className={styles.icon} />
            </div>
          }
        >
          <Panel padding className={styles.tooltip}>
            <p className={styles.text}>
              <b>Here’s how to claim the SAN holding discount:</b>
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                - Buy 1000 or more SAN tokens (
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://help.santiment.net/en/articles/2542674-how-to-buy-san'
                >
                  here's how
                </a>
                )
              </li>
              <li className={styles.item}>
                - Log in to SANbase (
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://app.santiment.net/'
                >
                  https://app.santiment.net/
                </a>
                ). If you don’t have a SANbase account, you can create one with
                email or MetaMask{" "}
              </li>
              <li className={styles.item}>
                - After logging in to SANbase, head to{" "}
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://app.santiment.net/account'
                >
                  Account settings
                </a>{" "}
                and connect your account with your MetaMask wallet
              </li>
              <li className={styles.item}>- Refresh this page and proceed with your purchase</li>
              <li className={styles.item}>
                - Our system checks your SANbase account for 1000+ SAN during the
                checkout, and automatically applies a 20% discount
              </li>
            </ul>
            <p className={styles.text}>
              <b>Note:</b> To claim the 20% discount, you just need to hold/HODL
              enough SAN. The tokens still belong to you - our system simply
              checks if you have them in your wallet
            </p>
          </Panel>
        </Tooltip>
        </div>
)

export default ({ classes = {}, onDialogClose }) => {
  const [billing, setBilling] = React.useState("year")
  return (
    <>
      {/* <DiscountTooltip /> */}
      <div className={cx(styles.billing, classes.billing)}>
        <RadioBtns
          options={billingOptions}
          defaultSelectedIndex='year'
          labelOnRight
          onSelect={res => setBilling(res)}
          className={styles.bill}
        />
      </div>
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } }) => {
          const subscription = getCurrentSheetsSubscription(currentUser)
          const userPlan = subscription && subscription.plan.id
          const isSubscriptionCanceled =
            subscription && subscription.cancelAtPeriodEnd
          return (
            <Query query={PLANS_QUERY}>
              {({ data: { productsWithPlans = [] } }) => {
                const sheets = productsWithPlans.find(findSheetsPlan)
                if (!sheets) {
                  return null
                }

                return (
                  <>
                    <div className={styles.cards}>
                      {sheets.plans
                        .filter(noBasicPlan)
                        .filter(
                          ({ name, interval }) =>
                            interval === billing || name === "FREE"
                        )
                        .sort(({ id: a }, { id: b }) => a - b)
                        .map(({ id, name, amount }) => {
                          const card = PLANS[name]
                          const sameAsUserPlan = id === userPlan
                          const [price, priceType] = formatPrice(
                            amount,
                            name,
                            billing
                          )
                          const [realPrice] = formatPrice(amount, name)

                          const { amount: altAmount, interval: altInterval } =
                            getAlternativeBillingPlan(
                              sheets.plans,
                              name,
                              billing
                            ) || {}

                          const [altPrice] = formatPrice(
                            altAmount,
                            null,
                            altInterval
                          )

                          return (
                            <div
                              className={cx(
                                styles.card,
                                classes.card,
                                card.isPopular && styles.card_popular,
                                sameAsUserPlan && styles.card_active
                              )}
                              key={card.title}
                              onClick={toggleCardDetails}
                            >
                              <div className={styles.card__top}>
                                <h3 className={styles.card__title}>
                                  {card.title}
                                  {card.isPopular && (
                                    <span className={styles.popular}>
                                      Popular
                                    </span>
                                  )}
                                </h3>
                                <svg
                                  width='15'
                                  height='8'
                                  viewBox='0 0 15 8'
                                  className={styles.card__arrow}
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z'
                                  />
                                </svg>
                              </div>
                              <div className={styles.desc}>{card.desc}</div>
                              <div className={styles.details}>
                                <div className={styles.price}>
                                  {price}
                                  <span className={styles.price__type}>
                                    {priceType}
                                  </span>
                                </div>
                                <div className={styles.discount}>
                                  {card.discount ||
                                    `${altPrice} if billed ${altInterval}ly`}
                                </div>
                                {!currentUser ||
                                sameAsUserPlan ||
                                isSubscriptionCanceled ? (
                                  <PlanRestrictBtn
                                    sameAsUserPlan={sameAsUserPlan}
                                    isSubscriptionCanceled={
                                      isSubscriptionCanceled
                                    }
                                  />
                                ) : (
                                  <card.Component
                                    title={card.title}
                                    label={card.link}
                                    price={realPrice}
                                    billing={billing}
                                    planId={+id}
                                    subscription={subscription}
                                    onDialogClose={onDialogClose}
                                  />
                                )}
                                <Features
                                  data={card.features}
                                  classes={styles}
                                />
                              </div>
                            </div>
                          )
                        })}
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
