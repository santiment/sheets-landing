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
                <img src={mainLogo} />
              </a>
              <SantimentProductsTooltip>
                <div className={styles.dividerLeft}/>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1AA168"/>
                  <path d="M4.7325 11.0031L5.14273 11.4125L7.5978 8.96249C8.15207 8.40937 8.15207 7.50937 7.5978 6.95312L7.18758 6.54374L4.7325 8.99374C4.1751 9.54999 4.1751 10.45 4.7325 11.0031Z" fill="white"/>
                  <path d="M9.01637 4.72188L8.60614 5.13125L11.0612 7.58125C11.6155 8.13438 12.5173 8.13438 13.0748 7.58125L13.485 7.17188L11.0299 4.72188C10.4725 4.16562 9.57064 4.16562 9.01637 4.72188Z" fill="white"/>
                  <path d="M15.3106 8.99686L14.9004 8.58749L12.4453 11.0375C11.8911 11.5906 11.8911 12.4906 12.4453 13.0469L12.8555 13.4562L15.3106 11.0062C15.868 10.45 15.868 9.54999 15.3106 8.99686Z" fill="white"/>
                  <path d="M11.0268 15.2781L11.437 14.8687L8.9819 12.4187C8.42763 11.8656 7.52577 11.8656 6.96837 12.4187L6.55815 12.8281L9.01322 15.2781C9.57062 15.8343 10.4725 15.8343 11.0268 15.2781Z" fill="white"/>
                </svg>
                <div className={styles.productName}>sheets</div>
              </SantimentProductsTooltip></div>
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
