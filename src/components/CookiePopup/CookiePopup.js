import React, { useState } from 'react'
import Panel from '@santiment-network/ui/Panel/Panel'
import Button from '@santiment-network/ui/Button'
import styles from './CookiePopup.module.scss'

const COOKIE_POLICY_ACCEPTED = 'COOKIE_POLICY_ACCEPTED'

const isNotAccepted = key => {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return
  }

  return !localStorage.getItem(key)
}

const acceptCookiePolicy = () => {
  window.gtag('event', 'cookie_accept')
  localStorage.setItem(COOKIE_POLICY_ACCEPTED, true)
}

const CookiePopup = () => {
  const [shown, setShown] = useState(isNotAccepted(COOKIE_POLICY_ACCEPTED))

  function accept() {
    acceptCookiePolicy()
    setShown(false)
  }

  return shown ? (
      <Panel className={styles.wrapper} variant='modal'>
        <h2 className={styles.title}>We are using cookies</h2>
        <div className={styles.bottom}>
          <p className={styles.text}>
            This website uses the following types of cookies; strictly
            necessary, functional, performance
            and marketing cookies. By using this website, you accept our{' '}
            <a
              href='https://santiment.net/terms-conditions/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              Terms & Conditions
            </a>
            .
          </p>
          <Button
            variant='fill'
            accent='positive'
            className={styles.btn}
            onClick={accept}
          >
            Accept
          </Button>
        </div>
      </Panel>
    ) : null
}

export default CookiePopup
