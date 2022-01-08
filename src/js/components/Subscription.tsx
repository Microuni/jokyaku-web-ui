import { StarIcon } from '@heroicons/react/outline'
import { Button } from '@vechaiui/react'
import React from 'react'
import axios from '../utils/axios'
import SessionContext from '../utils/session'
import LoadingScreen from './layout/LoadingScreen'
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen'
import SubscriptionSelector from './SubscriptionSelector'

export type SubscriptionType = {
  id: number
  name: string
  reduction: number
}

function Subscription() {
  const [subscriptions, setSubscriptions] = React.useState<SubscriptionType[]|null>(null);
  const [selectedSub, setSelectedSub] = React.useState<number>(0);

  React.useEffect(() => {
    if (!subscriptions) {
      axios
        .get('/passengers-service/subscriptions')
        .then((response) => {
          setTimeout(() => {
            setSubscriptions(response.data)
          }, 1000)
        })
    }
  });

  return (
    <SessionContext.Consumer>
      {({ user }) => (
        <Page title="Subscription" sidebar={true}>

          {user!.r ? (
            <>So you have a sub huh</>
          ) : (
            subscriptions ? (
              <PlaceholderScreen
                icon={<StarIcon />}
                title="No subscriptions associated with your account. Choose one of the following:">

                <SubscriptionSelector
                  choices={subscriptions}
                  onChange={id => setSelectedSub(id)}/>

                <Button variant="light" disabled={selectedSub === 0}>Request Subscription</Button>

              </PlaceholderScreen>
            ) : (
              <LoadingScreen />
            )
          )}

        </Page>
      )}
    </SessionContext.Consumer>
  )
}

export default Subscription
