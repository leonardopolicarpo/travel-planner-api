import { RequiredFieldValidation, ValidationComposite } from '../../../../presentation/helpers';
import { Validation } from '../../../../presentation/protocols';

export const makeCreateTripValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = ['destination', 'startDate', 'endDate', 'activities'];
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  };
  return new ValidationComposite(validations);
}