import type { InterfaceUsersRepository } from '../../../domain/repositories/IUsersRepository';
import type { UserModel } from '../../../domain/models';

export class LoadUserByEmailDb {
  private userRepository: InterfaceUsersRepository;

  constructor(userRepository: InterfaceUsersRepository) {
    this.userRepository = userRepository
  }

  async load(email: string): Promise<UserModel | null> {
    const user = await this.userRepository.getUserByEmail(email)
    return user;
  }
}