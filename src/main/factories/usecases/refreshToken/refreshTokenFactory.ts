import { RefreshTokenService, TokenService } from '../../../../domain/services';
import { UserRepository } from '../../../../infra/db/pg';

export const makeRefreshToken = (): RefreshTokenService => {
  const tokenService = new TokenService();
  const userRepository = new UserRepository();
  return new RefreshTokenService(tokenService, userRepository) ;
}