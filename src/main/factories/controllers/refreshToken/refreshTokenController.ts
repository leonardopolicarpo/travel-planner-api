import type { Controller } from '../../../../presentation/protocols';
import { RefreshTokenController } from '../../../../presentation/controllers';
import { makeRefreshToken } from '../../usecases';

export const makeRefreshTokenController = (): Controller => {
  return new RefreshTokenController(makeRefreshToken());
}