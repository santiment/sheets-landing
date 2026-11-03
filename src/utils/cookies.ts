import { BROWSER } from "esm-env"
import CookiesPopup from "san-webkit-next/ui/core/CookiesPopup"
import { mount, type Component } from "svelte"

type TPopupProps = {
  isVisible: boolean
  style: string
}

const Popup = CookiesPopup as unknown as Component<TPopupProps>

const ACCENT_STYLE = [
  "--green: var(--sheets)",
  "--c-green: 26 161 104",
  "--c-green-hover: 22 135 90",
].join("; ")

export function initCookiesPopup() {
  if (!BROWSER) return

  const accepted = document.cookie.includes("COOKIE_POLICY_ACCEPTED=true")

  if (accepted) return

  mount(Popup, {
    target: document.body,
    props: { isVisible: true, style: ACCENT_STYLE },
  })
}
