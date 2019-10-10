export class UserInfo implements IUserInfo {
  constructor(
  public id?: string,
  public name?: string,
  public lastname?: string,
  public image?: string,
  public email?: string,
  public age?: number,
  public city?: string,
  public country?: string,
  public description?: string,
  public role?: string,
  public deleted?: boolean
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
