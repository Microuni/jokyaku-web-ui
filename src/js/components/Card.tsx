import { CreditCardIcon } from '@heroicons/react/outline'
import { Button } from '@vechaiui/react'
import React from 'react'
import SessionContext from '../utils/session'
import CardBox from './CardBox'
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen'
import RfidCard from './RfidCard'
import CardVector from './vectors/CardVector'

function Card() {
  return (
    <SessionContext.Consumer>
      {({ user }) => (
        <Page title={user!.rfid && "Card"} sidebar="true" icon={<CreditCardIcon />}>
          {user!.rfid ? (
            <CardBox
              card={<RfidCard number={user!.rfid} simulate={false} />}
              details={['Requested At: --/--', 'Expires At: --/--']}
              controls={[
                <Button variant="light" color="primary">
                  Request New Card
                </Button>,
                <Button variant="light" color="red">
                  Cancel Card
                </Button>
              ]}/>
          ): (
            <PlaceholderScreen
              icon={<CardVector />}
              title={"You have no passenger card associated with your account yet."}>

              <Button variant="light" color="primary">
                Request a card
              </Button>

            </PlaceholderScreen>
          )}
        </Page>
      )}
    </SessionContext.Consumer>
  )
}

export default Card
