import React, { useEffect } from 'react'
import { Link } from 'gatsby-plugin-intl'
import Panel from '@santiment-network/ui/Panel/Panel'
import Input from '@santiment-network/ui/Input'
import Button from '@santiment-network/ui/Button'
import Icon from '@santiment-network/ui/Icon'
import cx from 'classnames'
import { Mutation } from 'react-apollo'
import Layout from '../../components/layout'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

export default () => {
  useEffect(() => {
    window.gtag('event', 'sign_up', { method: 'email' })
  }, [])

  return (
    <Layout>
      <Mutation mutation={EMAIL_LOGIN_MUTATION}>
        {(
          addBlog,
          { loading, error, data: { emailLogin: { success } = {} } = {} },
        ) => (
          <Panel className={styles.wrapper}>
            <h2 className={cx(styles.title, styles.email__title)}>
              {tr('login.interest')}
            </h2>
            {success ? (
              <h3 className={styles.email__subtitle}>
                {tr('login.email.sent')}
                <br />
                {tr('login.email.confirm')}
              </h3>
            ) : (
              <>
                <h3 className={styles.email__subtitle}>{tr('login.email')}</h3>
                <form
                  className={styles.email__form}
                  action=''
                  onSubmit={e => {
                    e.preventDefault()
                    addBlog({
                      variables: {
                        email: e.currentTarget.email.value,
                        consent: '',
                      },
                    })
                  }}
                >
                  <Input
                    placeholder='your@email.com'
                    name='email'
                    type='email'
                    className={styles.input}
                  />
                  <Button
                    variant='fill'
                    accent='sheets'
                    className={styles.email__btn}
                    type='submit'
                    disabled={loading}
                  >
                    {loading ? 'Waiting...' : 'Continue'}
                  </Button>
                </form>
              </>
            )}
            <Link to='/login' className={styles.email__link}>
              <Icon className={styles.email__pointer} type='pointer-right' />
              {tr('login.options')}
            </Link>
          </Panel>
        )}
      </Mutation>
    </Layout>
  )
}
