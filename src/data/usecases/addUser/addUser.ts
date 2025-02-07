import { InterfaceUsersRepository } from '../../../domain/repositories/IUsersRepository';
import { CreateUserModel, UserModel } from '../../../domain/models';

export class AddUserDb {
  private userRepository: InterfaceUsersRepository;

  constructor(userRepository: InterfaceUsersRepository) {
    this.userRepository = userRepository
  }

  async create(userData: CreateUserModel): Promise<UserModel> {
    const user = await this.userRepository.createUser(userData)
    return user;
  }
}