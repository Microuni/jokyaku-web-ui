import Model from "./Model"

export default class TravelEntry extends Model {
  id!: number
  userId!: number
  busNumber!: string
  routeNumber!: string
  departedAt!: string
  departedFrom!: string
  headedTo!: string
  fee!: number
  reduction?: number
  finalFee!: number
}
