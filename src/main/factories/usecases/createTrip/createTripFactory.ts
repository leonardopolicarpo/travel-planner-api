import { CreateTripDb } from '../../../../data/usecases';
import { CreateTrip } from '../../../../domain/usecases';
import { TripRepository } from '../../../../infra/db/pg';

export const makeCreateTrip = (): CreateTrip => {
  return new CreateTripDb(new TripRepository());
}