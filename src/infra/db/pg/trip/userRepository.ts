import type { InterfaceUsersRepository } from '../../../../domain/repositories/IUsersRepository';
import type { CreateUserModel, UserModel } from '../../../../domain/models';
import { UsersEntity } from '../../models';

export class UserRepository implements InterfaceUsersRepository {

  async createUser(userData: CreateUserModel): Promise<void> {
    await UsersEntity.create(userData);
  }

  async getUserByEmail(email: string): Promise<UserModel | null> {
    try {
      const user = await UsersEntity.findOne({ where: { email } });
      return user;
    } catch (error) {
      console.error("Error load user:", error);
      return null;
    }
  }
}