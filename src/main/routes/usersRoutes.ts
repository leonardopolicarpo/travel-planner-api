import { Router } from 'express';
import { adaptRoute } from '../adapters/expressRouteAdapter';
import {
  makeAddUserController,
  makeSignUpController,
  makeLoginController
} from '../factories/controllers';

export default (router: Router) => {
  router.post('signup', adaptRoute(makeSignUpController()));
  router.post('login', adaptRoute(makeLoginController()));
  router.post('create-user', adaptRoute(makeAddUserController()));
  // router.get('user/:email', adaptRoute(makeLoadUserByEmailController()));
};