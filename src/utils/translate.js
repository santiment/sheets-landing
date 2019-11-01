import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

export const tr = (id, defaultMessage) => <FormattedMessage id={id} defaultMessage={defaultMessage || ''} />

export const trStr = (intl, id) =>
  intl.formatMessage({
    id,
  })
