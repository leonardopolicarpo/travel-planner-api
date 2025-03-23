import type { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';
import { badRequest, ok, serverError, unauthorized } from '../../helpers';
import type { Authentication } from '../../../domain/usecases';
import type { TokenService } from '../../../domain/services/tokenService';

export class LoginController implements Controller {
  private validation: Validation;
  private authentication: Authentication;
  private tokenService: TokenService;

  constructor(
    validation: Validation,
    authentication: Authentication,
    tokenService: TokenService
  ) {
    this.validation = validation
    this.authentication = authentication
    this.tokenService = tokenService
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if(error) return badRequest(error);

      const { email, password } = httpRequest.body;

      const userId =
        await this.authentication.auth({ email, password });

      if (!userId) return unauthorized();

      const accessToken = 
        await this.tokenService.generateAccessToken(userId);
      
      const refreshToken =
        await this.tokenService.generateRefreshsToken(userId);

      return ok({
        body: { message: 'Login successfully' },
        cookies: { accessToken, refreshToken }
      });
      
    } catch (error) {
      return serverError(error as Error);
    }
  }
}