import jwt from 'jsonwebtoken';
import { forbidden, ok } from '../helpers';
import type { Middleware, HttpRequest, HttpResponse } from '../protocols';

export class AuthMiddleware implements Middleware {

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.cookies.accessToken;

      if (!accessToken) return forbidden(new Error('Token not found'));

      // const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      // httpRequest.body.userId = decoded.userId;

      return ok({})
    } catch (error) {
      return forbidden(error as Error)
    }
  }
}