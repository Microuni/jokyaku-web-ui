import { DocumentTextIcon, StarIcon } from '@heroicons/react/outline'
import { Button } from '@vechaiui/react'
import React from 'react'
import SubscriptionRequest from '../models/SubscriptionRequest'
import axios from '../utils/axios'
import SessionContext from '../utils/session'
import LoadingScreen from './layout/LoadingScreen'
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen'
import SubscriptionSelector from './SubscriptionSelector'
import SubscriptionType from '../models/Subscription'
import SubscriptionVector from './vectors/SubscriptionVector'
import SubscriptionRequestVector from './vectors/SubscriptionRequestVector'
import CardBox from './CardBox'
import datetime from '../utils/datetime'

function Subscription() {
  const session = React.useContext(SessionContext);
  const [isLoading, setIsLoading] = React.useState(!session.user?.currentSubscription);
  const [subscriptions, setSubscriptions] = React.useState<SubscriptionType[]|null>(null);
  const [selectedSub, setSelectedSub] = React.useState<number>(0);
  const [currentRequest, setCurrentRequest] = React.useState<SubscriptionRequest|null|undefined>();

  React.useEffect(() => {
    if (!subscriptions && !session.user?.currentSubscription) {
      setIsLoading(true);

      axios
        .get('/passengers-service/subscriptions')
        .then((response) => {
          // @TODO remove timeout, it's just for deving
          setTimeout(() => {
            setSubscriptions(response.data);
            setIsLoading(false);
          }, 500)
        })
    }

    if (typeof currentRequest === "undefined" && !session.user?.currentSubscription) {
      setIsLoading(true);

      axios
        .get('/passengers-service/subscription-requests', {
          params: {
            userId: session.user!.id
          }
        })
        .then((response) => {
          // @TODO remove timeout, it's just for deving
          setTimeout(() => {
            setCurrentRequest(response.data[0] || null);
            setIsLoading(false);
          }, 500)
        })
    }
  });

  let currentRequestFor: SubscriptionType|undefined;

  if (! isLoading && currentRequest) {
    currentRequestFor = subscriptions?.filter(s => s.id === currentRequest.subscriptionId)[0];
  }

  return (
    <SessionContext.Consumer>
      {({ user }) => (
        <Page
          icon={session.user?.currentSubscription && <StarIcon />}
          title={session.user?.currentSubscription && "Subscription"}
          sidebar="true">

          {isLoading ? (
            <LoadingScreen />
          ) : (session.user?.currentSubscription ? (
            <CardBox
              card={<SubscriptionVector />}
              details={[
                "You have an active subscription",
                session.user.currentSubscription.subscription.name,
                `${session.user.currentSubscription.subscription.reduction}% off`,
                <p>
                  <strong>Expired at: </strong>
                  {datetime(session.user.currentSubscription.expiresAt!)}
                </p>
              ]}/>
          ) : (currentRequest && !currentRequest.refused_at ? (
            <PlaceholderScreen
              icon={<SubscriptionRequestVector />}
              title="You have a pending subscription request for:">
              <div className="Subscription-pendingRequest">
                <h4 className="Subscription-pendingRequest-name">{currentRequestFor?.name}</h4>
                <p className="Subscription-pendingRequest-desc">{currentRequestFor?.reduction}% Off</p>
                <p className="Subscription-pendingRequest-requestedAt">
                  <strong>Requested: </strong>
                  {datetime(currentRequest.requestedAt)}
                </p>
              </div>
            </PlaceholderScreen>
          ) : (
            <PlaceholderScreen
              icon={<SubscriptionVector />}
              title="No subscriptions associated with your account. Choose one of the following:">

              <SubscriptionSelector
                choices={subscriptions!}
                onChange={id => setSelectedSub(id)}/>

              <Button
                variant="light"
                disabled={selectedSub === 0}
                onClick={() => {
                  setIsLoading(true);
                  axios.post('/passengers-service/subscription-requests', {
                    subscriptionId: selectedSub
                  }).then(() => {

                    setIsLoading(false);
                  })
                }}>Request Subscription</Button>

            </PlaceholderScreen>
            )
          ))}

        </Page>
      )}
    </SessionContext.Consumer>
  )
}

export default Subscription
