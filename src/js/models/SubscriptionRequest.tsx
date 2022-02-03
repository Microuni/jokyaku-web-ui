import Model from "./Model"
import Subscription from "./Subscription"
import User from "./User"

export default class SubscriptionRequest extends Model {
  id!: number
  acceptedAt?: string
  reason?: string
  refusedAt?: string
  requestedAt!: string
  subscriptionId!: number
  userId!: number
  subscription?: Subscription
  user?: User
}
