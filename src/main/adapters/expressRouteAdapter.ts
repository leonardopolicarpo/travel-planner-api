import type { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols';
import type { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      headers: request.headers
    };

    const httpResponse: HttpResponse = await controller.handle(httpRequest);

    console.log('uai', httpResponse)

    if (httpResponse.cookies) {
      for (const [key, value] of Object.entries(httpResponse.cookies)) {
        response.cookie(key, value, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 15 * 60 * 1000
        })
      }
    };

    if (httpResponse.headers) {
      for (const [key, value] of Object.entries(httpResponse.headers)) {
        response.setHeader(key, value as string)
      }
    }

    const { statusCode, body } = httpResponse;

    const responseHandler = response.status(statusCode);

    statusCode >= 200 && statusCode <= 299
      ? responseHandler.json(body)
      : responseHandler.json({
        error: body.message
      })
  };
};