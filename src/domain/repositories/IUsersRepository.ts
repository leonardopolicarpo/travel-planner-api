import { CreateUserModel, UserModel } from '../models/users';

export interface InterfaceUsersRepository {
  createUser(trip: CreateUserModel): Promise<UserModel>;
  // getUserById(): Promise<UserModel>;
  // editUser(userData: Partial<UserModel>): Promise<UserModel>
}