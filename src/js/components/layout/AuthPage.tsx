import React from "react"
import Page from "./Page"
import logo from "../../../assets/logo.svg"

type AuthPageProps = {
  icon?: any
  title: string
  children: React.ReactNode
}

function AuthPage(props: AuthPageProps) {
  return (
    <Page className="AuthPage" title={props.title} minimal={true}>
      <div className="AuthPage-info">
        <div className="AuthPage-title">
          <div className="AuthPage-title-icon" aria-hidden="true">
            {props.icon}
          </div>
          <h2 className="AuthPage-title-text">{props.title}</h2>
        </div>
        <div className="AuthPage-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus,
          massa ac tincidunt volutpat, odio mi malesuada nisl, et consequat nisl
          sem at diam. Curabitur consectetur, tortor sit amet pellentesque
          blandit, arcu orci bibendum massa, nec tempor ligula purus at sapien.
        </div>
        <img className="AuthPage-logo" src={logo} />
      </div>

      <div className="AuthPage-content">{props.children}</div>
    </Page>
  )
}

export default AuthPage
