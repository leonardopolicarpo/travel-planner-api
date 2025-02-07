import { CreateUserModel, UserModel } from '../models';

export interface AddUser {
  create(tripData: CreateUserModel): Promise<UserModel>
}