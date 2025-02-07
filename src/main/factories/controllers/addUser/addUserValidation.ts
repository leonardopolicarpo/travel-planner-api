import { RequiredFieldValidation, ValidationComposite } from '../../../../presentation/helpers';
import { Validation } from '../../../../presentation/protocols';

export const makeAddUserValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['user_name', 'password',];
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  };
  return new ValidationComposite(validations);
}