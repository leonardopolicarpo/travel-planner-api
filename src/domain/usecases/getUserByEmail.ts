import { UserModel } from '../models';

export interface LoadUserByEmail {
  load(email: string): Promise<UserModel | null>
}