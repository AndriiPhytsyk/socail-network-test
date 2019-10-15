export class UserInfo implements IUserInfo {
  constructor(
  public name?: string,
  public lastname?: string,
  public city?: string,
  public country?: string,
  public age?: number,
  public description?: string,
  public image?: string
  ) {
  }
}
export interface IUserInfo {
   id?: string;
   name?: string;
   lastname?: string;
   image?: string;
   email?: string;
   age?: number;
   city?: string;
   country?: string;
   description?: string;
   role?: string;
   deleted?: boolean;
}
