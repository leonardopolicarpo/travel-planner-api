import { Controller } from '../../../../presentation/protocols';
import { AddUserController } from '../../../../presentation/controllers';
import { makeSignUpValidation } from './signupValidation';
import { makeAddUser } from '../../usecases';

export const makeSignUpController = (): Controller => {
  return new AddUserController(makeSignUpValidation(), makeAddUser());
}