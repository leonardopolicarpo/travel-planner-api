import type { HttpRequest, HttpResponse, Middleware } from '../../presentation/protocols';
import type { NextFunction, Request, Response } from 'express';

export const adptMiddleware = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: request.headers,
      cookies: request.cookies,
      body: request.body,
      params: request.params,
      query: request.query
    };

    const httpResponse: HttpResponse = await middleware.handle(httpRequest);

    if(httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      Object.assign(request.body, httpResponse.body)
      next()
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}