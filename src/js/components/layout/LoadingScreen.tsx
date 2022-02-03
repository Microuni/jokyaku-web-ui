import { Spinner } from "@vechaiui/react"
import React from "react"
import PlaceholderScreen from "./PlaceholderScreen"

function LoadingScreen() {
  return (
    <PlaceholderScreen
      icon={<Spinner className="Spinner" />}
      title="Loading.."
    />
  )
}

export default LoadingScreen
