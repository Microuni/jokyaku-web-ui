import React from 'react'
import Page from './Page'

type AuthPageProps = {
  icon?: any;
  title: string;
  children: React.ReactNode;
};

function AuthPage(props: AuthPageProps) {
  return (
    <Page className="AuthPage">

      <div className="AuthPage-title">
        {/* <div className="AuthPage-title-icon" aria-label={props.title}>{props.icon}</div> */}
      </div>

      <div className="AuthPage-content">
        {props.children}
      </div>

    </Page>
  )
}

export default AuthPage
