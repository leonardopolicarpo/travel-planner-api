import jwt, { type JwtPayload } from 'jsonwebtoken';
import type { TokenService } from './tokenService';
import type { InterfaceUsersRepository } from '../repositories/IUsersRepository';

export class RefreshTokenService {
  private tokenService: TokenService;
  private userService: InterfaceUsersRepository;

  constructor(
    tokenService: TokenService,
    userService: InterfaceUsersRepository
  ) {
    this.tokenService = tokenService;
    this.userService = userService;
  }

  async refreshAccessToken(refreshToken: string): Promise<string> {
    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string) as JwtPayload;
      
      const user = await this.userService.getUserById(decoded.userId);
      if (!user) {
        throw new Error('User not found');
      }

      const newAccessToken = await this.tokenService.generateAccessToken(user.id);
      return newAccessToken;
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid refresh token');
      }
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Refresh token expired');
      }
      throw new Error('Failed to refresh access token');
    }
  }
}
