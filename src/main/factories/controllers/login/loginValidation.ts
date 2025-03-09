import { RequiredFieldValidation, ValidationComposite } from '../../../../presentation/helpers';
import { Validation } from '../../../../presentation/protocols';

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['email', 'password'];
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  };
  return new ValidationComposite(validations);
}