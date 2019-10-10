import React from "react"
import AddInvoice from "../components/AddInvoice/AddInvoice"
import Layout from "../components/Layout/Layout"
import { LoginContext } from "../components/loginContext/loginContext"
import { Redirect } from "@reach/router"

export default () => {
  return (
    <Layout>
      <LoginContext.Consumer>
        {({ token, user_id }) => {
          if (token && user_id) {
            return <AddInvoice />
          } else {
            return <Redirect from="/add-invoice" to="/login" noThrow />
          }
        }}
      </LoginContext.Consumer>
    </Layout>
  )
}
