import jwt, { type SignOptions } from 'jsonwebtoken';
import { randomBytes } from 'node:crypto';

export class TokenService {
  private getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return secret;
  }

  private parseExpiresIn(expireIn: string): number {
    const match = expireIn.match(/^(\d+)([a-zA-Z]+)$/);
    if (!match) {
      throw new Error('Invalid JWT_EXPIRES_IN format');
    }

    const value = Number.parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
      case 's': return value * 1000;
      case 'm': return value * 60 * 1000;
      case 'h': return value * 60 * 60 * 1000;
      case 'd': return value * 24 * 60 * 60 * 1000;
      default:
        throw new Error('Unsupported time unit');
    }
  }

  async generateAccessToken(userId: string): Promise<string> {
    const secret = this.getJwtSecret();
    const expiresIn = process.env.JWT_EXPIRES_IN
      ? this.parseExpiresIn(process.env.JWT_EXPIRES_IN)
      : 3600000;

    const options: SignOptions = { expiresIn };

    return jwt.sign({ userId }, secret, options);
  }

  async generateRefreshsToken(userId: string): Promise<string> {
    const secret = this.getJwtSecret();
    const expiresIn = process.env.JWT_EXPIRES_IN
      ? this.parseExpiresIn(process.env.JWT_EXPIRES_IN)
      : 3600000;

    const options: SignOptions = { expiresIn };

    return jwt.sign({ userId }, secret, options);
  }

  async generateActivateToken(): Promise<string> {
    return randomBytes(32).toString('hex');
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async verifyToken(token: string): Promise<any> {
    const secret = this.getJwtSecret();
    return jwt.verify(token, secret);
  }
}
