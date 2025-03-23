import type { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { ok, serverError } from '../../helpers';
import type { RefreshTokenService } from '../../../domain/services/refreshTokenService';

export class RefreshTokenController implements Controller {
  private refreshTokenService: RefreshTokenService;

  constructor(
    refreshTokenService: RefreshTokenService
  ) {
    this.refreshTokenService = refreshTokenService;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { refreshToken } = httpRequest.cookies;

      if (!refreshToken) {
        return {
          statusCode: 400,
          body: { error: 'Refresh token is required' }
        }
      };

      const newAccessToken = await this.refreshTokenService.refreshAccessToken(refreshToken);
      
      return ok({
        body: { message: 'AccessToken created successfully' },
        cookies: { accessToken: newAccessToken }
      });

    } catch (error) {
      return serverError(error as Error);
    }
  }
}