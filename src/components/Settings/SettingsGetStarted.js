import React from "react"
import Label from "@santiment-network/ui/Label"
import Button from "@santiment-network/ui/Button"
import gql from "graphql-tag"
import Settings from "./Settings"
import { CURRENT_USER_QUERY } from "../../gql/user"
import styles from "./SettingsAPIKeys.module.scss"

const SettingsGetStarted = ({ apikeys = [], generateAPIKey, revokeAPIKey }) => (
  <Settings id='get-started' header='Get started'>
    <Settings.Row>
      <div className={styles.setting__left}>
        <Label className={styles.setting__description} accent='waterloo'>
          Read our guide "How to install Sansheets"
        </Label>
      </div>
      <Button
        as='a'
        variant='fill'
        accent='sheets'
        target='_blank'
        rel='noopener noreferrer'
        href='https://academy.santiment.net/sansheets/getting-started/setting-up/'
        className={styles.text}
      >
        Read the article
      </Button>
    </Settings.Row>
  </Settings>
)

export default SettingsGetStarted
