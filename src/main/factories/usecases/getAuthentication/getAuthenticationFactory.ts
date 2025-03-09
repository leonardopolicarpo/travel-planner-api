import { GetAuthentication } from '../../../../data/usecases';
import { PasswordService } from '../../../../domain/services/passwordService';
import type { Authentication } from '../../../../domain/usecases';

export const makeAuthentication = (): Authentication => {
  return new GetAuthentication(new PasswordService());
}