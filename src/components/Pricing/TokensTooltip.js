import React from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import Tooltip from '@santiment-network/ui/Tooltip'
import Panel from '@santiment-network/ui/Panel/Panel'
import { tr } from '../../utils/translate'
import styles from './TokensTooltip.module.scss'

const TokensTooltip = () => (
	 <div className={styles.sanTokens}>
	  <Tooltip
	    trigger={
	      <div className={styles.tooltipTrigger}>
	        <span>{tr('pricing.discount')}</span>
	        <Icon type='question-round' className={styles.icon} />
	      </div>
	    }
	  >
	    <Panel padding className={styles.tooltip}>
	      <p className={styles.text}>
	        <b>{tr('pricing.discount')}</b>
	      </p>
	      <ul className={styles.list}>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.buy')}(
	          <a
	            rel='noopener noreferrer'
	            target='_blank'
	            href='https://help.santiment.net/en/articles/2542674-how-to-buy-san'
	          >
	            {tr('pricing.discount.step.buy.link')}
	          </a>
	          )
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.login.left')}(
	          <a
	            rel='noopener noreferrer'
	            target='_blank'
	            href='https://app.santiment.net/'
	          >
	            https://app.santiment.net/
	          </a>
	          ). {tr('pricing.discount.step.login.right')}{' '}
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.settings.left')}
	          <a
	            rel='noopener noreferrer'
	            target='_blank'
	            href='https://app.santiment.net/account'
	          >
	            {tr('pricing.discount.step.settings.link')}
	          </a>
	          {tr('pricing.discount.step.settings.right')}
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.refresh')}
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.system')}{' '}
	        </li>
	      </ul>
	      <p className={styles.text}>
	        <b>{tr('pricing.discount.note')}: </b>
	        {tr('pricing.discount.note.text')}
	      </p>
	    </Panel>
	  </Tooltip>
	</div>
)

export default TokensTooltip
