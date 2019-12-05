import React, { useState } from 'react'
import cx from 'classnames'
import Title from '../Title/Title'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const questions = [
  {
    question: tr('faq.install'),
    answer: (
      <>
        <p className={styles.item}>1) {tr('faq.install.p.1')}</p>
        <p className={styles.item}>2) {tr('faq.install.p.2')} </p>
        <p className={styles.item}>3) {tr('faq.install.p.3')} </p>
        <p className={styles.item}>4) {tr('faq.install.p.4')} </p>
        <p className={styles.item}>
          {tr('faq.install.left')}
          <a
            href='https://academy.santiment.net/sansheets/setting-up/'
            rel='noopener noreferrer'
            target='_blank'
          >
            {tr('faq.install.link')}
          </a>
          {tr('faq.install.right')}
        </p>
      </>
    ),
  },
  {
    question: tr('faq.key'),
    answer: (
      <>
        <p className={styles.text}>1) {tr('faq.key.p.1')} </p>
        <p className={styles.text}>2) {tr('faq.key.p.2')}</p>
        <p className={styles.text}>
          3) {tr('faq.key.left')}
          <a
            href='https://academy.santiment.net/sansheets/adding-an-api-key/'
            rel='noopener noreferrer'
            target='_blank'
          >
            {tr('faq.key.link')}
          </a>
          {tr('faq.key.right')}
        </p>
      </>
    ),
  },
  {
    question: tr('faq.fetch'),
    answer: (
      <>
        <p className={styles.text}>
          {tr('faq.fetch.left')}
          <a
            href='https://academy.santiment.net/sansheets/functions/'
            rel='noopener noreferrer'
            target='_blank'
          >
            {tr('faq.fetch.link')}
          </a>{' '}
          {tr('faq.fetch.right')}
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
        {questions.map(({ question, answer }, i) => (
          <li
            className={cx(
              styles.question,
              opened === question && styles.opened,
            )}
            onClick={() => onQuestionClick(question)}
            key={i}
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
