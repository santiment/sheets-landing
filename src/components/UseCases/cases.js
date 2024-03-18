import React from "react"
import BacktestCodePanel from "../CodePanel/BacktestCodePanel/BacktestCodePanel"
import MonitorCodePanel from "../CodePanel/MonitorCodePanel/MonitorCodePanel"
import AnalyzeCodePanel from "../CodePanel/AnalyzeCodePanel/AnalyzeCodePanel"
import BacktestIcon from "./icons/BackTestIcon"
import MonitorIcon from "./icons/MonitorIcon"
import AnalyzeIcon from "./icons/AnalyzeIcon"

export const cases = [
  {
    type: "backtest",
    code: <BacktestCodePanel />,
    icon: <BacktestIcon />,
  },
  {
    type: "monitor",
    code: <MonitorCodePanel />,
    icon: <MonitorIcon />,
  },
  {
    type: "analyze",
    code: <AnalyzeCodePanel />,
    icon: <AnalyzeIcon />,
  },
]
