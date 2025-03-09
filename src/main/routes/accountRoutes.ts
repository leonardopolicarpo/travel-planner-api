import type { Router } from 'express';
import {
  adaptRoute,
  adptMiddleware
} from '../adapters';

import {
  makeSignUpController,
  makeLoginController
} from '../factories/controllers';

import { makeAuthMiddleWare } from '../factories/middlewares';

export default (router: Router) => {
  const auth = adptMiddleware(makeAuthMiddleWare())

  router.post('/auth/signup', adaptRoute(makeSignUpController()));
  router.post('/auth/login', adaptRoute(makeLoginController()));
  // router.post('auth/logout', adaptRoute(makeLogoutController()));
  // router.post('auth/activate/:token', adaptRoute(makeActivateAccountController()));
  // router.post('auth/forgot-password', adaptRoute(makeForgotPasswordController()));
  // router.post('auth/reset-password', adaptRoute(makeResetPasswordController()));
  // router.post('auth/unlock-account', adaptRoute(makeUnlockAccountController()));
};