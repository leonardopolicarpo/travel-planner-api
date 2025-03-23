import type { InterfaceUsersRepository } from '../../../domain/repositories/IUsersRepository';

export class LoadUserByIdDb {
  private userRepository: InterfaceUsersRepository;

  constructor(userRepository: InterfaceUsersRepository) {
    this.userRepository = userRepository
  }

  async loadById(userId: string): Promise<string | undefined> {
    const user = await this.userRepository.getUserById(userId)
    return user?.id;
  }
}