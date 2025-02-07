import { AddUserDb } from '../../../../data/usecases';
import { AddUser } from '../../../../domain/usecases';
import { UserRepository } from '../../../../infra/db/pg';

export const makeAddUser = (): AddUser => {
  return new AddUserDb(new UserRepository());
}