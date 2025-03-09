import type { Controller } from '../../../../presentation/protocols';
import { SignUpController } from '../../../../presentation/controllers';
import { makeSignUpValidation } from './signupValidation';
import { makeCreateUser } from '../../usecases';

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeSignUpValidation(), makeCreateUser());
}