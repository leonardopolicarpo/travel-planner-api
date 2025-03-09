import type { InterfaceUsersRepository } from '../../../domain/repositories/IUsersRepository';
import type { CreateUserModel } from '../../../domain/models';
import type { PasswordService } from '../../../domain/services/passwordService';

export class CreateUserDb {
  private userRepository: InterfaceUsersRepository;
  private encryptionService: PasswordService;

  constructor(
    userRepository: InterfaceUsersRepository,
    encryptionService: PasswordService
  ) {
    this.userRepository = userRepository
    this.encryptionService = encryptionService
  }

  async create(userData: CreateUserModel): Promise<void> {
    const encryptedPassword = await this.encryptionService.encrypt(userData.password);
    const userWithEncryptedPassword = { ...userData, password: encryptedPassword };

    await this.userRepository.createUser(userWithEncryptedPassword)
  }
}