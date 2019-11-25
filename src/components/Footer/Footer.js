import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import cx from 'classnames'
import planetSvg from '../../images/planet.svg'
import { tr, trStr } from '../../utils/translate'
import styles from './Footer.module.scss'

const langProps = [
  { link: '/ja', label: '日本語' },
  { link: '/', label: 'English' },
]

export const isJapanese = () =>
  typeof window === 'undefined'
    ? false
    : window.location.pathname.includes('/ja')

const categories = [
  {
    title: 'labs',
    links: [
      {
        children: 'trends',
        href: 'https://app.santiment.net/labs/trends',
      },
      {
        children: 'eth',
        href: 'https://app.santiment.net/projects/ethereum',
      },
      {
        children: 'balance',
        href: 'https://app.santiment.net/labs/balance',
      },
      { children: 'charts', href: 'https://data.santiment.net' },
      { children: 'sheets', href: 'https://santiment.net/sansheets/' },
    ],
  },
  {
    title: 'company',
    links: [
      { children: 'about', href: 'https://santiment.net/about-santiment/' },
      { children: 'customers', href: 'https://santiment.net/customers/' },
      { children: 'team', href: 'https://santiment.net/about-santiment/team/' },
      { children: 'jobs', href: 'https://santiment.net/about-santiment/jobs/' },
      {
        children: 'contact',
        href: 'https://santiment.net/about-santiment/contact/',
      },
    ],
  },
  {
    title: 'resources',
    links: [
      {
        children: 'start',
        href: 'https://help.santiment.net/santiment-getting-started',
      },
      {
        children: 'docs',
        href: 'https://help.santiment.net/metrics-explained#api',
      },
      { children: 'api', href: 'https://api.santiment.net/graphiql' },
      { children: 'blog', href: 'https://santiment.net/blog/' },
      { children: 'source', href: 'https://github.com/santiment/' },
      {
        children: 'buy',
        href:
          'https://help.santiment.net/faq/general/how-to-buy-san-tokens-using-our-bancor-integration',
      },
    ],
  },
  {
    title: 'social',
    links: [
      { children: 'discord', href: 'https://santiment.net/discord' },
      { children: 'telegram', href: 'https://t.me/santiment_network' },
      { children: 'twitter', href: 'https://twitter.com/santimentfeed' },
      {
        children: 'youtube',
        href: 'https://www.youtube.com/channel/UCSzP_Z3MrygWlbLMyrNmMkg',
      },
      {
        children: 'linkedin',
        href: 'https://www.linkedin.com/company/santiment',
      },
      { children: 'medium', href: 'https://medium.com/santiment' },
      { children: 'reddit', href: 'https://reddit.com/r/santiment' },
    ],
  },
]

const Footer = ({intl}) => {
  const { link, label } = langProps[+isJapanese()]
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <ul className={styles.categories}>
          {categories.map(({ title, links }) => (
            <li key={title} className={styles.category}>
              <h4 className={styles.category__title}>
                {tr(`footer.${title}`)}
              </h4>
              {links.map(({ children, href }, i) => (
                <a
                  key={i}
                  target='_blank'
                  rel='noopener noreferrer'
                  children={tr(`footer.${title}.${children}`)}
                  href={title === 'company' ? trStr(intl, `footer.${title}.${children}.link`) : href}
                  className={cx(styles.text, styles.category__item)}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div>
          <Link to={link} className={cx(styles.text, styles.link)}>
            <img alt='planet' src={planetSvg} className={styles.planet} />
            {label}
          </Link>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://santiment.net/terms-conditions/'
            className={cx(styles.text, styles.link)}
          >
            {tr('footer.terms')}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://app.santiment.net/privacy-policy'
            className={cx(styles.text, styles.link)}
          >
            {tr('footer.privacy')}
          </a>
        </div>
        <div className={cx(styles.text, styles.rights)}>
          {tr('footer.rights')}
        </div>
      </div>
    </footer>
  )
}

export default injectIntl(Footer)
