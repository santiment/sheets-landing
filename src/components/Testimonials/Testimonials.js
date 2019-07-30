import React, { useRef } from 'react'
import cx from 'classnames'
import Slider from 'react-slick'
import Title from '../Title/Title'
import styles from './Testimonials.module.scss'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const testimonials = [
  {
    author: 'Neal Swaelens',
    pic: 'neal',
    position: 'Product Manager',
    text:
      'People often tend to forget how easy-to-use and powerful spreadsheets are, especially in combination with unique data and metrics. That’s why I was really thrilled to support Santiment’s development of SANsheets since it allows me to create custom-made financial models, ranging from a portfolio dashboard to backtesting frameworks. All powered by Santiment data and without the need of a single line of code.',
  }
]

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
      <Title className={styles.title}>
        What people
        <br />
        are saying
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
          {testimonials.map(({ author, text, position, pic }) => (
            <div key={author} className={styles.testimonial}>
              <div className={styles.slider__top}>
                <p className={styles.text}>{text}</p>
              </div>
              <div className={styles.slider__bottom}>
                <div className={cx(styles.pic, styles[`pic_${pic}`])} />
                <h3 className={styles.author}>{author}</h3>
                <h4 className={styles.position}>{position}</h4>
              </div>
            </div>
          ))}
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
