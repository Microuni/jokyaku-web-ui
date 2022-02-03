import React from "react"
import { Button } from "@vechaiui/react"
import Avatar from "boring-avatars"
import SessionContext from "../../utils/session"
import Container from "./Container"
import logo from "../../../assets/logo.svg"

function Header() {
  return (
    <SessionContext.Consumer>
      {(session) => (
        <header className="Header">
          <Container className="Header-container">
            <div className="Header-primary">
              <h1 className="Header-title">
                <img src={logo} alt="Jokyaku" />
              </h1>
            </div>
            <div className="Header-secondary">
              <Button variant="ghost" className="ActorButton">
                <span className="ActorButton-avatar">
                  <Avatar name={session?.user?.fullName} variant="beam" />
                </span>
                <span className="ActorButton-name">
                  {session?.user?.firstName} {session?.user?.lastName}
                </span>
              </Button>
            </div>
          </Container>
        </header>
      )}
    </SessionContext.Consumer>
  )
}

export default Header
