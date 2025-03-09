import { UserModel } from '../models';

export interface LoadUserById {
  load(id: string): Promise<UserModel>
}