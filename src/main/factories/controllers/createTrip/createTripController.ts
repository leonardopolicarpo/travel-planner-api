import { Controller } from '../../../../presentation/protocols';
import { CreateTripController } from '../../../../presentation/controllers';
import { makeCreateTripValidation } from './createTripValidation';
import { makeCreateTrip } from '../../usecases';

export const makeCreateTripController = (): Controller => {
  return new CreateTripController(makeCreateTripValidation(), makeCreateTrip());
}