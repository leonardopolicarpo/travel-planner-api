import { RequiredFieldValidation, ValidationComposite } from '../../../../presentation/helpers';
import { Validation } from '../../../../presentation/protocols';

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['user_name', 'email', 'password'];
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  };
  return new ValidationComposite(validations);
}