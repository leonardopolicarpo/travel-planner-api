import type { CreateUserModel, UserModel } from '../models/users';

export interface InterfaceUsersRepository {
  createUser(userData: CreateUserModel): Promise<void>;
  getUserByEmail(email: string): Promise<UserModel | null>;
  // getUserById(): Promise<UserModel>;
  // editUser(userData: Partial<UserModel>): Promise<UserModel>
}