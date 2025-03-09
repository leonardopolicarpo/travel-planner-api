import { LoadUserByEmailDb } from '../../../../data/usecases';
import { LoadUserByEmail } from '../../../../domain/usecases';
import { UserRepository } from '../../../../infra/db/pg';

export const makeLoadUserByEmail = (): LoadUserByEmail => {
  return new LoadUserByEmailDb(new UserRepository());
}