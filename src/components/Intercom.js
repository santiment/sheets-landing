import React from "react"
import { Query } from "react-apollo"
import { CURRENT_USER_QUERY } from "../gql/user"

const updateIntercom = () => {
  if (typeof window !== "undefined") {
    window.Intercom("update")

    // Wait for the iframe to become ready (max 30 seconds)
    const timeout = setTimeout(() => clearInterval(interval), 30000)
    const interval = setInterval(() => {
      const iframe = document.querySelector(".intercom-launcher-frame")

      if (iframe) {
        const intercomLauncher = iframe.contentDocument.querySelector(
          "#intercom-container .intercom-launcher"
        )
        intercomLauncher.setAttribute(
          "style",
          "background: var(--sheets) !important;"
        )

        iframe.setAttribute("style", "background: var(--sheets);")

        clearInterval(interval)
        clearTimeout(timeout)
      }
    }, 100)
  }
}

let isFpromTracked = false

const Intercom = ({ children }) => {
  updateIntercom()
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {}, loading }) => {
        if (!loading) {
          const { email, username: name } = currentUser || {}
          window.Intercom("boot", {
            app_id: "cyjjko9u",
            email,
            name,
          })

          if (currentUser && !isFpromTracked) {
            if (window.$FPROM) {
              isFpromTracked = true
              const { id, email, username } = currentUser
              window.$FPROM.trackSignup({ id, email, username })
            }
          }
        }

        return children
      }}
    </Query>
  )
}

export default Intercom
