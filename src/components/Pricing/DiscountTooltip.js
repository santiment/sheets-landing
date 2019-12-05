import React from 'react'
import Tooltip from "@santiment-network/ui/Tooltip"
import Label from "@santiment-network/ui/Label"
import Icon from "@santiment-network/ui/Icon"
import Panel from "@santiment-network/ui/Panel/Panel"

const DiscountTooltip = () => (
  <div className={styles.sanTokens}>
    <Tooltip
      trigger={
        <div className={styles.tooltipTrigger}>
          <span>
            Holding 1000 SAN tokens will result in a 20% discount on all plans
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
              href='https://academy.santiment.net/san-tokens/how-to-buy-san'
            >
              here's how
            </a>
            )
          </li>
          <li className={styles.item}>
            - Log in to Sanbase (
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://app.santiment.net/'
            >
              https://app.santiment.net/
            </a>
            ). If you don’t have a Sanbase account, you can create one with
            email or MetaMask{" "}
          </li>
          <li className={styles.item}>
            - After logging in to Sanbase, head to{" "}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://app.santiment.net/account'
            >
              Account settings
            </a>{" "}
            and connect your account with your MetaMask wallet
          </li>
          <li className={styles.item}>
            - Refresh this page and proceed with your purchase
          </li>
          <li className={styles.item}>
            - Our system checks your Sanbase account for 1000+ SAN during the
            checkout, and automatically applies a 20% discount
          </li>
        </ul>
        <p className={styles.text}>
          <b>Note:</b> To claim the 20% discount, you just need to hold/HODL
          enough SAN. The tokens still belong to you - our system simply checks
          if you have them in your wallet
        </p>
      </Panel>
    </Tooltip>
  </div>
)

export default DefaultTooltip
