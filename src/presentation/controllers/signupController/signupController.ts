import type { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';
import { badRequest, created, serverError } from '../../helpers';
import type { CreateUser } from '../../../domain/usecases';

export class SignUpController implements Controller {
  private userValidation: Validation;
  private createUser: CreateUser;

  constructor(
    userValidation: Validation,
    createUser: CreateUser
  ) {
    this.userValidation = userValidation
    this.createUser = createUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.userValidation.validate(httpRequest.body);
      if (error) return badRequest(error);
      
      await this.createUser.create(httpRequest.body);
      return created({
        body: { message: 'User created successfully' },
        headers: { Location: '/auth/login' }
      });

    } catch (error) {
      return serverError(error as Error);
    }
  }
}