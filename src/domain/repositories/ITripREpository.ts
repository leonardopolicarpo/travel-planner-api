import { Trip } from '../models/trip';

export interface InterfaceTripRepository {
  createTrip(trip: Trip): Promise<Trip>;
  getAllTrips(): Promise<Trip[]>;
  getTripById(id: string): Promise<Trip | null>
}