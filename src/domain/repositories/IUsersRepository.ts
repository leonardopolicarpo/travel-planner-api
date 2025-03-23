import type { CreateUserModel, UserModel } from '../models/users';

export interface InterfaceUsersRepository {
  createUser(userData: CreateUserModel): Promise<void>;
  getUserById(userId: string): Promise<UserModel | null>;
  // getUserByEmail(email: string): Promise<UserModel | null>;
  // editUser(userData: Partial<UserModel>): Promise<UserModel>
}