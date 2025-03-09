import type { TripModel } from '../models/trip';

export interface InterfaceTripRepository {
  createTrip(trip: TripModel): Promise<TripModel>;
  // getAllTrips(): Promise<Trip[]>;
  // getTripById(id: string): Promise<Trip | null>
}