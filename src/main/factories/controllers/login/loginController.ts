import { Controller } from '../../../../presentation/protocols';
import { AddUserController } from '../../../../presentation/controllers';
import { makeLoginValidation } from './loginValidation';
import { makeAddUser } from '../../usecases';

export const makeLoginController = (): Controller => {
  return new AddUserController(makeLoginValidation(), makeAddUser());
}