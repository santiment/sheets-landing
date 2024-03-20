import React from "react"
import BacktestCodePanel from "../CodePanel/BacktestCodePanel/BacktestCodePanel"
import MonitorCodePanel from "../CodePanel/MonitorCodePanel/MonitorCodePanel"
import AnalyzeCodePanel from "../CodePanel/AnalyzeCodePanel/AnalyzeCodePanel"
import BacktestIcon from "./icons/BackTestIcon"
import MonitorIcon from "./icons/MonitorIcon"
import AnalyzeIcon from "./icons/AnalyzeIcon"
import MatrixIcon from "./icons/MatrixIcon"
import MvrvIcon from "./icons/MvrvIcon"
import MatrixCodePanel from "../CodePanel/MatrixCodePanel/MatrixCodePanel"
import MvrvCodePanel from "../CodePanel/MvrvCodePanel/MvrvCodePanel"
import MeanAgeIcon from "./icons/MeanAgeIcon"
import MeanAgeCodePanel from "../CodePanel/MeanAgeCodePanel/MeanAgeCodePanel"
import TopHoldersIcon from "./icons/TopHoldersIcon"
import TopHoldersCodePanel from "../CodePanel/TopHoldersCodePanel/TopHoldersCodePanel"
import NvtIcon from "./icons/NvtIcon"
import NvtCodePanel from "../CodePanel/NvtCodePanel/NvtCodePanel"
import FundingIcon from "./icons/FundingIcon"
import FundingCodePanel from "../CodePanel/FundingCodePanel/FundingCodePanel"

export const getCases = locale =>
  [
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
  ].concat(
    locale === "en"
      ? [
          {
            type: "matrix",
            code: <MatrixCodePanel />,
            icon: <MatrixIcon />,
          },
          {
            type: "mvrv",
            code: <MvrvCodePanel />,
            icon: <MvrvIcon />,
          },
          {
            type: "mean_age",
            code: <MeanAgeCodePanel />,
            icon: <MeanAgeIcon />,
          },
          {
            type: "top_holders",
            code: <TopHoldersCodePanel />,
            icon: <TopHoldersIcon />,
          },
          {
            type: "nvt",
            code: <NvtCodePanel />,
            icon: <NvtIcon />,
          },
          {
            type: "funding",
            code: <FundingCodePanel />,
            icon: <FundingIcon />,
          },
        ]
      : []
  )
