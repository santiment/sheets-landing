import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Input from '@santiment-network/ui/Input'
import CodePanel from '../CodePanel'
import financial from '../FloatingPanel/financial.svg'
import man from '../../../images/ibis.jpg'
import eth from '../FloatingPanel/eth-circle.svg'
import btc from '../FloatingPanel/btc.svg'
import { tr, trStr } from '../../../utils/translate'
import styles from './BacktestCodePanel.module.scss'

const lines = [433, 197, 366, 473, 315, 447, 536, 238]

const BacktestCodePanel = ({ intl }) => (
  <CodePanel className={styles.code}>
    <img
      src={btc}
      alt='btc'
      className={cx(styles.circle, styles.btc, styles.shadow)}
    />
    <img
      src={eth}
      alt='eth'
      className={cx(styles.circle, styles.eth, styles.shadow)}
    />
    <div className={cx(styles.comparing, styles.shadow)}>
      <div className={styles.comparing__top}>
        <span>BTC / USD</span>
        <span className={styles.change}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6'
            height='4'
            fill='none'
          >
            <path
              fill='#5275FF'
              d='M2.66.16c.18-.21.5-.21.68 0L5.9 3.31c.23.28.03.69-.33.69H.43a.42.42 0 0 1-.33-.7L2.66.17z'
            />
          </svg>
          7.26%
        </span>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='192'
        height='40'
        fill='none'
        className={styles.graph}
      >
        <path
          stroke='#5275FF'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='M1 39C25.3 27.4 28.6 1 51.2 1c18.2 0 22.7 29 39.5 26.4 13.7-2.1 12.1-18 27.3-15.8 13.5 1.8 16.7 29.3 30.4 16.8 15.2-13.7 29-1 42.6-13.7'
        />
      </svg>
    </div>
    <div className={cx(styles.tracking, styles.shadow)}>
      <img src={financial} alt='financial' className={styles.financial} />
      <div>
        <h4 className={styles.tille}>{tr('usecases.backtest.card.title')}</h4>
        <p className={styles.desc}>{tr('usecases.backtest.card.text')}</p>
      </div>
    </div>
    <div className={cx(styles.status, styles.shadow)}>
      <img src={man} alt='man' className={styles.man} />
      <Input
        placeholder={trStr(intl, 'usecases.backtest.status')}
        disabled
        className={styles.input}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='none'
        className={styles.reaction}
      >
        <path d='M7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6.86 10.28a1 1 0 1 0-1.72 1.04 4.5 4.5 0 0 0 7.72 0 1 1 0 0 0-1.72-1.04 2.5 2.5 0 0 1-4.28 0z' />
        <path
          fillRule='evenodd'
          d='M9 .5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM2.5 9a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z'
          clipRule='evenodd'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='17'
        height='17'
        fill='none'
        className={styles.reaction}
      >
        <path
          fillRule='evenodd'
          d='M16.7.3a1 1 0 0 1 .25 1.03l-5 14.5a1 1 0 0 1-1.86.09l-3-6.5a1 1 0 0 1 .2-1.13l2.5-2.5a1 1 0 1 1 1.42 1.42l-2.01 2 1.67 3.61 3.52-10.2L4.18 6.12 6.4 7.16a1 1 0 1 1-.84 1.82L1.08 6.9a1 1 0 0 1 .1-1.86l14.5-5A1 1 0 0 1 16.7.3z'
          clipRule='evenodd'
        />
      </svg>
    </div>
    <ul className={styles.lines}>
      {lines.map((width, i) => (
        <li className={styles.item} key={i} style={{ width: width }} />
      ))}
    </ul>
  </CodePanel>
)

export default injectIntl(BacktestCodePanel)
