import React, { useRef } from "react"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import styles from "./Header.module.scss"
import AccountBtn from "../AccountBtn/AccountBtn"

const Header = ({ isAccountPage }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='none'
        >
          <path
            fill='#1AA168'
            fill-rule='evenodd'
            d='M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20zm-22.825-9.738l.819-.818a2.837 2.837 0 0 1 4.018 0l4.9 4.9-.818.819a2.848 2.848 0 0 1-4.019 0l-4.9-4.9zm-6.913 12.563l-.818-.819a2.837 2.837 0 0 1 0-4.018l4.9-4.9.819.818a2.848 2.848 0 0 1 0 4.019l-4.9 4.9zm20.294-4.831l-.819-.819-4.9 4.9a2.848 2.848 0 0 0 0 4.019l.82.819 4.9-4.9a2.837 2.837 0 0 0 0-4.02zm-7.731 11.743l-.819.82a2.837 2.837 0 0 1-4.018 0l-4.9-4.9.818-.82a2.848 2.848 0 0 1 4.019 0l4.9 4.9z'
            clip-rule='evenodd'
          />
        </svg>
        <div className={styles.logo__text}>
          <div className={styles.logo__title}>sheets</div>
          <div className={styles.logo__desc}>by santiment</div>
        </div>
      </Link>
      <label htmlFor='hamburger'>
        <Icon type='hamburger' />
      </label>
      <input id='hamburger' type='checkbox' ref={toggle} />
      <nav className={styles.nav}>
        <label htmlFor='hamburger' className={styles.close}>
          <Icon type='close' />
        </label>
        <Link className={styles.link} to='/#pricing' onClick={closeNav}>
          Pricing
        </Link>
        <Link className={styles.link} to='/#use-cases' onClick={closeNav}>
          Use cases
        </Link>
        <a
          className={styles.link}
          href='mailto:support@santiment.net'
          onClick={closeNav}
        >
          Support
        </a>
        <AccountBtn isAccountPage={isAccountPage} onClick={closeNav} />
      </nav>
    </header>
  )
}
export default Header
