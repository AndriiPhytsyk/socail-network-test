export class UserInfo {
  constructor(
    public name?: string,
    public lastname?: string,
    public email?: string,
    public country?: string,
    public city?: string,
    public age?: number,
    public description?: string,
    public deleted?: boolean
  ) {
  }
}
