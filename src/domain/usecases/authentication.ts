import { UserModel } from '../models';

export interface AuthenticationModel {
  user: Partial<UserModel>,
  password: string
}

export interface Authentication {
  auth(authentication: AuthenticationModel): Promise<void>
}