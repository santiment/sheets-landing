import React from "react"
import { Link, navigate } from "gatsby-plugin-intl"
import { Query, Mutation } from "react-apollo"
import Tabs from "@santiment-network/ui/Tabs"
import {
  CURRENT_USER_QUERY,
  GENERATE_APIKEY_MUTATION,
  REVOKE_APIKEY_MUTATION,
  GDPR_MUTATION,
} from "../gql/user"
import Layout from "../components/layout"
import SettingsGetStarted from "../components/Settings/SettingsGetStarted"
import SettingsAPIKeys from "../components/Settings/SettingsAPIKeys"
import SettingsLogout from "../components/Settings/SettingsLogout"
import GDPR from "../components/GDPR/GDPR"
import styles from "./account.module.scss"

const updateCache = (
  cache,
  {
    data: {
      apikeysMutation: { apikeys },
    },
  }
) => {
  const { currentUser } = cache.readQuery({ query: CURRENT_USER_QUERY })
  cache.writeQuery({
    query: CURRENT_USER_QUERY,
    data: { currentUser: { ...currentUser, apikeys } },
  })
}

const tabs = [
  {
    index: 1,
    content: (
      <Link className={styles.tab} to="/account#get-started">
        Get started
      </Link>
    ),
  },
  {
    index: 2,
    content: (
      <Link className={styles.tab} to="/account#api-keys">
        API keys
      </Link>
    ),
  },
  {
    index: 3,
    content: (
      <Link className={styles.tab} to="/account#billing">
        Billing
      </Link>
    ),
  },
  {
    index: 4,
    content: (
      <Link className={styles.tab} to="/account#logout">
        Logout
      </Link>
    ),
  },
]

export default ({ location: { hash } }) => {
  return (
    <Layout isAccountPage classes={styles}>
      <Query query={CURRENT_USER_QUERY}>
        {({ loading = true, data }) => {
          if (loading) {
            return null
          }

          if (data && !data.currentUser) {
            navigate("/login/email", { replace: true })
            return null
          }

          if (!data.currentUser.privacyPolicyAccepted) {
            return (
              <Mutation mutation={GDPR_MUTATION}>
                {(
                  togglePrivacyPolicy,
                  {
                    data: {
                      updateTermsAndConditions: { privacyPolicyAccepted } = {},
                    } = {},
                  }
                ) => (
                  <GDPR
                    togglePrivacyPolicy={togglePrivacyPolicy}
                    privacyPolicyAccepted={privacyPolicyAccepted}
                  />
                )}
              </Mutation>
            )
          }
          return (
            <>
              <h1 className={styles.title}>Account Settings</h1>
              <h3 className={styles.email}>{data.currentUser.email}</h3>
              <Tabs
                className={styles.tabs}
                options={tabs}
                defaultSelectedIndex={1}
                selectedClassName={styles.tab_selected}
              />
              <SettingsGetStarted />
              <Mutation
                mutation={GENERATE_APIKEY_MUTATION}
                update={updateCache}
              >
                {(generateAPIKey, { data: apikeyData }) => (
                  <Mutation
                    mutation={REVOKE_APIKEY_MUTATION}
                    update={updateCache}
                  >
                    {(revokeAPIKey, { data: apikeys }) => (
                      <SettingsAPIKeys
                        revokeAPIKey={revokeAPIKey}
                        generateAPIKey={generateAPIKey}
                        apikeys={data.currentUser.apikeys}
                      />
                    )}
                  </Mutation>
                )}
              </Mutation>
              <SettingsLogout />
            </>
          )
        }}
      </Query>
    </Layout>
  )
}
