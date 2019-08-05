import React from 'react'
import logo from '../../images/logo-SAN.svg'
import styles from './PageLoader.module.scss'

const PageLoader = ({text = 'Loading'}) => (
  <div className='page'>
    <div className={styles.loader}>
      <img
        src={logo}
        className={styles.loader__img}
        width='44'
        height='44'
        alt='SANbase'
      />
      {text}...
    </div>
  </div>
)

export default PageLoader
