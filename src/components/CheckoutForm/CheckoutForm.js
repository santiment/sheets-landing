import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Input from '@santiment-network/ui/Input'
import { CardElement } from 'react-stripe-elements'
import vars from '@santiment-network/ui/variables.scss'
import { trStr } from '../../utils/translate'
import styles from './CheckoutForm.module.scss'

const style = {
  base: {
    fontSize: '14px',
    color: vars.mirage,
    fontFamily: 'Rubik, sans-serif',
    '::placeholder': {
      color: vars.casper,
    },
  },
  invalid: {
    color: vars.persimmon,
  },
}

const CheckoutForm = ({ intl, stripe, plan }) => {
  return (
    <>
      <label className={cx(styles.label, styles.label_card)}>
        {trStr(intl, 'payment.card_details')}
        <CardElement style={style} />
      </label>

      <label className={styles.label}>
        {trStr(intl, 'payment.bill_address')}
      </label>
      <Input
        className={styles.input}
        placeholder={trStr(intl, 'payment.full_name')}
        required
        name='name'
      />
      <div className={styles.row}>
        <Input
          className={styles.input}
          placeholder={trStr(intl, 'payment.country')}
          required
        />
        <Input
          className={cx(styles.input, styles.input_right)}
          placeholder={trStr(intl, 'payment.city')}
          required
          name='address_city'
        />
      </div>
      <div className={styles.row}>
        <Input
          className={styles.input}
          placeholder={trStr(intl, 'payment.state')}
          required
          name='address_state'
        />
        <Input
          className={cx(styles.input, styles.input_right)}
          placeholder={trStr(intl, 'payment.street')}
          required
          name='address_line1'
        />
      </div>
      <Input
        className={styles.input}
        placeholder={trStr(intl, 'payment.phone')}
        type='tel'
        required
      />
    </>
  )
}

export default injectIntl(CheckoutForm)
