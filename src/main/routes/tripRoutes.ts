import { Router } from 'express';
import { adaptRoute } from '../adapters/expressRouteAdapter';
import { makeCreateTripController } from '../factories/controllers';

export default (router: Router) => {
  router.post('createTrip', adaptRoute(makeCreateTripController()))
};