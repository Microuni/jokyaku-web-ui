import { CreditCardIcon } from '@heroicons/react/outline'
import { Button } from '@vechaiui/react'
import React from 'react'
import SessionContext from '../utils/session'
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen'

function Card() {
  return (
    <SessionContext.Consumer>
      {({ user }) => (
        <Page title="Card" sidebar={true}>
          <PlaceholderScreen
              icon={<CreditCardIcon />}
              title={user!.rfid || "You have no passenger card associated with your account yet."}>

              <Button variant="light">
                {user!.rfid ? "Request a new card" : "Request a card"}
              </Button>

            </PlaceholderScreen>
        </Page>
      )}
    </SessionContext.Consumer>
  )
}

export default Card
