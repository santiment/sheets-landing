import React, { useRef } from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import AccountBtn from '../AccountBtn/AccountBtn'
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
import mainLogo from './../../images/logos/main-logo.svg'
import { tr } from '../../utils/translate'
import styles from './Header.module.scss'

const Header = ({ isAccountPage }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header className={styles.header}>
      <div  className={styles.container}>
        <div className={styles.left}>

          <div className={styles.product}>
            <div className={styles.products}>
              <a className={styles.logo} href='https://app.santiment.net/'>
                <img src={mainLogo} alt="main logo" />
                <div className={styles.productName}>Sansheets</div>
              </a>
              <SantimentProductsTooltip/>
            </div>
          </div>
        </div>
        <label htmlFor='hamburger'>
          <Icon type='hamburger' />
        </label>
        <input id='hamburger' type='checkbox' ref={toggle} />
        <nav className={styles.nav}>
          <label htmlFor='hamburger' className={styles.close}>
            <Icon type='close' />
          </label>
          <Link className={styles.link} to='/#metrics' onClick={closeNav}>
            {tr('header.metrics')}
          </Link>
          <Link className={styles.link} to='/#use-cases' onClick={closeNav}>
            {tr('header.use_cases')}
          </Link>
          <Link className={styles.link} to='/#pricing' onClick={closeNav}>
            {tr('header.pricing')}
          </Link>
          <a
            className={cx(styles.link, styles.linkLast)}
            href='mailto:support@santiment.net'
            onClick={closeNav}
          >
            {tr('header.support')}
          </a>
          <div className={styles.dividerRight}/>
          <AccountBtn isAccountPage={isAccountPage} onClick={closeNav} />
        </nav>
      </div>
    </header>
  )
}
export default injectIntl(Header)
