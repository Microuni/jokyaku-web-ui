class Model {
  [key: string]: any;
}

export default class User extends Model {
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
