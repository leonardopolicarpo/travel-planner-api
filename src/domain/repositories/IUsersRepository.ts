import { CreateUserModel, UserModel } from '../models/users';

export interface InterfaceUsersRepository {
  createUser(trip: CreateUserModel): Promise<UserModel>;
  getUserByEmail(email: string): Promise<UserModel | null>;
  // getUserById(): Promise<UserModel>;
  // editUser(userData: Partial<UserModel>): Promise<UserModel>
}