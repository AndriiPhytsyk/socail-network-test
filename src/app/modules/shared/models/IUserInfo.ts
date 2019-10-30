export interface IUserInfo {
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
  id?: string;

}

export class IUserInfo implements IUserInfo {
  constructor(
  public name?: string,
  public lastname?: string,
  public city?: string,
  public country?: string,
  public age?: number,
  public description?: string,
  public image?: string,
  public posts?: any,
  public email?: string
  ) {
  }
}

