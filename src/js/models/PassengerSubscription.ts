import Model from "./Model"
import Subscription from "./Subscription"

export default class PassengerSubscription extends Model {
  id!: number
  passengerId!: number
  subscription!: Subscription
  startedAt!: string
  expiresAt?: string
}
