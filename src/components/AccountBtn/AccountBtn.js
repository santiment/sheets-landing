import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../gql/user'
import { tr } from '../../utils/translate'
import styles from './AccountBtn.module.scss'

const btnProps = {
  false: {
    accent: 'sheets',
    border: true,
    className: styles.login,
    children: tr('cta.sign_up'),
    onClick: () =>
      window.gtag('event', 'login_action_call', {
        location: 'Navbar',
        text: 'Sign up',
      }),
  },
  true: { className: styles.account, children: <Icon type='profile' className={styles.profileIcon} /> },
}

const AccountBtn = ({ isAccountPage }) => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {} }) => {
        return (
          <Button
            as={Link}
            to='/account'
            variant='flat'
            isActive={isAccountPage}
            {...btnProps[Boolean(currentUser)]}
          />
        )
      }}
    </Query>
  )
}

export default AccountBtn
