import { CreateTripModel, TripModel } from '../models';

export interface CreateTrip {
  create(tripData: CreateTripModel): Promise<TripModel>
}