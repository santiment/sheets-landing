import { useDeviceCtx } from "san-webkit-next/ctx/device"
import { useUiCtx } from "san-webkit-next/ctx/ui"

useDeviceCtx()
useUiCtx()

console.log(process.env.GIT_HEAD, process.env.GIT_HEAD_DATETIME)
