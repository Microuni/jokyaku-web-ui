import { CreditCardIcon } from "@heroicons/react/outline"
import { Alert, Button, useMessage } from "@vechaiui/react"
import React from "react"
import CardRequest from "../models/CardRequest"
import axios from "../utils/axios"
import datetime from "../utils/datetime"
import SessionContext from "../utils/session"
import CardBox from "./CardBox"
import Page from "./layout/Page"
import PlaceholderScreen from "./layout/PlaceholderScreen"
import RfidCard from "./RfidCard"
import CardVector from "./vectors/CardVector"

function Card() {
  const session = React.useContext(SessionContext)
  const message = useMessage()
  const [isLoading, setIsLoading] = React.useState(false)
  const [cardRequest, setCardRequest] = React.useState<
    CardRequest | null | undefined
  >()

  React.useEffect(() => {
    if (cardRequest === undefined) {
      axios
        .get(`/passengers-service/card-requests?userId=${session.user!.id}`)
        .then((response) => {
          if (response.data.length) {
            setCardRequest(response.data[0])
          } else {
            setCardRequest(null)
          }
        })
    }
  }, [cardRequest])

  const requestCard = () => {
    setIsLoading(true)

    axios
      .withToast({
        call: message,
        success: "Request successfuly submitted!",
        error: "Something went wrong, try again later..",
      })
      .post("/passengers-service/card-requests")
      .then((response) => setCardRequest(response.data))
      .finally(() => setIsLoading(false))
  }

  return (
    <SessionContext.Consumer>
      {({ user }) => (
        <Page
          title={(user!.rfid || cardRequest) && "Card"}
          sidebar="true"
          icon={<CreditCardIcon />}
        >
          {user!.rfid ? (
            <CardBox
              card={<RfidCard number={user!.rfid} simulate={false} />}
              details={[["Requested At", "--/--"], ["Expires At", "--/--"]]}
              controls={[
                <Button
                  variant="light"
                  color="primary"
                  onClick={requestCard}
                  loading={isLoading}
                >
                  Request New Card
                </Button>,
                <Button variant="light" color="danger">
                  Cancel Card
                </Button>,
              ]}
            />
          ) : cardRequest ? (
            <CardBox
              card={<RfidCard number="-- -- -- -- --" simulate={false} />}
              details={[["Request At", datetime(cardRequest?.requestedAt)]]}
              top="Pending review. You will be notified of an answer as soon as
              possible."
              topColor="warning"
            />
          ) : (
            <PlaceholderScreen
              icon={<CardVector />}
              title={
                "You have no passenger card associated with your account yet."
              }
            >
              <Button
                variant="light"
                color="primary"
                loading={isLoading}
                onClick={requestCard}
              >
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
