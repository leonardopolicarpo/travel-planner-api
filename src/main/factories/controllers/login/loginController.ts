import type { Controller } from '../../../../presentation/protocols';
import { LoginController } from '../../../../presentation/controllers';
import { makeLoginValidation } from './loginValidation';
import { makeAuthentication } from '../../usecases';
import { TokenService } from '../../../../domain/services/tokenService';

export const makeLoginController = (): Controller => {
  return new LoginController(
    makeLoginValidation(),
    makeAuthentication(),
    new TokenService()
  );
}