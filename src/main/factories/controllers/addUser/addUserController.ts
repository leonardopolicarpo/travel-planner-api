import { Controller } from '../../../../presentation/protocols';
import { AddUserController } from '../../../../presentation/controllers';
import { makeAddUserValidation } from './addUserValidation';
import { makeAddUser } from '../../usecases';

export const makeAddUserController = (): Controller => {
  return new AddUserController(makeAddUserValidation(), makeAddUser());
}