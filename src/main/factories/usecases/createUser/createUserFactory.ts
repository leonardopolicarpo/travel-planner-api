import { CreateUserDb } from '../../../../data/usecases';
import { PasswordService } from '../../../../domain/services/passwordService';
import type { CreateUser } from '../../../../domain/usecases';
import { UserRepository } from '../../../../infra/db/pg';

export const makeCreateUser = (): CreateUser => {
  return new CreateUserDb(
    new UserRepository(),
    new PasswordService()
  );
}