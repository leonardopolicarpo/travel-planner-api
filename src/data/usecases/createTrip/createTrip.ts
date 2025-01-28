import { InterfaceTripRepository } from '../../../domain/repositories/ITripREpository';
import { CreateTripModel, TripModel } from '../../../domain/models/trip';

export class CreateTripDb {
  private tripRepository: InterfaceTripRepository;

  constructor(tripRepository: InterfaceTripRepository) {
    this.tripRepository = tripRepository
  }

  async create(tripData: CreateTripModel): Promise<TripModel> {
    const trip = await this.tripRepository.createTrip(tripData)
    return trip;
  }
}