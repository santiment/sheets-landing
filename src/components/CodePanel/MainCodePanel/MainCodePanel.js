import React, { useRef } from "react"
import Parallax from "react-rellax"
import Typed from "react-typed"
import Input from "@santiment-network/ui/Input/Input"
import CodePanel from "../CodePanel"
import Suggestions from './Suggestions'
import img from "../../FunctionsTemplate/image.png"
import styles from "./MainCodePanel.module.scss"

const lines = [
  [128, 92, 69],
  [137, 177],
  [137, 99, 150],
  [204, 129],
  [182, 117, 161],
]

const topLines = [60, 42, 54, 62]

class MainCodePanel extends React.PureComponent {
  state = {value: ''}
  changeValue = event => this.setState({value:  event.target.value.toUpperCase()})

  render() {
    return (
    <CodePanel className={styles.codePanel}>
      <div className={styles.source__top}>
        <ul className={styles.top__lines}>
          <li className={styles.top__line} />
          <li className={styles.top__line}>
            {topLines.map((width, i) => (
              <span className={styles.item} key={i} style={{ width: width }} />
            ))}
          </li>
        </ul>
        <div className={styles.function}>
          <svg
            className={styles.fx}
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='27'
            fill='none'
          >
            <path d='M2.04 26.25c-.77 0-1.4-.1-1.9-.3v-2.4c.55.16 1.03.25 1.45.25 1.13 0 1.88-.87 2.25-2.6L6.59 8.21H4.32l.27-1.35 2.46-.96.27-1.17c.37-1.68.94-2.86 1.7-3.57A4.63 4.63 0 0 1 12.28.11c.97 0 1.87.18 2.68.54l-.78 2.24a4.92 4.92 0 0 0-1.72-.36c-.59 0-1.06.18-1.41.55a3.8 3.8 0 0 0-.8 1.79l-.23 1.09h2.9l-.46 2.26h-2.9L6.71 21.59c-.34 1.6-.9 2.77-1.66 3.53a4.14 4.14 0 0 1-3.02 1.13zM18.12 15.09L14.25 20h-3.43l6.03-7.22-2.93-6.82h3.1l1.84 4.73 3.64-4.73h3.48l-5.85 6.97L23.27 20h-3.12l-2.03-4.91z' />
          </svg>
          <span className={styles.defaultValue}>= SAN</span>
          <Typed
            strings={[
              "_DEV_ACTIVITY",
              "_LATEST_PRICE",
              "_TOKEN_CIRCULATION",
              "_NVT_RATIO",
            ]}
            attr='placeholder'
            typeSpeed={40}
            backSpeed={50}
            typedRef={(typed) => {this.obj = typed}}
            loop
          >
            <input className={styles.input} onChange={this.changeValue} value={this.state.value} autoFocus />
          </Typed>
            <Suggestions currentValue={this.state.value} />
        </div>
      </div>
      <ul className={styles.source}>
        {lines.map((blocks, i) => (
          <li className={styles.source__line} key={i}>
            {blocks.map((width, j) => (
              <span className={styles.item} key={j} style={{ width: width }} />
            ))}
          </li>
        ))}
      </ul>
      <Parallax speed={-0.7}>
        <div className={styles.favorites}>
          <div className={styles.title}>
            <img src={img} alt='preview' />
            <h3 className={styles.titleText}>Favorites</h3>
          </div>
          <h4 className={styles.description}>
            The price of your list was increased by
            <bold className={styles.bold}>$ 532.73</bold>
            today
          </h4>
        </div>
      </Parallax>
    </CodePanel>
  )
}
}

export default MainCodePanel
