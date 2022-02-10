import { DocumentTextIcon, StarIcon } from "@heroicons/react/outline"
import { Button } from "@vechaiui/react"
import React from "react"
import SubscriptionRequest from "../models/SubscriptionRequest"
import axios from "../utils/axios"
import SessionContext from "../utils/session"
import LoadingScreen from "./layout/LoadingScreen"
import Page from "./layout/Page"
import PlaceholderScreen from "./layout/PlaceholderScreen"
import SubscriptionSelector from "./SubscriptionSelector"
import SubscriptionType from "../models/Subscription"
import SubscriptionVector from "./vectors/SubscriptionVector"
import SubscriptionRequestVector from "./vectors/SubscriptionRequestVector"
import CardBox from "./CardBox"
import datetime from "../utils/datetime"

function Subscription() {
  const session = React.useContext(SessionContext)
  const [isLoading, setIsLoading] = React.useState(
    !session.user?.currentSubscription
  )
  const [subscriptions, setSubscriptions] = React.useState<
    SubscriptionType[] | null
  >(null)
  const [selectedSub, setSelectedSub] = React.useState<number>(0)
  const [currentRequest, setCurrentRequest] = React.useState<
    SubscriptionRequest | null | undefined
  >()

  React.useEffect(() => {
    if (!subscriptions && !session.user?.currentSubscription) {
      setIsLoading(true)

      axios.get("/passengers-service/subscriptions").then((response) => {
        // @TODO remove timeout, it's just for deving
        setTimeout(() => {
          setSubscriptions(response.data)
          setIsLoading(false)
        }, 500)
      })
    }

    if (
      typeof currentRequest === "undefined" &&
      !session.user?.currentSubscription
    ) {
      setIsLoading(true)

      axios
        .get("/passengers-service/subscription-requests", {
          params: {
            userId: session.user!.id,
          },
        })
        .then((response) => {
          // @TODO remove timeout, it's just for deving
          setTimeout(() => {
            setCurrentRequest(response.data[0] || null)
            setIsLoading(false)
          }, 500)
        })
    }
  })

  let currentRequestFor: SubscriptionType | undefined

  return (
    <SessionContext.Consumer>
      {({ user }) => (
        <Page
          icon={session.user?.currentSubscription && <StarIcon />}
          title={session.user?.currentSubscription && "Subscription"}
          sidebar="true"
        >
          {isLoading ? (
            <LoadingScreen />
          ) : session.user?.currentSubscription ? (
            <CardBox
              card={<SubscriptionVector />}
              top="You have an active subscription"
              topColor="positive"
              details={[
                ["Name", session.user.currentSubscription.subscription?.name],
                ["Reduction", `${session.user.currentSubscription.subscription?.reduction}% off`],
                ["Expires At", datetime(session.user.currentSubscription.expiresAt!)]
              ]}
            />
          ) : currentRequest && !currentRequest.refused_at ? (
            <CardBox
              card={<SubscriptionVector />}
              top="You have a pending subscription request"
              topColor="warning"
              details={[
                ["Name", currentRequest.subscription!.name],
                ["Reduction", `${currentRequest.subscription!.reduction}% off`],
                ["Expires At", datetime(datetime(currentRequest.requestedAt))]
              ]}
            />
          ) : (
            <PlaceholderScreen
              icon={<SubscriptionVector />}
              title="No subscriptions associated with your account. Choose one of the following:"
            >
              <SubscriptionSelector
                choices={subscriptions!}
                onChange={(id) => setSelectedSub(id)}
              />

              <Button
                variant="light"
                disabled={selectedSub === 0}
                onClick={() => {
                  setIsLoading(true)
                  axios
                    .post("/passengers-service/subscription-requests", {
                      subscriptionId: selectedSub,
                    })
                    .then((response) => {
                      setCurrentRequest(response.data)
                      setIsLoading(false)
                    })
                }}
              >
                Request Subscription
              </Button>
            </PlaceholderScreen>
          )}
        </Page>
      )}
    </SessionContext.Consumer>
  )
}

export default Subscription
