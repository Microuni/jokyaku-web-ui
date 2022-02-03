import Model from "./Model"

export default class CardRequest extends Model {
  id!: number
  acceptedAt!: string
  reason!: string
  refusedAt!: string
  requestedAt!: string
  userId!: number
}
