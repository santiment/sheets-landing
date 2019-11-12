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
          <Link className={styles.logo} to='/'>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={styles.logo__icon}>
              <circle cx="19" cy="19" r="18.5" fill="white" stroke="#E7EAF3"/>
              <path d="M9 18.6476C9 18.096 9.13546 17.6822 9.40723 17.406C9.679 17.1299 10.0458 16.9922 10.5086 16.9922C10.9714 16.9922 11.3382 17.1307 11.61 17.406C11.8818 17.6822 12.0172 18.096 12.0172 18.6476C12.0172 19.2197 11.8818 19.6434 11.61 19.9188C11.3382 20.1941 10.9714 20.3326 10.5086 20.3326C10.0458 20.3326 9.679 20.1941 9.40723 19.9188C9.13546 19.6434 9 19.2197 9 18.6476Z" fill="#2F354D"/>
              <path d="M15.5475 23.7137C15.9497 23.9503 16.4276 24.1523 16.9812 24.3196C17.534 24.487 18.1028 24.5711 18.6859 24.5711C19.3498 24.5711 19.9126 24.4078 20.3754 24.0805C20.8382 23.7533 21.0696 23.2232 21.0696 22.4895C21.0696 21.8753 20.9282 21.37 20.6472 20.9734C20.3653 20.5769 20.0086 20.2199 19.5761 19.9026C19.1436 19.586 18.6758 19.2942 18.1726 19.0287C17.6695 18.7633 17.2017 18.445 16.7692 18.0716C16.3367 17.6981 15.9791 17.2563 15.6981 16.746C15.4163 16.2349 15.2757 15.5869 15.2757 14.8012C15.2757 13.5441 15.6224 12.5968 16.3165 11.9579C17.0107 11.319 17.9917 11 19.2589 11C20.0834 11 20.7978 11.0742 21.4011 11.2218C22.0043 11.3693 22.5277 11.5721 22.9703 11.8277L22.3973 13.6018C22.0153 13.4047 21.5719 13.2423 21.0696 13.1137C20.5664 12.9859 20.0532 12.9216 19.5307 12.9216C18.8062 12.9216 18.2787 13.0692 17.9463 13.3652C17.614 13.6611 17.4482 14.1244 17.4482 14.7551C17.4482 15.2481 17.5887 15.6669 17.8706 16.0114C18.1525 16.3569 18.5092 16.6718 18.9417 16.9578C19.3742 17.2439 19.842 17.5341 20.3451 17.83C20.8474 18.126 21.3152 18.4755 21.7486 18.8795C22.181 19.2834 22.5378 19.7665 22.8196 20.3279C23.1015 20.8893 23.242 21.595 23.242 22.4417C23.242 22.994 23.1512 23.5158 22.9703 24.0088C22.7894 24.5018 22.5125 24.9305 22.1406 25.2949C21.7679 25.6601 21.306 25.9503 20.7524 26.1671C20.1987 26.3839 19.55 26.4927 18.8062 26.4927C17.9211 26.4927 17.1562 26.4086 16.5126 26.2413C15.8689 26.0739 15.3254 25.8522 14.8828 25.576L15.5475 23.7137Z" fill="#2F354D"/>
              <path d="M25.9844 18.6476C25.9844 18.096 26.1198 17.6822 26.3916 17.406C26.6633 17.1299 27.0301 16.9922 27.4929 16.9922C27.9556 16.9922 28.3224 17.1307 28.5942 17.406C28.8659 17.6822 29.0014 18.096 29.0014 18.6476C29.0014 19.2197 28.8659 19.6434 28.5942 19.9188C28.3224 20.1941 27.9556 20.3326 27.4929 20.3326C27.0301 20.3326 26.6633 20.1941 26.3916 19.9188C26.1198 19.6434 25.9844 19.2197 25.9844 18.6476Z" fill="#2F354D"/>
            </svg>
          </Link>
          <div className={styles.dividerLeft}/>
          <div className={styles.product}>
            <div className={styles.products}>
              <SantimentProductsTooltip>
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
