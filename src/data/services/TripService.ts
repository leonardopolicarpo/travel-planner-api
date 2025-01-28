import { CreateTrip } from '../usecases/createTrip/createTrip';
import { Trip } from '../../domain/models/trip';
import { InterfaceTripRepository } from '../../domain/repositories/ITripREpository';

export class TripService {
  private createTripUsecase: CreateTrip;

  constructor(tripRepository: InterfaceTripRepository){
    this.createTripUsecase = new CreateTrip(tripRepository);
  }

  async createTrip(tripData: Trip): Promise<Trip> {
    return await this.createTripUsecase.execute(tripData);
  }
}