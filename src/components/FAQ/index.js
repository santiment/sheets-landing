import React, { useState } from 'react'
import cx from 'classnames'
import Title from '../Title/Title'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const questions = [
  {
    question: 'How do I install SANsheets?',
    answer: (
      <>
        <p className={styles.item}>
          1) In a new Google Sheet, go to <b>Add-ons</b> -> <b>Get Add-Ons</b>.
        </p>
        <p className={styles.item}>
          2) After the Google Marketplace viewer opens in your Google
          Spreadsheet, look for <b>Santiment</b> in the search bar at the top
          right corner and install the SANsheets add-on.
        </p>
        <p className={styles.item}>
          3) After it has been installed, go back to your Google Spreadsheet and
          enable the SANsheets tool by by going to <b>Add-ons</b> ->{' '}
          <b>SANsheets</b> -> <b>Enable</b>.
        </p>
        <p className={styles.item}>
          4) When this is done, you are ready to start using the <b>Free</b>{' '}
          version of SANsheets. Just type <b>=SAN</b> in an empty cell and
          you'll see a list of available functions to help you fetch data!
        </p>
        <p className={styles.item}>
          If you need more in-depth information on how you can install
          SANsheets, you can find it{' '}
          <a
            href='https://help.santiment.net/en/articles/2864401-setting-up-sansheets'
            rel='noopener noreferrer'
            target='_blank'
          >
            here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'How to add an API key for paid access?',
    answer: (
      <>
        <p className={styles.text}>
          1) Pick a subscription from this page and go through the login and
          purchase process.
        </p>
        <p className={styles.text}>
          2) Find your API key in the account settings.
        </p>
        <p className={styles.text}>
          3) Setup SANsheets with your API as explained in{' '}
          <a
            href='https://help.santiment.net/en/articles/2864459-adding-an-api-key-to-sansheets'
            rel='noopener noreferrer'
            target='_blank'
          >
            this article
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'How do I fetch metrics and pricing?',
    answer: (
      <>
        <p className={styles.text}>
          SANsheets was built in a way that it makes it easy for anyone to gain
          access to our data without the need for coding skills. When opening
          creating a new Google Spreadsheet, you always need to <b>Enable</b>{' '}
          the add-on under the <b>Add-Ons</b> tab. After that, you simply have
          to write
          <b>=SAN</b> in an empty cell, and you get a list of metric
          suggestions, ranging from MVRV metric to Social Volume, with
          descriptions. If you want to explore our metrics and how you can fetch
          them in SANsheets, take a look at{' '}
          <a
            href='https://help.santiment.net/en/articles/3001303-full-list-of-available-sansheets-functions'
            rel='noopener noreferrer'
            target='_blank'
          >
            its dedicated page
          </a>{' '}
          on our knowledge base.
        </p>
      </>
    ),
  },
]

export default () => {
  const [opened, setOpened] = useState(null)
  const onQuestionClick = question =>
    setOpened(question === opened ? null : question)

  return (
    <section className={styles.wrapper}>
      <Title>{tr('faq.title')}</Title>
      <ul className={styles.questions}>
        {questions.map(({ question, answer }) => (
          <li
            className={cx(
              styles.question,
              opened === question && styles.opened,
            )}
            onClick={() => onQuestionClick(question)}
            key={question}
          >
            <div className={styles.question__top}>
              <h3 className={styles.question__text}>{question}</h3>
              <svg
                width='15'
                height='8'
                viewBox='0 0 15 8'
                className={styles.question__arrow}
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z'
                />
              </svg>
            </div>
            <div className={styles.question__answer}>{answer}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
