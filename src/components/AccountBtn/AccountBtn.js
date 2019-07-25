import React from 'react'
import { Link } from 'gatsby'
import GA from 'react-ga'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './AccountBtn.module.scss'

const btnProps = {
  false: {
    accent: 'sheets',
    border: true,
    className: styles.login,
    children: 'Sign up',
    onClick: () => {
      GA.event({
        category: 'User',
        action: `Click on the "Sign up"`,
      })
    },
  },
  true: { className: styles.account, children: <Icon type='profile' /> },
}

const AccountBtn = ({ isAccountPage }) => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {} }) => {
        return (
          <Button
            as={Link}
            to='/account'
            variant='bordered'
            isActive={isAccountPage}
            {...btnProps[Boolean(currentUser)]}
          />
        )
      }}
    </Query>
  )
}

export default AccountBtn
