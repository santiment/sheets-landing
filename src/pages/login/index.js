import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import Panel from '@santiment-network/ui/Panel/Panel'
import Layout from '../../components/layout'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

export default () => (
  <Layout>
    <Panel className={styles.wrapper}>
      <h2 className={styles.title}>{tr('login')}</h2>
      <div className={styles.options}>
        <Link to='/login/email' className={cx(styles.btn, styles.btn_email)}>
          <Icon type='envelope' className={styles.btn__icon} />
          Email
        </Link>
      </div>
    </Panel>
  </Layout>
)
