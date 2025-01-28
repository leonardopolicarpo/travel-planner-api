import { InterfaceTripRepository } from '../../../../domain/repositories/ITripREpository';
import { CreateTripModel, TripModel } from '../../../../domain/models/trip';

export class TripRepository implements InterfaceTripRepository {
  async createTrip(tripData: CreateTripModel): Promise<TripModel> {
    const createTrip = await TripModel.create(trip);
    return createTrip as unknown as Trip;
  }

  async getAllTrips(): Promise<Trip[]> {
    const trips = await TripModel.findAll();
    return trips.map((trip) => trip.toJSON() as Trip);
  }

  async getTripById(id: string): Promise<Trip | null> {
    const trip = await TripModel.findByPk(id);
    return trip ? (trip.toJSON() as Trip) : null;
  }
}