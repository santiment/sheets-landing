import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import Title from '../Title/Title'
import Button from '@santiment-network/ui/Button'
import { tr } from '../../utils/translate'
import styles from './ReadyToStart.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: '"Ready to start?" section',
    text: 'Get access',
  })
}

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Title>{tr('ready.title')}</Title>
      <p className={styles.text}>
        {tr('ready.text.top')}
        <br className={styles.br} />
        {tr('ready.text.bottom')}
      </p>
      <Button
        as={Link}
        to='/account'
        variant='fill'
        accent='sheets'
        className={styles.btn}
        onClick={onGetAccessClick}
      >
        {tr('ready.btn')}
      </Button>
    </div>
  </section>
)
