import type { PasswordService } from '../../../domain/services/passwordService';

export class GetAuthentication {
  private passwordService: PasswordService

  constructor (passwordService: PasswordService) {
    this.passwordService = passwordService
  }

  async auth (data: { email: string, password: string }): Promise<string> {
    const authenticated = await this.passwordService.verify(data.password, 'teste123')

    return authenticated
      ? ''
      : 'Incorrect password'
  }
}