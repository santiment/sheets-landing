import React, { useState } from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import Label from '@santiment-network/ui/Label'
import Button from '@santiment-network/ui/Button'
import copy from 'copy-to-clipboard'
import Settings from './Settings'
import styles from './SettingsAPIKeys.module.scss'

let genTimer

const SettingsAPIKeys = ({ apikeys = [], generateAPIKey, revokeAPIKey }) => {
  const [copiedShown, setCopiedShown] = useState(false)

  function showCopiedTooltip() {
    setCopiedShown(true)
    setTimeout(() => setCopiedShown(false), 1000)
  }

  function onGenClick() {
    clearTimeout(genTimer)
    genTimer = setTimeout(generateAPIKey, 300)
  }

  return (
    <Settings id='api-keys' header='API keys'>
      <Settings.Row>
        <div className={styles.setting__left}>
          <Label className={styles.setting__description} accent='waterloo'>
            How to setup Sansheets with your API key - explained in{' '}
            <a
            href='https://academy.santiment.net/sansheets/adding-an-api-key/'
            rel='noopener noreferrer'
            target='_blank'
          >
            this article
          </a>.
          </Label>
        </div>
        <div>
          <div className={styles.wrapper}>
            {apikeys.length > 0 ? (
              apikeys.map(apikey => (
                <div key={apikey} className={styles.keyContainer}>
                  <div
                    className={cx(styles.apikey, copiedShown && styles.copied)}
                  >
                    <input
                      className={styles.apikey__input}
                      defaultValue={apikey}
                      readOnly
                    />
                    <Icon
                      onClick={() => {
                        copy(apikey)
                        showCopiedTooltip()
                      }}
                      type='copy'
                      className={styles.apikey__icon}
                    />
                  </div>
                  <Button
                    onClick={() => {
                      revokeAPIKey({ variables: { apikey } })
                    }}
                    accent='negative'
                  >
                    Revoke
                  </Button>
                </div>
              ))
            ) : (
              <Button onClick={onGenClick} variant='fill' accent='sheets'>
                Generate
              </Button>
            )}
          </div>
        </div>
      </Settings.Row>
    </Settings>
  )
}

export default SettingsAPIKeys
