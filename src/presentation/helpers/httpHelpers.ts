import { UnauthorizedError } from '../errors';
import { HttpResponse } from '../protocols';

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data
})

export const created = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 201,
  body: data
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error
})