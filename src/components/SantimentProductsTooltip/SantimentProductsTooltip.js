import React, { useState } from 'react'
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import Icon from '@santiment-network/ui/Icon'
import sanbaseLogoImg from './../../images/logos/logo-sanbase.svg'
import sheetsLogoImg from './../../images/logos/logo-sheets.svg'
import neuroLogoImg from './../../images/logos/logo-neuro.svg'
import { tr } from '../../utils/translate'
import styles from './SantimentProductsTooltip.module.scss'

const PRODUCTS = [
  {
    img: sanbaseLogoImg,
    title: 'Sanbase',
    description: 'header.product.sanbase',
    to: 'https://app.santiment.net'
  },
  {
    img: sheetsLogoImg,
    title: 'Sheets',
    description: 'header.product.sheets',
    to: 'https://sheets.santiment.net'
  },
  {
    img: neuroLogoImg,
    title: 'API',
    description: 'header.product.neuro',
    to: 'https://neuro.santiment.net'
  }
]

const ProductItem = ({ product: { to, img, title, description } }) => {
  const [showLink, setShowLink] = useState(false)

  return (
    <a
      href={to}
      className={styles.product}
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => {
        setShowLink(false)
      }}
    >
      <img className={styles.productImg} src={img} alt={title} />
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.productDescription}> {tr(description)}</div>
        {showLink && (
          <MakeLink
            className={styles.productLink}
            to={to}
            as='div'
            title={'Go to ' + title}
          />
        )}
      </div>
    </a>
  )
}

const MakeLink = ({ to, title, className, as = 'a' }) => {
  const El = as
  return <El href={to} className={cx(styles.link, className)} >
    {title} <Icon className={styles.linkArrow} type='pointer-right' />
  </El>
}

const OpenTrigger = () => <Icon type='arrow-down' />
const CloseTrigger = () => <Icon type='arrow-up' />

const SantimentProductsTooltip = ({ className, children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Tooltip
      closeTimeout={150}
      position='bottom'
      align='start'
      offsetY={20}
      trigger={
        <div className={styles.trigger} >
          {children}
          <div className={cx(className, styles.arrow, isOpen && styles.opened)}>{isOpen ? <CloseTrigger /> : <OpenTrigger />}</div>
        </div>
      }
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{tr('header.products')}</div>
          <MakeLink to='https://santiment.net' title={tr('header.santiment.goto')}/>
        </div>
        <div className={styles.products}>
          {PRODUCTS.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>
      </div>
    </Tooltip>
  )
}

export default SantimentProductsTooltip
