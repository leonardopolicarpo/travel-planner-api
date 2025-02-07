import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';
import { badRequest, created, serverError, unauthorized } from '../../helpers';
import { LoadUserByEmail, Authentication } from '../../../domain/usecases';
import { UserModel } from '../../../domain/models';

export class LoginController implements Controller {
  private authentication: Authentication;
  private validation: Validation;
  private loadUserByEmail: LoadUserByEmail;

  constructor(
    authentication: Authentication,
    validation: Validation,
    loadUserByEmail: LoadUserByEmail
  ) {
    this.authentication = authentication
    this.validation = validation
    this.loadUserByEmail = loadUserByEmail
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if(error) return badRequest(error);

      const { email, password } = httpRequest.body;      
      const user = await this.loadUserByEmail.load(email);
      if (!user) return unauthorized();

      const validateUser = await this.authentication.auth({ user, password });

      return created<UserModel>(user);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}