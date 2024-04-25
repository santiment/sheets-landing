import React from "react"
import styles from "./Change.module.scss"

export default ({ value }) => (
  <div className={styles.change}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <circle cx="6" cy="6" r="6" fill="#E3FBE3" />
      <path
        d="M5.68746 3.8398C5.84764 3.64323 6.15216 3.64324 6.31232 3.83983L8.68051 6.74647C8.89008 7.00368 8.70356 7.38469 8.36807 7.38469H3.63133C3.29583 7.38469 3.10931 7.00366 3.31891 6.74645L5.68746 3.8398Z"
        fill="#5275FF"
      />
    </svg>

    <span>{value}%</span>
  </div>
)
