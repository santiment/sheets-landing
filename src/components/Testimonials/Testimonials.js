import React, { useRef } from 'react'
import cx from 'classnames'
import Slider from 'react-slick'
import FluidItem from './FluidItem/FluidItem'
import Title from '../Title/Title'
import { tr } from '../../utils/translate'
import styles from './Testimonials.module.scss'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const pics = [
  'nasty',
  'ibis',
  'dima',
  'yura',
  'thumbs_up',
  'hand',
  'nemo',
  'garry',
]

const testimonials = ['neal']

const Testimonials = () => {
  const slider = useRef(null)
  const slickNext = () => {
    slider.current.slickNext()
  }
  const slickPrev = () => {
    slider.current.slickPrev()
  }

  return (
    <section className={styles.wrapper}>
      {pics.map(pic => (
        <FluidItem key={pic} pic={pic} />
      ))}
      <Title className={styles.title}>
        {tr('testimonials.title.top')}
        <br />
        {tr('testimonials.title.bottom')}
      </Title>
      <div className={styles.slider}>
        <div
          className={cx(styles.arrow, styles.arrow_left)}
          onClick={slickPrev}
        >
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 11L1 6L6 1'
              stroke='#181B2B'
              strokeWidth='2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <Slider {...settings} ref={slider}>
          {testimonials.map(author => {
            const id = `testimonials.${author}.`
            return (
              <div key={author} className={styles.testimonial}>
                <div className={styles.slider__top}>
                  <p className={styles.text}>{tr(id + 'text')}</p>
                </div>
                <div className={styles.slider__bottom}>
                  <div className={cx(styles.pic, styles[`pic_${author}`])} />
                  <h3 className={styles.author}>{tr(id + 'name')}</h3>
                  <h4 className={styles.position}>{tr(id + 'position')}</h4>
                </div>
              </div>
            )
          })}
        </Slider>

        <div
          className={cx(styles.arrow, styles.arrow_right)}
          onClick={slickNext}
        >
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 11L6 6L1 1'
              strokeWidth='2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
