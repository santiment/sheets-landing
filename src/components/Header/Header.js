import React, { useRef } from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import AccountBtn from '../AccountBtn/AccountBtn'
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><circle cx="19" cy="19" r="18.5" fill="#fff" stroke="#E7EAF3"/><path d="M9 18.648c0-.552.135-.966.407-1.242.272-.276.639-.414 1.102-.414.462 0 .83.139 1.101.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.639.415-1.101.415-.463 0-.83-.139-1.102-.414-.272-.276-.407-.7-.407-1.271zM15.547 23.714c.403.236.88.438 1.434.606a5.853 5.853 0 0 0 1.705.251c.664 0 1.227-.163 1.69-.49.462-.328.694-.858.694-1.591 0-.615-.142-1.12-.423-1.517a4.733 4.733 0 0 0-1.07-1.07c-.433-.317-.901-.609-1.404-.874a7.48 7.48 0 0 1-1.404-.957 4.788 4.788 0 0 1-1.07-1.326c-.283-.511-.423-1.16-.423-1.945 0-1.257.346-2.204 1.04-2.843.695-.639 1.676-.958 2.943-.958.824 0 1.539.074 2.142.222.603.147 1.127.35 1.57.606l-.574 1.774a6.31 6.31 0 0 0-1.327-.488 6.23 6.23 0 0 0-1.54-.192c-.724 0-1.251.147-1.584.443-.332.296-.498.76-.498 1.39 0 .493.14.912.423 1.256.282.346.638.66 1.07.947.433.286.901.576 1.404.872.502.296.97.646 1.404 1.05.432.403.789.887 1.07 1.448.283.561.423 1.267.423 2.114a4.51 4.51 0 0 1-.272 1.567c-.18.493-.457.921-.83 1.286a4.075 4.075 0 0 1-1.388.872c-.553.217-1.202.326-1.946.326-.885 0-1.65-.084-2.293-.252-.644-.167-1.188-.389-1.63-.665l.665-1.862zM25.984 18.648c0-.552.136-.966.408-1.242.271-.276.638-.414 1.1-.414.464 0 .83.139 1.102.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.638.415-1.101.415-.463 0-.83-.139-1.101-.414-.272-.276-.408-.7-.408-1.271z" fill="#2F354D"/></svg>
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
