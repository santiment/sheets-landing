import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import Button from '@santiment-network/ui/Button'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: 'Plan Card',
    text: 'Upgrade now',
  })
}

const PlanRestrictBtn = ({ sameAsUserPlan, isSubscriptionCanceled }) => {
  const props = sameAsUserPlan
    ? { children: 'your_plan', disabled: true }
    : isSubscriptionCanceled
    ? { children: 'upgrade_now', as: Link, to: '/account#subscription?renew' }
    : {
        children: 'upgrade_now',
        as: Link,
        to: '/account',
        onClick: onGetAccessClick,
      }
  const { children, ...rest } = props

  return (
    <Button
      fluid
      accent='sheets'
      variant='fill'
      className={styles.link}
      {...rest}
    >
      {tr('cta.' + children)}
    </Button>
  )
}

export default PlanRestrictBtn
