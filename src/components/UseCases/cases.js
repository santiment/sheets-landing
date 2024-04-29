import React from "react"
import BacktestCodePanel from "../CodePanel/BacktestCodePanel/BacktestCodePanel"
import MonitorCodePanel from "../CodePanel/MonitorCodePanel/MonitorCodePanel"
import AnalyzeCodePanel from "../CodePanel/AnalyzeCodePanel/AnalyzeCodePanel"
import BacktestIcon from "./icons/BacktestIcon"
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
import TransactionsIcon from "./icons/TransactionsIcon"
import TransactionsCodePanel from "../CodePanel/TransactionsCodePanel/TransactionsCodePanel"
import SocDominanceIcon from "./icons/SocDominanceIcon"
import SocDominanceCodePanel from "../CodePanel/SocDominanceCodePanel/SocDominanceCodePanel"

export const getCases = locale => {
  const commonCases = [
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

  if (locale !== "en") {
    return commonCases
  }

  return commonCases.concat([
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
    {
      type: "transactions",
      code: <TransactionsCodePanel />,
      icon: <TransactionsIcon />,
    },
    {
      type: "soc_dominance",
      code: <SocDominanceCodePanel />,
      icon: <SocDominanceIcon />,
    },
  ])
}
