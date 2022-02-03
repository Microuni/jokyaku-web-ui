import Model from "./Model"
import PassengerSubscription from "./PassengerSubscription"

export default class User extends Model {
  id!: number
  firstName!: string
  lastName!: string
  email!: string
  bornOn!: string
  emailVerifiedAt?: string
  userId?: number // remove this
  rfid!: string
  profession!: "worker" | "student"
  currentSubscription?: PassengerSubscription

  get fullName(): string {
    return this.firstName + " " + this.lastName
  }
}
