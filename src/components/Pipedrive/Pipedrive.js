import React, { useState } from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import cx from 'classnames'
import Loader from '../Loader/Loader'
import styles from './Pipedrive.module.scss'

function useFormLoading() {
  const [loading, setLoading] = useState(true)
  function toggleLoading(newSt) {
    setLoading(state => newSt)
  }
  return [loading, toggleLoading]
}

const PipedriveBtn = ({ title, label, src }) => {
  const [loading, toggleLoading] = useFormLoading()

  const startLoading = () => toggleLoading(true)
  const stopLoading = () => toggleLoading(false)

  return (
    <Dialog
      title='Contact Information'
      classes={{ dialog: styles.dialog }}
      trigger={
        <Button className={styles.link} fluid border accent='sheets'>
          {label}
        </Button>
      }
      onOpen={startLoading}
    >
      <div className={styles.dialog__content}>
        <div
          className={cx(
            styles.dialog__loading,
            !loading && styles.dialog__loading_end,
          )}
        >
          <Loader />
        </div>
        <iframe
          title={title}
          height='100%'
          width='100%'
          frameBorder='0'
          src={src}
          onLoad={stopLoading}
        />
      </div>
    </Dialog>
  )
}

export default PipedriveBtn
