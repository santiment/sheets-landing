import { BROWSER } from "esm-env"
import CookiesPopup from "san-webkit-next/ui/core/CookiesPopup"
import { mount, type Component } from "svelte"

const Popup = CookiesPopup as unknown as Component<{ isVisible: boolean }>

export function initCookiesPopup() {
  if (!BROWSER) return

  const accepted = document.cookie.includes("COOKIE_POLICY_ACCEPTED=true")

  if (accepted) return

  mount(Popup, {
    target: document.body,
    props: { isVisible: true },
  })
}
