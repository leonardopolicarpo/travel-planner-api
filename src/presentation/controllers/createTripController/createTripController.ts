import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols';
import { badRequest, created, serverError } from '../../helpers';
import { CreateTrip } from '../../../domain/usecases';
import { TripModel } from '../../../domain/models';

export class CreateTripController implements Controller {
  private createTripValidation: Validation;
  private createTrip: CreateTrip;

  constructor(
    createTripValidation: Validation,
    createTrip: CreateTrip
  ) {
    this.createTripValidation = createTripValidation
    this.createTrip = createTrip;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.createTripValidation.validate(httpRequest.body);
      if(error) return badRequest(error);
      
      const trip = await this.createTrip.create(httpRequest.body);
      return created<TripModel>(trip);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}