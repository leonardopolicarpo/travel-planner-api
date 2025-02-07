import { InterfaceUsersRepository } from '../../../../domain/repositories/IUsersRepository';
import { CreateUserModel, UserModel } from '../../../../domain/models';
import { UsersEntity } from '../../models';

export class UserRepository implements InterfaceUsersRepository {

  async createUser(userData: CreateUserModel): Promise<UserModel> {
    const user = await UsersEntity.create(userData);
    return user;
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