import { AuthMiddleware } from '../../../presentation/middlewares';
import type { Middleware } from '../../../presentation/protocols';

export const makeAuthMiddleWare = (): Middleware => {
  return new AuthMiddleware();
}