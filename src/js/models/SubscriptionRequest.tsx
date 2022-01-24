import Model from "./Model";

export default class SubscriptionRequest extends Model {
  id!: number
  acceptedAt?: string
  reason?: string
  refusedAt?: string
  requestedAt!: string
  subscriptionId!: number
  userId!: number
}
